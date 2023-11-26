// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema'

export const RequestScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RequestScalarWhereInput'),
Joi.array().items(Joi.link('#RequestScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#RequestScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RequestScalarWhereInput'),
Joi.array().items(Joi.link('#RequestScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  unit: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  status: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}