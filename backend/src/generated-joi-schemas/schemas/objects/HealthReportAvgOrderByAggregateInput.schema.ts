// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const HealthReportAvgOrderByAggregateInputSchemaObject = {
    weight: SortOrderSchema,
  height: SortOrderSchema,
  userId: SortOrderSchema
}