import Joi from 'joi';
import { RequestWhereInputSchemaObject, RequestOrderByWithAggregationInputSchemaObject, RequestScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { RequestScalarFieldEnumSchema } from './enums'

export const RequestGroupBySchema = Joi.object().keys({ where: Joi.object().keys(RequestWhereInputSchemaObject), orderBy: Joi.object().keys(RequestOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(RequestScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(RequestScalarFieldEnumSchema).required()  }).required()