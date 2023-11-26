// @ts-nocheck
import Joi from 'joi';
import { DonationUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './DonationUncheckedCreateNestedManyWithoutBloodInput.schema';
import { UserUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './UserUncheckedCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupUncheckedCreateWithoutRequestsInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  donations: Joi.object().keys(DonationUncheckedCreateNestedManyWithoutBloodInputSchemaObject),
  user: Joi.object().keys(UserUncheckedCreateNestedManyWithoutBloodInputSchemaObject)
}