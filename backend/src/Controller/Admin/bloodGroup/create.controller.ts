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