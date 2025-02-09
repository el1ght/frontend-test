import React from 'react'
import { useCallback } from 'react'
import { OptionButtonProps } from '@/app/types'

const alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

const OptionButton: React.FC<OptionButtonProps> = ({
    onAnswer,
    isCorrect,
    selectedAnswer,
    option,
    index,
}) => {
    const getButtonClass = useCallback(
        (index: number): string => `
        relative transition cursor-pointer px-[32px] py-[20] border rounded-xl max-md:px-[24px] max-md:py-[20px] 
        before:w-[17px] before:h-[1px] before:absolute  before:top-[50%] before:left-[-17px]
        after:w-[17px] after:h-[1px] after:absolute  after:top-[50%] after:right-[-17px]
    ${
        selectedAnswer === null
            ? 'hover:border-[#FF8B37] hover:after:bg-[#FF8B37] hover:before:bg-[#FF8B37] border-[#D0D0D8] before:bg-[#D0D0D8] after:bg-[#D0D0D8]'
            : selectedAnswer === index
              ? isCorrect
                  ? 'bg-[#E6FAEA] border-[#47D867] after:bg-[#47D867] before:bg-[#47D867]'
                  : 'bg-[#FDEEED] border-[#EC6259] after:bg-[#EC6259] before:bg-[#EC6259]'
              : 'border-[#D0D0D8] before:bg-[#D0D0D8] after:bg-[#D0D0D8]'
    }
    ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}
`,
        [selectedAnswer, isCorrect]
    )

    return (
        <button
            onClick={() => onAnswer(index, option.isCorrect)}
            className={getButtonClass(index)}
            disabled={selectedAnswer !== null}
        >
            <p className="transition flex items-center text-[20px] max-md:text-[14px]">
                {' '}
                <span className="transition text-[20px] mr-[10px] font-semibold text-[#FF8B37]">
                    {alphabet[index]}
                </span>
                {option.title}
            </p>
        </button>
    )
}

export default OptionButton
