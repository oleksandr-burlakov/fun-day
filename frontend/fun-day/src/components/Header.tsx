import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <header>
                    <Link to={''}>
                        <div className="logo">
                            Fun-Day
                        </div>
                    </Link>
                    <div className="links">
                        <ul>
                            <li>
                                <Link to={'events'}>
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link to={'favourite'}>
                                    Favourites
                                </Link>
                            </li>
                            <li>
                                <Link to={'login'}>
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        );
    }
}