import { Component, ReactNode, createElement } from "react";

import { HelloGithubActionContainerProps } from "../typings/HelloGithubActionProps";
import { BadgeSample } from "./components/BadgeSample";
import "./ui/HelloGithubAction.css";

export default class HelloGithubAction extends Component<HelloGithubActionContainerProps> {
    private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <BadgeSample
                type={this.props.hellogithubactionType}
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                clickable={!!this.props.onClickAction}
                defaultValue={this.props.hellogithubactionValue ? this.props.hellogithubactionValue : ""}
                onClickAction={this.onClickHandler}
                style={this.props.style}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}>
            </BadgeSample>
        );
    }

    private onClick(): void {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }
}
