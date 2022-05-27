import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String, required: true, unique: true, maxlength: 20
    },
    password: {
        type: String, required: true, minlength: 6
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", UserSchema)