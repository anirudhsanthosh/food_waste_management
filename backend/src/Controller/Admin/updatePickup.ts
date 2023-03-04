import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { PickupRequestRepository } from '../../DB';
import { Exceptions } from '../../Exceptions';

export async function updatePickupRequest(request: Request, response: Response, next: NextFunction) {
    try {

        const newRequest = request as unknown as AuthRequest<Request, { status: 'completed' | 'pending' | 'failed' | 'rejected' }>

        const { status } = newRequest.body;

        const { pickupId } = newRequest.params;

        validatePickupId(pickupId);

        const pickup = await PickupRequestRepository.findFirst({ where: { id: Number(pickupId) } });

        if (!pickup) throw Exceptions.invalidRequest('No pickup found');

        const updated = await PickupRequestRepository.update({ where: { id: Number(pickupId), }, data: { status } });

        response.json(updated);
    } catch (err) {

        next(err);
    }
}

function validatePickupId(pickupId: string) {
    const schema = Joi.object({
        pickupId: Joi.number().required(),
    })

    const isValid = schema.validate({ pickupId }, {
        errors: {
            wrap: { label: "" }
        }
    })

    if (isValid.error?.details) throw Exceptions.invalidRequest('PickupId must be valid')

}