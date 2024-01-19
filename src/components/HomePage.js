import React from 'react'

export const HomePage = () => {
  return (
    <div className=" w-[480px] h-[435px] border-black border-[3px] m-auto rounded-[10%] flex flex-col">
        <img src='../assets/images/logo.svg' alt = "logo" className="w-[52px] h-[52px] m-auto mt-[70px]"></img>

        <div className="flex justify-between w-[400px] h-[72px] bg-yellowPlayer rounded-xl px-[20px] items-center  mx-[40px] shadow-[0_50px_60px_-15px_rgba(0,0,0,0)]">
            <span className="text-HeadingMd">PLAY VS PLAYER</span>
            <img src='../assets/images/player-vs-player.svg' alt = "player-vs-player" className="w-[82px] h-[34px]"></img>
        </div>

        <div className="flex justify-between w-[400px] h-[72px] bg-white rounded-xl px-[20px] items-center mx-[40px] mt-[30px] mb-[60px]">
            <span className="text-HeadingMd">GAME RULES</span>
            <div></div>
        </div>
    </div>
  )
}
