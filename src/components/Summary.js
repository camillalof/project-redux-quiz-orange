import React from 'react'
import ReactDOM from 'react-dom'
import './Summary.css'
import { useSelector } from 'react-redux'




export const Summary = () => {
  const allAnswers = useSelector((state) => state.quiz.answers)
  console.log(allAnswers)
  const amountCorrect = allAnswers.filter((answer) => answer.isCorrect)
  console.log(amountCorrect.length)

  return (
    <>
    <header className="scoreContainer">Your score is: {amountCorrect.length}/{allAnswers.length}!!!</header>
    <section>
      {allAnswers.map((answer) => (

        <div className="summaryContainer">
  
          <span className="summary-text">
            <span className="summary-question">{answer.question.questionText}</span>
            <span className="summary-answer">  Your answer: {answer.question.options[answer.question.correctAnswerIndex]}</span>
            <span className="result">{answer.isCorrect ? ' Right 👍😆 ' : ' Wrong 👎😢' }</span>
          </span>
        </div>
        ))}
      </section>
    </>
  )

}