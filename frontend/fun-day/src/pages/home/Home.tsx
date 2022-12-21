import "./Home.css";
import React from 'react';
import { HomeCard, HomeCardProps } from "./HomeCard";

export class Home extends React.Component {
    cards: HomeCardProps[] = [
        {
            title: "Meet",
            text: "Meet new people and friend"
        },
        {
            title: "Spend",
            text: "Spend time with pleasure"
        },
        {
            title: "Access",
            text: "Find event that accessable to you"
        },
        {
            title: "Friends",
            text: "Do you remember when you meet your friend last time?"
        },
        {
            title: "Love",
            text: "You don't know where your love is ;)"
        },
        {
            title: "Food",
            text: "Maybe, you want to try different food?"
        }
    ];

    render(): React.ReactNode {
        return (
            <div>
                <div className="central-info">
                    <h1 className="main-title">Fun day</h1>
                    <div className="cards">
                        {
                            this.cards.map((c,index) => <HomeCard key={index} text={c.text} title={c.title} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}