/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type VideoCardOverridesProps = {
    VideoCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    "Title:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<TextProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    Delete?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VideoCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    videoList?: any;
    videoSource?: React.ReactNode;
} & {
    overrides?: VideoCardOverridesProps | undefined | null;
}>;
export default function VideoCard(props: VideoCardProps): React.ReactElement;
