// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const UserScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserScalarWhereInput'),
Joi.array().items(Joi.link('#UserScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserScalarWhereInput'),
Joi.array().items(Joi.link('#UserScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  uuid: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  age: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  joinedOn: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}