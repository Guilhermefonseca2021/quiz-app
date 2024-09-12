import { MouseEvent, useCallback, useEffect, useState } from "react";
import formatQuestions from "../hooks/quiz";
import { Quiz } from "../types/Quiz";

export default function QuizSection() {
  const [quizId, setQuizId] = useState(0);
  const [myQuiz, setMyQuiz] = useState<Quiz | undefined>();
  const { getQuizById } = formatQuestions();
  
  const memorizedGetQuizById = useCallback(() => getQuizById(quizId), [getQuizById, quizId]);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const quiz = await memorizedGetQuizById();
        setMyQuiz(quiz[0]);
        console.log(quiz[0]);
      } catch (error) {
        console.error("Failed to fetch quiz:", error);
      }
    }

    fetchQuiz();
  }, [memorizedGetQuizById]);

  function handleValidateQuiz(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const selectedOption = e.currentTarget.value;
    const optionRight = myQuiz?.right_answer;

    if (selectedOption === optionRight) {
      alert("Resposta certa, Parabens!!! ");
    } else {
      alert("Resposta Errada!!! tente um pouco mais.");
    }

    nextQuiz();
  }

  function nextQuiz() {
    setQuizId((prevQuizId) => (prevQuizId < 9 ? prevQuizId + 1 : prevQuizId));
  }

  return (
    <div>
      <h2 className="text-gray-200 text-4xl my-12">{myQuiz?.ask}</h2>
      <div className="grid grid-cols-2 gap-4">
        {myQuiz?.option.map((option, index) => (
          <input
            key={index}
            type="submit"
            value={option}
            onClick={handleValidateQuiz}
            className="bg-green-500 hover:bg-green-600 hover:text-stone-300 text-stone-100 transition border-solid border-2 border-teal-400 rounded p-6"
          />
        ))}
      </div>
    </div>
  );
}
