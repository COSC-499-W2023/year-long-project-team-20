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
export declare type InAppMessagingUpdateFormInputValues = {
    from?: string;
    to?: string;
    link?: string;
    Description?: string;
};
export declare type InAppMessagingUpdateFormValidationValues = {
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InAppMessagingUpdateFormOverridesProps = {
    InAppMessagingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InAppMessagingUpdateFormProps = React.PropsWithChildren<{
    overrides?: InAppMessagingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inAppMessaging?: any;
    onSubmit?: (fields: InAppMessagingUpdateFormInputValues) => InAppMessagingUpdateFormInputValues;
    onSuccess?: (fields: InAppMessagingUpdateFormInputValues) => void;
    onError?: (fields: InAppMessagingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InAppMessagingUpdateFormInputValues) => InAppMessagingUpdateFormInputValues;
    onValidate?: InAppMessagingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InAppMessagingUpdateForm(props: InAppMessagingUpdateFormProps): React.ReactElement;
