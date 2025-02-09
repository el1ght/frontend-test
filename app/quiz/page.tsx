'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import questions from '../questions.json'
import OptionButton from '../components/ui/OptionButton'
import QuestionValue from '../components/ui/QuestionValue'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Option, Question } from '@/app/types'

const QuizPage: React.FC = () => {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    useEffect(() => {
        sessionStorage.removeItem('totalAward')
    }, [])

    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [totalAward, setTotalAward] = useState<number>(0)

    const currentQuestion: Question = useMemo(
        () => questions[questionIndex] as Question,
        [questionIndex]
    )

    useEffect(() => {
        sessionStorage.setItem('totalAward', totalAward.toString())
    }, [totalAward])

    useEffect(() => {
        const preventBack = () => {
            history.pushState(null, '', window.location.href)
        }

        window.addEventListener('popstate', preventBack)
        preventBack()

        return () => window.removeEventListener('popstate', preventBack)
    }, [])

    const handleAnswer = useCallback(
        (index: number, isCorrect: boolean) => {
            setSelectedAnswer(index)
            setIsCorrect(isCorrect)

            setTimeout(() => {
                if (isCorrect) {
                    const newTotal =
                        totalAward + parseInt(currentQuestion.value)
                    setTotalAward(newTotal)
                    sessionStorage.setItem('totalAward', newTotal.toString())

                    if (questionIndex < questions.length - 1) {
                        setQuestionIndex((prev) => prev + 1)
                        setSelectedAnswer(null)
                        setIsCorrect(null)
                    } else {
                        router.push(
                            `/gameover?award=${totalAward + parseInt(currentQuestion.value)}`
                        )
                    }
                } else {
                    router.push(`/gameover?award=${totalAward}`)
                }
            }, 1000)
        },
        [questionIndex, totalAward, currentQuestion.value, router]
    )

    return (
        <div className="h-[100vh] flex">
            <div className="py-[100px] pl-[80px] pr-[140px] flex flex-1 flex-col h-full justify-between max-md:px-[18px] max-lg:px-[18px] overflow-scroll">
                <h2 className="text-[32px] font-semibold max-md:text-center max-md:text-[18px] max-lg:pb-[50px] max-md:pb-[100px]">
                    {currentQuestion.question}
                </h2>
                <div className="grid lg:grid-cols-2 gap-8 max-md:gap-3 ">
                    {currentQuestion.options.map(
                        (option: Option, index: number) => (
                            <OptionButton
                                onAnswer={handleAnswer}
                                isCorrect={isCorrect}
                                selectedAnswer={selectedAnswer}
                                option={option}
                                index={index}
                                key={index}
                            />
                        )
                    )}
                </div>
            </div>

            <div className="py-20 bg-white px-[40px] flex flex-col-reverse items-center gap-3 overflow-scroll max-lg:hidden">
                {questions.map((question: Question, index: number) => (
                    <QuestionValue
                        key={index}
                        question={question}
                        questions={questions as Question[]}
                        questionIndex={questionIndex}
                    />
                ))}
            </div>

            {openMenu && (
                <div className="py-20 bg-white px-[40px] flex flex-col-reverse items-center gap-3 overflow-scroll max-md:absolute max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0">
                    {questions.map((question: Question, index: number) => (
                        <QuestionValue
                            key={index}
                            question={question}
                            questions={questions as Question[]}
                            questionIndex={questionIndex}
                        />
                    ))}
                </div>
            )}
            <div
                onClick={() => setOpenMenu(!openMenu)}
                className={'absolute top-4 right-4 lg:hidden'}
            >
                {openMenu ? (
                    <CgClose size={30} />
                ) : (
                    <RxHamburgerMenu size={30} />
                )}
            </div>
        </div>
    )
}

export default QuizPage
