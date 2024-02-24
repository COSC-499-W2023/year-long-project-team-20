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
import { getVideoList } from "../graphql/queries";
import { updateVideoList } from "../graphql/mutations";
export default function VideoListUpdateForm(props) {
  const {
    id: idProp,
    videoList: videoListModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    User: "",
    UserID: "",
    VideoName: "",
    VideoLink: "",
    Description: "",
  };
  const [User, setUser] = React.useState(initialValues.User);
  const [UserID, setUserID] = React.useState(initialValues.UserID);
  const [VideoName, setVideoName] = React.useState(initialValues.VideoName);
  const [VideoLink, setVideoLink] = React.useState(initialValues.VideoLink);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = videoListRecord
      ? { ...initialValues, ...videoListRecord }
      : initialValues;
    setUser(cleanValues.User);
    setUserID(cleanValues.UserID);
    setVideoName(cleanValues.VideoName);
    setVideoLink(cleanValues.VideoLink);
    setDescription(cleanValues.Description);
    setErrors({});
  };
  const [videoListRecord, setVideoListRecord] =
    React.useState(videoListModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getVideoList.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getVideoList
        : videoListModelProp;
      setVideoListRecord(record);
    };
    queryData();
  }, [idProp, videoListModelProp]);
  React.useEffect(resetStateValues, [videoListRecord]);
  const validations = {
    User: [{ type: "Required" }],
    UserID: [{ type: "Required" }],
    VideoName: [{ type: "Required" }],
    VideoLink: [{ type: "Required" }],
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
          User,
          UserID,
          VideoName,
          VideoLink,
          Description: Description ?? null,
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
            query: updateVideoList.replaceAll("__typename", ""),
            variables: {
              input: {
                id: videoListRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "VideoListUpdateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={true}
        isReadOnly={false}
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User: value,
              UserID,
              VideoName,
              VideoLink,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        {...getOverrideProps(overrides, "User")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={UserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              UserID: value,
              VideoName,
              VideoLink,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.UserID ?? value;
          }
          if (errors.UserID?.hasError) {
            runValidationTasks("UserID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("UserID", UserID)}
        errorMessage={errors.UserID?.errorMessage}
        hasError={errors.UserID?.hasError}
        {...getOverrideProps(overrides, "UserID")}
      ></TextField>
      <TextField
        label="Video name"
        isRequired={true}
        isReadOnly={false}
        value={VideoName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              UserID,
              VideoName: value,
              VideoLink,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.VideoName ?? value;
          }
          if (errors.VideoName?.hasError) {
            runValidationTasks("VideoName", value);
          }
          setVideoName(value);
        }}
        onBlur={() => runValidationTasks("VideoName", VideoName)}
        errorMessage={errors.VideoName?.errorMessage}
        hasError={errors.VideoName?.hasError}
        {...getOverrideProps(overrides, "VideoName")}
      ></TextField>
      <TextField
        label="Video link"
        isRequired={true}
        isReadOnly={false}
        value={VideoLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              UserID,
              VideoName,
              VideoLink: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.VideoLink ?? value;
          }
          if (errors.VideoLink?.hasError) {
            runValidationTasks("VideoLink", value);
          }
          setVideoLink(value);
        }}
        onBlur={() => runValidationTasks("VideoLink", VideoLink)}
        errorMessage={errors.VideoLink?.errorMessage}
        hasError={errors.VideoLink?.hasError}
        {...getOverrideProps(overrides, "VideoLink")}
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
              User,
              UserID,
              VideoName,
              VideoLink,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || videoListModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || videoListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
