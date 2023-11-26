// @ts-nocheck
import Joi from 'joi';
import { DonationCreateManyBloodInputSchemaObject } from './DonationCreateManyBloodInput.schema'

export const DonationCreateManyBloodInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(DonationCreateManyBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateManyBloodInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}