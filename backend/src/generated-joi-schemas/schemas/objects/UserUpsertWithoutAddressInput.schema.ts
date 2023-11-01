// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutAddressInputSchemaObject } from './UserUpdateWithoutAddressInput.schema';
import { UserUncheckedUpdateWithoutAddressInputSchemaObject } from './UserUncheckedUpdateWithoutAddressInput.schema';
import { UserCreateWithoutAddressInputSchemaObject } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputSchemaObject } from './UserUncheckedCreateWithoutAddressInput.schema'

export const UserUpsertWithoutAddressInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAddressInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAddressInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAddressInputSchemaObject))
}