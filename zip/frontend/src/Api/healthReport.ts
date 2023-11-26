

import axios from "axios";

export class HealthReportClient {

    static async getAll() {
        const response = await axios.get<API.HealthReport[]>('/user/health-report');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.HealthReport>('/user/health-report/' + id);

        return response.data
    }

    static async delete(id: string) {
        const response = await axios.delete<null>('/user/health-report/' + id);

        return response.data
    }

    static async create(payload: API.HealthReportCreatePayload) {
        const response = await axios.post<API.HealthReport>('/user/health-report', payload);

        return response.data
    }

    static async update(payload: API.HealthReportUpdatePayload) {

        const { id, ...rest } = payload;
        const response = await axios.patch<API.HealthReport>(`/user/health-report/${id}`, rest)

        return response.data
    }


}