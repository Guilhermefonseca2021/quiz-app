import api from "../api/quizies.json";

export default function formatQuestions() {
  function getQuizById(id: number) {
    api.find(quiz => quiz._id === id); 
  }

  return { getQuizById };
}
