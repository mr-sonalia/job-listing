import { Router } from "express";
import {
	handleApplicantInterest,
	handleJobCreation,
	handleJobListingSearch,
	handleJobUpdate,
} from "../controllers";

const jobRouter = Router();

jobRouter.get("/listings", handleJobListingSearch);
jobRouter.post("/", handleJobCreation);
jobRouter.put("/archive", handleJobUpdate);
jobRouter.post("/apply", handleApplicantInterest);

export { jobRouter };

