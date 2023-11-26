// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AddressSumOrderByAggregateInputSchemaObject = {
    pin: SortOrderSchema,
  userId: SortOrderSchema
}