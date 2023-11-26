// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const HealthReportSumOrderByAggregateInputSchemaObject = {
    weight: SortOrderSchema,
  height: SortOrderSchema,
  userId: SortOrderSchema
}