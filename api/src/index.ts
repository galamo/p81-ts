import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import productsRouter from "./products";
import {
  addReq,
  authToken,
  overloadError,
  overloadSendJson,
} from "./middleware";
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
interface MyRequest extends Express.Request {
  reqId: string;
}
export type HTTPResponse = {
  data: any;
  message: string;
  errorMessage?: string;
};

app.use(cors());
app.use(bodyParser.json());
app.use(addReq);
app.use(authToken);
app.use(overloadError);
app.use(overloadSendJson);

app.get("/healthcheck", function (req: MyRequest, res, next) {
  console.log(req.reqId);
  res.send("App is running ");
});
app.use("/products", productsRouter);
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.setHeader("x-request-id", `reqId-${req.reqId}`);
  res.sendError("something went wrong sendError function"); // send status 500 , print to logs
  //   res.status(500).send("something went wrong");
});

app.listen(process.env.PORT);

const getUser = (user: string): string | number => {
  if (typeof user === "string") return user + "@gmail.com";
  else return 1;
};

const result = getUser("Ori");
