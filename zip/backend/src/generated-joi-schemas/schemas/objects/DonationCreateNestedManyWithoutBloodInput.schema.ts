// @ts-nocheck
import Joi from 'joi';
import { DonationCreateWithoutBloodInputSchemaObject } from './DonationCreateWithoutBloodInput.schema';
import { DonationUncheckedCreateWithoutBloodInputSchemaObject } from './DonationUncheckedCreateWithoutBloodInput.schema';
import { DonationCreateOrConnectWithoutBloodInputSchemaObject } from './DonationCreateOrConnectWithoutBloodInput.schema';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema'

export const DonationCreateNestedManyWithoutBloodInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(DonationCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateOrConnectWithoutBloodInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject)))
}