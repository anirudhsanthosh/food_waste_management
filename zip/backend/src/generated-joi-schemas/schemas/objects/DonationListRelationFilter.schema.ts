// @ts-nocheck
import Joi from 'joi';
import { DonationWhereInputSchemaObject } from './DonationWhereInput.schema'

export const DonationListRelationFilterSchemaObject = {
    every: Joi.object().keys(DonationWhereInputSchemaObject),
  some: Joi.object().keys(DonationWhereInputSchemaObject),
  none: Joi.object().keys(DonationWhereInputSchemaObject)
}