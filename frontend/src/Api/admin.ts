import axios from "axios";

export class AdminClient {

    static async getAllElections() {
        const response = await axios.get<API.Election[]>('/admin/elections');

        return response.data
    }

    static async create(payload: API.createElectionPayload) {
        const response = await axios.post<API.pickup>('/admin/elections', payload)

        return response.data
    }

    static async getElectionById(electionId: string) {

        if(!electionId) throw new Error('Elections not found');
        
        const response = await axios.get<API.Election>(`/admin/elections/${electionId}`)

        return response.data
    }


    static async update(payload: API.updateElectionPayload) {

        const { electionId, title, description, options, status } = payload;
        const response = await axios.put<API.pickup>(`/admin/elections/${electionId}`, { title, description, options, status })

        return response.data
    }

    static async cancel(requestId: number) {

        const response = await axios.delete<API.pickup>(`/request/${requestId}`);

        return response.data;
    }
}