import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginModel } from "../models/authentication/loginModel"; 
import { UserModel } from "../models/authentication/userModel"; 
import { RegistrationModel } from "../models/authentication/registrationModel";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'; 
import { userState } from "../atoms/userStates";
import { setAuthToken, setToken } from "../helpers/setAuthToken";

export function useAuthentication() {
    let isAuthorized = localStorage.getItem("token") ? true : false;
    const [error, setError] = useState(null);
    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();

    const loadUserData = async () => {
        let result = axios.get<UserModel>('User/get-user-info')
            .then(async (responseData: any) => {
                let userData = responseData.data as UserModel;
                if (userData) {
                    setUser(userData);
                }
            })
    };

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
                setToken({
                    token: tokenData.token,
                    expiration: tokenData.expiration,
                    refreshToken: tokenData.refreshToken
                });
                setAuthToken(tokenData.token);
                await loadUserData();
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