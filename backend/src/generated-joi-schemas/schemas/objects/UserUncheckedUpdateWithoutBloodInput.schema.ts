// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { AddressUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './AddressUncheckedUpdateManyWithoutUserNestedInput.schema';
import { HealthReportUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './HealthReportUncheckedUpdateManyWithoutUserNestedInput.schema';
import { DonationUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './DonationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { RequestUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './RequestUncheckedUpdateManyWithoutUserNestedInput.schema'

export const UserUncheckedUpdateWithoutBloodInputSchemaObject = {
    id: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
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
  address: Joi.object().keys(AddressUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  donations: Joi.object().keys(DonationUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  requests: Joi.object().keys(RequestUncheckedUpdateManyWithoutUserNestedInputSchemaObject)
}