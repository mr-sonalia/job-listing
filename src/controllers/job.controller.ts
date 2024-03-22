import { NextFunction, Request, Response } from "express";
import { createNewJob, getAllJobs, getProfileByID } from "../services";

export async function handleJobCreation(request: Request, response: Response, next: NextFunction) {
	try {
		const data = request.body;

		const terraformerProfile = await getProfileByID(data.postedBy);

		if (!terraformerProfile)
			return response.status(400).send("Invalid terraformer ID/ Terraformer ID missing");

		const newJob = await createNewJob({
			archived: false,
			contactPhoneNumber: data.contactPhoneNumber || terraformerProfile.contactPhoneNumber,
			contactEmail: data.contactEmail || terraformerProfile.contactEmail,
			deadline: data.deadline,
			description: data.description || "",
			location: data.location || "",
			postedBy: terraformerProfile.id,
			title: data.title,
			applicants: [],
		});

		return response.status(201).send({
			message: "Posted a new job",
			job: newJob,
		});
	} catch (error) {
		return response.status(400).json(error);
	}
}

export async function handleJobListingSearch(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const fields = request.query;

		const title = fields.title || "";

		const listings = await getAllJobs({
			$or: [
				{
					title: {
						$regex: ".*" + title + ".*",
					},
				},
			],
		});

		if (listings.length === 0)
			return response.status(404).json({ message: "no listings found" });

		response.status(200).json({ listings });
	} catch (error) {
		return response.status(400).json(error);
	}
}
