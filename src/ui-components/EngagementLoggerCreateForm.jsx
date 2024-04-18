/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEngagementLogger } from "../graphql/mutations";
const client = generateClient();
export default function EngagementLoggerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user_hash_key: "",
    sites_visited: "",
    last_updated: "",
  };
  const [user_hash_key, setUser_hash_key] = React.useState(
    initialValues.user_hash_key
  );
  const [sites_visited, setSites_visited] = React.useState(
    initialValues.sites_visited
  );
  const [last_updated, setLast_updated] = React.useState(
    initialValues.last_updated
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser_hash_key(initialValues.user_hash_key);
    setSites_visited(initialValues.sites_visited);
    setLast_updated(initialValues.last_updated);
    setErrors({});
  };
  const validations = {
    user_hash_key: [{ type: "Required" }],
    sites_visited: [{ type: "Required" }],
    last_updated: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user_hash_key,
          sites_visited,
          last_updated,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createEngagementLogger.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EngagementLoggerCreateForm")}
      {...rest}
    >
      <TextField
        label="User hash key"
        isRequired={true}
        isReadOnly={false}
        value={user_hash_key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_hash_key: value,
              sites_visited,
              last_updated,
            };
            const result = onChange(modelFields);
            value = result?.user_hash_key ?? value;
          }
          if (errors.user_hash_key?.hasError) {
            runValidationTasks("user_hash_key", value);
          }
          setUser_hash_key(value);
        }}
        onBlur={() => runValidationTasks("user_hash_key", user_hash_key)}
        errorMessage={errors.user_hash_key?.errorMessage}
        hasError={errors.user_hash_key?.hasError}
        {...getOverrideProps(overrides, "user_hash_key")}
      ></TextField>
      <TextField
        label="Sites visited"
        isRequired={true}
        isReadOnly={false}
        value={sites_visited}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_hash_key,
              sites_visited: value,
              last_updated,
            };
            const result = onChange(modelFields);
            value = result?.sites_visited ?? value;
          }
          if (errors.sites_visited?.hasError) {
            runValidationTasks("sites_visited", value);
          }
          setSites_visited(value);
        }}
        onBlur={() => runValidationTasks("sites_visited", sites_visited)}
        errorMessage={errors.sites_visited?.errorMessage}
        hasError={errors.sites_visited?.hasError}
        {...getOverrideProps(overrides, "sites_visited")}
      ></TextField>
      <TextField
        label="Last updated"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={last_updated && convertToLocal(new Date(last_updated))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_hash_key,
              sites_visited,
              last_updated: value,
            };
            const result = onChange(modelFields);
            value = result?.last_updated ?? value;
          }
          if (errors.last_updated?.hasError) {
            runValidationTasks("last_updated", value);
          }
          setLast_updated(value);
        }}
        onBlur={() => runValidationTasks("last_updated", last_updated)}
        errorMessage={errors.last_updated?.errorMessage}
        hasError={errors.last_updated?.hasError}
        {...getOverrideProps(overrides, "last_updated")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
