// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AddressAvgOrderByAggregateInputSchemaObject = {
    pin: SortOrderSchema,
  userId: SortOrderSchema
}