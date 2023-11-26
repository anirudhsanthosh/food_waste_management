// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBloodInputSchemaObject } from './UserCreateWithoutBloodInput.schema';
import { UserUncheckedCreateWithoutBloodInputSchemaObject } from './UserUncheckedCreateWithoutBloodInput.schema'

export const UserCreateOrConnectWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject))
}