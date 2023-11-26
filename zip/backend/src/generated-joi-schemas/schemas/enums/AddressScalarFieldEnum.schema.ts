import Joi from 'joi';

export const AddressScalarFieldEnumSchema = Joi.string().valid(...["id","houseName","landmark","town","city","pin","userId"])