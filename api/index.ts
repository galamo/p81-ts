import express, { NextFunction, Request, Response } from "express";

const app = express();

declare global {
  namespace Express {
    export interface Request {
      requestId: string;
    }
  }
}





app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.requestId);
  res.send();
});

app.listen(3000);
