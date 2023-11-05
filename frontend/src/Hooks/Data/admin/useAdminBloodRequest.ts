import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminBloodRequests } from "../../../Api/admin/bloodRequests";

export const useAdminBloodRequests = (id?: number) => {
    const queryClient = useQueryClient()

    const adminRequests = useQuery('adminRequests', AdminBloodRequests.getAll, { enabled: Boolean(!id) });

    // const user = useQuery([ 'adminUserData', id ], () => AdminUsersClient.get(id!), { enabled: Boolean(id) });

    const updateRequest = useMutation(AdminBloodRequests.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminRequests');
            queryClient.invalidateQueries([ 'adminUserData', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteRequest = useMutation(AdminBloodRequests.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminRequests');
            queryClient.invalidateQueries([ 'adminUserData', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    return {
        adminRequests, deleteRequest, updateRequest
    }
}