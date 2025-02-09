export interface Question {
    id: string
    question: string
    options: Option[]
    value: string
}

export interface Option {
    title: string
    isCorrect: boolean
}

export interface ButtonProps {
    children: React.ReactNode
    href: string
}

export interface QuestionValueProps {
    question: Question
    questions: Question[]
    questionIndex: number
}

export interface OptionButtonProps {
    onAnswer: (index: number, isCorrect: boolean) => void
    isCorrect: boolean | null
    selectedAnswer: number | null
    option: Option
    index: number
}
