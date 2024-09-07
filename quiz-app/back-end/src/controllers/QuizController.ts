import { Response, Request } from "express";
import QuizSchema from "../model/QuizSchema";
import { Quiz } from '../types/Quiz';

export function createQuiz(req: Request, res: Response) {
    const { ask, option, right_answer }: Quiz = req.body;

    try {
        const quiz = { ask, option, right_answer };
        const newQuiz = QuizSchema.create(quiz);
        console.log(newQuiz);
    } catch(err) {
        console.log(err)
    }

    res.status(200).json(req.body);
}

export function deleteQuiz(req: Request, res: Response) {
    res.send('quiz deleted');
}

export function updateQuiz(req: Request, res: Response) {
}

export function getQuiz(req: Request, res: Response) {
    const quiz = req.params.id;

    try {
        const QuizById = QuizSchema.findById(quiz);
        res.status(200).json(QuizById);
    } catch(err) {
        console.log(err);
    }
}