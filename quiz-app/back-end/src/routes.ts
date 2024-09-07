import { Router } from "express";
import { createQuiz, } from "./controllers/QuizController";

const routes = Router();

routes.get("/", createQuiz);
 
export default routes;