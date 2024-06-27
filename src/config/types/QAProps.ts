export interface QAProps {
    id: number
    question: string
    answers: [key: number, string]
    correctAnswer: number
}