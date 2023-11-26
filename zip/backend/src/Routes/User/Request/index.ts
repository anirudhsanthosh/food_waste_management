import { Router } from "express";
import { createBloodRequest, deleteBloodRequest, getAllBloodRequest, getBloodRequest, updateBloodRequest } from "../../../Controller/request";


export const bloodRequestRouter = Router();


bloodRequestRouter.post('/', createBloodRequest);

bloodRequestRouter.patch('/:id', updateBloodRequest);

bloodRequestRouter.get('/:id', getBloodRequest);

bloodRequestRouter.delete('/:id', deleteBloodRequest);

bloodRequestRouter.get('/', getAllBloodRequest);