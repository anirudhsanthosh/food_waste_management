// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithoutUserInputSchemaObject } from './DonationUpdateWithoutUserInput.schema';
import { DonationUncheckedUpdateWithoutUserInputSchemaObject } from './DonationUncheckedUpdateWithoutUserInput.schema';
import { DonationCreateWithoutUserInputSchemaObject } from './DonationCreateWithoutUserInput.schema';
import { DonationUncheckedCreateWithoutUserInputSchemaObject } from './DonationUncheckedCreateWithoutUserInput.schema'

export const DonationUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithoutUserInputSchemaObject),
Joi.object().keys(DonationUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject),
Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject))
}