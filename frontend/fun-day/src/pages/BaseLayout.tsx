import React from "react";
import { Header } from "../components/Header";
import { Outlet } from 'react-router-dom';
import './BaseLayout.css';

export class BaseLayout extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Header />
                <Outlet></Outlet>
            </>
        );
    }
}