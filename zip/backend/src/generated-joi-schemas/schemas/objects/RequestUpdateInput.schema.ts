// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { BloodGroupUpdateOneRequiredWithoutRequestsNestedInputSchemaObject } from './BloodGroupUpdateOneRequiredWithoutRequestsNestedInput.schema';
import { UserUpdateOneRequiredWithoutRequestsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutRequestsNestedInput.schema'

export const RequestUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  unit: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  status: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  blood: Joi.object().keys(BloodGroupUpdateOneRequiredWithoutRequestsNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutRequestsNestedInputSchemaObject)
}