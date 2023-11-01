// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDonationsInputSchemaObject } from './UserCreateWithoutDonationsInput.schema';
import { UserUncheckedCreateWithoutDonationsInputSchemaObject } from './UserUncheckedCreateWithoutDonationsInput.schema'

export const UserCreateOrConnectWithoutDonationsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutDonationsInputSchemaObject))
}