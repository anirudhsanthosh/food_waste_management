import { NextFunction, Request, Response } from 'express';
import { BloodGroupRepository, db } from '../../DB';

export async function createAddress(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, AddressCreatePayload>

    try {

        const { id } = newRequest.user

        const newAddress = await db.address.create({ data: { ...newRequest.body, userId: id } })

        response.json(newAddress);
    } catch (err) {
        next(err);
    }

}

export async function updateAddress(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, AddressUpdatePayload>

    const { id } = newRequest.params;

    try {

        const newBloodGroup = await db.address.update({ data: newRequest.body, where: { id } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function getAddress(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request>

    const { id } = newRequest.params;

    try {

        const newBloodGroup = await db.address.findFirst({ where: { id } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function getAllAddress(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    try {

        const { id } = newRequest.user;

        const newBloodGroup = await db.address.findMany({ where: { userId: id } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function deleteAddress(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    try {
        const { id } = newRequest.params;

        const newBloodGroup = await db.address.delete({ where: { id } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}