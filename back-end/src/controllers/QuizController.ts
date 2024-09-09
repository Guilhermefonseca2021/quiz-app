import { Response, Request } from "express";
import QuizSchema from "../model/QuizSchema";
import { Quiz } from "../types/Quiz";

export async function createQuiz(req: Request, res: Response) {
  const quiz: Quiz = req.body;

  try {
    const newQuiz = await QuizSchema.create(quiz);
    console.log(newQuiz);
    return newQuiz;
    res.status(200).json(newQuiz);
  } catch (err) {
    console.log(err);
    return res.status(422).json(err);
  }
}

export async function deleteQuiz(req: Request, res: Response) {
  const { id } = req.body.params.id;
  console.log(id);

  try {
    const deletedQuiz = await QuizSchema.deleteOne({ _id: id });
    return res.status(200).json(deletedQuiz);
  } catch (err) {
    console.log(err);
    return res.status(422).json(err);
  }
}

export function updateQuiz(req: Request, res: Response) {}

export function getQuiz(req: Request, res: Response) {
  const quiz = req.params.id;

  try {
    const QuizById = QuizSchema.findById(quiz);
    res.status(200).json(QuizById);
  } catch (err) {
    console.log(err);
  }
}
