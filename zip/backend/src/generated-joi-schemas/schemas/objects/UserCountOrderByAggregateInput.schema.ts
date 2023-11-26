// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  uuid: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  password: SortOrderSchema,
  gender: SortOrderSchema,
  age: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  role: SortOrderSchema,
  joinedOn: SortOrderSchema
}