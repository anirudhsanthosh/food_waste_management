// @ts-nocheck
import Joi from 'joi';
import { RequestUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutBloodInput.schema';
import { UserUncheckedCreateNestedManyWithoutBloodInputSchemaObject } from './UserUncheckedCreateNestedManyWithoutBloodInput.schema'

export const BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  group: Joi.string().required(),
  variation: Joi.string().required(),
  comments: Joi.string().required(),
  stock: Joi.number(),
  createdAt: Joi.date(),
  requests: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutBloodInputSchemaObject),
  user: Joi.object().keys(UserUncheckedCreateNestedManyWithoutBloodInputSchemaObject)
}