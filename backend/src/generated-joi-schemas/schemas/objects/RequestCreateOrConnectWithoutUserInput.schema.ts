// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestCreateWithoutUserInputSchemaObject } from './RequestCreateWithoutUserInput.schema';
import { RequestUncheckedCreateWithoutUserInputSchemaObject } from './RequestUncheckedCreateWithoutUserInput.schema'

export const RequestCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject))
}