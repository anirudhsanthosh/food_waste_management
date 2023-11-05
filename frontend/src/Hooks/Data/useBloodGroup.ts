import { useMutation, useQuery, useQueryClient } from "react-query"
import { BloodGroupClient } from "../../Api/admin/bloodGroups"

export const useBloodGroups = (id?: string) => {
    const queryClient = useQueryClient()

    const bloodGroups = useQuery('bloodGroups', BloodGroupClient.getAll, { enabled: Boolean(!id) });

    const bloodGroup = useQuery([ 'bloodGroup', id ], () => BloodGroupClient.get(id!), { enabled: Boolean(id) });

    const createBloodGroups = useMutation(BloodGroupClient.create, {

        onSuccess: () => queryClient.invalidateQueries('bloodGroups'),

    })

    const updateBloodGroup = useMutation(BloodGroupClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('bloodGroups')
            queryClient.invalidateQueries([ 'bloodGroup', id ])
        },

    })

    const deleteBloodGroup = useMutation(BloodGroupClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('bloodGroups');
            queryClient.removeQueries([ 'bloodGroup', id ])
        },

    })
    return { bloodGroups, createBloodGroups, bloodGroup, updateBloodGroup, deleteBloodGroup }
}