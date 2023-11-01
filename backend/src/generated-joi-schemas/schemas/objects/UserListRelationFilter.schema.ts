// @ts-nocheck
import Joi from 'joi';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const UserListRelationFilterSchemaObject = {
    every: Joi.object().keys(UserWhereInputSchemaObject),
  some: Joi.object().keys(UserWhereInputSchemaObject),
  none: Joi.object().keys(UserWhereInputSchemaObject)
}