// @ts-nocheck
import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutUserInputSchemaObject } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputSchemaObject } from './AddressUncheckedCreateWithoutUserInput.schema'

export const AddressCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AddressWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject),
Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject))
}