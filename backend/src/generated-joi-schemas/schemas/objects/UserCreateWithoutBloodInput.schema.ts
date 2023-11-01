// @ts-nocheck
import Joi from 'joi';
import { AddressCreateNestedManyWithoutUserInputSchemaObject } from './AddressCreateNestedManyWithoutUserInput.schema';
import { HealthReportCreateNestedManyWithoutUserInputSchemaObject } from './HealthReportCreateNestedManyWithoutUserInput.schema';
import { DonationCreateNestedManyWithoutUserInputSchemaObject } from './DonationCreateNestedManyWithoutUserInput.schema';
import { RequestCreateNestedManyWithoutUserInputSchemaObject } from './RequestCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutBloodInputSchemaObject = {
    uuid: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  role: Joi.string(),
  joinedOn: Joi.date(),
  address: Joi.object().keys(AddressCreateNestedManyWithoutUserInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportCreateNestedManyWithoutUserInputSchemaObject),
  donations: Joi.object().keys(DonationCreateNestedManyWithoutUserInputSchemaObject),
  requests: Joi.object().keys(RequestCreateNestedManyWithoutUserInputSchemaObject)
}