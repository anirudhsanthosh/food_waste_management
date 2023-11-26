import { Router } from "express";
import { getAllDonation, getDonation } from "../../../Controller/Donations";


export const donationRouter = Router();


// DonationRouter.post('/', authenticateWithJwt, createBloodRequest);

// DonationRouter.patch('/:id', authenticateWithJwt, updateBloodRequest);

// DonationRouter.delete('/:id', authenticateWithJwt, deleteBloodRequest);

donationRouter.get('/', getAllDonation);

donationRouter.get('/:id', getDonation);