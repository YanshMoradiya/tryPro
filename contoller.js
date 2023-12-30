import { AppError } from "./AppError.js";
import { Tour } from "./schema.js";
import { ApiResponse } from "./ApiResponce.js";
const asyncHandler = (fn) => {
    console.log('asyncHandler')
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};

const getTourContoller = asyncHandler(async (req, res) => {
    const tour = await Tour.findById(req.params._id);
    console.log(tour);
    if (tour == undefined) {
        console.log('No tour found')
        res.status(404).json(new AppError(404, "No tour found"));
    }
    res.status(200).json(new ApiResponse(200, tour));
});

export { getTourContoller };