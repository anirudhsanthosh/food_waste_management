// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutRequestsInputSchemaObject } from './UserCreateWithoutRequestsInput.schema';
import { UserUncheckedCreateWithoutRequestsInputSchemaObject } from './UserUncheckedCreateWithoutRequestsInput.schema';
import { UserCreateOrConnectWithoutRequestsInputSchemaObject } from './UserCreateOrConnectWithoutRequestsInput.schema';
import { UserUpsertWithoutRequestsInputSchemaObject } from './UserUpsertWithoutRequestsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRequestsInputSchemaObject } from './UserUpdateWithoutRequestsInput.schema';
import { UserUncheckedUpdateWithoutRequestsInputSchemaObject } from './UserUncheckedUpdateWithoutRequestsInput.schema'

export const UserUpdateOneRequiredWithoutRequestsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutRequestsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutRequestsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutRequestsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutRequestsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutRequestsInputSchemaObject))
}