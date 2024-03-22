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

const AuthModel = new mongoose.Model("Auth", AuthSchema);

export { AuthModel };
