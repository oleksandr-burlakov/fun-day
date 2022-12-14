import axios from "axios";
import { useEffect, useState } from "react";
import { LoginModel } from "../models/authentication/loginModel";
import { RegistrationModel } from "../models/authentication/registrationModel";
import { useNavigate } from 'react-router-dom';
import { LoginResponseModel } from "../models/authentication/loginResponseModel";

export function useAuthentication() {
    let isAuthorized = localStorage.getItem("token") ? true : false;
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const registerUser = async (data: RegistrationModel) => {
        let result = axios.post('Account/registration', data)
            .then(async () => {

            })
            .catch((err) => {
                setError(err)
            });
        return result;
    };

    const loginUser = async (data: LoginModel, redirectTo?: string | undefined) => {
        let result = axios.post<LoginModel>('Account/login', data)
            .then(async (responseData: any) => {
                let tokenData = responseData.data;
                localStorage.setItem("token", tokenData.token);
                localStorage.setItem("refreshToken", tokenData.refreshToken);
                localStorage.setItem("expiration", tokenData.expiration);
                if (redirectTo) {
                    navigate(redirectTo);
                }
            })
            .catch((err) => {
                setError(err)
            });
        return result;
    };

    return {isAuthorized, registerUser, loginUser, error};
}