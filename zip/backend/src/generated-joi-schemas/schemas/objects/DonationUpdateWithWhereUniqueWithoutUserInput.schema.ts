// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithoutUserInputSchemaObject } from './DonationUpdateWithoutUserInput.schema';
import { DonationUncheckedUpdateWithoutUserInputSchemaObject } from './DonationUncheckedUpdateWithoutUserInput.schema'

export const DonationUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithoutUserInputSchemaObject),
Joi.object().keys(DonationUncheckedUpdateWithoutUserInputSchemaObject))
}