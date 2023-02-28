import axios from "axios";
import { Configurations } from "../Config";

export class UserClient {

    static auth({ email, password }: { email: string, password: string }) {
        return axios.post<{ authToken: string }>('/user/login', { email, password });
    }

    static async get(){
        const response = await  axios.get<{}>('/user/');

        return response.data;
    }
}