// @ts-nocheck
import Joi from 'joi';
import { BloodGroupCreateNestedOneWithoutUserInputSchemaObject } from './BloodGroupCreateNestedOneWithoutUserInput.schema';
import { AddressCreateNestedManyWithoutUserInputSchemaObject } from './AddressCreateNestedManyWithoutUserInput.schema';
import { HealthReportCreateNestedManyWithoutUserInputSchemaObject } from './HealthReportCreateNestedManyWithoutUserInput.schema';
import { DonationCreateNestedManyWithoutUserInputSchemaObject } from './DonationCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutRequestsInputSchemaObject = {
    uuid: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  role: Joi.string(),
  joinedOn: Joi.date(),
  blood: Joi.object().keys(BloodGroupCreateNestedOneWithoutUserInputSchemaObject),
  address: Joi.object().keys(AddressCreateNestedManyWithoutUserInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportCreateNestedManyWithoutUserInputSchemaObject),
  donations: Joi.object().keys(DonationCreateNestedManyWithoutUserInputSchemaObject)
}