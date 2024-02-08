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
export declare type VideoListUpdateFormInputValues = {
    User?: string;
    UserID?: string;
    VideoLink?: string;
    VideoName?: string;
};
export declare type VideoListUpdateFormValidationValues = {
    User?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    VideoLink?: ValidationFunction<string>;
    VideoName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoListUpdateFormOverridesProps = {
    VideoListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    VideoLink?: PrimitiveOverrideProps<TextFieldProps>;
    VideoName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoListUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videoList?: any;
    onSubmit?: (fields: VideoListUpdateFormInputValues) => VideoListUpdateFormInputValues;
    onSuccess?: (fields: VideoListUpdateFormInputValues) => void;
    onError?: (fields: VideoListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoListUpdateFormInputValues) => VideoListUpdateFormInputValues;
    onValidate?: VideoListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoListUpdateForm(props: VideoListUpdateFormProps): React.ReactElement;
