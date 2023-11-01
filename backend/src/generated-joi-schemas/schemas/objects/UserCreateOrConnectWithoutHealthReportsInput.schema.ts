// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutHealthReportsInputSchemaObject } from './UserCreateWithoutHealthReportsInput.schema';
import { UserUncheckedCreateWithoutHealthReportsInputSchemaObject } from './UserUncheckedCreateWithoutHealthReportsInput.schema'

export const UserCreateOrConnectWithoutHealthReportsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutHealthReportsInputSchemaObject))
}