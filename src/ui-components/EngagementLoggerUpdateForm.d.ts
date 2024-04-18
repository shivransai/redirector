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
export declare type EngagementLoggerUpdateFormInputValues = {
    user_hash_key?: string;
    sites_visited?: string;
    last_updated?: string;
};
export declare type EngagementLoggerUpdateFormValidationValues = {
    user_hash_key?: ValidationFunction<string>;
    sites_visited?: ValidationFunction<string>;
    last_updated?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngagementLoggerUpdateFormOverridesProps = {
    EngagementLoggerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_hash_key?: PrimitiveOverrideProps<TextFieldProps>;
    sites_visited?: PrimitiveOverrideProps<TextFieldProps>;
    last_updated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngagementLoggerUpdateFormProps = React.PropsWithChildren<{
    overrides?: EngagementLoggerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    engagementLogger?: any;
    onSubmit?: (fields: EngagementLoggerUpdateFormInputValues) => EngagementLoggerUpdateFormInputValues;
    onSuccess?: (fields: EngagementLoggerUpdateFormInputValues) => void;
    onError?: (fields: EngagementLoggerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngagementLoggerUpdateFormInputValues) => EngagementLoggerUpdateFormInputValues;
    onValidate?: EngagementLoggerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EngagementLoggerUpdateForm(props: EngagementLoggerUpdateFormProps): React.ReactElement;
