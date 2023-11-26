// @ts-nocheck
import Joi from 'joi';
import { AddressCreateWithoutUserInputSchemaObject } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputSchemaObject } from './AddressUncheckedCreateWithoutUserInput.schema';
import { AddressCreateOrConnectWithoutUserInputSchemaObject } from './AddressCreateOrConnectWithoutUserInput.schema';
import { AddressUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './AddressUpsertWithWhereUniqueWithoutUserInput.schema';
import { AddressCreateManyUserInputEnvelopeSchemaObject } from './AddressCreateManyUserInputEnvelope.schema';
import { AddressWhereUniqueInputSchemaObject } from './AddressWhereUniqueInput.schema';
import { AddressUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './AddressUpdateWithWhereUniqueWithoutUserInput.schema';
import { AddressUpdateManyWithWhereWithoutUserInputSchemaObject } from './AddressUpdateManyWithWhereWithoutUserInput.schema';
import { AddressScalarWhereInputSchemaObject } from './AddressScalarWhereInput.schema'

export const AddressUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject)),
Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AddressCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(AddressUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(AddressCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(AddressWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(AddressWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(AddressWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(AddressWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(AddressUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(AddressUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(AddressScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressScalarWhereInputSchemaObject)))
}