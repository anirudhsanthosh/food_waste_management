// @ts-nocheck
import Joi from 'joi';
import { DonationCreateWithoutUserInputSchemaObject } from './DonationCreateWithoutUserInput.schema';
import { DonationUncheckedCreateWithoutUserInputSchemaObject } from './DonationUncheckedCreateWithoutUserInput.schema';
import { DonationCreateOrConnectWithoutUserInputSchemaObject } from './DonationCreateOrConnectWithoutUserInput.schema';
import { DonationUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './DonationUpsertWithWhereUniqueWithoutUserInput.schema';
import { DonationWhereUniqueInputSchemaObject } from './DonationWhereUniqueInput.schema';
import { DonationUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './DonationUpdateWithWhereUniqueWithoutUserInput.schema';
import { DonationUpdateManyWithWhereWithoutUserInputSchemaObject } from './DonationUpdateManyWithWhereWithoutUserInput.schema';
import { DonationScalarWhereInputSchemaObject } from './DonationScalarWhereInput.schema'

export const DonationUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateWithoutUserInputSchemaObject)),
Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(DonationUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(DonationWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(DonationUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(DonationUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(DonationScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(DonationScalarWhereInputSchemaObject)))
}