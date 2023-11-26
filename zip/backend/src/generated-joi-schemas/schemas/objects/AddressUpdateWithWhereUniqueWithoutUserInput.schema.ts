// @ts-nocheck
import Joi from 'joi';
import { AddressWhereUniqueInputSchemaObject } from './AddressWhereUniqueInput.schema';
import { AddressUpdateWithoutUserInputSchemaObject } from './AddressUpdateWithoutUserInput.schema';
import { AddressUncheckedUpdateWithoutUserInputSchemaObject } from './AddressUncheckedUpdateWithoutUserInput.schema'

export const AddressUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AddressWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AddressUpdateWithoutUserInputSchemaObject),
Joi.object().keys(AddressUncheckedUpdateWithoutUserInputSchemaObject))
}