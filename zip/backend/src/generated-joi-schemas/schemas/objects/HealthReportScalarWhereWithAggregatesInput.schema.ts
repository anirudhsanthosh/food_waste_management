// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterSchemaObject } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema'

export const HealthReportScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#HealthReportScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#HealthReportScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#HealthReportScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#HealthReportScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#HealthReportScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  bp: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  cholesterol: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  weight: Joi.alternatives().try(Joi.object().keys(IntNullableWithAggregatesFilterSchemaObject),
Joi.number()),
  height: Joi.alternatives().try(Joi.object().keys(IntNullableWithAggregatesFilterSchemaObject),
Joi.number()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}