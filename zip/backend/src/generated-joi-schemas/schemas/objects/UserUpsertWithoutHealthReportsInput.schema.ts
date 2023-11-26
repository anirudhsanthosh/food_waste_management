// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutHealthReportsInputSchemaObject } from './UserUpdateWithoutHealthReportsInput.schema';
import { UserUncheckedUpdateWithoutHealthReportsInputSchemaObject } from './UserUncheckedUpdateWithoutHealthReportsInput.schema';
import { UserCreateWithoutHealthReportsInputSchemaObject } from './UserCreateWithoutHealthReportsInput.schema';
import { UserUncheckedCreateWithoutHealthReportsInputSchemaObject } from './UserUncheckedCreateWithoutHealthReportsInput.schema'

export const UserUpsertWithoutHealthReportsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutHealthReportsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutHealthReportsInputSchemaObject))
}