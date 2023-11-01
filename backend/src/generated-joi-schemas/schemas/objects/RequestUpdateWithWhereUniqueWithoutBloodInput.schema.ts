// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutBloodInputSchemaObject } from './RequestUpdateWithoutBloodInput.schema';
import { RequestUncheckedUpdateWithoutBloodInputSchemaObject } from './RequestUncheckedUpdateWithoutBloodInput.schema'

export const RequestUpdateWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutBloodInputSchemaObject))
}