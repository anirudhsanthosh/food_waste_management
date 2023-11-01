import { NextFunction, Request, Response } from 'express';
import { omit } from 'lodash';

export async function getUser(request: Request, response: Response, next: NextFunction) {

    const authRequest = request as unknown as AuthRequest<Request>;

    const { email, name, uuid, role, } = authRequest.user;

    // return response.json({ email, name, uuid, role });
    return response.json(omit(authRequest.user, [ 'id' ]));
}
