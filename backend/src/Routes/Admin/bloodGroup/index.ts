import { Router } from "express";
import { createBloodGroup } from "../../../Controller/Admin/bloodGroup/create.controller";

export const bloodGroupRouter = Router({});

bloodGroupRouter.post('/', createBloodGroup);