import { JobType } from "@/utils/types";
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema<JobType>({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	location: {
		type: String,
	},
	deadline: {
		type: Date,
	},
	contactPhoneNumber: {
		type: String,
	},
	contactEmail: {
		type: String,
	},

	postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
	archived: {
		type: Boolean,
	},

	applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
});

const JobModel = mongoose.model<JobType>("Job", JobSchema);

export { JobModel };

