import Header from '../components/ui/Header'
import { QAProps } from '../config/types/QAProps'
import Questiones from '../config/Questions'
import { useState } from 'react'
export default function QAGamePlay() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const blocks = [1, 2, 3];
    const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
    const qaBlock = Questiones.filter(question => question.block === blockIndex);
    console.log(qaBlock);


    return (
        <>
            <Header />
            <main id='game-screen'>
                <div id="top">
                    <h4>Pregunta 1 de 6</h4>
                    <div id='question-display'>
                        <h2>Caca?</h2>
                    </div>
                </div>
                <span id='Timer'></span>
                <div id='buttons'>
                    <button>asd</button>
                    <button>asd</button>
                    <button>asd</button>
                    <button>asd</button>
                </div>  
            </main>
        </>
    )
}
