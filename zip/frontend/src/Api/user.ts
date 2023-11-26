import axios from "axios";
import { Configurations } from "../Config";

export class UserClient {

    static auth({ email, password }: { email: string, password: string }) {
        return axios.post<{ authToken: string }>('/user/login', { email, password });
    }

    static async get() {
        const response = await axios.get<API.User>('/user/');

        return response.data;
    }

    static async dashboard() {
        const response = await axios.get<API.Dashoard>('/user/dashboard');

        return response.data;
    }

    static async update(params: Partial<API.User>) {
        const response = await axios.patch<API.User>('/user/', params);

        return response.data;
    }

    static register(payload: { email: string, password: string, name: string, age: number, gender: 'male' | 'female', bloodGroup: string }) {
        return axios.post<{
            email: string,
            uuid: string,
            name: string | null,
        }>('/user/signup', payload);
    }

    static async logout() {
        await axios.post('/user/logout');
    }
}

// "email" : "anirudh1@test.com",
//   "password" : "sdsdsdsad"

