// @ts-nocheck
import Joi from 'joi';
import { BloodGroupUpdateWithoutDonationsInputSchemaObject } from './BloodGroupUpdateWithoutDonationsInput.schema';
import { BloodGroupUncheckedUpdateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedUpdateWithoutDonationsInput.schema';
import { BloodGroupCreateWithoutDonationsInputSchemaObject } from './BloodGroupCreateWithoutDonationsInput.schema';
import { BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutDonationsInput.schema'

export const BloodGroupUpsertWithoutDonationsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(BloodGroupUpdateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedUpdateWithoutDonationsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject))
}