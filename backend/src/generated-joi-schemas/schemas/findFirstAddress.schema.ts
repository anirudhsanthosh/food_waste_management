import Joi from 'joi';
import { AddressWhereInputSchemaObject, AddressOrderByWithRelationInputSchemaObject, AddressWhereUniqueInputSchemaObject } from './objects';
import { AddressScalarFieldEnumSchema } from './enums'

export const AddressFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereInputSchemaObject), orderBy: Joi.object().keys(AddressOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(AddressWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(AddressScalarFieldEnumSchema) }).required()