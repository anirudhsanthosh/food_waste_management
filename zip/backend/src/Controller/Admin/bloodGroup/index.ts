import { NextFunction, Request, Response } from 'express';
import { BloodGroupRepository } from '../../../DB';

export async function createBloodGroup(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, bloodGroupCreatePayload>

    try {

        const newBloodGroup = await BloodGroupRepository.create({ data: newRequest.body })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function updateBloodGroup(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { bloodGroupId } = newRequest.params;

    try {

        const newBloodGroup = await BloodGroupRepository.update({ data: newRequest.body, where: { id: bloodGroupId } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function getBloodGroup(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { bloodGroupId } = newRequest.params;

    try {

        const newBloodGroup = await BloodGroupRepository.findFirst({ where: { id: bloodGroupId } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function deleteBloodGroup(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    const { bloodGroupId } = newRequest.params;

    try {

        const newBloodGroup = await BloodGroupRepository.delete({ where: { id: bloodGroupId } })

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}

export async function getAllBloodGroup(request: Request, response: Response, next: NextFunction) {
    const newRequest = request as unknown as AuthRequest<Request, Partial<bloodGroupCreatePayload>>

    try {

        const newBloodGroup = await BloodGroupRepository.findMany()

        response.json(newBloodGroup)
    } catch (err) {
        next(err);
    }

}