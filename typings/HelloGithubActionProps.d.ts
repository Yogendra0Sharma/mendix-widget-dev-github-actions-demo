/**
 * This file was generated from HelloGithubAction.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type HellogithubactionTypeEnum = "badge" | "label";

export interface HelloGithubActionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    valueAttribute?: EditableValue<string | BigJs.Big>;
    hellogithubactionValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    hellogithubactionType: HellogithubactionTypeEnum;
    onClickAction?: ActionValue;
}

export interface HelloGithubActionPreviewProps {
    class: string;
    style: string;
    valueAttribute: string;
    hellogithubactionValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    hellogithubactionType: HellogithubactionTypeEnum;
    onClickAction: {} | null;
}
