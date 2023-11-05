import { useMutation, useQuery, useQueryClient } from "react-query";
import { HealthReportClient } from "../../Api/healthReport";

export const useHealthReport = (id?: string) => {
    const queryClient = useQueryClient()

    const healthReports = useQuery('healthReports', HealthReportClient.getAll, { enabled: Boolean(!id) });

    const healthReport = useQuery([ 'healthReport', id ], () => HealthReportClient.get(id!), { enabled: Boolean(id) });

    const createReport = useMutation(HealthReportClient.create, {

        onSuccess: () => {
            queryClient.invalidateQueries('healthReports');
            queryClient.invalidateQueries('user')
        },

    })

    const updateReport = useMutation(HealthReportClient.update, {

        onSuccess: () => {
            queryClient.invalidateQueries('healthReports');
            queryClient.invalidateQueries([ 'healthReport', id ]);
            queryClient.invalidateQueries('user');
        },

    })

    const deleteReport = useMutation(HealthReportClient.delete, {

        onSuccess: () => {
            queryClient.invalidateQueries('healthReports');
            queryClient.removeQueries([ 'healthReport', id ]);
            queryClient.invalidateQueries('user');
        },

    })
    return {
        healthReports, healthReport, createReport, updateReport, deleteReport
    }
}