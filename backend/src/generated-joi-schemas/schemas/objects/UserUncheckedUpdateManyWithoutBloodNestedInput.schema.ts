// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutBloodInputSchemaObject } from './UserCreateWithoutBloodInput.schema';
import { UserUncheckedCreateWithoutBloodInputSchemaObject } from './UserUncheckedCreateWithoutBloodInput.schema';
import { UserCreateOrConnectWithoutBloodInputSchemaObject } from './UserCreateOrConnectWithoutBloodInput.schema';
import { UserUpsertWithWhereUniqueWithoutBloodInputSchemaObject } from './UserUpsertWithWhereUniqueWithoutBloodInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBloodInputSchemaObject } from './UserUpdateWithWhereUniqueWithoutBloodInput.schema';
import { UserUpdateManyWithWhereWithoutBloodInputSchemaObject } from './UserUpdateManyWithWhereWithoutBloodInput.schema';
import { UserScalarWhereInputSchemaObject } from './UserScalarWhereInput.schema'

export const UserUncheckedUpdateManyWithoutBloodNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(UserCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserCreateOrConnectWithoutBloodInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(UserUpsertWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserUpsertWithWhereUniqueWithoutBloodInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(UserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(UserWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(UserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(UserWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(UserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(UserWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(UserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(UserWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserUpdateWithWhereUniqueWithoutBloodInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(UserUpdateManyWithWhereWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(UserUpdateManyWithWhereWithoutBloodInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(UserScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(UserScalarWhereInputSchemaObject)))
}