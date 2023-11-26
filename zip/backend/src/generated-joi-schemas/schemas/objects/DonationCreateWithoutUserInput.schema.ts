// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateNestedOneWithoutDonationsInputSchemaObject } from './BloodGroupCreateNestedOneWithoutDonationsInput.schema'

export const DonationCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  blood: Joi.object().keys(BloodGroupCreateNestedOneWithoutDonationsInputSchemaObject)
}