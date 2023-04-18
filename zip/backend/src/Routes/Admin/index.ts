import { Router } from "express";
import { getPickupRequests } from "../../Controller/Admin/getPickups";
import { updatePickupRequest } from "../../Controller/Admin/updatePickup";
import { createPickupRequest } from "../../Controller/PickupRequest/create.controller";
import { authenticateAdmin } from "../../Middlewares/adminAuth";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { updateFoodRequestSchema } from "../../Schemas/Admin";


export const AdminRouter = Router();


AdminRouter.get('/pickups', authenticateWithJwt,authenticateAdmin, getPickupRequests);


AdminRouter.patch('/pickups/:pickupId', authenticateWithJwt,authenticateAdmin, validateRequestPayload(updateFoodRequestSchema), updatePickupRequest);
