import { Router } from "express";
import { createDonations, deleteBloodDonation, getAllBloodDonation, getBloodDonation, updateDonations } from "../../../Controller/Admin/donations";

export const adminBloodDonationRouter = Router({});

adminBloodDonationRouter.get('/', getAllBloodDonation);

adminBloodDonationRouter.get('/:id', getBloodDonation);

adminBloodDonationRouter.post('/', createDonations);

adminBloodDonationRouter.patch('/:id', updateDonations);

adminBloodDonationRouter.delete('/:id', deleteBloodDonation);