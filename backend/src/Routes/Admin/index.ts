import { Router } from "express";
import { createElection } from "../../Controller/Admin/createElection";
import { getElection } from "../../Controller/Admin/getElection";
import { getElections } from "../../Controller/Admin/getElections";
import { updateElection } from "../../Controller/Admin/updateElection";
import { createPickupRequest } from "../../Controller/PickupRequest/create.controller";
import { authenticateAdmin } from "../../Middlewares/adminAuth";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { createElectionSchema, updateElectionSchema, updateFoodRequestSchema } from "../../Schemas/Admin";


export const AdminRouter = Router();


AdminRouter.get('/elections', authenticateWithJwt,authenticateAdmin, getElections);

AdminRouter.post('/elections', authenticateWithJwt,authenticateAdmin,validateRequestPayload(createElectionSchema), createElection);

AdminRouter.put('/elections/:electionId', authenticateWithJwt,authenticateAdmin, validateRequestPayload(updateElectionSchema), updateElection);

AdminRouter.get('/elections/:electionId', authenticateWithJwt,authenticateAdmin, getElection);
