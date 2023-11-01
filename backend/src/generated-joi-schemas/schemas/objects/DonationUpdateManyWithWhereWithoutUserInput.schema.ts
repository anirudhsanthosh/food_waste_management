// @ts-nocheck
import Joi from 'joi';
import { DonationScalarWhereInputSchemaObject } from './DonationScalarWhereInput.schema';
import { DonationUpdateManyMutationInputSchemaObject } from './DonationUpdateManyMutationInput.schema';
import { DonationUncheckedUpdateManyWithoutDonationsInputSchemaObject } from './DonationUncheckedUpdateManyWithoutDonationsInput.schema'

export const DonationUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(DonationScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(DonationUpdateManyMutationInputSchemaObject),
Joi.object().keys(DonationUncheckedUpdateManyWithoutDonationsInputSchemaObject))
}