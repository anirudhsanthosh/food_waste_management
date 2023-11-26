import Joi from 'joi';
import { DonationWhereInputSchemaObject } from './objects'

export const DonationDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereInputSchemaObject)  }).required()