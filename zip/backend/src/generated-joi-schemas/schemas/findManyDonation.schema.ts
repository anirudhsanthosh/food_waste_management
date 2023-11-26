import Joi from 'joi';
import { DonationWhereInputSchemaObject, DonationOrderByWithRelationInputSchemaObject, DonationWhereUniqueInputSchemaObject } from './objects';
import { DonationScalarFieldEnumSchema } from './enums'

export const DonationFindManySchema = Joi.object().keys({ where: Joi.object().keys(DonationWhereInputSchemaObject), orderBy: Joi.object().keys(DonationOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(DonationWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(DonationScalarFieldEnumSchema)  }).required()