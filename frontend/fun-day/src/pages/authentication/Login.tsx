import React, { useState } from "react";
import "./Login.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from "../../hooks/useAuth";
import { LoginModel } from "../../models/authentication/loginModel";

export const Login = () => {
    const navigate = useNavigate();
    const {loginUser} = useAuthentication();
    const [loginFormData, setLoginFormData] = useState({
        login: '',
        password: ''
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormData({...loginFormData,
            [event.target.name]: event.target.value
        });
    };

    const isFormValid = (): boolean => {
        return loginFormData.login !== '' && loginFormData.password !== '' ? true : false;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isFormValid()) {
            return;
        }
        let loginForm: LoginModel = {
            login: loginFormData.login,
            password: loginFormData.password
        };
        loginUser(loginForm, "/");
    }

    return (
        <div className="login-block">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login:</label>
                    <input type="text" name="login" id="login" className="outline" onChange={handleChange} value={loginFormData.login} />
                    <div className="validation-message"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className="default" onChange={handleChange} value={loginFormData.password} />
                    <div className="validation-message"></div>
                </div>
                <div className="buttons">
                    <Button text="Sign in" 
                        chosenClass="default" />
                    <Button text="Sign up" 
                        chosenClass="outline"
                        onClick={() => navigate('/registration')}
                            />
                </div>
            </form>
        </div>
    );
}