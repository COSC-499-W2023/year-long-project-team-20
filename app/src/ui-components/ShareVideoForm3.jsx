/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createShareVideo } from "../graphql/mutations";
export default function ShareVideoForm3(props) {
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
    From: "",
    To: "",
    Link: "",
    Description: "",
  };
  const [From, setFrom] = React.useState(initialValues.From);
  const [To, setTo] = React.useState(initialValues.To);
  const [Link, setLink] = React.useState(initialValues.Link);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFrom(initialValues.From);
    setTo(initialValues.To);
    setLink(initialValues.Link);
    setDescription(initialValues.Description);
    setErrors({});
  };
  const validations = {
    From: [{ type: "Required" }],
    To: [{ type: "Required" }],
    Link: [{ type: "Required" }, { type: "URL" }],
    Description: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          From,
          To,
          Link,
          Description,
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
          await API.graphql({
            query: createShareVideo.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ShareVideoForm3")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>From</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={From}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From: value,
              To,
              Link,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.From ?? value;
          }
          if (errors.From?.hasError) {
            runValidationTasks("From", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("From", From)}
        errorMessage={errors.From?.errorMessage}
        hasError={errors.From?.hasError}
        {...getOverrideProps(overrides, "From")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>To</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={To}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To: value,
              Link,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.To ?? value;
          }
          if (errors.To?.hasError) {
            runValidationTasks("To", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("To", To)}
        errorMessage={errors.To?.errorMessage}
        hasError={errors.To?.hasError}
        {...getOverrideProps(overrides, "To")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Link</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={Link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Link: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Link ?? value;
          }
          if (errors.Link?.hasError) {
            runValidationTasks("Link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("Link", Link)}
        errorMessage={errors.Link?.errorMessage}
        hasError={errors.Link?.hasError}
        {...getOverrideProps(overrides, "Link")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Link,
              Description: value,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
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
