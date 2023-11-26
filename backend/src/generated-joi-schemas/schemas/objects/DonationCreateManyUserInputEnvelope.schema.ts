// @ts-nocheck
import Joi from 'joi';
import { DonationCreateManyUserInputSchemaObject } from './DonationCreateManyUserInput.schema'

export const DonationCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(DonationCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}