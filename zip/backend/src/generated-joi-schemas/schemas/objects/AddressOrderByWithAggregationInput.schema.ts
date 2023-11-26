// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { AddressCountOrderByAggregateInputSchemaObject } from './AddressCountOrderByAggregateInput.schema';
import { AddressAvgOrderByAggregateInputSchemaObject } from './AddressAvgOrderByAggregateInput.schema';
import { AddressMaxOrderByAggregateInputSchemaObject } from './AddressMaxOrderByAggregateInput.schema';
import { AddressMinOrderByAggregateInputSchemaObject } from './AddressMinOrderByAggregateInput.schema';
import { AddressSumOrderByAggregateInputSchemaObject } from './AddressSumOrderByAggregateInput.schema'

export const AddressOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  houseName: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  landmark: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  town: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  city: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  pin: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  userId: SortOrderSchema,
  _count: Joi.object().keys(AddressCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(AddressAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(AddressMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(AddressMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(AddressSumOrderByAggregateInputSchemaObject)
}