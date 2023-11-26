// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationCreateWithoutBloodInputSchemaObject } from './DonationCreateWithoutBloodInput.schema';
import { DonationUncheckedCreateWithoutBloodInputSchemaObject } from './DonationUncheckedCreateWithoutBloodInput.schema'

export const DonationCreateOrConnectWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject),
Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject))
}