import mongoose from "mongoose";

// title, description, location, deadline, contact phone
//   number and contact email
const ProfileSchema = new mongoose.Schema({
	name: {
		first: {
			type: String,
			required: true,
		},
		middle: {
			type: String,
			required: false,
		},
		last: {
			type: String,
			required: true,
		},
		contactPhoneNumber: {
			type: String,
			required: false,
		},
		contactEmail: {
			type: String,
		},
	},

	auth: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
});

const ProfileModel = new mongoose.Model("Profile", ProfileSchema);

export { ProfileModel };
