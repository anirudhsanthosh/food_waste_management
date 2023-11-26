// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const HealthReportWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#HealthReportWhereInput'),
Joi.array().items(Joi.link('#HealthReportWhereInput'))),
  OR: Joi.array().items(Joi.link('#HealthReportWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#HealthReportWhereInput'),
Joi.array().items(Joi.link('#HealthReportWhereInput'))),
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
Joi.number()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}