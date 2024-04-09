/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RequestVideoUpdateFormInputValues = {
    created?: string;
    duedate?: string;
    from?: string;
    to?: string;
    fromEmail?: string;
    toEmail?: string;
    isRead?: boolean;
    isCompleted?: boolean;
    message?: string;
};
export declare type RequestVideoUpdateFormValidationValues = {
    created?: ValidationFunction<string>;
    duedate?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    fromEmail?: ValidationFunction<string>;
    toEmail?: ValidationFunction<string>;
    isRead?: ValidationFunction<boolean>;
    isCompleted?: ValidationFunction<boolean>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestVideoUpdateFormOverridesProps = {
    RequestVideoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created?: PrimitiveOverrideProps<TextFieldProps>;
    duedate?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    fromEmail?: PrimitiveOverrideProps<TextFieldProps>;
    toEmail?: PrimitiveOverrideProps<TextFieldProps>;
    isRead?: PrimitiveOverrideProps<SwitchFieldProps>;
    isCompleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestVideoUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestVideoUpdateFormOverridesProps | undefined | null;
} & {
    created?: string;
    requestVideo?: any;
    onSubmit?: (fields: RequestVideoUpdateFormInputValues) => RequestVideoUpdateFormInputValues;
    onSuccess?: (fields: RequestVideoUpdateFormInputValues) => void;
    onError?: (fields: RequestVideoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestVideoUpdateFormInputValues) => RequestVideoUpdateFormInputValues;
    onValidate?: RequestVideoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestVideoUpdateForm(props: RequestVideoUpdateFormProps): React.ReactElement;
