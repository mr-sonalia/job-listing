import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
	job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
	applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
});
