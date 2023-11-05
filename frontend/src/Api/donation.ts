

import axios from "axios";

export class DonationClient {

    static async getAll() {
        const response = await axios.get<API.Donation[]>('/user/donation');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.Donation>('/user/donation/' + id);

        return response.data
    }

}