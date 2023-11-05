import { NextFunction, Request, Response } from 'express';
import { BloodGroupRepository, db } from '../../DB';

export async function createBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user

        const report = await db.request.create({ data: { ...newRequest.body, userId: id }, include: { blood: true } })

        response.json(report);
    } catch (err) {
        next(err);
    }

}

export async function updateBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.request.update({ data: newRequest.body, where: { id }, include: { blood: true } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.request.findFirst({ where: { id }, include: { blood: true } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getAllBloodRequest(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user;

        const report = await db.request.findMany({ where: { userId: id }, include: { blood: true } })

        response.json(report)
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