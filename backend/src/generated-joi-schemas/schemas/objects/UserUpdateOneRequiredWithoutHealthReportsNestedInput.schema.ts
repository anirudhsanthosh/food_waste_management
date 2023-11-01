// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutHealthReportsInputSchemaObject } from './UserCreateWithoutHealthReportsInput.schema';
import { UserUncheckedCreateWithoutHealthReportsInputSchemaObject } from './UserUncheckedCreateWithoutHealthReportsInput.schema';
import { UserCreateOrConnectWithoutHealthReportsInputSchemaObject } from './UserCreateOrConnectWithoutHealthReportsInput.schema';
import { UserUpsertWithoutHealthReportsInputSchemaObject } from './UserUpsertWithoutHealthReportsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutHealthReportsInputSchemaObject } from './UserUpdateWithoutHealthReportsInput.schema';
import { UserUncheckedUpdateWithoutHealthReportsInputSchemaObject } from './UserUncheckedUpdateWithoutHealthReportsInput.schema'

export const UserUpdateOneRequiredWithoutHealthReportsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutHealthReportsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutHealthReportsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutHealthReportsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutHealthReportsInputSchemaObject))
}