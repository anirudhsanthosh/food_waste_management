// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const DonationMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema
}