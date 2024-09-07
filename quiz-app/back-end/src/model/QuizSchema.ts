import mongoose, { Schema, Document } from "mongoose";

interface IQuiz extends Document {
  ask: string;
  options: string;
  right_answer: string;
}

const quizSchema: Schema = new Schema({
  ask: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: true,
    unique: true,
  },
  right_answer: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("quizies", quizSchema);
