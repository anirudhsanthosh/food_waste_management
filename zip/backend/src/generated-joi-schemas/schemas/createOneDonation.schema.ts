import Joi from 'joi';
import { DonationCreateInputSchemaObject } from './objects'

export const DonationCreateSchema = Joi.object().keys({ data: Joi.object().keys(DonationCreateInputSchemaObject)  }).required()