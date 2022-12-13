import React from "react";
import "./HomeCard.css";

export interface HomeCardProps {
    title: string;
    text: string;
};

export class HomeCard extends React.Component<HomeCardProps> {
    title: string;
    text: string;

    public constructor(props: HomeCardProps) {
        super(props);
        this.title = props.title;
        this.text = props.text;
    }

    render(): React.ReactNode {
        return (
            <div className="card">
                <h2>{this.title}</h2>
                <div className="content">
                    {this.text}
                </div>
            </div>
        );
    }
}