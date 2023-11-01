// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBloodInputSchemaObject } from './UserUpdateWithoutBloodInput.schema';
import { UserUncheckedUpdateWithoutBloodInputSchemaObject } from './UserUncheckedUpdateWithoutBloodInput.schema'

export const UserUpdateWithWhereUniqueWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutBloodInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutBloodInputSchemaObject))
}