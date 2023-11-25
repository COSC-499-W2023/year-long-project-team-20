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
export default function Card(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Card: {
          width: "355px",
          height: "132px",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
        },
      },
      variantValues: { variation: "elevated" },
    },
    { overrides: { Card: {} }, variantValues: { variation: "default" } },
    {
      overrides: {
        Card: {
          padding: "15px 15px 15px 15px",
          border: "1px SOLID rgba(174,179,183,1)",
        },
      },
      variantValues: { variation: "outline" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Card")}
      {...rest}
    ></Flex>
  );
}
