import { ObjectId } from "mongoose";

export type ValidRoleTypes = "TERRAFORMERS" | "APPLICANTS";

export type ProfileItemType = {
	name: {
		first: {
			type: string;
			required: true;
		};
		middle: {
			type: string;
			required: false;
		};
		last: {
			type: string;
			required: true;
		};
	};
	contactPhoneNumber: {
		type: string;
		required: false;
	};
	contactEmail: {
		type: string;
	};
};

export type JobType = {
	title: string;
	description: string;
	location: string;
	deadline: Date;
	contactPhoneNumber: string;
	contactEmail: string;
	postedBy: ObjectId;
	archived: boolean;
};
