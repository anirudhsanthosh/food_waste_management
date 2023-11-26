// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutUserInputSchemaObject } from './RequestUpdateWithoutUserInput.schema';
import { RequestUncheckedUpdateWithoutUserInputSchemaObject } from './RequestUncheckedUpdateWithoutUserInput.schema';
import { RequestCreateWithoutUserInputSchemaObject } from './RequestCreateWithoutUserInput.schema';
import { RequestUncheckedCreateWithoutUserInputSchemaObject } from './RequestUncheckedCreateWithoutUserInput.schema'

export const RequestUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutUserInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutUserInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutUserInputSchemaObject))
}