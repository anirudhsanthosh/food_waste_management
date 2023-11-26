// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBloodInputSchemaObject } from './UserUpdateWithoutBloodInput.schema';
import { UserUncheckedUpdateWithoutBloodInputSchemaObject } from './UserUncheckedUpdateWithoutBloodInput.schema';
import { UserCreateWithoutBloodInputSchemaObject } from './UserCreateWithoutBloodInput.schema';
import { UserUncheckedCreateWithoutBloodInputSchemaObject } from './UserUncheckedCreateWithoutBloodInput.schema'

export const UserUpsertWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutBloodInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject))
}