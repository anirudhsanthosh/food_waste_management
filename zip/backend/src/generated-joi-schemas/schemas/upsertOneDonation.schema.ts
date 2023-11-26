import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject, DonationCreateInputSchemaObject, DonationUpdateInputSchemaObject } from './objects'

export const DonationUpsertSchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereUniqueInputSchemaObject), data: Joi.object().keys(DonationCreateInputSchemaObject), update: Joi.object().keys(DonationUpdateInputSchemaObject)  }).required()