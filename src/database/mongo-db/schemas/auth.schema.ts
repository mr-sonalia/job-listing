import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
	role: {
		type: String,
	},
	email: {
		type: String,
	},
	passwordHash: {
		type: String,
	},

	profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

const AuthModel = mongoose.model("Auth", AuthSchema);

export { AuthModel };

