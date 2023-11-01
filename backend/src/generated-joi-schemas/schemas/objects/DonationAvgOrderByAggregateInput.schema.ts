// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const DonationAvgOrderByAggregateInputSchemaObject = {
    unit: SortOrderSchema,
  userId: SortOrderSchema
}