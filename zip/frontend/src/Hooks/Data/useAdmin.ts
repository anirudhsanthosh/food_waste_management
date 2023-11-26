import { useMutation, useQuery, useQueryClient } from "react-query";
import { AdminClient } from "../../Api/admin/admin";
import { PickupClient } from "../../Api/pickups";

export function useAdmin() {
  const queryClient = useQueryClient()

  const pickups = useQuery('admin', AdminClient.getAllPickups);

  const updateStatus = useMutation((value: API.adminPickupUpdateParams) => AdminClient.update(value), {

    onSuccess: () => queryClient.invalidateQueries('admin'),

  })
  const deleteMutation = useMutation((pickupId: number) => PickupClient.cancel(pickupId), {

    onSuccess: () => queryClient.invalidateQueries('pickups'),

  })

  return { pickups: pickups.data, ...pickups, updateStatus, deleteMutation };
}

