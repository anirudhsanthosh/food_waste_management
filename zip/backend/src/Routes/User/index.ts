import { Router } from "express";
import { getUser } from "../../Controller/User/get.controller";
import { login } from "../../Controller/User/login.controller";
import { logout } from "../../Controller/User/logout.controller";
import { signUp } from "../../Controller/User/signUp.controller";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { loginSchema } from "../../Schemas/User/Login";
import { signUpSchema } from "../../Schemas/User/SignUp";
import { getAllBloodGroup } from "../../Controller/Admin/bloodGroup";
import { updateUser } from "../../Controller/User/update.controller";
import { addressRouter } from "./Address";
import { healthReportRouter } from "./HealthReport";
import { bloodRequestRouter } from "./Request";
import { donationRouter } from "./Donation";
import { dashBoard } from "../../Controller/dashboard";



export const UserRouter = Router()

UserRouter.post('/signup', validateRequestPayload(signUpSchema), signUp);

UserRouter.post('/login', validateRequestPayload(loginSchema), login);

UserRouter.post('/logout', logout);

UserRouter.get('/bloodGroups', getAllBloodGroup);


UserRouter.get('/', authenticateWithJwt, getUser)

UserRouter.patch('/', authenticateWithJwt, updateUser)

UserRouter.get('/dashboard', authenticateWithJwt, dashBoard)



UserRouter.use('/address', authenticateWithJwt, addressRouter)

UserRouter.use('/health-report', authenticateWithJwt, healthReportRouter)

UserRouter.use('/request', authenticateWithJwt, bloodRequestRouter)

UserRouter.use('/donation', authenticateWithJwt, donationRouter)









