// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutBloodInputSchemaObject } from './UserCreateWithoutBloodInput.schema';
import { UserUncheckedCreateWithoutBloodInputSchemaObject } from './UserUncheckedCreateWithoutBloodInput.schema';
import { UserCreateOrConnectWithoutBloodInputSchemaObject } from './UserCreateOrConnectWithoutBloodInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserUncheckedCreateNestedManyWithoutBloodInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(UserCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserCreateOrConnectWithoutBloodInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(UserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(UserWhereUniqueInputSchemaObject)))
}