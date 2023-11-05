

import axios from "axios";

export class BloodRequestClient {

    static async getAll() {
        const response = await axios.get<API.BloodRequest[]>('/user/request');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.BloodRequest>('/user/request/' + id);

        return response.data
    }

    static async delete(id: string) {
        const response = await axios.delete<null>('/user/request/' + id);

        return response.data
    }

    static async create(payload: API.BloodRequestCreatePayload) {
        const response = await axios.post<API.BloodRequest>('/user/request', payload);

        return response.data
    }

    static async update(payload: API.BloodRequestUpdatePayload) {

        const { id, ...rest } = payload;
        const response = await axios.patch<API.BloodRequest>(`/user/request/${id}`, rest)

        return response.data
    }


}