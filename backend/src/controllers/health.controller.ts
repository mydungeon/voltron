import { NextFunction, Request, Response } from "express";

export const getHealth = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "I am alive",
  });
};
