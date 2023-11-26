// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestsInputSchemaObject } from './UserCreateWithoutRequestsInput.schema';
import { UserUncheckedCreateWithoutRequestsInputSchemaObject } from './UserUncheckedCreateWithoutRequestsInput.schema';
import { UserCreateOrConnectWithoutRequestsInputSchemaObject } from './UserCreateOrConnectWithoutRequestsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutRequestsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}