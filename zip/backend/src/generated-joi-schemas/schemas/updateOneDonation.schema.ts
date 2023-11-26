import Joi from 'joi';
import { DonationUpdateInputSchemaObject, DonationWhereUniqueInputSchemaObject } from './objects'

export const DonationUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(DonationUpdateInputSchemaObject), where: Joi.object().keys(DonationWhereUniqueInputSchemaObject)  }).required()