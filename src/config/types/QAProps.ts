export interface QAProps {
    id: number
    question: string
    block: number
    answers: [string, boolean]
    correctAnswer: number
}