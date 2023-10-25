import express, { NextFunction, Request, Response } from "express";

export const addReq = (req: Request, res: Response, next: NextFunction) => {
  const d = Date.now();
  req.reqId = d.toString();
  console.log(d);
  next();
};

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  // implement extract token from authorization header and load it on req.token
};
