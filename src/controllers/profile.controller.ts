import { NextFunction, Request, Response } from "express";
import { createNewProfiles, getAllProfiles } from "../services";

export async function handleProfileCreation(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const data = request.body;

		const newProfiles = await createNewProfiles(data);

		return response.status(201).json({ newProfiles });
	} catch (error) {
		return response.status(400).json(error);
	}
}

export async function handleProfilesSearch(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const fields = request.query;

		getAllProfiles({});
	} catch (error) {
		return response.status(400).json(error);
	}
}
