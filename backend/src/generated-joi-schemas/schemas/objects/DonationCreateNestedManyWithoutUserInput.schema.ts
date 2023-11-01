// @ts-nocheck
import Joi from 'joi';
import { DonationCreateWithoutUserInputSchemaObject } from './DonationCreateWithoutUserInput.schema';
import { DonationUncheckedCreateWithoutUserInputSchemaObject } from './DonationUncheckedCreateWithoutUserInput.schema';
import { DonationCreateOrConnectWithoutUserInputSchemaObject } from './DonationCreateOrConnectWithoutUserInput.schema';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema'

export const DonationCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject)),
Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject)))
}