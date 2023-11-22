/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SocialPostOverridesProps = {
    SocialPost?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Nikhil S"?: PrimitiveOverrideProps<TextProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    "New Amplify Studio gives designers the ability to export UI to React code"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business."?: PrimitiveOverrideProps<TextProps>;
    "Read more29766868"?: PrimitiveOverrideProps<FlexProps>;
    "Read more29766870"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SocialPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SocialPostOverridesProps | undefined | null;
}>;
export default function SocialPost(props: SocialPostProps): React.ReactElement;
