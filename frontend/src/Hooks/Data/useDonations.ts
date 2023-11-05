import { useQuery } from "react-query";
import { DonationClient } from "../../Api/donation";

export const useDonation = (id?: string) => {

    const donations = useQuery('donations', DonationClient.getAll, { enabled: Boolean(!id) });

    const donation = useQuery([ 'donation', id ], () => DonationClient.get(id!), { enabled: Boolean(id) });

    return {
        donations, donation
    }
}