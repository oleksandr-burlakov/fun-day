import React from "react";
import "./Login.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Navigate } from 'react-router-dom';

export class Login extends React.Component {
    state = { registration: null };

    signUp() {
        let registration = true;
        this.setState({registration});
    }

    render(): React.ReactNode {
        let {registration} = this.state; 
        return (
            <div className="login-block">
                <form>
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <Input type="text" name="login" id="login" chosenClass="outline"></Input>
                        <div className="validation-message"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Input type="password" id="password" name="password" chosenClass="default"/>
                        <div className="validation-message"></div>
                    </div>
                    <div className="buttons">
                        <Button text="Sign in" 
                            chosenClass="default" />
                        { registration &&
                            (<Navigate to="/registration" />)
                        }
                        <Button text="Sign up" 
                            chosenClass="outline"
                            onClick={() => this.signUp()}
                             />
                    </div>
                </form>
            </div>
        );
    }
}