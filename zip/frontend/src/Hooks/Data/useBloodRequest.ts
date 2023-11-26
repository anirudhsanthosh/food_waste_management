import { useMutation, useQuery, useQueryClient } from "react-query";
import { BloodRequestClient } from "../../Api/bloodRequest";

export const useBloodRequest = (id?: string) => {
    const queryClient = useQueryClient()

    const bloodRequests = useQuery('bloodRequests', BloodRequestClient.getAll, { enabled: Boolean(!id) });

    const bloodRequest = useQuery([ 'bloodRequest', id ], () => BloodRequestClient.get(id!), { enabled: Boolean(id) });

    const createRequest = useMutation(BloodRequestClient.create, {

        onSuccess: () => {
            queryClient.invalidateQueries('bloodRequests');
            queryClient.invalidateQueries('user')
        },

    })

    const updateRequest = useMutation(BloodRequestClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('bloodRequests');
            queryClient.invalidateQueries([ 'bloodRequest', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteRequest = useMutation(BloodRequestClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('bloodRequests');
            queryClient.removeQueries([ 'bloodRequest', id ]);
            queryClient.invalidateQueries('user');
        },

    })
    return {
        bloodRequests, bloodRequest, createRequest, updateRequest, deleteRequest
    }
}