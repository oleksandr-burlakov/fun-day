import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { userState } from "../atoms/userStates";
import { useRecoilState } from 'recoil';
import { setAuthToken, setToken } from "../helpers/setAuthToken";

export const Header = () => {
    const [user, setUser] = useRecoilState(userState);

    const logout = () => {
        setUser(null);
        setToken({
            expiration: null,
            refreshToken: null,
            token: null
        });
        setAuthToken(null);
    }

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
                        {
                            (user != null) &&
                            (
                                <li>
                                    <Link to={'favourite'}>
                                        Favourites
                                    </Link>
                                </li>
                            )
                        }
                        <li>
                            {(user != null) ?
                                (
                                    <>
                                        {user.email}
                                        <a href="#" onClick={logout}>
                                            Logout
                                        </a>
                                    </>
                                ) :
                                (<Link to={'login'}>
                                    Sign in
                                </Link>)
                            }
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}