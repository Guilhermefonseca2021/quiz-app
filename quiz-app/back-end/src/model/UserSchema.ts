import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string,
  email: string,
  password: string
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

const UserSchema = mongoose.model("quizies", userSchema);
export default UserSchema;
