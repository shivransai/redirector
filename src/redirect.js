import { useEffect } from 'react';
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { getEventLogger } from "./graphql/queries";
import { createEngagementLogger } from "./graphql/mutations";
import { useSearchParams } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);
const client = generateClient();

function Redirect({ linkToRedirectTo }) {
  const [searchParams] = useSearchParams();

  async function update_event_logger(user_hash, linkToRedirectTo) {
    console.log("usr: " + user_hash)
    console.log("link: " + linkToRedirectTo)
    const data = {
        user_hash_key: user_hash,
        sites_visited: linkToRedirectTo,
        last_updated: new Date().toISOString()
    }
    console.log("new data " + data)

    await client.graphql({
        query: createEngagementLogger,
        variables: { input: data }
      });
  }

  useEffect(() => {
    const paramTuples = [];

    // Iterate over all entries in the URL search parameters
    for (const [key, value] of searchParams) {
        // Store each key and value as a sub-array (tuple in other languages)
        paramTuples.push([key, value]);
    }

    // update logs
    if (paramTuples[1][0] == "hash_id") {
        const hash_id = paramTuples[1][1]
        const sublink = paramTuples[0][1]
        update_event_logger(hash_id, sublink)

        if (paramTuples[0][0] == "subdirect") {
            window.location.href = linkToRedirectTo + sublink;
        }
    }

    // Redirect after logging
  }, [linkToRedirectTo, searchParams]); // React to changes in 'to' and 'searchParams'

  return (
    <div>Navigating to the post...</div>
  );
}



export default Redirect;