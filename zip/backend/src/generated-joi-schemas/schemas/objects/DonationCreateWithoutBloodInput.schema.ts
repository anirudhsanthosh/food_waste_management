// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutDonationsInputSchemaObject } from './UserCreateNestedOneWithoutDonationsInput.schema'

export const DonationCreateWithoutBloodInputSchemaObject = {
    id: Joi.string(),
  createdAt: Joi.date(),
  unit: Joi.number().required(),
  user: Joi.object().keys(UserCreateNestedOneWithoutDonationsInputSchemaObject)
}