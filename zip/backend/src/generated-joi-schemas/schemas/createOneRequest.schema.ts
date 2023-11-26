import Joi from 'joi';
import { RequestCreateInputSchemaObject } from './objects'

export const RequestCreateSchema = Joi.object().keys({ data: Joi.object().keys(RequestCreateInputSchemaObject)  }).required()