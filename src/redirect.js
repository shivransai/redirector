import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Redirect({ linkToRedirectTo }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Log all parameters
    for (const entry of searchParams.entries()) {
      console.log(`${entry[0]}: ${entry[1]}`);
      if (entry[1] == "world") {
        window.location.href = linkToRedirectTo;
      }
    }
    
    // Redirect after logging
  }, [linkToRedirectTo, searchParams]); // React to changes in 'to' and 'searchParams'

  return (
    <div>Navigating to the post...</div>
  );
}



export default Redirect;