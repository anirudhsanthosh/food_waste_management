import { NextFunction, Request, Response } from 'express';
import { BloodGroupRepository, db } from '../../../DB';

export async function createDonations(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    try {

        const { unit, bloodGroup } = newRequest.body;

        const donation = await db.donation.create({ data: newRequest.body, });

        await db.bloodGroup.update({
            data: {
                stock: { increment: unit }
            },
            where: {
                id: (bloodGroup as string),
            },
        })

        response.json(donation)
    } catch (err) {
        next(err);
    }

}

export async function updateDonations(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    const { unit, bloodGroup } = newRequest.body;

    try {

        const old = await db.donation.findFirst({ where: { id } })

        if (!old) throw new Error('Donation not fond')

        const donation = await db.donation.update({ data: newRequest.body, where: { id } })

        await db.bloodGroup.update({
            data: {
                stock: { increment: unit - old.unit }
            },
            where: {
                id: (bloodGroup as string),
            },
        })


        response.json(donation)
    } catch (err) {
        next(err);
    }

}

export async function getBloodDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { id } = newRequest.params;

    try {

        const donation = await db.donation.findFirst({ where: { id }, include: { blood: true, user: true } })

        response.json(donation)
    } catch (err) {
        next(err);
    }

}

export async function deleteBloodDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { id } = newRequest.params;

    try {

        const newBloodGroup = await db.donation.delete({ where: { id }, })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function getAllBloodDonation(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    try {

        const donation = await db.donation.findMany({
            include: {
                blood: true,
                user: true,
            }
        })

        response.json(donation)
    } catch (err) {
        next(err);
    }

}