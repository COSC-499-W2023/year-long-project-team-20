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
export declare type ShareVideoCreateFormInputValues = {
    From?: string;
    To?: string;
    Link?: string;
    Description?: string;
};
export declare type ShareVideoCreateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Link?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShareVideoCreateFormOverridesProps = {
    ShareVideoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Link?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShareVideoCreateFormProps = React.PropsWithChildren<{
    overrides?: ShareVideoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShareVideoCreateFormInputValues) => ShareVideoCreateFormInputValues;
    onSuccess?: (fields: ShareVideoCreateFormInputValues) => void;
    onError?: (fields: ShareVideoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShareVideoCreateFormInputValues) => ShareVideoCreateFormInputValues;
    onValidate?: ShareVideoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShareVideoCreateForm(props: ShareVideoCreateFormProps): React.ReactElement;
