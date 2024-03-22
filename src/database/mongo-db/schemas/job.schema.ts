import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
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
});

const JobModel = new mongoose.Model("Job", JobSchema);

export { JobModel };
