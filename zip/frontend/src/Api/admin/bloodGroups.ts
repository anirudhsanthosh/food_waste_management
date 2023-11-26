import axios from "axios";

export class BloodGroupClient {

    static async getAll() {
        const response = await axios.get<API.BloodGroup[]>('/user/bloodGroups');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.BloodGroup>('/admin/bloodGroup/' + id);

        return response.data
    }

    static async create(payload: API.BloodGroupCreatePayload) {
        const response = await axios.post<API.BloodGroup>('/admin/bloodGroup', payload)

        return response.data
    }
    static async update(payload: Partial<API.BloodGroupCreatePayload> & { id: string }) {

        const { id, ...rest } = payload;
        const response = await axios.patch<API.BloodGroup>(`/admin/bloodGroup/${id}`, rest)

        return response.data
    }

    static async delete(id: string) {

        const response = await axios.delete<null>(`/admin/bloodGroup/${id}`)

        return response.data
    }


}