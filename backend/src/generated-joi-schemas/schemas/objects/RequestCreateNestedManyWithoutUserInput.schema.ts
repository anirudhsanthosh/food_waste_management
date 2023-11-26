// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutUserInputSchemaObject } from './RequestCreateWithoutUserInput.schema';
import { RequestUncheckedCreateWithoutUserInputSchemaObject } from './RequestUncheckedCreateWithoutUserInput.schema';
import { RequestCreateOrConnectWithoutUserInputSchemaObject } from './RequestCreateOrConnectWithoutUserInput.schema';
import { RequestCreateManyUserInputEnvelopeSchemaObject } from './RequestCreateManyUserInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema'

export const RequestCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject)))
}