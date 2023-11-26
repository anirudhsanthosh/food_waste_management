

import axios from "axios";

export class AdminBloodDonationClient {

    static async getAll() {
        const response = await axios.get<API.AdminDonation[]>('/admin/donation');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.AdminDonation>('/admin/donation/' + id);

        return response.data
    }

    static async delete(id: string) {
        const response = await axios.delete<null>('/admin/donation/' + id);

        return response.data
    }

    static async create(payload: API.AdminDonationCreatePayload) {
        const response = await axios.post<API.AdminDonation>('/admin/donation', payload);

        return response.data
    }

    static async update(payload: API.AdminDonationUpdatePayload) {

        const { id, ...rest } = payload;
        const response = await axios.patch<API.AdminDonation>(`/admin/donation/${id}`, rest)

        return response.data
    }


}