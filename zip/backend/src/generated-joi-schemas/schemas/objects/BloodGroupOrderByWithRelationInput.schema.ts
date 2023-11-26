// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RequestOrderByRelationAggregateInputSchemaObject } from './RequestOrderByRelationAggregateInput.schema';
import { DonationOrderByRelationAggregateInputSchemaObject } from './DonationOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputSchemaObject } from './UserOrderByRelationAggregateInput.schema'

export const BloodGroupOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  group: SortOrderSchema,
  variation: SortOrderSchema,
  comments: SortOrderSchema,
  stock: SortOrderSchema,
  createdAt: SortOrderSchema,
  requests: Joi.object().keys(RequestOrderByRelationAggregateInputSchemaObject),
  donations: Joi.object().keys(DonationOrderByRelationAggregateInputSchemaObject),
  user: Joi.object().keys(UserOrderByRelationAggregateInputSchemaObject)
}