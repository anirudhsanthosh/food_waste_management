// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { AddressUpdateManyWithoutUserNestedInputSchemaObject } from './AddressUpdateManyWithoutUserNestedInput.schema';
import { HealthReportUpdateManyWithoutUserNestedInputSchemaObject } from './HealthReportUpdateManyWithoutUserNestedInput.schema';
import { DonationUpdateManyWithoutUserNestedInputSchemaObject } from './DonationUpdateManyWithoutUserNestedInput.schema';
import { RequestUpdateManyWithoutUserNestedInputSchemaObject } from './RequestUpdateManyWithoutUserNestedInput.schema'

export const UserUpdateWithoutBloodInputSchemaObject = {
    uuid: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  email: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  password: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  gender: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  age: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  role: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  joinedOn: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  address: Joi.object().keys(AddressUpdateManyWithoutUserNestedInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportUpdateManyWithoutUserNestedInputSchemaObject),
  donations: Joi.object().keys(DonationUpdateManyWithoutUserNestedInputSchemaObject),
  requests: Joi.object().keys(RequestUpdateManyWithoutUserNestedInputSchemaObject)
}