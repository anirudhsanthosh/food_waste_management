// @ts-nocheck
import Joi from 'joi';
import { AddressScalarWhereInputSchemaObject } from './AddressScalarWhereInput.schema';
import { AddressUpdateManyMutationInputSchemaObject } from './AddressUpdateManyMutationInput.schema';
import { AddressUncheckedUpdateManyWithoutAddressInputSchemaObject } from './AddressUncheckedUpdateManyWithoutAddressInput.schema'

export const AddressUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AddressScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AddressUpdateManyMutationInputSchemaObject),
Joi.object().keys(AddressUncheckedUpdateManyWithoutAddressInputSchemaObject))
}