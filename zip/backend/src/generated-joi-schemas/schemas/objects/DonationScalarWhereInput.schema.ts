// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema'

export const DonationScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#DonationScalarWhereInput'),
Joi.array().items(Joi.link('#DonationScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#DonationScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#DonationScalarWhereInput'),
Joi.array().items(Joi.link('#DonationScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  unit: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number())
}