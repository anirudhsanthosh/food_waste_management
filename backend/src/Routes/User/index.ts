import { Router } from "express";
import { getUser } from "../../Controller/User/get.controller";
import { login } from "../../Controller/User/login.controller";
import { signUp } from "../../Controller/User/signUp.controller";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { loginSchema } from "../../Schemas/User/Login";
import { signUpSchema } from "../../Schemas/User/SignUp";



export const UserRouter = Router()

UserRouter.get('/', authenticateWithJwt,getUser)

UserRouter.post('/signup', validateRequestPayload(signUpSchema),signUp)

UserRouter.post('/login', validateRequestPayload(loginSchema),login)





