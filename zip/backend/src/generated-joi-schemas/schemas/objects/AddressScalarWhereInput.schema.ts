// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema'

export const AddressScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AddressScalarWhereInput'),
Joi.array().items(Joi.link('#AddressScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#AddressScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AddressScalarWhereInput'),
Joi.array().items(Joi.link('#AddressScalarWhereInput'))),
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
Joi.number())
}