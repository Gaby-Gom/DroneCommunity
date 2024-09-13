import ListingOne from '../models/listingOne.model.js';
import { errorHandler } from '../utils/error.js';

export const createListingOne = async (req, res, next) => {
  try {
    const listingOne = await ListingOne.create(req.body);
    return res.status(201).json(listingOne);
  } catch (error) {
    next(error);
  }
};
