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
export declare type EngagementLoggerCreateFormInputValues = {
    user_hash_key?: string;
    sites_visited?: string;
    last_updated?: string;
};
export declare type EngagementLoggerCreateFormValidationValues = {
    user_hash_key?: ValidationFunction<string>;
    sites_visited?: ValidationFunction<string>;
    last_updated?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngagementLoggerCreateFormOverridesProps = {
    EngagementLoggerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_hash_key?: PrimitiveOverrideProps<TextFieldProps>;
    sites_visited?: PrimitiveOverrideProps<TextFieldProps>;
    last_updated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngagementLoggerCreateFormProps = React.PropsWithChildren<{
    overrides?: EngagementLoggerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EngagementLoggerCreateFormInputValues) => EngagementLoggerCreateFormInputValues;
    onSuccess?: (fields: EngagementLoggerCreateFormInputValues) => void;
    onError?: (fields: EngagementLoggerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngagementLoggerCreateFormInputValues) => EngagementLoggerCreateFormInputValues;
    onValidate?: EngagementLoggerCreateFormValidationValues;
} & React.CSSProperties>;
export default function EngagementLoggerCreateForm(props: EngagementLoggerCreateFormProps): React.ReactElement;
