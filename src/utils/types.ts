import mongoose from "mongoose";

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
	title: {
		type: string;
	};
	description: {
		type: string;
	};
	location: {
		type: string;
	};
	deadline: {
		type: Date;
	};
	contactPhoneNumber: {
		type: string;
	};
	contactEmail: {
		type: string;
	};

	postedBy: { type: mongoose.Schema.Types.ObjectId; ref: "Profile" };
	archived: {
		type: boolean;
	};
};
