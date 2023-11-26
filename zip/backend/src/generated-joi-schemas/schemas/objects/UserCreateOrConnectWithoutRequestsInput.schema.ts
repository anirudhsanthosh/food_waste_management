// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRequestsInputSchemaObject } from './UserCreateWithoutRequestsInput.schema';
import { UserUncheckedCreateWithoutRequestsInputSchemaObject } from './UserUncheckedCreateWithoutRequestsInput.schema'

export const UserCreateOrConnectWithoutRequestsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestsInputSchemaObject))
}