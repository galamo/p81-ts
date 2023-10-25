import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { addReq } from "./middleware";
dotenv.config();

const app = express();

declare global {
  namespace Express {
    export interface Request {
      reqId: string;
    }
  }
}

app.use(addReq);


app.get("/products", function (req: Request, res: Response, next) {
  next(new Error("Go to the error handler"));
});

app.get("/healthcheck", function (req, res, next) {
  res.send("App is running ");
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.setHeader("x-request-id", `reqId-${req.reqId}`);
  res.status(500).send("something went wrong");
});

app.listen(process.env.PORT);
