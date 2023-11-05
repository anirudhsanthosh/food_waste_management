import { NextFunction, Request, Response } from 'express';
import { BloodGroupRepository, db } from '../../DB';

export async function createHealthReport(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user

        const report = await db.healthReport.create({ data: { ...newRequest.body, userId: id } })

        response.json(report);
    } catch (err) {
        next(err);
    }

}

export async function updateHealthReport(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.healthReport.update({ data: newRequest.body, where: { id } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getHealthReport(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.healthReport.findFirst({ where: { id } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getAllHealthReport(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user;

        const report = await db.healthReport.findMany({ where: { userId: id } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function deleteHealthReport(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {
        const { id } = newRequest.params;

        const report = await db.healthReport.delete({ where: { id } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}