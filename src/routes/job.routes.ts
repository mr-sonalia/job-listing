import { Router } from "express";
import { handleJobCreation, handleJobListingSearch } from "../controllers";

const jobRouter = Router();

jobRouter.post("/", handleJobCreation);
jobRouter.get("/listings", handleJobListingSearch);

export { jobRouter };

