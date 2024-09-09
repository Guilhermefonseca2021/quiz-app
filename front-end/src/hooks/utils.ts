import api from "../api/quizies.json";

export default function formatQuestions() {
  const _id = api.map((item) => item._id);
  const options: string[][] = api.map((item) => item.option);
  const ask = api.map((item) => item.ask);
  const right_answer = api.map((item) => item.right_answer);

  return { _id, ask, options, right_answer };
}
