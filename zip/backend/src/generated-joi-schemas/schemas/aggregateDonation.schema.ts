import Joi from 'joi';
import { DonationWhereInputSchemaObject, DonationOrderByWithRelationInputSchemaObject, DonationWhereUniqueInputSchemaObject } from './objects'

export const DonationAggregateSchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereInputSchemaObject), orderBy: Joi.object().keys(DonationOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(DonationWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()