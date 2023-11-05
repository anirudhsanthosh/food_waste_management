import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminUsersClient } from "../../../Api/admin/users";

export const useDonorFinder = (params: { bloodGroup: string, userQuery: string }) => {
    const queryClient = useQueryClient()

    const { bloodGroup, userQuery } = params

    const finder = useQuery([ 'finder', bloodGroup, userQuery ], () => AdminUsersClient.finder(params), { enabled: Boolean(bloodGroup) });

    return {
        finder
    }
}