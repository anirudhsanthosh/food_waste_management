// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RequestCountOrderByAggregateInputSchemaObject } from './RequestCountOrderByAggregateInput.schema';
import { RequestAvgOrderByAggregateInputSchemaObject } from './RequestAvgOrderByAggregateInput.schema';
import { RequestMaxOrderByAggregateInputSchemaObject } from './RequestMaxOrderByAggregateInput.schema';
import { RequestMinOrderByAggregateInputSchemaObject } from './RequestMinOrderByAggregateInput.schema';
import { RequestSumOrderByAggregateInputSchemaObject } from './RequestSumOrderByAggregateInput.schema'

export const RequestOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  status: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(RequestCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RequestAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RequestMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RequestMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RequestSumOrderByAggregateInputSchemaObject)
}