// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BloodGroupRelationFilterSchemaObject } from './BloodGroupRelationFilter.schema';
import { BloodGroupWhereInputSchemaObject } from './BloodGroupWhereInput.schema';
import { AddressListRelationFilterSchemaObject } from './AddressListRelationFilter.schema';
import { HealthReportListRelationFilterSchemaObject } from './HealthReportListRelationFilter.schema';
import { DonationListRelationFilterSchemaObject } from './DonationListRelationFilter.schema';
import { RequestListRelationFilterSchemaObject } from './RequestListRelationFilter.schema'

export const UserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
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
  joinedOn: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  blood: Joi.alternatives().try(Joi.object().keys(BloodGroupRelationFilterSchemaObject),
Joi.object().keys(BloodGroupWhereInputSchemaObject)),
  address: Joi.object().keys(AddressListRelationFilterSchemaObject),
  healthReports: Joi.object().keys(HealthReportListRelationFilterSchemaObject),
  donations: Joi.object().keys(DonationListRelationFilterSchemaObject),
  requests: Joi.object().keys(RequestListRelationFilterSchemaObject)
}