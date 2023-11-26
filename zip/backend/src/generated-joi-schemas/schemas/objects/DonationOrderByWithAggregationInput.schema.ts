// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DonationCountOrderByAggregateInputSchemaObject } from './DonationCountOrderByAggregateInput.schema';
import { DonationAvgOrderByAggregateInputSchemaObject } from './DonationAvgOrderByAggregateInput.schema';
import { DonationMaxOrderByAggregateInputSchemaObject } from './DonationMaxOrderByAggregateInput.schema';
import { DonationMinOrderByAggregateInputSchemaObject } from './DonationMinOrderByAggregateInput.schema';
import { DonationSumOrderByAggregateInputSchemaObject } from './DonationSumOrderByAggregateInput.schema'

export const DonationOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(DonationCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(DonationAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(DonationMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(DonationMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(DonationSumOrderByAggregateInputSchemaObject)
}