import { Router } from "express";
import { getAllRequests, deleteBloodRequest, updateBloodRequest } from "../../../Controller/Admin/request";

export const adminBloodRequestRouter = Router({});

adminBloodRequestRouter.get('/', getAllRequests);

adminBloodRequestRouter.patch('/:id', updateBloodRequest);

adminBloodRequestRouter.delete('/:id', deleteBloodRequest);