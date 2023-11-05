import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminBloodDonationClient } from "../../../Api/admin/donations";

export const useAdminBloodDonations = (id?: string) => {
    const queryClient = useQueryClient()

    const allDonations = useQuery('adminDonations', AdminBloodDonationClient.getAll, { enabled: Boolean(!id) });

    const donation = useQuery([ 'adminDonation', id ], () => AdminBloodDonationClient.get(id!), { enabled: Boolean(id) });

    const create = useMutation(AdminBloodDonationClient.create, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminDonations');
            queryClient.invalidateQueries([ 'adminDonation', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const update = useMutation(AdminBloodDonationClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminDonations');
            queryClient.invalidateQueries([ 'adminDonation', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteDonation = useMutation(AdminBloodDonationClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('adminDonations');
            queryClient.invalidateQueries([ 'adminDonation', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    return {
        create, update, allDonations, donation, deleteDonation
    }
}