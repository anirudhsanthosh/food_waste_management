// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { RequestUncheckedUpdateManyWithoutBloodNestedInputSchemaObject } from './RequestUncheckedUpdateManyWithoutBloodNestedInput.schema';
import { DonationUncheckedUpdateManyWithoutBloodNestedInputSchemaObject } from './DonationUncheckedUpdateManyWithoutBloodNestedInput.schema'

export const BloodGroupUncheckedUpdateWithoutUserInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  group: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  variation: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  comments: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  stock: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  requests: Joi.object().keys(RequestUncheckedUpdateManyWithoutBloodNestedInputSchemaObject),
  donations: Joi.object().keys(DonationUncheckedUpdateManyWithoutBloodNestedInputSchemaObject)
}