import { MouseEvent, useCallback, useEffect, useState } from "react";
import { Quiz } from "../types/Quiz";
import api from "../api/quizies.json";

export default function QuizSection() {
  const [quizId, setQuizId] = useState(0);
  const [myQuiz, setMyQuiz] = useState<Quiz | undefined>();
  const { getQuizById } = formatQuestions();

  function formatQuestions() {
    const getQuizById = async (id: number) => {
      const QuizByNumber = api.filter((quiz) => quiz._id === id);
      return QuizByNumber;
    };

    return { getQuizById };
  }

  const memorizedGetQuizById = useCallback(
    () => getQuizById(quizId),
    [getQuizById, quizId]
  );

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

    if (selectedOption === myQuiz?.right_answer) {
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
      <div className="bg-violet-950 p-8 w-96 h-80 rounded-lg">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content">
          <h2 className="text-gray-200 text-2xl mb-12 font-bold">
            {myQuiz?.ask}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {myQuiz?.option.map((option, index) => (
              <input
                key={index}
                type="submit"
                value={option}
                onClick={handleValidateQuiz}
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
