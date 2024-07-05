import React from 'react'

export default function QuizItem(probs) {
    const [isClicked, setIsClicked] = React.useState(false)
    return (
        <div className='bg-white rounded-xl shadow-sm shadow-white p-3 flex justify-start items-center  flex-col'>
            <h1>
               Score :  {probs.score}
            </h1>
            <h1 className='text-3xl text-start p-2'>
                {
                    probs.question.question
                }
            </h1>
            {
                probs.question.options.map((option) => {
                    return (
                        <div onClick={() => {
                            setIsClicked(true)
                            probs.onOptionClick(option)
                        }} className={`text-[16px] w-full p-2 m-1 border-2 rounded-md border-solid
                             ${isClicked
                                ?
                                (option === probs.question.answer ?
                                    'border-green-500 text-green-500 font-bold bg-green-100 hover:bg-green-200'
                                    : 'bg-red-100 text-red-500 border-red-500 hover:bg-red-200') : ""} hover:bg-gray-300`}>
                            {option}
                        </div>
                    )
                })
            }

        </div>
    )
}
