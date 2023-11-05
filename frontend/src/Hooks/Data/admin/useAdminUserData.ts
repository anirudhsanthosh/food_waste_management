import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminUsersClient } from "../../../Api/admin/users";

export const useAdminUserData = (id?: number) => {
    const queryClient = useQueryClient()

    const users = useQuery('adminUsersData', AdminUsersClient.getAll, { enabled: Boolean(!id) });

    const user = useQuery([ 'adminUserData', id ], () => AdminUsersClient.get(id!), { enabled: Boolean(id) });

    const updateUser = useMutation(AdminUsersClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminUsersData');
            queryClient.invalidateQueries([ 'adminUserData', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteUser = useMutation(AdminUsersClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminUsersData');
            queryClient.invalidateQueries([ 'adminUserData', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    return {
        users, user, updateUser, deleteUser
    }
}