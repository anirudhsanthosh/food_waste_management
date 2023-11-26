import Joi from 'joi';
import { AddressWhereInputSchemaObject, AddressOrderByWithAggregationInputSchemaObject, AddressScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { AddressScalarFieldEnumSchema } from './enums'

export const AddressGroupBySchema = Joi.object().keys({ where: Joi.object().keys(AddressWhereInputSchemaObject), orderBy: Joi.object().keys(AddressOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(AddressScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(AddressScalarFieldEnumSchema).required()  }).required()