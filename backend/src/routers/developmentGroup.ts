import { Router } from "express";
import { getAll } from "../controllers/developmentGroup/controller";

const developmentGroupRouter = Router();

developmentGroupRouter.get("/", getAll);

export default developmentGroupRouter;
