import Joi from 'joi';

export const DonationScalarFieldEnumSchema = Joi.string().valid(...["id","createdAt","unit","bloodGroup","userId"])