import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './objects'

export const DonationDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereUniqueInputSchemaObject)  }).required()