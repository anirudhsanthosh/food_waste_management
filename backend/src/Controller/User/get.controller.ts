import { CookieOptions, NextFunction, Request, Response } from 'express';
import { db } from '../../DB';
import { Exceptions } from '../../Exceptions';
import { getUserByEmail } from '../../Repositories/User';
import { Jwt } from '../../Services/jwt';

export async function getUser(request: Request ,response: Response, next: NextFunction) {

    const authRequest = request as unknown as AuthRequest<Request>;

    const {email,name,uuid} = authRequest.user;

    return response.json({email,name,uuid});
}
