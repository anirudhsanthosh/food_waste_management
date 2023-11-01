// @ts-nocheck
import Joi from 'joi';


export const NullableIntFieldUpdateOperationsInputSchemaObject = {
    set: Joi.alternatives().try(Joi.number()),
  increment: Joi.number(),
  decrement: Joi.number(),
  multiply: Joi.number(),
  divide: Joi.number()
}