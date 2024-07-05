import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuizItem from './QuizItem'
import getQuizData from './QuizData'
import ResultView from './ResultView'

function App() {
  const [current, setCurrent] = useState(0)
  const [refetch, setRefetch] = useState(false);
  const [quizList, setQuizList] = useState([{
    question: "",
    answer: "",
    options: []
  }])
  const [resultShow, setResultShow] = useState(false);
  const [score, setScore] = useState(0);

  const playAgain = () => {
    setRefetch(!refetch);
    setResultShow(false);
    setScore(0);
  }

  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data["results"];
      })
      .then((data) => {
        const questionList = [];
        for (const quis of data) {
          const qustion = {
            question: quis["question"],
            answer: quis["correct_answer"],
            options: quis["incorrect_answers"]
          };
          const index = Math.floor(Math.random() * 10) % 4;
          qustion.options = [
            ...qustion.options.slice(0, index),
            quis["correct_answer"]
            ,
            ...qustion.options.slice(index)
          ];
          questionList.push(qustion);
        };

        setQuizList(questionList);
      }).catch((err) => console.log(err));
  }, [refetch])

  const onOptionClick = (answer) => {
    if (answer === quizList[current].answer) {
      if (current === 9) {
        setResultShow(true)
        setCurrent(0)
      } else {
        setScore(score + 10)
        setTimeout(() => {
          setCurrent(current + 1);
        }, 1000)
      }


    } else {
      if (current === 9) {
        setResultShow(true)
        setCurrent(0)
      } else {
        setTimeout(() => {
          setCurrent(current + 1);
        }, 1000)
      }

    }
  }
  return (
    <div className="bg-blue-950 w-screen h-[100vh] flex justify-center items-center flex-col">
      <div className='bg-white flex p-4 justify-center items-center flex-col rounded-xl shadow-sm shadow-white w-1/3 '>

        {
          resultShow ? <ResultView score={score} playAgain={playAgain} /> :
            < QuizItem
              question={quizList[current]}
              onOptionClick={onOptionClick}
              score={score}
              key={current} />

        }



      </div>
    </div>

  )
}

export default App
