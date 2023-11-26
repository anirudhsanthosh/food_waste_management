import { Router } from "express";
import { createBloodGroup, deleteBloodGroup, getAllBloodGroup, getBloodGroup, updateBloodGroup } from "../../../Controller/Admin/bloodGroup";

export const bloodGroupRouter = Router({});

bloodGroupRouter.get('/', getAllBloodGroup);

bloodGroupRouter.post('/', createBloodGroup);

bloodGroupRouter.patch('/:bloodGroupId', updateBloodGroup);

bloodGroupRouter.get('/:bloodGroupId', getBloodGroup);

bloodGroupRouter.delete('/:bloodGroupId', deleteBloodGroup);