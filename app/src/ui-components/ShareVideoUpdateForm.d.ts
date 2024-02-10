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
export declare type ShareVideoUpdateFormInputValues = {
    From?: string;
    To?: string;
    Link?: string;
    Description?: string;
};
export declare type ShareVideoUpdateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Link?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShareVideoUpdateFormOverridesProps = {
    ShareVideoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Link?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShareVideoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShareVideoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shareVideo?: any;
    onSubmit?: (fields: ShareVideoUpdateFormInputValues) => ShareVideoUpdateFormInputValues;
    onSuccess?: (fields: ShareVideoUpdateFormInputValues) => void;
    onError?: (fields: ShareVideoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShareVideoUpdateFormInputValues) => ShareVideoUpdateFormInputValues;
    onValidate?: ShareVideoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShareVideoUpdateForm(props: ShareVideoUpdateFormProps): React.ReactElement;
