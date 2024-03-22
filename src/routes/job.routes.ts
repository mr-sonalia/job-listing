import { Router } from "express";
import { handleJobCreatiion } from "../controllers";

const jobRouter = Router();

jobRouter.post("/", handleJobCreatiion);

export { jobRouter };
