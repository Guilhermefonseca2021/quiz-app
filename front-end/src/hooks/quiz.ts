import api from "../api/quizies.json";

export default function formatQuestions() {
  const getQuizById = async (id: number) => {
    const QuizByNumber = await api.filter(quiz => quiz._id === id); 
    return QuizByNumber;
  }

  return { getQuizById };
}
