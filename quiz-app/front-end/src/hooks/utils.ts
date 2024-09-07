import quizes from "../quiz/quests.json" ;

type Quiz = {
    ask: string,
    options: string,
    right_answer: string 
}


export default function formatQuestions({options, ask, right_answer}: Quiz) {
    const quiz = quizes;
    console.log(quiz.map(quiz => quiz.option.map(option => console.log(option))))
    console.log(right_answer);
    console.log(options);
    console.log(ask)
}