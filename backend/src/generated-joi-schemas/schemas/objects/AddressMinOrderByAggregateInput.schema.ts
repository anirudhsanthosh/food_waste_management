// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AddressMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  houseName: SortOrderSchema,
  landmark: SortOrderSchema,
  town: SortOrderSchema,
  city: SortOrderSchema,
  pin: SortOrderSchema,
  userId: SortOrderSchema
}