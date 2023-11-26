import axios from "axios";

export class AddressClient {

    static async getAll() {
        const response = await axios.get<API.Address[]>('/user/address');

        return response.data
    }

    static async get(id: string) {
        const response = await axios.get<API.Address>('/user/address/' + id);

        return response.data
    }

    static async delete(id: string) {
        const response = await axios.delete<null>('/user/address/' + id);

        return response.data
    }

    static async create(payload: API.AddressCreatePayload) {
        const response = await axios.post<API.Address>('/user/address', payload);

        return response.data
    }

    static async update(payload: API.AddressUpdatePayload) {

        const { addressId, ...rest } = payload;
        const response = await axios.patch<API.BloodGroup>(`/user/address/${addressId}`, rest)

        return response.data
    }


}