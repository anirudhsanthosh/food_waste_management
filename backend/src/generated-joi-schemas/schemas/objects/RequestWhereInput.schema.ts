// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { BloodGroupRelationFilterSchemaObject } from './BloodGroupRelationFilter.schema';
import { BloodGroupWhereInputSchemaObject } from './BloodGroupWhereInput.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const RequestWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RequestWhereInput'),
Joi.array().items(Joi.link('#RequestWhereInput'))),
  OR: Joi.array().items(Joi.link('#RequestWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RequestWhereInput'),
Joi.array().items(Joi.link('#RequestWhereInput'))),
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
Joi.number()),
  blood: Joi.alternatives().try(Joi.object().keys(BloodGroupRelationFilterSchemaObject),
Joi.object().keys(BloodGroupWhereInputSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}