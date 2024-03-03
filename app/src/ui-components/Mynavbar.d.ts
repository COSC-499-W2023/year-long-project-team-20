/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MynavbarOverridesProps = {
    Mynavbar?: PrimitiveOverrideProps<FlexProps>;
    navigation?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<FlexProps>;
    logo_frame?: PrimitiveOverrideProps<ViewProps>;
    Vector111183?: PrimitiveOverrideProps<IconProps>;
    Vector111184?: PrimitiveOverrideProps<IconProps>;
    Vector111185?: PrimitiveOverrideProps<IconProps>;
    home?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    record?: PrimitiveOverrideProps<FlexProps>;
    Record?: PrimitiveOverrideProps<TextProps>;
    upload?: PrimitiveOverrideProps<FlexProps>;
    Upload?: PrimitiveOverrideProps<TextProps>;
    library?: PrimitiveOverrideProps<FlexProps>;
    Library?: PrimitiveOverrideProps<TextProps>;
    about?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<FlexProps>;
    profileIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector91179?: PrimitiveOverrideProps<IconProps>;
    Vector91180?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MynavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MynavbarOverridesProps | undefined | null;
}>;
export default function Mynavbar(props: MynavbarProps): React.ReactElement;
