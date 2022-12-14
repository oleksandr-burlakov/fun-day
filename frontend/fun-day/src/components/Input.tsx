import React, { ChangeEventHandler } from "react";
import "./Input.css";

export interface InputProps {
    type?: string;
    chosenClass?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    isSearchInput?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[] | undefined;
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
    placeholder?: string;
    isSearchInput: boolean = false;
    value: string | number | readonly string[] | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement>;

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
        this.placeholder = props.placeholder;

        if (props.isSearchInput) {
            this.isSearchInput = props.isSearchInput;
        }
        this.onChange = props.onChange;
        if (props.value) {
            this.value = props.value;
        }
    }

    render(): React.ReactNode {
        
        return (
            <>
                <input 
                    type={this.type} 
                    className={this.chosenClass + (this.isSearchInput ? " search": "")} 
                    name={this.name}
                    id={this.id}
                    placeholder={this.placeholder}
                    onChange={this.onChange}
                    value={this.value}
                    />
                {this.isSearchInput && 
                    <button className="searchButton">
                        Q
                    </button>}
            </>
        );
    }
}