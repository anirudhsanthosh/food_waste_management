// @ts-nocheck
import Joi from 'joi';
import { NestedIntNullableWithAggregatesFilterSchemaObject } from './NestedIntNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterSchemaObject } from './NestedFloatNullableFilter.schema'

export const IntNullableWithAggregatesFilterSchemaObject = {
    equals: Joi.alternatives().try(Joi.number()),
  in: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.number()),
Joi.number()),
  lt: Joi.number(),
  lte: Joi.number(),
  gt: Joi.number(),
  gte: Joi.number(),
  not: Joi.alternatives().try(Joi.number(),
Joi.object().keys(NestedIntNullableWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _avg: Joi.object().keys(NestedFloatNullableFilterSchemaObject),
  _sum: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedIntNullableFilterSchemaObject)
}