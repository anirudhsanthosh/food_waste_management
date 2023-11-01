// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BloodGroupCountOrderByAggregateInputSchemaObject } from './BloodGroupCountOrderByAggregateInput.schema';
import { BloodGroupAvgOrderByAggregateInputSchemaObject } from './BloodGroupAvgOrderByAggregateInput.schema';
import { BloodGroupMaxOrderByAggregateInputSchemaObject } from './BloodGroupMaxOrderByAggregateInput.schema';
import { BloodGroupMinOrderByAggregateInputSchemaObject } from './BloodGroupMinOrderByAggregateInput.schema';
import { BloodGroupSumOrderByAggregateInputSchemaObject } from './BloodGroupSumOrderByAggregateInput.schema'

export const BloodGroupOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  group: SortOrderSchema,
  variation: SortOrderSchema,
  comments: SortOrderSchema,
  stock: SortOrderSchema,
  createdAt: SortOrderSchema,
  _count: Joi.object().keys(BloodGroupCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(BloodGroupAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(BloodGroupMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(BloodGroupMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(BloodGroupSumOrderByAggregateInputSchemaObject)
}