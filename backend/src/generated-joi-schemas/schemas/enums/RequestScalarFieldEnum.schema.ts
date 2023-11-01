import Joi from 'joi';

export const RequestScalarFieldEnumSchema = Joi.string().valid(...["id","createdAt","unit","status","bloodGroup","userId"])