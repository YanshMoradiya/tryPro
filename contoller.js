import { ApiError } from "./ApiError.js";
import { Tour } from "./schema.js";
import { ApiResponse } from "./ApiResponce.js";

const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};

const getTourContoller = asyncHandler(async (req, res) => {
    const tour = await Tour.findById(req.params._id);
    if (!tour) {
        console.log('No tour found')
        throw new ApiError("No tour found", 404);
    }
    res.status(200).json(new ApiResponse(200, tour));
});

export { getTourContoller };