// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema'

export const DonationScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#DonationScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#DonationScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#DonationScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#DonationScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#DonationScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  unit: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}