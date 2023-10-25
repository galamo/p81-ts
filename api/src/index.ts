import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  addReq,
  authToken,
  overloadError,
  overloadSendJson,
} from "./middleware";
import axios from "axios";
dotenv.config();

const app = express();

declare global {
  namespace Express {
    export interface Request {
      reqId: string;
      role: string;
    }
    export interface Response {
      sendError: (error: string) => {};
      sendJson: (d: HTTPResponse) => {};
    }
  }
}

export type HTTPResponse = {
  data: any;
  message: string;
  errorMessage?: string;
};

app.use(cors());
app.use(addReq);
app.use(authToken);
app.use(overloadError);
app.use(overloadSendJson);

app.get("/products-error", function (req: Request, res: Response, next) {
  next(new Error("Go to the error handler"));
});

app.get("/products", async function (req: Request, res: Response, next) {
  try {
    const result = await axios.get("https://dummyjson.com/products");
    res.sendJson({ data: result.data, message: "Ok" });
  } catch (error: any) {
    next(error.message);
  }
});

app.get("/healthcheck", function (req, res, next) {
  res.send("App is running ");
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.setHeader("x-request-id", `reqId-${req.reqId}`);
  res.sendError("something went wrong sendError function"); // send status 500 , print to logs
  //   res.status(500).send("something went wrong");
});

app.listen(process.env.PORT);
