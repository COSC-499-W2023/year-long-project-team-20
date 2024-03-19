/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import ProfileCard from "./ProfileCard";
import { Flex } from "@aws-amplify/ui-react";
export default function ProfileComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProfileComponent")}
      {...rest}
    >
      <ProfileCard
        display="flex"
        gap="24px"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ProfileComponent40487")}
      ></ProfileCard>
    </Flex>
  );
}
