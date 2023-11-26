// @ts-nocheck
import Joi from 'joi';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithoutBloodInputSchemaObject } from './DonationUpdateWithoutBloodInput.schema';
import { DonationUncheckedUpdateWithoutBloodInputSchemaObject } from './DonationUncheckedUpdateWithoutBloodInput.schema';
import { DonationCreateWithoutBloodInputSchemaObject } from './DonationCreateWithoutBloodInput.schema';
import { DonationUncheckedCreateWithoutBloodInputSchemaObject } from './DonationUncheckedCreateWithoutBloodInput.schema'

export const DonationUpsertWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(DonationWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(DonationUncheckedUpdateWithoutBloodInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject),
Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject))
}