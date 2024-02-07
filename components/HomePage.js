import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();

  const onPlayVsPlayer = () => {
    navigate('/play-vs-player');
  }

  const onGameRules = () => {
    navigate('/game-rules');
  }
  return (
    <div className=" md:w-[480px] md:h-[435px] w-[100%] px-5 md:border-black md:border-[3px] md:m-auto rounded-[10%] flex flex-col md:shadow-[0_10px_0_0_rgba(0,0,0)] mb-[20vh] md:mb-auto">
        <div alt = "logo" className="homeLogo image w-[52px] h-[52px] m-auto mt-[70px]"/>

          <button className="flex justify-between md:w-[400px] w-[100%] mt-[3.62vh] h-[72px] bg-yellowPlayer rounded-xl px-[20px] items-center m-auto shadow-[0_10px_0_0_rgba(0,0,0.3)] border-2 border-black border-solid" onClick={() => {onPlayVsPlayer()}}>
              <span className="text-HeadingMd">PLAY VS PLAYER</span>
              <div className="playVsPlayerImage aspect-square h-[100%] image" alt="playVsPlayerImage"/>
          </button>

          <button className="flex justify-between md:w-[400px] w-[100%] mt-[3.65vh] h-[72px] bg-white rounded-xl px-[20px] items-center m-auto md:mt-0 shadow-[0_10px_0_0_rgba(0,0,0.3)] border-2 border-black border-solid" onClick={() => {onGameRules()}}>
              <span className="text-HeadingMd">GAME RULES</span>
              <div></div>
          </button>
    </div>
  )
}
