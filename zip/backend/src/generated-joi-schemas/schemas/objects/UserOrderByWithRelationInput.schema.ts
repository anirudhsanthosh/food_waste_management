// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { BloodGroupOrderByWithRelationInputSchemaObject } from './BloodGroupOrderByWithRelationInput.schema';
import { AddressOrderByRelationAggregateInputSchemaObject } from './AddressOrderByRelationAggregateInput.schema';
import { HealthReportOrderByRelationAggregateInputSchemaObject } from './HealthReportOrderByRelationAggregateInput.schema';
import { DonationOrderByRelationAggregateInputSchemaObject } from './DonationOrderByRelationAggregateInput.schema';
import { RequestOrderByRelationAggregateInputSchemaObject } from './RequestOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  uuid: SortOrderSchema,
  email: SortOrderSchema,
  name: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  password: SortOrderSchema,
  gender: SortOrderSchema,
  age: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  role: SortOrderSchema,
  joinedOn: SortOrderSchema,
  blood: Joi.object().keys(BloodGroupOrderByWithRelationInputSchemaObject),
  address: Joi.object().keys(AddressOrderByRelationAggregateInputSchemaObject),
  healthReports: Joi.object().keys(HealthReportOrderByRelationAggregateInputSchemaObject),
  donations: Joi.object().keys(DonationOrderByRelationAggregateInputSchemaObject),
  requests: Joi.object().keys(RequestOrderByRelationAggregateInputSchemaObject)
}