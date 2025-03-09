import { NextFunction, Request, Response } from "express";
import DevelopmentGroup from "../../models/developmentGroup";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const developmentGroup = await DevelopmentGroup.findAll();
    res.json(developmentGroup);
  } catch (e) {
    next(e);
  }
}
