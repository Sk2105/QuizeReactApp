import React from 'react'

export default function ResultView(probs) {
    return (
        <div className='w-full flex-col h-full flex justify-center items-center'>
            <img className='w-1/2 h-1/2' src="https://static.vecteezy.com/system/resources/previews/000/470/516/original/golden-winners-cup-vector.jpg" alt="" />
            <h1 className='text-3xl m-2 font-bold'>Congratulations</h1>
            <h1 className='text-2xl font-bold'>Your Score is {`${probs.score}/100`}</h1>
            <button onClick={
                () => {
                    probs.playAgain()
                }
            } className='m-2 bg-red-500 text-white p-2 rounded-lg'>Play Again</button>
        </div>
    )
}
