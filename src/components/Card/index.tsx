import React, { useContext, useState } from 'react';

import QuizIcon from '../../assets/undraw_adventure_4hum 1.svg';
import ResultIcon from '../../assets/undraw_winners_ao2o 2.svg';

import { QuestionsContext } from '../../contexts/QuestionsContext';

import { Button } from '../Button';

import { Container, QuestionContainer, ResultContainer } from './styles';

export interface UserObject {
  question: string;
  option: string;
  correct: boolean;
  correctOption: string;
}

const TOTAL_QUESTION = 10;

export const Card = () => {
  const { questions, loading, getData } = useContext(QuestionsContext);
  const [leatters] = useState(['A', 'B', 'C', 'D']);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState<UserObject[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const checkOption = (event: any) => {
    if (!gameOver) {
      const option = event.currentTarget.value;
      const correct = questions[number].correctOption === option;
      if (!!correct) {
        setScore((prev) => prev + 1);
      }
      const UserObject = {
        question: questions[number].question,
        option,
        correct,
        correctOption: questions[number].correctOption
      }

      setUser((prev) => [...prev, UserObject])
    }
  }

  const nextQuestion = () => {
    const next = number + 1

    if (next === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  }

  const tryAgain = () => {
    getData();
    setNumber(0);
    setScore(0);
    setUser([]);
    setGameOver(false);
  }

  return (
    <Container>
      {gameOver ? 
        <ResultContainer>
          <img src={ResultIcon} alt="result icon" />

          <div>
            <h2>Results</h2>
            <p>You got <span>{score}</span> correct answers</p>
          </div>

          <div>
            <button onClick={() => tryAgain()}>
              Try again
            </button>
          </div>
        </ResultContainer>
      : 
        <>
          <div>
            <img src={QuizIcon} alt="quiz icon" />
          </div>
      
          <QuestionContainer>
            {questions[number].img && <img src={questions[number].img} alt='flag' />}

            <h2>{questions[number].question}</h2>
      
            {questions[number].options.map((option, index) => {
              return (
                <Button 
                  key={index}
                  leatter={leatters[index]}  
                  option={option}
                  check={checkOption}
                  user={user ? user[number] : undefined}
                />
              )
            })}
      
            <div>
              {!gameOver && !loading && user.length === number + 1 ? (
                <button onClick={() => nextQuestion()}>
                  Next
                </button>
              ) : null}
            </div>
          </QuestionContainer>
        </>
      }
    </Container>
  )
}