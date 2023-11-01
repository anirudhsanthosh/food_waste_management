import Joi from 'joi';

export const HealthReportScalarFieldEnumSchema = Joi.string().valid(...["id","bp","cholesterol","weight","height","date","userId"])