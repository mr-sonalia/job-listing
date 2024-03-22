import { ProfileItemType } from "@/utils/types";
import mongoose from "mongoose";

// title, description, location, deadline, contact phone
//   number and contact email
const ProfileSchema = new mongoose.Schema<ProfileItemType>({
	name: {
		first: {
			type: String,
		},
		middle: {
			type: String,
		},
		last: {
			type: String,
		},
	},
	contactPhoneNumber: {
		type: String,
	},
	contactEmail: {
		type: String,
	},
});

const ProfileModel = mongoose.model<ProfileItemType>("Profile", ProfileSchema);

export { ProfileModel };
