import { PrismaClient, } from '@prisma/client'

export const db = new PrismaClient({});

export const UsersRepository = db.user;

//@ts-ignore
export const PickupRequestRepository = db.pickupRequest;

export const BloodGroupRepository = db.bloodGroup;





