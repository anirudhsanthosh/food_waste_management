import axios from "axios";

export class AdminClient{

    static async getAllPickups(){
        const response = await axios.get<API.pickup[]>('/admin/pickups');

        return response.data
    }

    static async create(payload:API.createPickupPayload){
        const response = await axios.post<API.pickup>('/request',payload)

        return response.data
    }
    static async update(payload:API.adminPickupUpdateParams){

        const {pickupId,status} = payload;
        const response = await axios.patch<API.pickup>(`/admin/pickups/${pickupId}`,{status})

        return response.data
    }

    static async cancel(requestId:number){

        const response = await axios.delete<API.pickup>(`/request/${requestId}`);

        return response.data;
    }
}