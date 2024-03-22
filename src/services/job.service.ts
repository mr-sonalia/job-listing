import { JobType } from "@/utils/types";
import { FilterQuery } from "mongoose";
import { JobModel } from "../database/mongo-db/schemas";
export async function createNewJob(data: Partial<JobType>) {
	try {
		const newJob = new JobModel(data);
		newJob.save({
			timestamps: true,
		});

		return newJob;
	} catch (error) {
		throw error;
	}
}
export async function getAllJobs(where: FilterQuery<JobType>) {
	try {
		const jobs = await JobModel.find(where);

		return jobs;
	} catch (error) {
		throw error;
	}
}

export async function getjobByID(id: string) {
	try {
		const job = await JobModel.findById(id);

		return job;
	} catch (error) {
		throw error;
	}
}

export async function updateAllJobs(data: Partial<JobType>, where: FilterQuery<JobType>) {
	try {
		const updatedJobs = await JobModel.updateMany(where, data);

		return updatedJobs;
	} catch (error) {
		throw error;
	}
}
export async function deleteAllJobs(where: FilterQuery<JobType>) {
	try {
		return await JobModel.deleteMany(where);
	} catch (error) {
		throw error;
	}
}
