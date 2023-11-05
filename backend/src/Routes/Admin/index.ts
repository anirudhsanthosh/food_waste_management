import { Router } from "express";
import { authenticateAdmin } from "../../Middlewares/adminAuth";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { bloodGroupRouter } from "./bloodGroup";
import { adminUserRouter } from "./users";
import { adminBloodRequestRouter } from "./requests";
import { adminBloodDonationRouter } from "./donation";


export const AdminRouter = Router();

AdminRouter.use(authenticateWithJwt, authenticateAdmin)

AdminRouter.use('/users', adminUserRouter);

AdminRouter.use('/request', adminBloodRequestRouter);

AdminRouter.use('/donation', adminBloodDonationRouter);

AdminRouter.use('/bloodGroup', bloodGroupRouter);



