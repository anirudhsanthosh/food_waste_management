// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterSchemaObject } from './IntNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema'

export const AddressScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AddressScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#AddressScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#AddressScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#AddressScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#AddressScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  houseName: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  landmark: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  town: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  city: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  pin: Joi.alternatives().try(Joi.object().keys(IntNullableWithAggregatesFilterSchemaObject),
Joi.number()),
  userId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}