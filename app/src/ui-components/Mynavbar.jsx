/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Mynavbar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="5px"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Mynavbar")}
      {...rest}
    >
      <Flex
        gap="26px"
        direction="row"
        width="638px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "navigation")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="123px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          {...getOverrideProps(overrides, "logo")}
        >
          <View
            width="123px"
            height="69px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "logo_frame")}
          >
            <Icon
              width="79px"
              height="57px"
              viewBox={{ minX: 0, minY: 0, width: 79, height: 57 }}
              paths={[
                {
                  d: "M77 2.44286L77 54.5571L81 54.5571L81 2.44286L77 2.44286ZM77 54.5571C77 54.4273 77.0767 54.4906 76.8382 54.6627C76.6024 54.8328 76.1761 55 75.6143 55L75.6143 59C76.9225 59 78.1891 58.6204 79.1786 57.9064C80.1655 57.1944 81 56.0362 81 54.5571L77 54.5571ZM75.6143 55L3.38571 55L3.38571 59L75.6143 59L75.6143 55ZM3.38571 55C2.82397 55 2.39771 54.8328 2.16186 54.6626C1.92329 54.4905 2 54.4272 2 54.5571L-2 54.5571C-2 56.0363 -1.16537 57.1945 -0.178551 57.9065C0.810984 58.6204 2.07758 59 3.38571 59L3.38571 55ZM2 54.5571L2 2.44286L-2 2.44286L-2 54.5571L2 54.5571ZM2 2.44286C2 2.57284 1.92326 2.50957 2.16189 2.3374C2.39776 2.16721 2.82402 2 3.38571 2L3.38571 -2C2.07753 -2 0.810934 -1.62035 -0.178577 -0.906402C-1.16534 -0.194437 -2 0.963722 -2 2.44286L2 2.44286ZM3.38571 2L75.6143 2L75.6143 -2L3.38571 -2L3.38571 2ZM75.6143 2C76.1761 2 76.6023 2.16722 76.8382 2.33738C77.0767 2.50951 77 2.57276 77 2.44286L81 2.44286C81 0.9638 80.1655 -0.19437 79.1787 -0.906384C78.1891 -1.62037 76.9225 -2 75.6143 -2L75.6143 2Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 4,
                },
                {
                  d: "M79 2.44286L79 54.5571C79 55.9064 77.4843 57 75.6143 57L3.38571 57C1.51584 57 0 55.9064 0 54.5571L0 2.44286C0 1.09371 1.51584 0 3.38571 0L75.6143 0C77.4843 0 79 1.09371 79 2.44286Z",
                  fill: "rgba(4,125,149,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17.39%"
              bottom="0%"
              left="8.94%"
              right="26.83%"
              {...getOverrideProps(overrides, "Vector111183")}
            ></Icon>
            <Icon
              width="90px"
              height="57px"
              viewBox={{ minX: 0, minY: 0, width: 90, height: 57 }}
              paths={[
                {
                  d: "M90 2C91.1046 2 92 1.10457 92 0C92 -1.10457 91.1046 -2 90 -2L90 2ZM-2 57C-2 58.1046 -1.10457 59 0 59C1.10457 59 2 58.1046 2 57L-2 57ZM90 -2L3.85714 -2L3.85714 2L90 2L90 -2ZM3.85714 -2C2.47221 -2 1.12423 -1.64839 0.0596285 -0.974141C-0.980103 -0.315644 -2 0.842704 -2 2.44286L2 2.44286C2 2.69386 1.84356 2.63078 2.19984 2.40514C2.53125 2.19524 3.11184 2 3.85714 2L3.85714 -2ZM-2 2.44286L-2 57L2 57L2 2.44286L-2 2.44286Z",
                  stroke: "rgba(0,0,0,0.6)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 4,
                },
                {
                  d: "M90 0L3.85714 0C1.72691 0 0 1.09371 0 2.44286L0 57",
                  fill: "rgba(233,249,252,0.6)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="17.39%"
              left="0%"
              right="26.83%"
              {...getOverrideProps(overrides, "Vector111184")}
            ></Icon>
            <Icon
              width="28px"
              height="27px"
              viewBox={{ minX: 0, minY: 0, width: 28, height: 27 }}
              paths={[
                {
                  d: "M5.73855 0.459063L6.63974 -1.32639L6.63962 -1.32646L5.73855 0.459063ZM5.73855 26.5409L6.63962 28.3265L6.63974 28.3264L5.73855 26.5409ZM26.1604 16.2332L25.2593 14.4477L25.2592 14.4478L26.1604 16.2332ZM26.1604 10.7668L25.2592 12.5522L25.2593 12.5523L26.1604 10.7668ZM6.63962 -1.32646C4.78311 -2.26334 2.69643 -2.16531 1.06229 -1.38706C-0.567727 -0.610767 -2 0.99599 -2 3.1923L2 3.1923C2 2.9109 2.17429 2.51381 2.7822 2.2243C3.38598 1.93675 4.16858 1.90702 4.83749 2.24458L6.63962 -1.32646ZM-2 3.1923L-2 23.8077L2 23.8077L2 3.1923L-2 3.1923ZM-2 23.8077C-2 26.004 -0.567727 27.6108 1.06229 28.3871C2.69643 29.1653 4.78311 29.2633 6.63962 28.3265L4.83749 24.7554C4.16858 25.093 3.38598 25.0633 2.7822 24.7757C2.17429 24.4862 2 24.0891 2 23.8077L-2 23.8077ZM6.63974 28.3264L27.0616 18.0187L25.2592 14.4478L4.83736 24.7555L6.63974 28.3264ZM27.0615 18.0188C28.8974 17.0923 30 15.3816 30 13.5C30 11.6184 28.8974 9.90773 27.0615 8.98124L25.2593 12.5523C25.8762 12.8636 26 13.2672 26 13.5C26 13.7328 25.8762 14.1364 25.2593 14.4477L27.0615 18.0188ZM27.0616 8.9813L6.63974 -1.32639L4.83736 2.24452L25.2592 12.5522L27.0616 8.9813Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 4,
                },
                {
                  d: "M5.73855 0.459063C3.21314 -0.815388 0 0.714589 0 3.1923L0 23.8077C0 26.2854 3.21314 27.8154 5.73855 26.5409L26.1604 16.2332C28.6132 14.9954 28.6132 12.0046 26.1604 10.7668L5.73855 0.459063Z",
                  fill: "rgba(233,249,252,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.13%"
              bottom="21.74%"
              left="30.08%"
              right="47.15%"
              {...getOverrideProps(overrides, "Vector111185")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="10px 10px 10px 10px"
          className="navContainer"
          {...getOverrideProps(overrides, "home")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="27px"
            textAlign="center"
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
            id="homeText"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="10px 10px 10px 10px"
          className="navContainer"
          {...getOverrideProps(overrides, "record")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="27px"
            textAlign="center"
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
            id="recordText"
            children="Record"
            {...getOverrideProps(overrides, "Record")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="10px 10px 10px 10px"
          className="navContainer"
          {...getOverrideProps(overrides, "upload")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="27px"
            textAlign="center"
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
            id="uploadText"
            children="Upload"
            {...getOverrideProps(overrides, "Upload")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="10px 10px 10px 10px"
          className="navContainer"
          {...getOverrideProps(overrides, "library")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="27px"
            textAlign="center"
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
            id="libraryText"
            children="Library"
            {...getOverrideProps(overrides, "Library")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="5px"
          padding="10px 10px 10px 10px"
          className="navContainer"
          {...getOverrideProps(overrides, "about")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="27px"
            textAlign="center"
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
            id="aboutText"
            children="About"
            {...getOverrideProps(overrides, "About")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="80px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="100px"
        padding="10px 10px 10px 10px"
        className="navContainer"
        {...getOverrideProps(overrides, "profile")}
      >
        <Flex
          gap="7px"
          direction="column"
          width="unset"
          height="29px"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "profileIcon")}
        >
          <Icon
            width="11px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 11 }}
            paths={[
              {
                d: "M10 5.5C10 7.98528 7.98528 10 5.5 10L5.5 12C9.08985 12 12 9.08985 12 5.5L10 5.5ZM5.5 10C3.01472 10 1 7.98528 1 5.5L-1 5.5C-1 9.08985 1.91015 12 5.5 12L5.5 10ZM1 5.5C1 3.01472 3.01472 1 5.5 1L5.5 -1C1.91015 -1 -1 1.91015 -1 5.5L1 5.5ZM5.5 1C7.98528 1 10 3.01472 10 5.5L12 5.5C12 1.91015 9.08985 -1 5.5 -1L5.5 1Z",
                stroke: "rgba(92,102,112,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 2,
              },
              {
                d: "M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z",
                fill: "rgba(233,249,252,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector91179")}
          ></Icon>
          <Icon
            width="22px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 22, height: 11 }}
            paths={[
              {
                d: "M22 11L22 12C22.2652 12 22.5196 11.8946 22.7071 11.7071C22.8946 11.5196 23 11.2652 23 11L22 11ZM11 3.25665e-15L11 1L11 3.25665e-15ZM0 11L-1 11C-1 11.2652 -0.894643 11.5196 -0.707107 11.7071C-0.51957 11.8946 -0.265216 12 0 12L0 11ZM23 11C23 7.8174 21.7357 4.76516 19.4853 2.51472L18.0711 3.92893C19.9464 5.8043 21 8.34784 21 11L23 11ZM19.4853 2.51472C17.2348 0.264283 14.1826 -1 11 -1L11 1C13.6522 1 16.1957 2.05357 18.0711 3.92893L19.4853 2.51472ZM11 -1C7.8174 -1 4.76516 0.264283 2.51472 2.51472L3.92893 3.92893C5.8043 2.05357 8.34784 1 11 1L11 -1ZM2.51472 2.51472C0.264282 4.76516 -1 7.8174 -1 11L1 11C1 8.34784 2.05357 5.8043 3.92893 3.92893L2.51472 2.51472ZM0 12L22 12L22 10L0 10L0 12Z",
                stroke: "rgba(92,102,112,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 2,
              },
              {
                d: "M22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 3.25665e-15 11 3.25665e-15C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 4.34724e-08 8.08262 0 11L22 11Z",
                fill: "rgba(233,249,252,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector91180")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
