import Joi from 'joi';
import { RequestWhereInputSchemaObject, RequestOrderByWithRelationInputSchemaObject, RequestWhereUniqueInputSchemaObject } from './objects';
import { RequestScalarFieldEnumSchema } from './enums'

export const RequestFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(RequestWhereInputSchemaObject), orderBy: Joi.object().keys(RequestOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RequestWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(RequestScalarFieldEnumSchema) }).required()