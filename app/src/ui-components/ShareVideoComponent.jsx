/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import CTASection from "./CTASection";
import { Flex } from "@aws-amplify/ui-react";
export default function ShareVideoComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ShareVideoComponent")}
      {...rest}
    >
      <CTASection
        display="flex"
        gap="10px"
        direction="row"
        width="744px"
        height="173px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ShareVideoComponent38456")}
      ></CTASection>
    </Flex>
  );
}
