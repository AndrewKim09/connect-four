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
    <div className=" w-[480px] h-[435px] border-black border-[3px] m-auto rounded-[10%] flex flex-col shadow-[0_10px_0_0_rgba(0,0,0)]">
        <div alt = "logo" className="homeLogo image w-[52px] h-[52px] m-auto mt-[70px]"/>

        <div role="buttonWraper" className="flex justify-center w-[407px] h-[85px] pb-[10px] pt-[3px] rounded-2xl items-center mx-[40px] bg-black">
          <button className="flex justify-between w-[400px] h-[72px] bg-yellowPlayer rounded-xl px-[20px] items-center" onClick={() => {onPlayVsPlayer()}}>
              <span className="text-HeadingMd">PLAY VS PLAYER</span>
              <div className="playVsPlayerImage h-[30px] w-[30px] image" alt="playVsPlayerImage"/>
          </button>
        </div>

        <div role="buttonWraper" className="flex justify-center w-[407px] h-[85px] pb-[10px] pt-[3px] rounded-2xl items-center mx-[40px] mt-[15px] mb-[60px] bg-black">
          <button className="flex justify-between w-[400px] h-[72px] bg-white rounded-xl px-[20px] items-center" onClick={() => {onGameRules()}}>
              <span className="text-HeadingMd">GAME RULES</span>
              <div></div>
          </button>
        </div>
    </div>
  )
}
