// @ts-nocheck
import Joi from 'joi';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema';
import { RequestUpdateManyMutationInputSchemaObject } from './RequestUpdateManyMutationInput.schema';
import { RequestUncheckedUpdateManyWithoutRequestsInputSchemaObject } from './RequestUncheckedUpdateManyWithoutRequestsInput.schema'

export const RequestUpdateManyWithWhereWithoutBloodInputSchemaObject = {
    where: Joi.object().keys(RequestScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyMutationInputSchemaObject),
Joi.object().keys(RequestUncheckedUpdateManyWithoutRequestsInputSchemaObject))
}