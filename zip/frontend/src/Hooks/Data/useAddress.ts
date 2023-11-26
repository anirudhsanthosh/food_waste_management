import { useMutation, useQuery, useQueryClient } from "react-query"
import { BloodGroupClient } from "../../Api/admin/bloodGroups"
import { AddressClient } from "../../Api/address";

export const useAddress = (id?: string) => {
    const queryClient = useQueryClient()

    const addresses = useQuery('addresses', AddressClient.getAll, { enabled: Boolean(!id) });

    const address = useQuery([ 'address', id ], () => AddressClient.get(id!), { enabled: Boolean(id) });

    const createAddress = useMutation(AddressClient.create, {

        onSuccess: () => {
            queryClient.invalidateQueries('addresses');
            queryClient.invalidateQueries('user')
        },

    })

    const updateAddress = useMutation(AddressClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('addresses');
            queryClient.invalidateQueries([ 'address', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteAddress = useMutation(AddressClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('addresses');
            queryClient.removeQueries([ 'address', id ]);
            queryClient.invalidateQueries('user');
        },

    })
    return { addresses, createAddress, address, updateAddress, deleteAddress }
}