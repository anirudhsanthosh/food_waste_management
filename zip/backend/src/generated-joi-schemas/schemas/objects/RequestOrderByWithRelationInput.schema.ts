// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BloodGroupOrderByWithRelationInputSchemaObject } from './BloodGroupOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const RequestOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  unit: SortOrderSchema,
  status: SortOrderSchema,
  bloodGroup: SortOrderSchema,
  userId: SortOrderSchema,
  blood: Joi.object().keys(BloodGroupOrderByWithRelationInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}