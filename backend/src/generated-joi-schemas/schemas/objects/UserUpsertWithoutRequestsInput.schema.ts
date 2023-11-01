// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutRequestsInputSchemaObject } from './UserUpdateWithoutRequestsInput.schema';
import { UserUncheckedUpdateWithoutRequestsInputSchemaObject } from './UserUncheckedUpdateWithoutRequestsInput.schema';
import { UserCreateWithoutRequestsInputSchemaObject } from './UserCreateWithoutRequestsInput.schema';
import { UserUncheckedCreateWithoutRequestsInputSchemaObject } from './UserUncheckedCreateWithoutRequestsInput.schema'

export const UserUpsertWithoutRequestsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestsInputSchemaObject))
}