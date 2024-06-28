import '../styles/qagame.scss'
import Header from '../components/ui/Header'
import Questiones from '../config/Questions'
import { useState } from 'react'
import GameOver from '../components/QAGame/GameOver';
import { NavLink } from 'react-router-dom';
import TimerBar from '../components/QAGame/Timer';
import getPhrase from '../components/QAGame/getPhrase';


export default function QAGamePlay() {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [phrase, setPhrase] = useState({title: '', desc: ''})


    const blocks = [1, 2, 3];
    const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
    const qaBlock = Questiones.filter(question => question.block === blockIndex);
    console.log(qaBlock[currentQuestion]);

    const handleAnswer = (isCorrect: boolean, e: React.MouseEvent<HTMLButtonElement>) => {
        if (isCorrect) setScore(score + 1)
        const target = e.target as HTMLButtonElement | null;
        if (target) {
            target.classList.add(isCorrect ? "correct" : "incorrect");
        } 

        if (currentQuestion === qaBlock.length - 1) {
            const finalPhrase = getPhrase(score);
            setPhrase(finalPhrase)
            setIsFinished(true);
            setIsOpen(true)
        } else {
            setcurrentQuestion(currentQuestion + 1)
        }
    };

    return (
        <>
            <Header />
            <main id='game-screen'>
                <div id="top">
                    <h4>Pregunta {currentQuestion + 1} de {qaBlock.length}</h4>
                    <div id='question-display'>
                        <h2>{qaBlock[currentQuestion].question}</h2>
                    </div>
                </div>
                <TimerBar key={currentQuestion} />
                <div id='buttons'>
                    {qaBlock[currentQuestion].answers.map((answer) => (
                        <button
                            key={answer.answer}
                            onClick={(e) => handleAnswer(answer.isCorrect, e)}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
            </main>
            {isFinished && <GameOver
                isOpen={isOpen}
                content={
                    <>
                        <h2>Has conseguido responder correctamente: {score} de 6 preguntas</h2>
                        <h3>{phrase.title}</h3>
                        <p>{phrase.desc}</p>
                        <NavLink to={'/qagame'} className="green">Volver a empezar</NavLink>
                    </>
                }
            ></GameOver>}
        </>
    )
}
