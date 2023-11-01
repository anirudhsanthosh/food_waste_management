import Joi from 'joi';
import { RequestUpdateInputSchemaObject, RequestWhereUniqueInputSchemaObject } from './objects'

export const RequestUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(RequestUpdateInputSchemaObject), where: Joi.object().keys(RequestWhereUniqueInputSchemaObject)  }).required()