import express, { NextFunction, Request, Response } from "express";

export const addReq = (req: Request, res: Response, next: NextFunction) => {
  const d = Date.now();
  req.reqId = d.toString();
  console.log(d);
  next();
};

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  const role = getRoleFromToken(authorizationHeader);
  req.role = role;
  next();
};

export const overloadError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendError = (error) => {
    console.log(error);
    return res.status(500).send(error);
  };
  next();
};

export const overloadSendJson = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendJson = (d) => {
    return res.json(d);
  };
  next();
};

function getRoleFromToken(token: string | undefined) {
  // role verified
  return "Admin";
}
