/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function SearchComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="20px 15px 20px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SearchComponent")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="4px"
        padding="9px 9px 9px 9px"
        {...getOverrideProps(overrides, "Frame 437")}
      ></Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="6px 6px 6px 6px"
        {...getOverrideProps(overrides, "Layer_1")}
      >
        <Icon
          width="34.5px"
          height="34.5px"
          viewBox={{ minX: 0, minY: 0, width: 34.5, height: 34.5 }}
          paths={[
            {
              d: "M25.2012 21.0234C26.5488 18.9031 27.3395 16.3875 27.3395 13.6832C27.3395 6.12734 21.2211 0 13.6742 0C6.11836 0 0 6.12734 0 13.6832C0 21.2391 6.11836 27.3664 13.6652 27.3664C16.4055 27.3664 18.957 26.5578 21.0953 25.1742L21.7152 24.743L31.4723 34.5L34.5 31.4184L24.752 21.6613L25.2012 21.0234ZM21.3289 6.0375C23.3684 8.07695 24.4914 10.7902 24.4914 13.6742C24.4914 16.5582 23.3684 19.2715 21.3289 21.3109C19.2895 23.3504 16.5762 24.4734 13.6922 24.4734C10.8082 24.4734 8.09492 23.3504 6.05547 21.3109C4.01602 19.2715 2.89297 16.5582 2.89297 13.6742C2.89297 10.7902 4.01602 8.07695 6.05547 6.0375C8.09492 3.99805 10.8082 2.875 13.6922 2.875C16.5762 2.875 19.2895 3.99805 21.3289 6.0375Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
