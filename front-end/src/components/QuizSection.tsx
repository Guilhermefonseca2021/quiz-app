import { useState } from "react";
import formatQuestions from "../hooks/quiz";

export default function QuizSection() {
  const [quizId, setQuizId] = useState(0);
  const { getQuizById } = formatQuestions();

  const quiz = getQuizById(quizId)
  console.log(quiz)

  return (
        <div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
  );
}
