// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutUserInputSchemaObject } from './RequestCreateWithoutUserInput.schema';
import { RequestUncheckedCreateWithoutUserInputSchemaObject } from './RequestUncheckedCreateWithoutUserInput.schema';
import { RequestCreateOrConnectWithoutUserInputSchemaObject } from './RequestCreateOrConnectWithoutUserInput.schema';
import { RequestUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './RequestUpsertWithWhereUniqueWithoutUserInput.schema';
import { RequestCreateManyUserInputEnvelopeSchemaObject } from './RequestCreateManyUserInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './RequestUpdateWithWhereUniqueWithoutUserInput.schema';
import { RequestUpdateManyWithWhereWithoutUserInputSchemaObject } from './RequestUpdateManyWithWhereWithoutUserInput.schema';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema'

export const RequestUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RequestScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestScalarWhereInputSchemaObject)))
}