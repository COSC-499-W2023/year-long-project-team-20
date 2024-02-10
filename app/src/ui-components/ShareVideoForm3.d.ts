/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShareVideoForm3InputValues = {
    To?: string;
    Description?: string;
};
export declare type ShareVideoForm3ValidationValues = {
    To?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShareVideoForm3OverridesProps = {
    ShareVideoForm3Grid?: PrimitiveOverrideProps<GridProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShareVideoForm3Props = React.PropsWithChildren<{
    overrides?: ShareVideoForm3OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShareVideoForm3InputValues) => ShareVideoForm3InputValues;
    onSuccess?: (fields: ShareVideoForm3InputValues) => void;
    onError?: (fields: ShareVideoForm3InputValues, errorMessage: string) => void;
    onChange?: (fields: ShareVideoForm3InputValues) => ShareVideoForm3InputValues;
    onValidate?: ShareVideoForm3ValidationValues;
} & React.CSSProperties>;
export default function ShareVideoForm3(props: ShareVideoForm3Props): React.ReactElement;
