declare module API {

    interface pickup {
        id: number
        address: string
        status: string
        quantity: number
        createdAt: string
        updatedAt: string
        user_id: number
    }

    interface createPickupPayload {
        address: string,
        quantity: number,
    }

    interface adminPickupUpdateParams {
        pickupId : number,
        status : string,
    }
}

