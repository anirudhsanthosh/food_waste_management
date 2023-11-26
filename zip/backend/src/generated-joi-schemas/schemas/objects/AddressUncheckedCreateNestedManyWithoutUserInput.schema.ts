// @ts-nocheck
import Joi from 'joi';
import { AddressCreateWithoutUserInputSchemaObject } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputSchemaObject } from './AddressUncheckedCreateWithoutUserInput.schema';
import { AddressCreateOrConnectWithoutUserInputSchemaObject } from './AddressCreateOrConnectWithoutUserInput.schema';
import { AddressWhereUniqueInputSchemaObject } from './AddressWhereUniqueInput.schema'

export const AddressUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject)),
Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AddressCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressCreateOrConnectWithoutUserInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(AddressWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AddressWhereUniqueInputSchemaObject)))
}