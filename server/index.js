import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import morgan from "morgan";
import helmet from "helmet";


const app = express();
const port = process.env.PORT || 5000;
dotenv.config();


app.use(express.json());
app.use(helmet());
app.use(morgan('common'));







app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})