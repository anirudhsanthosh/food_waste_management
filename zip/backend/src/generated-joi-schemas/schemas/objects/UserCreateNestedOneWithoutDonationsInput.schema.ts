// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutDonationsInputSchemaObject } from './UserCreateWithoutDonationsInput.schema';
import { UserUncheckedCreateWithoutDonationsInputSchemaObject } from './UserUncheckedCreateWithoutDonationsInput.schema';
import { UserCreateOrConnectWithoutDonationsInputSchemaObject } from './UserCreateOrConnectWithoutDonationsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutDonationsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutDonationsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutDonationsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}