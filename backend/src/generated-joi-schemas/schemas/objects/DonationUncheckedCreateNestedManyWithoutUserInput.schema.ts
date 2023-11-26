// @ts-nocheck
import Joi from 'joi';
import { DonationCreateWithoutUserInputSchemaObject } from './DonationCreateWithoutUserInput.schema';
import { DonationUncheckedCreateWithoutUserInputSchemaObject } from './DonationUncheckedCreateWithoutUserInput.schema';
import { DonationCreateOrConnectWithoutUserInputSchemaObject } from './DonationCreateOrConnectWithoutUserInput.schema';
import { DonationCreateManyUserInputEnvelopeSchemaObject } from './DonationCreateManyUserInputEnvelope.schema';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema'

export const DonationUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject)),
Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(DonationCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject)))
}