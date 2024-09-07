import { Response, Request } from "express"


export function createQuiz(req: Request, res: Response) {
    res.status(200).json(req.body);
}