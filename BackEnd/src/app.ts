import { config } from "dotenv";
// dotenv configuration
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = express();

const allowedOrigins = ["http://loacalhost:4000"];

app.use(
    cors({
      origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );

  app.use(json());

  app.use(urlencoded({extended: true}));

  app.use("/", routes);
  
  app.use((error: Error, req:Request, res:Response) => {
    res.status(500).json({message: error.message});
  })

db.connect(process.env.MONGO_DB_URL!).then(()=>{
    console.log("DB Connected");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on PORT : "+process.env.PORT);
    });
}).catch((error)=>{
    console.log("Something went wrong : "+error);
});