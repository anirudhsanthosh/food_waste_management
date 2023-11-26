import { NextFunction, Request, Response } from 'express';
import { db } from '../../DB';

export async function dashBoard(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>


    try {
        const { id } = newRequest.user

        const report = await db.user.findFirst({
            where: { id }, include: {

                _count: {
                    select: {
                        address: true,
                        donations: true,
                        healthReports: true,
                        requests: true,
                    }
                }
            },

        })

        response.json(report)
    } catch (err) {
        next(err);
    }

}