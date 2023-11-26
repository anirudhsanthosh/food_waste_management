// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationCreateWithoutUserInputSchemaObject } from './DonationCreateWithoutUserInput.schema';
import { DonationUncheckedCreateWithoutUserInputSchemaObject } from './DonationUncheckedCreateWithoutUserInput.schema'

export const DonationCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject),
Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject))
}