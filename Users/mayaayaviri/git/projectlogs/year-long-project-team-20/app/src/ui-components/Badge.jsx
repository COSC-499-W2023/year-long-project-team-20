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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Badge(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        label: {
          fontSize: "12px",
          color: "rgba(0,34,102,1)",
          lineHeight: "12px",
        },
        Badge: {
          padding: "6px 8px 6px 8px",
          backgroundColor: "rgba(184,206,249,1)",
        },
      },
      variantValues: { size: "small", variation: "info" },
    },
    {
      overrides: {
        label: {
          fontSize: "12px",
          color: "rgba(102,51,0,1)",
          lineHeight: "12px",
        },
        Badge: {
          padding: "6px 8px 6px 8px",
          backgroundColor: "rgba(245,217,188,1)",
        },
      },
      variantValues: { size: "small", variation: "warning" },
    },
    {
      overrides: {
        label: {
          fontSize: "12px",
          color: "rgba(54,94,61,1)",
          lineHeight: "12px",
        },
        Badge: {
          padding: "6px 8px 6px 8px",
          backgroundColor: "rgba(214,245,219,1)",
        },
      },
      variantValues: { size: "small", variation: "success" },
    },
    {
      overrides: {
        label: {
          fontSize: "12px",
          color: "rgba(102,0,0,1)",
          lineHeight: "12px",
        },
        Badge: {
          padding: "6px 8px 6px 8px",
          backgroundColor: "rgba(245,188,188,1)",
        },
      },
      variantValues: { size: "small", variation: "error" },
    },
    {
      overrides: {
        label: { fontSize: "12px", lineHeight: "12px" },
        Badge: { padding: "6px 8px 6px 8px" },
      },
      variantValues: { size: "small", variation: "default" },
    },
    {
      overrides: { label: {}, Badge: {} },
      variantValues: { size: "default", variation: "default" },
    },
    {
      overrides: {
        label: { fontSize: "16px", lineHeight: "16px" },
        Badge: { padding: "12px 16px 12px 16px" },
      },
      variantValues: { size: "large", variation: "default" },
    },
    {
      overrides: {
        label: { color: "rgba(0,34,102,1)" },
        Badge: { backgroundColor: "rgba(184,206,249,1)" },
      },
      variantValues: { size: "default", variation: "info" },
    },
    {
      overrides: {
        label: {
          fontSize: "16px",
          color: "rgba(0,34,102,1)",
          lineHeight: "16px",
        },
        Badge: {
          padding: "12px 16px 12px 16px",
          backgroundColor: "rgba(184,206,249,1)",
        },
      },
      variantValues: { size: "large", variation: "info" },
    },
    {
      overrides: {
        label: { color: "rgba(54,94,61,1)" },
        Badge: { backgroundColor: "rgba(214,245,219,1)" },
      },
      variantValues: { size: "default", variation: "success" },
    },
    {
      overrides: {
        label: {
          fontSize: "16px",
          color: "rgba(54,94,61,1)",
          lineHeight: "16px",
        },
        Badge: {
          padding: "12px 16px 12px 16px",
          backgroundColor: "rgba(214,245,219,1)",
        },
      },
      variantValues: { size: "large", variation: "success" },
    },
    {
      overrides: {
        label: { color: "rgba(102,51,0,1)" },
        Badge: { backgroundColor: "rgba(245,217,188,1)" },
      },
      variantValues: { size: "default", variation: "warning" },
    },
    {
      overrides: {
        label: {
          fontSize: "16px",
          color: "rgba(102,51,0,1)",
          lineHeight: "16px",
        },
        Badge: {
          padding: "12px 16px 12px 16px",
          backgroundColor: "rgba(245,217,188,1)",
        },
      },
      variantValues: { size: "large", variation: "warning" },
    },
    {
      overrides: {
        label: { color: "rgba(102,0,0,1)" },
        Badge: { backgroundColor: "rgba(245,188,188,1)" },
      },
      variantValues: { size: "default", variation: "error" },
    },
    {
      overrides: {
        label: {
          fontSize: "16px",
          color: "rgba(102,0,0,1)",
          lineHeight: "16px",
        },
        Badge: {
          padding: "12px 16px 12px 16px",
          backgroundColor: "rgba(245,188,188,1)",
        },
      },
      variantValues: { size: "large", variation: "error" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="32px"
      padding="8px 12px 8px 12px"
      backgroundColor="rgba(239,240,240,1)"
      display="flex"
      {...getOverrideProps(overrides, "Badge")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Badge"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
