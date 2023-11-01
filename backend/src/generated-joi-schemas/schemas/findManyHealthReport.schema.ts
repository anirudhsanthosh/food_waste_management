import Joi from 'joi';
import { HealthReportWhereInputSchemaObject, HealthReportOrderByWithRelationInputSchemaObject, HealthReportWhereUniqueInputSchemaObject } from './objects';
import { HealthReportScalarFieldEnumSchema } from './enums'

export const HealthReportFindManySchema = Joi.object().keys({ where: Joi.object().keys(HealthReportWhereInputSchemaObject), orderBy: Joi.object().keys(HealthReportOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(HealthReportWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(HealthReportScalarFieldEnumSchema)  }).required()