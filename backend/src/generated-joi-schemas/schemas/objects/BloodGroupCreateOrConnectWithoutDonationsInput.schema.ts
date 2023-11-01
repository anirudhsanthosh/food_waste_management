// @ts-nocheck
import Joi from 'joi';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema';
import { BloodGroupCreateWithoutDonationsInputSchemaObject } from './BloodGroupCreateWithoutDonationsInput.schema';
import { BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutDonationsInput.schema'

export const BloodGroupCreateOrConnectWithoutDonationsInputSchemaObject = {
    where: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject))
}