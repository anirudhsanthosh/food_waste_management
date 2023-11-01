// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RequestMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  status: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema
}