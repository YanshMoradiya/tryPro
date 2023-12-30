import express from 'express';
import { getTourContoller } from './contoller.js';

const tourRouter = express.Router();
tourRouter.route('/tour/:_id').get(getTourContoller);

export { tourRouter };

