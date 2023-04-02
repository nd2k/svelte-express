import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.router";
import generalRoutes from "./routes/general.router";
import managementRoutes from "./routes/management.router";
import salesRoutes from "./routes/sales.router";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/*MONGOOSE*/
const PORT = process.env.PORT as unknown as number || 9000;
const MONGO_URL = process.env.MONGO_URL as unknown as string;
mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);   
        })
    })
    .catch((error) => {
        console.error('Error when trying to connect to MongoDB');
        console.error(`${error}`);
    })