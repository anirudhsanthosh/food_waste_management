import express, { json, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { UserRouter } from "./Routes/User";
import { CorsConfig } from "./Config/Cors";
import { ExceptionHandler, PayloadErrorHandler } from "./Middlewares/handleErrors";
dotenv.config();

export const App = express();

initServer();

function initServer() {
    try {

        App.use(json({ limit: "5mb" }));

        App.use(cookieParser())
        
        App.use(bodyParser.urlencoded({ extended: true }));
        
        App.use(cors(CorsConfig));
        
        App.use(PayloadErrorHandler);

        App.get("/", (req, res) => res.send(`Hey there it's lonely here..... 😔`))

        App.use('/user',UserRouter);

        App.use(ExceptionHandler)

        const PORT = process.env.PORT || 5000;

        App.listen(PORT, () => console.log(`🚀 server running on @${PORT}`));

    } catch (e: any) {
        console.error(`Error initializing app -${e.message}`);
    }

}