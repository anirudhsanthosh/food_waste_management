// @ts-nocheck
import Joi from 'joi';
import { RequestCreateWithoutBloodInputSchemaObject } from './RequestCreateWithoutBloodInput.schema';
import { RequestUncheckedCreateWithoutBloodInputSchemaObject } from './RequestUncheckedCreateWithoutBloodInput.schema';
import { RequestCreateOrConnectWithoutBloodInputSchemaObject } from './RequestCreateOrConnectWithoutBloodInput.schema';
import { RequestUpsertWithWhereUniqueWithoutBloodInputSchemaObject } from './RequestUpsertWithWhereUniqueWithoutBloodInput.schema';
import { RequestCreateManyBloodInputEnvelopeSchemaObject } from './RequestCreateManyBloodInputEnvelope.schema';
import { RequestWhereUniqueInputSchemaObject } from './RequestWhereUniqueInput.schema';
import { RequestUpdateWithWhereUniqueWithoutBloodInputSchemaObject } from './RequestUpdateWithWhereUniqueWithoutBloodInput.schema';
import { RequestUpdateManyWithWhereWithoutBloodInputSchemaObject } from './RequestUpdateManyWithWhereWithoutBloodInput.schema';
import { RequestScalarWhereInputSchemaObject } from './RequestScalarWhereInput.schema'

export const RequestUpdateManyWithoutBloodNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateWithoutBloodInputSchemaObject)),
Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUncheckedCreateWithoutBloodInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RequestCreateOrConnectWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestCreateOrConnectWithoutBloodInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpsertWithWhereUniqueWithoutBloodInputSchemaObject))),
  createMany: Joi.object().keys(RequestCreateManyBloodInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RequestWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateWithWhereUniqueWithoutBloodInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RequestUpdateManyWithWhereWithoutBloodInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestUpdateManyWithWhereWithoutBloodInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RequestScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RequestScalarWhereInputSchemaObject)))
}