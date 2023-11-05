import { NextFunction, Request, Response } from 'express';
import { db } from '../../../DB';



export async function getUser(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const user = await db.user.findFirst({ where: { id: Number(id) }, include: { blood: true, address: true, donations: true, healthReports: true, requests: { include: { blood: true } }, _count: { select: { address: true, donations: true, healthReports: true, requests: true } } } })

        response.json(user)
    } catch (err) {
        next(err);
    }

}

export async function getAllUsers(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const users = await db.user.findMany({
            select: {

                _count: {
                    select: { donations: true, address: true, healthReports: true, requests: true }
                },
                blood: true,
                email: true,
                gender: true,
                role: true,
                age: true,
                name: true,
                id: true,
                uuid: true,
                joinedOn: true,

            }
        })

        response.json(users)
    } catch (err) {
        next(err);
    }

}

export async function deleteUser(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {
        const { id } = newRequest.params;

        const report = await db.user.delete({ where: { id: Number(id) }, })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function updateUser(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { id } = newRequest.params;

    try {

        const user = await db.user.update({ data: newRequest.body, where: { id: Number(id) } })

        response.json(user)
    } catch (err) {
        next(err);
    }

}