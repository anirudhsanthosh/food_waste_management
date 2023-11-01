// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RequestSumOrderByAggregateInputSchemaObject = {
    unit: SortOrderSchema,
  userId: SortOrderSchema
}