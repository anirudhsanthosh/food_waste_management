import { useMutation, useQuery, useQueryClient } from "react-query"
import { BloodGroupClient } from "../../Api/admin/bloodGroups"
import { UserClient } from "../../Api/user";

export const useDashBoard = () => {
    const queryClient = useQueryClient()

    const dashboard = useQuery('dashboard', UserClient.dashboard, {});

    return { dashboard }
}