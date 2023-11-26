// @ts-nocheck
import Joi from 'joi';
import { UserScalarWhereInputSchemaObject } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputSchemaObject } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutUserInputSchemaObject } from './UserUncheckedUpdateManyWithoutUserInput.schema'

export const UserUpdateManyWithWhereWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(UserScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(UserUpdateManyMutationInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateManyWithoutUserInputSchemaObject))
}