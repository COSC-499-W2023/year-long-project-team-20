/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function Placeholder(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Placeholder: {} }, variantValues: { size: "Default" } },
    { overrides: { Placeholder: {} }, variantValues: { size: "large" } },
    {
      overrides: {
        Placeholder: { gap: "10px", padding: "10px 10px 10px 10px" },
      },
      variantValues: { size: "small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="572px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      display="flex"
      {...getOverrideProps(overrides, "Placeholder")}
      {...rest}
    ></Flex>
  );
}
