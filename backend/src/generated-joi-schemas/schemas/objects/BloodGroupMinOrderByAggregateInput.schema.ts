// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BloodGroupMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  group: SortOrderSchema,
  variation: SortOrderSchema,
  comments: SortOrderSchema,
  stock: SortOrderSchema,
  createdAt: SortOrderSchema
}