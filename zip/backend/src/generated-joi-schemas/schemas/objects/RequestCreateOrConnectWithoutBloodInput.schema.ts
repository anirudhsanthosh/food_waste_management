// @ts-nocheck
import Joi from 'joi';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestCreateWithoutBloodInputSchemaObject } from './RequestCreateWithoutBloodInput.schema';
import { RequestUncheckedCreateWithoutBloodInputSchemaObject } from './RequestUncheckedCreateWithoutBloodInput.schema'

export const RequestCreateOrConnectWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(RequestWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject),
Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject))
}