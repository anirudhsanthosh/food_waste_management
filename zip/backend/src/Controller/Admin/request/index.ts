import { NextFunction, Request, Response } from "express";
import { db } from "../../../DB";

export async function getAllRequests(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const users = await db.request.findMany({
            include: {
                blood: true,
                user: {
                    include: {
                        _count: {
                            select: {
                                donations: true,
                                requests: true,
                                address: true,
                                healthReports: true,
                            }
                        }
                    }
                },
            },
            orderBy: [
                { createdAt: "desc" },
                { status: "desc" }
            ]
        })

        response.json(users)
    } catch (err) {
        next(err);
    }

}

export async function deleteBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {
        const { id } = newRequest.params;

        const report = await db.request.delete({ where: { id }, })

        response.json(report)
    } catch (err) {
        next(err);
    }

}


export async function updateBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const { unit, bloodGroup, status } = newRequest.body;

        const old = await db.request.findFirst({ where: { id } })

        if (!old) throw new Error('Request not found');


        const { unit: oldUnit, bloodGroup: oldBloodGroup } = old;

        const user = await db.request.update({ data: newRequest.body, where: { id } })

        if (status === 'completed') await db.bloodGroup.update({
            data: {
                stock: { increment: 0 - (unit ?? oldUnit) }
            },
            where: {
                id: (oldBloodGroup ?? bloodGroup as string),
            },
        })

        response.json(user)
    } catch (err) {
        next(err);
    }

}