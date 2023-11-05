import axios from "axios";

export class AdminUsersClient {

    static async getAll() {
        const response = await axios.get<API.AdminPanelUserData[]>('/admin/users');

        return response.data
    }

    static async get(id: number) {
        const response = await axios.get<API.AdminPanelSingleUserData>('/admin/users/' + id);

        return response.data
    }


    static async update(payload: Partial<Omit<API.User, "password" | "blood" | "address" | "requests">> & { id: number }) {

        const { id, ...rest } = payload;
        const response = await axios.patch<API.BloodGroup>(`/admin/users/${id}`, rest)

        return response.data
    }

    static async delete(id: number) {

        const response = await axios.delete<null>(`/admin/users/${id}`)

        return response.data
    }


}

