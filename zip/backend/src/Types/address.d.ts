interface Address {
    id: string
    houseName: string
    landmark: string
    town: string
    city: string
    pin: number
    userId: number
}

type AddressCreatePayload = Omit<Address, "id" | 'userId'>

type AddressUpdatePayload = Partial<AddressCreatePayload>