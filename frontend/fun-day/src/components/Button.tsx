import React, { MouseEventHandler } from "react";
import "./Button.css";

export interface ButtonProps {
    text: string;
    chosenClass?: string;
    onClick?: MouseEventHandler | undefined;
    type?: "submit" | "button" | "reset";
};

export class Button extends React.Component<ButtonProps> {
    availableClasses = [
        'default',
        'outline'
    ];

    text: string;
    chosenClass: string;
    type: "submit" | "button" | "reset" = "submit";
    onClickCallback: MouseEventHandler | undefined;

    public constructor(props: ButtonProps) {
        super(props);

        this.text = props.text;
        if (props.chosenClass && this.availableClasses.includes(props.chosenClass)) {
            this.chosenClass = props.chosenClass;
        } else {
            this.chosenClass = this.availableClasses[0];
        }

        if (props.onClick) {
            this.onClickCallback = props.onClick;
        }
        if (props.type) {
            this.type = props.type;
        }
    }

    render(): React.ReactNode {
        return (
            <>
                <button 
                    onClick={this.onClickCallback}
                    className={this.chosenClass}
                    type={this.type}
                    >
                    { this.text }
                </button>
            </>
        );
    }
}