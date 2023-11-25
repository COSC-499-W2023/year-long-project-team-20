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
import { Icon } from "@aws-amplify/ui-react";
export default function Divider(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Divider: {} },
      variantValues: { size: "small", orientation: "horizontal" },
    },
    {
      overrides: {
        Divider: {
          width: "1px",
          height: "300px",
          viewBox: { minX: 0, minY: 0, width: 1, height: 300 },
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: {
                transform: "translate(calc(50% - 150px - -149.5px), 0%)",
              },
            },
          ],
        },
      },
      variantValues: { size: "small", orientation: "vertical" },
    },
    {
      overrides: {
        Divider: {
          height: "2px",
          viewBox: { minX: 0, minY: 0, width: 300, height: 2 },
          paths: [
            {
              d: "M0 0L300 0L300 -2L0 -2L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(0%, calc(50% - 0px - 0px))" },
            },
          ],
        },
      },
      variantValues: { size: "default", orientation: "horizontal" },
    },
    {
      overrides: {
        Divider: {
          width: "2px",
          height: "300px",
          viewBox: { minX: 0, minY: 0, width: 2, height: 300 },
          paths: [
            {
              d: "M0 0L300 0L300 -2L0 -2L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(calc(50% - 150px - -149px), 0%)" },
            },
          ],
        },
      },
      variantValues: { size: "default", orientation: "vertical" },
    },
    {
      overrides: {
        Divider: {
          height: "3px",
          viewBox: { minX: 0, minY: 0, width: 300, height: 3 },
          paths: [
            {
              d: "M0 0L300 0L300 -3L0 -3L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
              style: { transform: "translate(0%, calc(50% - 0px - -0.5px))" },
            },
          ],
        },
      },
      variantValues: { size: "large", orientation: "horizontal" },
    },
    {
      overrides: {
        Divider: {
          width: "3px",
          height: "300px",
          viewBox: { minX: 0, minY: 0, width: 3, height: 300 },
          paths: [
            {
              d: "M0 0L300 0L300 -3L0 -3L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
              style: {
                transform: "translate(calc(50% - 150px - -148.5px), 0%)",
              },
            },
          ],
        },
      },
      variantValues: { size: "large", orientation: "vertical" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="300px"
      height="1px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
      paths={[
        {
          d: "M0 0L300 0L300 -1L0 -1L0 0Z",
          stroke: "rgba(174,179,183,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, calc(50% - 0px - 0.5px))" },
        },
      ]}
      {...getOverrideProps(overrides, "Divider")}
      {...rest}
    ></Icon>
  );
}
