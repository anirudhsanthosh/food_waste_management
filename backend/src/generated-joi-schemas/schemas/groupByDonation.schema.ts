import Joi from 'joi';
import { DonationWhereInputSchemaObject, DonationOrderByWithAggregationInputSchemaObject, DonationScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { DonationScalarFieldEnumSchema } from './enums'

export const DonationGroupBySchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereInputSchemaObject), orderBy: Joi.object().keys(DonationOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(DonationScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(DonationScalarFieldEnumSchema).required()  }).required()