import express, { NextFunction, Request, Response } from "express";

const app = express();

declare global {
  namespace Express {
    export interface Request {
      requestId: string;
    }
    export interface Response {
      sendJson: (d: HTTPResponse) => {};
    }
  }
}

interface HTTPResponse {
  data: {};
  message: string;
  errorMessage?: string;
}

app.use((req, res, next) => {
  res.sendJson = (d) => {
    console.log(d);
    return res.json(d);
  };
  next();
});
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.requestId);
  res.sendJson({ message: "ok", errorMessage: "no error", data: { a: 1 } });
});

app.listen(3000);
