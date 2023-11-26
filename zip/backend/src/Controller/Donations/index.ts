import { NextFunction, Request, Response } from 'express';
import { db } from '../../DB';

export async function createDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user

        const report = await db.donation.create({ data: { ...newRequest.body, userId: id }, include: { blood: true } })

        response.json(report);
    } catch (err) {
        next(err);
    }

}

export async function updateDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.donation.update({ data: newRequest.body, where: { id }, include: { blood: true } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const report = await db.donation.findFirst({ where: { id }, include: { blood: true } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function getAllDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { id } = newRequest.user;

        const report = await db.donation.findMany({ where: { userId: id }, include: { blood: true } })

        response.json(report)
    } catch (err) {
        next(err);
    }

}

export async function deleteDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {
        const { id } = newRequest.params;

        const report = await db.donation.delete({ where: { id }, })

        response.json(report)
    } catch (err) {
        next(err);
    }

}