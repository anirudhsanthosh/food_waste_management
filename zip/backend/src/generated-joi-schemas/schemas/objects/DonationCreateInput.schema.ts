// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateNestedOneWithoutDonationsInputSchemaObject } from './BloodGroupCreateNestedOneWithoutDonationsInput.schema';
import { UserCreateNestedOneWithoutDonationsInputSchemaObject } from './UserCreateNestedOneWithoutDonationsInput.schema'

export const DonationCreateInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  blood: Joi.object().keys(BloodGroupCreateNestedOneWithoutDonationsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutDonationsInputSchemaObject)
}