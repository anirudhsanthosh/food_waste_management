// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateWithoutDonationsInputSchemaObject } from './BloodGroupCreateWithoutDonationsInput.schema';
import { BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject } from './BloodGroupUncheckedCreateWithoutDonationsInput.schema';
import { BloodGroupCreateOrConnectWithoutDonationsInputSchemaObject } from './BloodGroupCreateOrConnectWithoutDonationsInput.schema';
import { BloodGroupWhereUniqueInputSchemaObject } from './BloodGroupWhereUniqueInput.schema'

export const BloodGroupCreateNestedOneWithoutDonationsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BloodGroupCreateWithoutDonationsInputSchemaObject),
Joi.object().keys(BloodGroupUncheckedCreateWithoutDonationsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(BloodGroupCreateOrConnectWithoutDonationsInputSchemaObject),
  connect: Joi.object().keys(BloodGroupWhereUniqueInputSchemaObject)
}