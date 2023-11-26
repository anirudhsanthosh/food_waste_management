// @ts-nocheck
import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject } from './AddressWhereUniqueInput.schema';
import { AddressUpdateWithoutUserInputSchemaObject } from './AddressUpdateWithoutUserInput.schema';
import { AddressUncheckedUpdateWithoutUserInputSchemaObject } from './AddressUncheckedUpdateWithoutUserInput.schema';
import { AddressCreateWithoutUserInputSchemaObject } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputSchemaObject } from './AddressUncheckedCreateWithoutUserInput.schema'

export const AddressUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AddressWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(AddressUpdateWithoutUserInputSchemaObject),
Joi.object().keys(AddressUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(AddressCreateWithoutUserInputSchemaObject),
Joi.object().keys(AddressUncheckedCreateWithoutUserInputSchemaObject))
}