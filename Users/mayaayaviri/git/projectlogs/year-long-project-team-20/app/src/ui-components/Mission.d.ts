/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MissionOverridesProps = {
    Mission?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "Our Mission"?: PrimitiveOverrideProps<TextProps>;
    "Frame 374"?: PrimitiveOverrideProps<FlexProps>;
    "The software's primary objective is to provide a secure and seamless video sharing platform for individuals in a professional setting, such as between doctors and patients or real estate brokers and clients. It aims to simplify the process by eliminating the necessity of relying on third-party applications for video editing prior to sharing. There are several popular video sharing platforms like YouTube, Vimeo, Twitch, etc. currently in use; however, these solutions are not tailored towards individuals in a professional setting and lack several critical features for use by said individuals."?: PrimitiveOverrideProps<TextProps>;
    "Frame 63"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 390"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38821206?: MyIconProps;
    "Record and Edit Your Videos"?: PrimitiveOverrideProps<TextProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038821209"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38821210?: MyIconProps;
    "Send and Receive Videos"?: PrimitiveOverrideProps<TextProps>;
    "Frame 138"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038821213"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38821214?: MyIconProps;
    "\u00A0Enhanced Privacy and Security"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MissionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MissionOverridesProps | undefined | null;
}>;
export default function Mission(props: MissionProps): React.ReactElement;
