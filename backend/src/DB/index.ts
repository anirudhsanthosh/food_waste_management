import { PrismaClient,  } from '@prisma/client'



export const db  = new PrismaClient({});


export const UsersRepository = db.user;

export const PickupRequestRepository = db.pickupRequest;





