/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type TextFieldOverridesProps = {
    TextField?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    descriptiveText?: PrimitiveOverrideProps<TextProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    border?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TextFieldProps = React.PropsWithChildren<Partial<FlexProps> & {
    isDisabled?: "false" | "true";
    labelHidden?: "false" | "true";
    size?: "default" | "large" | "small";
    variation?: "default" | "quiet";
} & {
    overrides?: TextFieldOverridesProps | undefined | null;
}>;
export default function TextField(props: TextFieldProps): React.ReactElement;
