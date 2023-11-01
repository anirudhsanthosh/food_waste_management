// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const DonationSumOrderByAggregateInputSchemaObject = {
    unit: SortOrderSchema,
  userId: SortOrderSchema
}