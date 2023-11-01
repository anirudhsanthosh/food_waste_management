// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { DonationUncheckedUpdateManyWithoutBloodNestedInputSchemaObject } from './DonationUncheckedUpdateManyWithoutBloodNestedInput.schema';
import { UserUncheckedUpdateManyWithoutBloodNestedInputSchemaObject } from './UserUncheckedUpdateManyWithoutBloodNestedInput.schema'

export const BloodGroupUncheckedUpdateWithoutRequestsInputSchemaObject = {
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
  donations: Joi.object().keys(DonationUncheckedUpdateManyWithoutBloodNestedInputSchemaObject),
  user: Joi.object().keys(UserUncheckedUpdateManyWithoutBloodNestedInputSchemaObject)
}