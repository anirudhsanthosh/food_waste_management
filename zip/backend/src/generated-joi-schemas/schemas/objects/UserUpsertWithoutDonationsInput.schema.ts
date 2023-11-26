// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutDonationsInputSchemaObject } from './UserUpdateWithoutDonationsInput.schema';
import { UserUncheckedUpdateWithoutDonationsInputSchemaObject } from './UserUncheckedUpdateWithoutDonationsInput.schema';
import { UserCreateWithoutDonationsInputSchemaObject } from './UserCreateWithoutDonationsInput.schema';
import { UserUncheckedCreateWithoutDonationsInputSchemaObject } from './UserUncheckedCreateWithoutDonationsInput.schema'

export const UserUpsertWithoutDonationsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutDonationsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutDonationsInputSchemaObject))
}