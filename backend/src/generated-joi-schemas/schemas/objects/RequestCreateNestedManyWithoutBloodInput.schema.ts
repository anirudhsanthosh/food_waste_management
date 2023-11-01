// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutBloodInputSchemaObject } from './RequestCreateWithoutBloodInput.schema';
import { RequestUncheckedCreateWithoutBloodInputSchemaObject } from './RequestUncheckedCreateWithoutBloodInput.schema';
import { RequestCreateOrConnectWithoutBloodInputSchemaObject } from './RequestCreateOrConnectWithoutBloodInput.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema'

export const RequestCreateNestedManyWithoutBloodInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutBloodInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject)))
}