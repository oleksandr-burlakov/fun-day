import React from "react";
import "./Input.css";

export interface InputProps {
    type?: string;
    chosenClass?: string;
    id?: string;
    name?: string;
};

export class Input extends React.Component<InputProps> {

    private allowedTypes = [
        'text',
        'password',
        'email'
    ];

    private allowedClasses = [
        "default",
        "outline",
    ];

    type: string;
    chosenClass: string;
    id?: string;
    name?: string;

    public constructor(props: InputProps) {
        super(props);
        
        if (props.type && this.allowedTypes.includes(props.type)) {
            this.type = props.type;
        } else {
            this.type = this.allowedTypes[0];
        }

        if (props.chosenClass && this.allowedClasses.includes(props.chosenClass)) {
            this.chosenClass = props.chosenClass;
        } else {
            this.chosenClass = this.allowedClasses[0];
        }

        this.id = props.id;
        this.name = props.name;
    }

    render(): React.ReactNode {
        
        return (
            <>
                <input 
                    type={this.type} 
                    className={this.chosenClass} 
                    name={this.name}
                    id={this.id}
                    />
            </>
        );
    }
}