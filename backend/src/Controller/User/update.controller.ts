import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../../DB';


export async function updateUser(request: Request, response: Response, next: NextFunction) {

    const newRequest = request as unknown as AuthRequest<Request, { email: string, age: number, name: string }>

    const { uuid, } = newRequest.user;
    try {

        const updated = await UsersRepository.update({ data: newRequest.body, where: { uuid } });

        response.json(updated);

    }
    catch (err) {
        next(err);
    }


}