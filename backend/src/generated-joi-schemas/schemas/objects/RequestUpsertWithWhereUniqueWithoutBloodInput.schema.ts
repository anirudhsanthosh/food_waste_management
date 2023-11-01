// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithoutBloodInputSchemaObject } from './RequestUpdateWithoutBloodInput.schema';
import { RequestUncheckedUpdateWithoutBloodInputSchemaObject } from './RequestUncheckedUpdateWithoutBloodInput.schema';
import { RequestCreateWithoutBloodInputSchemaObject } from './RequestCreateWithoutBloodInput.schema';
import { RequestUncheckedCreateWithoutBloodInputSchemaObject } from './RequestUncheckedCreateWithoutBloodInput.schema'

export const RequestUpsertWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateWithoutBloodInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject))
}