import { Router } from "express";
import { handleProfileCreation } from "../controllers";

const profileRouter = Router();

profileRouter.post("/", handleProfileCreation);

export { profileRouter };
