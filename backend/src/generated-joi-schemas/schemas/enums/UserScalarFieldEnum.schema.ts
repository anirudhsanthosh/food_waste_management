import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","uuid","email","name","password","gender","age","bloodGroup","role","joinedOn"])