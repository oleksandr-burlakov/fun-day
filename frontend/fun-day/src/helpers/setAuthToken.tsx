import axios from 'axios';
import { TokenModel } from '../models/authentication/tokenModel';
 
export const setAuthToken = (token: string | null | undefined) => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
}

export const setToken = (model: TokenModel) => {
    if (model.token) {
        localStorage.setItem("token", model.token);    
    } else {
        localStorage.removeItem("token");
    }
    if (model.refreshToken) {
        localStorage.setItem("refreshToken", model.refreshToken);
    } else {
        localStorage.removeItem("refreshToken");
    }
    if (model.expiration) {
        localStorage.setItem("expiration", model.expiration);
    } else {
        localStorage.removeItem("expiration");
    }
}