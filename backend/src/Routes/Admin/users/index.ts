import { Router } from "express";
import { deleteUser, donorFinder, getAllUsers, getUser, updateUser } from "../../../Controller/Admin/users";

export const adminUserRouter = Router({});

adminUserRouter.get('/finder', donorFinder);

adminUserRouter.get('/', getAllUsers);

adminUserRouter.patch('/:id', updateUser);

adminUserRouter.get('/:id', getUser);

adminUserRouter.delete('/:id', deleteUser);
