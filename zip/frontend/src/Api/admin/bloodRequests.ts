import axios from "axios";

export class AdminBloodRequests {

    static async getAll() {
        const response = await axios.get<API.AdminRequest[]>('/admin/request');

        return response.data
    }

    static async get(id: number) {
        const response = await axios.get<API.AdminPanelSingleUserData>('/admin/users/' + id);

        return response.data
    }


    static async update(payload: Partial<Omit<API.AdminRequest, "password" | "blood" | "address" | "requests">> & { id: string }) {

        const { id, ...rest } = payload;

        const response = await axios.patch<API.BloodGroup>(`/admin/request/${id}`, rest)

        return response.data
    }

    static async delete(id: string) {

        const response = await axios.delete<null>(`/admin/request/${id}`)

        return response.data
    }


}