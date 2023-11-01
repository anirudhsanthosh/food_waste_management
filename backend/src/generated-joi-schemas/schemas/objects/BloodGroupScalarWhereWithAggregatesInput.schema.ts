// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const BloodGroupScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BloodGroupScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#BloodGroupScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#BloodGroupScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#BloodGroupScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#BloodGroupScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  group: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  variation: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  comments: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  stock: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}