import Axios from "axios";
import { API_URL } from "../config";

export class AuthService {
    static getToken() {
        return null;
    }

    static async register(registerData) {
        const userResponse = await Axios.post(`${API_URL}/auth/register`, registerData);
        const userinfo = userResponse.data;
        return this.login(registerData.email, registerData.password)
    }

    static async login(email, password) {
        const authResponse = await Axios.post(`${API_URL}/auth/login`, {email, password});
        const jwtToken = authResponse.data && authResponse.data.access_token;
        const userResponse = await Axios.get(`${API_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });

        const userData = userResponse.data;
        return userData;
    }
}