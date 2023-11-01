// @ts-nocheck
import Joi from 'joi';
import { RequestUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutBloodInput.schema';
import { DonationUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './DonationUncheckedCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  requests: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutBloodInputSchemaObject),
  donations: Joi.object().keys(DonationUncheckedCreateNestedManyWithoutBloodInputSchemaObject)
}