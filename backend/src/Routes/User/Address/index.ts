import { Router } from "express";
import { createAddress, deleteAddress, getAddress, getAllAddress, updateAddress } from "../../../Controller/Address";


export const addressRouter = Router();


addressRouter.post('/', createAddress);

addressRouter.patch('/:id', updateAddress);

addressRouter.get('/:id', getAddress);

addressRouter.delete('/:id', deleteAddress);

addressRouter.get('/', getAllAddress);