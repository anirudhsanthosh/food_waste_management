// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { BloodGroupUpdateOneRequiredWithoutDonationsNestedInputSchemaObject } from './BloodGroupUpdateOneRequiredWithoutDonationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutDonationsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutDonationsNestedInput.schema'

export const DonationUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  unit: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  blood: Joi.object().keys(BloodGroupUpdateOneRequiredWithoutDonationsNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutDonationsNestedInputSchemaObject)
}