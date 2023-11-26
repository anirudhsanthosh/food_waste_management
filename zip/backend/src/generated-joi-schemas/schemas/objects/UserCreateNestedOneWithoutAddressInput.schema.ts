// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAddressInputSchemaObject } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputSchemaObject } from './UserUncheckedCreateWithoutAddressInput.schema';
import { UserCreateOrConnectWithoutAddressInputSchemaObject } from './UserCreateOrConnectWithoutAddressInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutAddressInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAddressInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAddressInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}