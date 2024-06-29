import '../styles/qagame.scss';
import Header from '../components/ui/Header';
import Questiones from '../config/Questions';
import { useState } from 'react';
import GameOver from '../components/QAGame/GameOver';
import { NavLink, useNavigate } from 'react-router-dom';
import TimerBar from '../components/QAGame/Timer';
import getPhrase from '../components/QAGame/getPhrase';

export default function QAGamePlay() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [phrase, setPhrase] = useState({ title: '', desc: '' });
    const [showAnswers, setShowAnswers] = useState(false);
    const navigate = useNavigate()

    const blocks = [1, 2, 3];
    const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
    const qaBlock = Questiones.filter(question => question.block === blockIndex);
    console.log(qaBlock[currentQuestion]);

    const handleAnswer = (isCorrect: boolean, e: React.MouseEvent<HTMLButtonElement>) => {
        if (isCorrect) setScore(score + 1);
        const target = e.target as HTMLButtonElement | null;
        if (target) {
            target.classList.add(isCorrect ? "correct" : "incorrect");
        }
        setShowAnswers(true);
        if (currentQuestion === qaBlock.length - 1) {
            const finalPhrase = getPhrase(score);
            setPhrase(finalPhrase);
            setIsFinished(true);
            setIsOpen(true);
        } else {
            setShowAnswers(false);
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const closeModal = () => {
        setIsOpen(false)
        navigate('/qagame')
    }

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
                            className={showAnswers ? (answer.isCorrect ? 'correct' : 'incorrect') : ''}
                            disabled={showAnswers}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
            </main>
            {isFinished && <GameOver
                isOpen={isOpen}
                onClose={closeModal}
                content={
                    <>
                        <span>Has conseguido responder correctamente: {score} de 6 preguntas</span>
                        <h2>{phrase.title}</h2>
                        <p>{phrase.desc}</p>
                        <NavLink to={'/qagame'} className="green">Volver a empezar</NavLink>
                    </>
                }
            ></GameOver>}
        </>
    );
}