// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutUserInputSchemaObject } from './RequestUpdateWithoutUserInput.schema';
import { RequestUncheckedUpdateWithoutUserInputSchemaObject } from './RequestUncheckedUpdateWithoutUserInput.schema'

export const RequestUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutUserInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutUserInputSchemaObject))
}