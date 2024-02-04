import React from 'react'

export const PauseMenu = () => {
  return (
    <div className = "z-40 fixed m-auto top-[50%] bottom-[50%] flex flex-col justify-evenly h-[54.56vh] w-[53.3vh] bg-lightPurple border-solid border-4 border-black shadow-[0_8px_0_0px_rgba(0,0,0)] px-[4.44vh] rounded-3xl">
        <h2 className="text-center text-white text-HeadingLg">PAUSE</h2>
        <button className="rounded-[25px] bg-white text-black text-HeadingSm h-[8vh] shadow-[0_8px_0_0px_rgba(0,0,0)] border-solid border-4 border-black">CONTINUE GAME</button>
        <button className="rounded-[25px] bg-white text-black text-HeadingSm h-[8vh] shadow-[0_8px_0_0px_rgba(0,0,0)] border-solid border-4 border-black">RESTART</button>
        <button className="rounded-[25px] bg-redPlayer text-white text-HeadingSm h-[8vh] shadow-[0_8px_0_0px_rgba(0,0,0)] border-solid border-4 border-black">MAIN MENU</button>
    </div>
  )
}
