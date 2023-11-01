// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const AddressWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AddressWhereInput'),
Joi.array().items(Joi.link('#AddressWhereInput'))),
  OR: Joi.array().items(Joi.link('#AddressWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AddressWhereInput'),
Joi.array().items(Joi.link('#AddressWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  houseName: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  landmark: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  town: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  city: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  pin: Joi.alternatives().try(Joi.object().keys(IntNullableFilterSchemaObject),
Joi.number()),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}