import '../styles/qagame.scss';
import Header from '../components/ui/Header';
import Questiones from '../config/Questions';
import { useState } from 'react';
import GameOver from '../components/QAGame/GameOver';
import { NavLink, useNavigate } from 'react-router-dom';
import TimerBar from '../components/QAGame/Timer';
import getPhrase from '../components/QAGame/getPhrase';
import AnswersModal from '../components/QAGame/AnswersModal';

export default function QAGamePlay() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [optionsPicked, setOptionsPicked] = useState<{ question: string, answer: string, isCorrect: boolean }[]>([]);
    const [isOpenGo, setIsOpenGo] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [phrase, setPhrase] = useState({ title: '', desc: '' });
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
            setOptionsPicked(prev => [
                ...prev,
                {
                    question: qaBlock[currentQuestion].question,
                    answer: target.textContent || '',
                    isCorrect
                }
            ]);
        }
        if (currentQuestion === qaBlock.length - 1) {
            const finalPhrase = getPhrase(score);
            setPhrase(finalPhrase);
            setIsFinished(true);
            setIsOpenGo(true);
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };
    const closeModalGo = () => {
        setIsOpenGo(false)
        setShowAnswers(true)
        console.log("game over");
        
    }

    const closeModalAnswers = () => {
        setShowAnswers(false)
        console.log("answer cerrao");
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
            {isFinished && isOpenGo && <GameOver
                isOpen={isOpenGo}
                onClose={closeModalGo}
                content={
                    <>
                        <span>Has conseguido responder correctamente: {score} de 6 preguntas</span>
                        <h2>{phrase.title}</h2>
                        <p>{phrase.desc}</p>
                        <button onClick={closeModalGo} className="green">Ver resultados</button>
                    </>
                }
            ></GameOver>}
            {isFinished && showAnswers && <AnswersModal
                isOpen={showAnswers}
                onClose={closeModalAnswers}
                content={
                    <>
                        <h1>Verificá tus respuestas</h1>
                        <section>
                            {optionsPicked.map((picked, index) => (
                                <div key={index}>
                                    <p><strong className='yellow'><span>Pregunta: </span></strong>{picked.question}</p>
                                    <p><strong className='violet-text'><span>Respuesta Elegida: </span></strong>{picked.answer} - <span className={picked.isCorrect ? 'correct' : 'incorrect'}>({picked.isCorrect ? 'Correcto' : 'Incorrecto'})</span></p>
                                </div>
                            ))}

                        </section>
                        <button onClick={closeModalAnswers} className="green">Volver a empezar</button>
                    </>
                }
            ></AnswersModal>}
        </>
    );
}