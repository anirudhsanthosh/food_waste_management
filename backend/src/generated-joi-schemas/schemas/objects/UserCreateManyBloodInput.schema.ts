// @ts-nocheck
import Joi from 'joi';


export const UserCreateManyBloodInputSchemaObject = {
    id: Joi.number(),
  uuid: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  role: Joi.string(),
  joinedOn: Joi.date()
}