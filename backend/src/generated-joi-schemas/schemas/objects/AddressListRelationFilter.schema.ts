// @ts-nocheck
import Joi from 'joi';
import { AddressWhereInputSchemaObject } from './AddressWhereInput.schema'

export const AddressListRelationFilterSchemaObject = {
    every: Joi.object().keys(AddressWhereInputSchemaObject),
  some: Joi.object().keys(AddressWhereInputSchemaObject),
  none: Joi.object().keys(AddressWhereInputSchemaObject)
}