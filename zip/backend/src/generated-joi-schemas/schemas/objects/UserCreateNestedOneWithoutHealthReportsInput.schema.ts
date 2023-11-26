// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutHealthReportsInputSchemaObject } from './UserCreateWithoutHealthReportsInput.schema';
import { UserUncheckedCreateWithoutHealthReportsInputSchemaObject } from './UserUncheckedCreateWithoutHealthReportsInput.schema';
import { UserCreateOrConnectWithoutHealthReportsInputSchemaObject } from './UserCreateOrConnectWithoutHealthReportsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutHealthReportsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutHealthReportsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutHealthReportsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutHealthReportsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}