import { createNewJob, getProfileByID } from "../services";
import { NextFunction, Request, Response } from "express";

export async function handleJobCreatiion(request: Request, response: Response, next: NextFunction) {
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
		});

		return response.status(201).send({
			message: "Posted a new job",
			job: newJob,
		});
	} catch (error) {
		return response.status(400).json(error);
	}
}
