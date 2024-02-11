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
export declare type VideoListCreateFormInputValues = {
    User?: string;
    UserID?: string;
    VideoLink?: string;
    VideoName?: string;
};
export declare type VideoListCreateFormValidationValues = {
    User?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    VideoLink?: ValidationFunction<string>;
    VideoName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoListCreateFormOverridesProps = {
    VideoListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    VideoLink?: PrimitiveOverrideProps<TextFieldProps>;
    VideoName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoListCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoListCreateFormInputValues) => VideoListCreateFormInputValues;
    onSuccess?: (fields: VideoListCreateFormInputValues) => void;
    onError?: (fields: VideoListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoListCreateFormInputValues) => VideoListCreateFormInputValues;
    onValidate?: VideoListCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoListCreateForm(props: VideoListCreateFormProps): React.ReactElement;
