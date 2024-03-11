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
export declare type InAppMessagingCreateFormInputValues = {
    To?: string;
    Description?: string;
    from?: string;
    to?: string;
    link?: string;
};
export declare type InAppMessagingCreateFormValidationValues = {
    To?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InAppMessagingCreateFormOverridesProps = {
    InAppMessagingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InAppMessagingCreateFormProps = React.PropsWithChildren<{
    overrides?: InAppMessagingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InAppMessagingCreateFormInputValues) => InAppMessagingCreateFormInputValues;
    onSuccess?: (fields: InAppMessagingCreateFormInputValues) => void;
    onError?: (fields: InAppMessagingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InAppMessagingCreateFormInputValues) => InAppMessagingCreateFormInputValues;
    onValidate?: InAppMessagingCreateFormValidationValues;
} & React.CSSProperties>;
export default function InAppMessagingCreateForm(props: InAppMessagingCreateFormProps): React.ReactElement;
