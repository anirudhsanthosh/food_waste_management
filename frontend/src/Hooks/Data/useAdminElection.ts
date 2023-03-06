import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminClient } from "../../Api/admin";

export const useAdminElection = (electionId: string) => {
    const queryClient = useQueryClient()

    const election = useQuery([ 'admin/elections', electionId ], () => AdminClient.getElectionById(electionId));

    const update = useMutation((value: API.updateElectionPayload) => AdminClient.update(value), {

        onSuccess: () => queryClient.invalidateQueries([ 'admin/elections', electionId ]),

    })
    return { ...election, update }
}