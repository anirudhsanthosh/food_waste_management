// @ts-nocheck
import Joi from 'joi';
import { DonationCreateWithoutBloodInputSchemaObject } from './DonationCreateWithoutBloodInput.schema';
import { DonationUncheckedCreateWithoutBloodInputSchemaObject } from './DonationUncheckedCreateWithoutBloodInput.schema';
import { DonationCreateOrConnectWithoutBloodInputSchemaObject } from './DonationCreateOrConnectWithoutBloodInput.schema';
import { DonationUpsertWithWhereUniqueWithoutBloodInputSchemaObject } from './DonationUpsertWithWhereUniqueWithoutBloodInput.schema';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithWhereUniqueWithoutBloodInputSchemaObject } from './DonationUpdateWithWhereUniqueWithoutBloodInput.schema';
import { DonationUpdateManyWithWhereWithoutBloodInputSchemaObject } from './DonationUpdateManyWithWhereWithoutBloodInput.schema';
import { DonationScalarWhereInputSchemaObject } from './DonationScalarWhereInput.schema'

export const DonationUpdateManyWithoutBloodNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(DonationCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateOrConnectWithoutBloodInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(DonationUpsertWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpsertWithWhereUniqueWithoutBloodInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpdateWithWhereUniqueWithoutBloodInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(DonationUpdateManyWithWhereWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpdateManyWithWhereWithoutBloodInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(DonationScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationScalarWhereInputSchemaObject)))
}