// @ts-nocheck
import Joi from 'joi';
import { AddressUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './AddressUncheckedCreateNestedManyWithoutUserInput.schema';
import { HealthReportUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateNestedManyWithoutUserInput.schema';
import { DonationUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './DonationUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutRequestsInputSchemaObject = {
    id: Joi.number(),
  uuid: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  bloodGroup: Joi.string().required(),
  role: Joi.string(),
  joinedOn: Joi.date(),
  address: Joi.object().keys(AddressUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  donations: Joi.object().keys(DonationUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}