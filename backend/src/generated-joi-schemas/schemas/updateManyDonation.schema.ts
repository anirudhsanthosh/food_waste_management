import Joi from 'joi';
import { DonationUpdateManyMutationInputSchemaObject, DonationWhereInputSchemaObject } from './objects'

export const DonationUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(DonationUpdateManyMutationInputSchemaObject), where: Joi.object().keys(DonationWhereInputSchemaObject)  }).required()