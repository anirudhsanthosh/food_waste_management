import { Router } from "express";
import { getPickupRequests } from "../../Controller/Admin/getPickups";
import { updatePickupRequest } from "../../Controller/Admin/updatePickup";
import { createPickupRequest } from "../../Controller/PickupRequest/create.controller";
import { authenticateAdmin } from "../../Middlewares/adminAuth";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { updateFoodRequestSchema } from "../../Schemas/Admin";
import { bloodGroupRouter } from "./bloodGroup";


export const AdminRouter = Router();

AdminRouter.use((req, res, next) => {
    console.log(1234);
    next()
}, authenticateWithJwt, authenticateAdmin,)

AdminRouter.use('/bloodGroup', bloodGroupRouter);

AdminRouter.get('/pickups', getPickupRequests);


AdminRouter.patch('/pickups/:pickupId', validateRequestPayload(updateFoodRequestSchema), updatePickupRequest);
