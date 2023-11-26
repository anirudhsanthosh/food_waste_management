// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithoutBloodInputSchemaObject } from './DonationUpdateWithoutBloodInput.schema';
import { DonationUncheckedUpdateWithoutBloodInputSchemaObject } from './DonationUncheckedUpdateWithoutBloodInput.schema'

export const DonationUpdateWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(DonationUncheckedUpdateWithoutBloodInputSchemaObject))
}