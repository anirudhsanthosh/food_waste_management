// @ts-nocheck
import Joi from 'joi';
import { AddressUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './AddressUncheckedCreateNestedManyWithoutUserInput.schema';
import { HealthReportUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './HealthReportUncheckedCreateNestedManyWithoutUserInput.schema';
import { DonationUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './DonationUncheckedCreateNestedManyWithoutUserInput.schema';
import { RequestUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './RequestUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutBloodInputSchemaObject = {
    id: Joi.number(),
  uuid: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  role: Joi.string(),
  joinedOn: Joi.date(),
  address: Joi.object().keys(AddressUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  donations: Joi.object().keys(DonationUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  requests: Joi.object().keys(RequestUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}