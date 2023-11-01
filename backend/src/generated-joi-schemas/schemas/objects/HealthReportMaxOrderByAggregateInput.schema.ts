// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const HealthReportMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  bp: SortOrderSchema,
  cholesterol: SortOrderSchema,
  weight: SortOrderSchema,
  height: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema
}