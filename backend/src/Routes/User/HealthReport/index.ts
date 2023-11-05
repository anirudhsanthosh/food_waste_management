import { Router } from "express";
import { createHealthReport, deleteHealthReport, getAllHealthReport, getHealthReport, updateHealthReport } from "../../../Controller/healthReport";


export const healthReportRouter = Router();


healthReportRouter.post('/', createHealthReport);

healthReportRouter.patch('/:id', updateHealthReport);

healthReportRouter.get('/:id', getHealthReport);

healthReportRouter.delete('/:id', deleteHealthReport);

healthReportRouter.get('/', getAllHealthReport);