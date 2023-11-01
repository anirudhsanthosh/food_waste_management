// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema'

export const HealthReportScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#HealthReportScalarWhereInput'),
Joi.array().items(Joi.link('#HealthReportScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#HealthReportScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#HealthReportScalarWhereInput'),
Joi.array().items(Joi.link('#HealthReportScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  bp: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  cholesterol: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  weight: Joi.alternatives().try(Joi.object().keys(IntNullableFilterSchemaObject),
Joi.number()),
  height: Joi.alternatives().try(Joi.object().keys(IntNullableFilterSchemaObject),
Joi.number()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}