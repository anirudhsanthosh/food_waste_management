// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAddressInputSchemaObject } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputSchemaObject } from './UserUncheckedCreateWithoutAddressInput.schema';
import { UserCreateOrConnectWithoutAddressInputSchemaObject } from './UserCreateOrConnectWithoutAddressInput.schema';
import { UserUpsertWithoutAddressInputSchemaObject } from './UserUpsertWithoutAddressInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAddressInputSchemaObject } from './UserUpdateWithoutAddressInput.schema';
import { UserUncheckedUpdateWithoutAddressInputSchemaObject } from './UserUncheckedUpdateWithoutAddressInput.schema'

export const UserUpdateOneRequiredWithoutAddressNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAddressInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAddressInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutAddressInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAddressInputSchemaObject))
}