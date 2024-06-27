import Header from '../components/ui/Header'
import { QAProps } from '../config/types/QAProps'
import Questiones from '../config/Questions'
import { useState } from 'react'
export default function QAGamePlay() {
    const [correctAnswer, setCorrectAnswer] = useState<QAProps>()
    const blocks = [1, 2, 3];
    const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
    const qaBlock = Questiones.filter(question => question.block === blockIndex);
    console.log(qaBlock);
    

    return (
        <>
            <Header />
            
        </>
    )
}
