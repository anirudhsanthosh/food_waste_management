// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RequestMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  status: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema
}