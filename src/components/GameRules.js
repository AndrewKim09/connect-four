import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GameRules = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }
  return (
    <div className=" h-[63.22vh] border-black border-[3px] m-auto rounded-[10%] flex flex-col shadow-[0_10px_0_0_rgba(0,0,0)] md:aspect-[480/569] bg-white relative">
        <h3 className="text-center text-HeadingLg mt-[3.33vh]">RULES</h3>


        <div className="flex flex-col justify-between px-7">
            <p className='text-HeadingSm text-lightPurple'>OBJECTIVE</p>
            <p className="text-black mt-[1.78vh] text-paragraph">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <p className="text-HeadingSm text-lightPurple mt-[3.56vh]">HOW TO PLAY</p>
            <div className="flex mt-[1.78vh]"><b className="mr-4 font-bold text-paragraph">1</b><span>Red goes first in the first game.</span></div>
            <div className="flex mt-[1.22vh]"><b className="mr-4 font-bold text-paragraph">2</b><span>Players must alternate turns, and only one disc can be dropped in each turn. </span></div>
            <div className="flex mt-[1.22vh]"><b className="mr-4 font-bold text-paragraph">3</b><span>The game ends when there is a 4-in-a-row or a stalemate.</span></div>
            <div className="flex mt-[1.22vh]"><b className="mr-4 font-bold text-paragraph">4</b><span>The starter of the previous game goes second on the next game.</span></div>

            <button onClick={() => {onClick()}} className="checkMarkButton h-[7.1vh] rounded-full aspect-square absolute bottom-[-3.55vh] left-[50%] translate-x-[-50%]"></button>
        </div>
    </div>
  )
}
