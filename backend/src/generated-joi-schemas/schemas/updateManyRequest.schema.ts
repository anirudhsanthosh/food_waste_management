import Joi from 'joi';
import { RequestUpdateManyMutationInputSchemaObject, RequestWhereInputSchemaObject } from './objects'

export const RequestUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(RequestUpdateManyMutationInputSchemaObject), where: Joi.object().keys(RequestWhereInputSchemaObject)  }).required()