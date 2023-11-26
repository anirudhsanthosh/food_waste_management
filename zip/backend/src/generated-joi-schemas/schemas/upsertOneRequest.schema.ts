import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject, RequestCreateInputSchemaObject, RequestUpdateInputSchemaObject } from './objects'

export const RequestUpsertSchema = Joi.object().keys({ where: Joi.object().keys(RequestWhereUniqueInputSchemaObject), data: Joi.object().keys(RequestCreateInputSchemaObject), update: Joi.object().keys(RequestUpdateInputSchemaObject)  }).required()