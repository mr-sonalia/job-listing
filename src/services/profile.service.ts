import { ProfileItemType } from "@/utils/types";
import { FilterQuery } from "mongoose";
import { ProfileModel } from "../database/mongo-db/schemas";
export async function createNewProfiles(data: Partial<ProfileItemType>[]) {
	try {
		const newProfiles = new ProfileModel(data);
		newProfiles.save({
			timestamps: true,
		});

		return newProfiles;
	} catch (error) {
		throw error;
	}
}
export async function getAllProfiles(where: FilterQuery<ProfileItemType>) {
	try {
		const profiles = await ProfileModel.find(where);

		return profiles;
	} catch (error) {
		throw error;
	}
}
export async function getProfileByID(id: string) {
	try {
		const profile = await ProfileModel.findById(id);

		return profile;
	} catch (error) {
		throw error;
	}
}
export async function updateAllProfiles(
	data: Partial<ProfileItemType>,
	where: FilterQuery<ProfileItemType>,
) {
	try {
		const updatedProfiles = await ProfileModel.updateMany(where, data);

		return updatedProfiles;
	} catch (error) {
		throw error;
	}
}
export async function deleteAllProfiles(where: FilterQuery<ProfileItemType>) {
	try {
		return await ProfileModel.deleteMany(where);
	} catch (error) {
		throw error;
	}
}
