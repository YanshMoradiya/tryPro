import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { tourRouter } from './routs.js';
import { errorHandlar } from './errorHandler.js';
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db).then(() => { console.log("database is connected...") });

app.use('/a', tourRouter);
app.use(errorHandlar);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});

export { app };