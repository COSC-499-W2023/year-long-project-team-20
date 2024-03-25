/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createRequestVideo } from "../graphql/mutations";
export default function RequestVideoCreateForm(props) {
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
    created: "",
    duedate: "",
    from: "",
    to: "",
    fromEmail: "",
    toEmail: "",
    isRead: false,
    isCompleted: false,
    message: "",
  };
  const [created, setCreated] = React.useState(initialValues.created);
  const [duedate, setDuedate] = React.useState(initialValues.duedate);
  const [from, setFrom] = React.useState(initialValues.from);
  const [to, setTo] = React.useState(initialValues.to);
  const [fromEmail, setFromEmail] = React.useState(initialValues.fromEmail);
  const [toEmail, setToEmail] = React.useState(initialValues.toEmail);
  const [isRead, setIsRead] = React.useState(initialValues.isRead);
  const [isCompleted, setIsCompleted] = React.useState(
    initialValues.isCompleted
  );
  const [message, setMessage] = React.useState(initialValues.message);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreated(initialValues.created);
    setDuedate(initialValues.duedate);
    setFrom(initialValues.from);
    setTo(initialValues.to);
    setFromEmail(initialValues.fromEmail);
    setToEmail(initialValues.toEmail);
    setIsRead(initialValues.isRead);
    setIsCompleted(initialValues.isCompleted);
    setMessage(initialValues.message);
    setErrors({});
  };
  const validations = {
    created: [{ type: "Required" }],
    duedate: [],
    from: [{ type: "Required" }],
    to: [{ type: "Required" }],
    fromEmail: [{ type: "Email" }],
    toEmail: [{ type: "Email" }],
    isRead: [],
    isCompleted: [],
    message: [],
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
          created,
          duedate,
          from,
          to,
          fromEmail,
          toEmail,
          isRead,
          isCompleted,
          message,
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
            query: createRequestVideo.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RequestVideoCreateForm")}
      {...rest}
    >
      <TextField
        label="Created"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={created && convertToLocal(new Date(created))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              created: value,
              duedate,
              from,
              to,
              fromEmail,
              toEmail,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.created ?? value;
          }
          if (errors.created?.hasError) {
            runValidationTasks("created", value);
          }
          setCreated(value);
        }}
        onBlur={() => runValidationTasks("created", created)}
        errorMessage={errors.created?.errorMessage}
        hasError={errors.created?.hasError}
        {...getOverrideProps(overrides, "created")}
      ></TextField>
      <TextField
        label="Duedate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={duedate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate: value,
              from,
              to,
              fromEmail,
              toEmail,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.duedate ?? value;
          }
          if (errors.duedate?.hasError) {
            runValidationTasks("duedate", value);
          }
          setDuedate(value);
        }}
        onBlur={() => runValidationTasks("duedate", duedate)}
        errorMessage={errors.duedate?.errorMessage}
        hasError={errors.duedate?.hasError}
        {...getOverrideProps(overrides, "duedate")}
      ></TextField>
      <TextField
        label="From"
        isRequired={true}
        isReadOnly={false}
        value={from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from: value,
              to,
              fromEmail,
              toEmail,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.from ?? value;
          }
          if (errors.from?.hasError) {
            runValidationTasks("from", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("from", from)}
        errorMessage={errors.from?.errorMessage}
        hasError={errors.from?.hasError}
        {...getOverrideProps(overrides, "from")}
      ></TextField>
      <TextField
        label="To"
        isRequired={true}
        isReadOnly={false}
        value={to}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to: value,
              fromEmail,
              toEmail,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.to ?? value;
          }
          if (errors.to?.hasError) {
            runValidationTasks("to", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("to", to)}
        errorMessage={errors.to?.errorMessage}
        hasError={errors.to?.hasError}
        {...getOverrideProps(overrides, "to")}
      ></TextField>
      <TextField
        label="From email"
        isRequired={false}
        isReadOnly={false}
        value={fromEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to,
              fromEmail: value,
              toEmail,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.fromEmail ?? value;
          }
          if (errors.fromEmail?.hasError) {
            runValidationTasks("fromEmail", value);
          }
          setFromEmail(value);
        }}
        onBlur={() => runValidationTasks("fromEmail", fromEmail)}
        errorMessage={errors.fromEmail?.errorMessage}
        hasError={errors.fromEmail?.hasError}
        {...getOverrideProps(overrides, "fromEmail")}
      ></TextField>
      <TextField
        label="To email"
        isRequired={false}
        isReadOnly={false}
        value={toEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to,
              fromEmail,
              toEmail: value,
              isRead,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.toEmail ?? value;
          }
          if (errors.toEmail?.hasError) {
            runValidationTasks("toEmail", value);
          }
          setToEmail(value);
        }}
        onBlur={() => runValidationTasks("toEmail", toEmail)}
        errorMessage={errors.toEmail?.errorMessage}
        hasError={errors.toEmail?.hasError}
        {...getOverrideProps(overrides, "toEmail")}
      ></TextField>
      <SwitchField
        label="Is read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isRead}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to,
              fromEmail,
              toEmail,
              isRead: value,
              isCompleted,
              message,
            };
            const result = onChange(modelFields);
            value = result?.isRead ?? value;
          }
          if (errors.isRead?.hasError) {
            runValidationTasks("isRead", value);
          }
          setIsRead(value);
        }}
        onBlur={() => runValidationTasks("isRead", isRead)}
        errorMessage={errors.isRead?.errorMessage}
        hasError={errors.isRead?.hasError}
        {...getOverrideProps(overrides, "isRead")}
      ></SwitchField>
      <SwitchField
        label="Is completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isCompleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to,
              fromEmail,
              toEmail,
              isRead,
              isCompleted: value,
              message,
            };
            const result = onChange(modelFields);
            value = result?.isCompleted ?? value;
          }
          if (errors.isCompleted?.hasError) {
            runValidationTasks("isCompleted", value);
          }
          setIsCompleted(value);
        }}
        onBlur={() => runValidationTasks("isCompleted", isCompleted)}
        errorMessage={errors.isCompleted?.errorMessage}
        hasError={errors.isCompleted?.hasError}
        {...getOverrideProps(overrides, "isCompleted")}
      ></SwitchField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created,
              duedate,
              from,
              to,
              fromEmail,
              toEmail,
              isRead,
              isCompleted,
              message: value,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
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
