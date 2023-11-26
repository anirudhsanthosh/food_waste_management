// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { RequestListRelationFilterSchemaObject } from './RequestListRelationFilter.schema';
import { DonationListRelationFilterSchemaObject } from './DonationListRelationFilter.schema';
import { UserListRelationFilterSchemaObject } from './UserListRelationFilter.schema'

export const BloodGroupWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BloodGroupWhereInput'),
Joi.array().items(Joi.link('#BloodGroupWhereInput'))),
  OR: Joi.array().items(Joi.link('#BloodGroupWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#BloodGroupWhereInput'),
Joi.array().items(Joi.link('#BloodGroupWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  group: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  variation: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  comments: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  stock: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  requests: Joi.object().keys(RequestListRelationFilterSchemaObject),
  donations: Joi.object().keys(DonationListRelationFilterSchemaObject),
  user: Joi.object().keys(UserListRelationFilterSchemaObject)
}