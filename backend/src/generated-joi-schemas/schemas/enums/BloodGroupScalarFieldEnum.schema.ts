import Joi from 'joi';

export const BloodGroupScalarFieldEnumSchema = Joi.string().valid(...["id","name","group","variation","comments","stock","createdAt"])