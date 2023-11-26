// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { BloodGroupRelationFilterSchemaObject } from './BloodGroupRelationFilter.schema';
import { BloodGroupWhereInputSchemaObject } from './BloodGroupWhereInput.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const DonationWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#DonationWhereInput'),
Joi.array().items(Joi.link('#DonationWhereInput'))),
  OR: Joi.array().items(Joi.link('#DonationWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#DonationWhereInput'),
Joi.array().items(Joi.link('#DonationWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  unit: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  bloodGroup: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  blood: Joi.alternatives().try(Joi.object().keys(BloodGroupRelationFilterSchemaObject),
Joi.object().keys(BloodGroupWhereInputSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}