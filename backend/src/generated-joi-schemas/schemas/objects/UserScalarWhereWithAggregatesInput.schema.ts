// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const UserScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  uuid: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  age: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  joinedOn: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}