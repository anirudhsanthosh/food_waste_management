import { PrismaClient,  } from '@prisma/client'



export const db  = new PrismaClient({});

// if (process.env.APP_ENV !== 'prod') _db.prisma = db


export const UsersRepository = db.user;




