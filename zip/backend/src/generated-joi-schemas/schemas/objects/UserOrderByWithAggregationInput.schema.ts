// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputSchemaObject } from './UserCountOrderByAggregateInput.schema';
import { UserAvgOrderByAggregateInputSchemaObject } from './UserAvgOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputSchemaObject } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputSchemaObject } from './UserMinOrderByAggregateInput.schema';
import { UserSumOrderByAggregateInputSchemaObject } from './UserSumOrderByAggregateInput.schema'

export const UserOrderByWithAggregationInputSchemaObject = {
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
  _count: Joi.object().keys(UserCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(UserAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(UserMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(UserMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(UserSumOrderByAggregateInputSchemaObject)
}