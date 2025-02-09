'use client'

import React, { useCallback } from 'react'
import { QuestionValueProps } from '@/app/types'

const QuestionValue: React.FC<QuestionValueProps> = ({
    question,
    questions,
    questionIndex,
}) => {
    function numberWithCommas(x: string | number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const getValueClass = useCallback((): string => {
        const currentId: string | number | undefined =
            questions[questionIndex]?.id
        const questionId: string | number = question.id
        const isActive: boolean = currentId === questionId
        const isBefore: boolean =
            questions.findIndex((q) => q.id === questionId) < questionIndex
        const isAfter: boolean =
            questions.findIndex((q) => q.id === questionId) > questionIndex

        return `
        relative border rounded-lg px-[100px] py-[8px] text-[20px] font-[400] max-md:w-full flex w-full justify-center items-center
        before:absolute before:h-[1px] before:w-[40px] before:top-1/2 before:left-[-40px]
        after:absolute after:h-[1px] after:w-[40px] after:top-1/2 after:right-[-40px]
        ${isActive ? 'border-[#FF8B37] text-[#FF8B37] before:bg-[#FF8B37] after:bg-[#FF8B37]' : ''}
        ${isBefore ? 'border-[#D0D0D8] text-[#D0D0D8] before:bg-[#D0D0D8] after:bg-[#D0D0D8]' : ''}
        ${isAfter ? 'border-black text-black before:bg-black after:bg-black' : ''}`
    }, [question, questionIndex, questions])

    return (
        <div className={getValueClass()}>
            {numberWithCommas(question.value)}
        </div>
    )
}

export default QuestionValue
