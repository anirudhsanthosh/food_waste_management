// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAddressInputSchemaObject } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputSchemaObject } from './UserUncheckedCreateWithoutAddressInput.schema'

export const UserCreateOrConnectWithoutAddressInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAddressInputSchemaObject))
}