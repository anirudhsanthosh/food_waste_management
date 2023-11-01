// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { HealthReportCountOrderByAggregateInputSchemaObject } from './HealthReportCountOrderByAggregateInput.schema';
import { HealthReportAvgOrderByAggregateInputSchemaObject } from './HealthReportAvgOrderByAggregateInput.schema';
import { HealthReportMaxOrderByAggregateInputSchemaObject } from './HealthReportMaxOrderByAggregateInput.schema';
import { HealthReportMinOrderByAggregateInputSchemaObject } from './HealthReportMinOrderByAggregateInput.schema';
import { HealthReportSumOrderByAggregateInputSchemaObject } from './HealthReportSumOrderByAggregateInput.schema'

export const HealthReportOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  bp: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  cholesterol: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  weight: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  height: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  date: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(HealthReportCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(HealthReportAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(HealthReportMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(HealthReportMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(HealthReportSumOrderByAggregateInputSchemaObject)
}