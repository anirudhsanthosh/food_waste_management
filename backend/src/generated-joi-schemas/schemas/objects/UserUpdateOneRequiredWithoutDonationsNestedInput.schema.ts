// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutDonationsInputSchemaObject } from './UserCreateWithoutDonationsInput.schema';
import { UserUncheckedCreateWithoutDonationsInputSchemaObject } from './UserUncheckedCreateWithoutDonationsInput.schema';
import { UserCreateOrConnectWithoutDonationsInputSchemaObject } from './UserCreateOrConnectWithoutDonationsInput.schema';
import { UserUpsertWithoutDonationsInputSchemaObject } from './UserUpsertWithoutDonationsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDonationsInputSchemaObject } from './UserUpdateWithoutDonationsInput.schema';
import { UserUncheckedUpdateWithoutDonationsInputSchemaObject } from './UserUncheckedUpdateWithoutDonationsInput.schema'

export const UserUpdateOneRequiredWithoutDonationsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutDonationsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutDonationsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutDonationsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutDonationsInputSchemaObject))
}