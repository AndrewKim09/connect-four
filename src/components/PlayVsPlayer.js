import React from 'react'
import $ from 'jquery'

export const PlayVsPlayer = () => {
  return (
    <div role="Bodywrapper" className="flex flex-col items-center w-[100%] h-[100%] min-h-[100vh]">
        <div className="flex justify-between w-full mt-[53px] items-center">
            <button className="text-center w-[86px] h-[39px] bg-darkPurple rounded-[5000px] text-HeadingXs text-white ml-[28%]">
                MENU
            </button>

            <div alt="logo" className="image logo w-[52px] h-[52px]"></div>

            <button className="text-center h-[39px] px-[20px] bg-darkPurple rounded-[5000px] text-HeadingXs text-white mr-[28%]">
                RESTART
            </button>
        </div>

        <div role="gameBoardWrapper" className="flex items-center justify-center align-middle">
          <div role="leftPlayer" className="relative flex flex-col justify-center w-[9.8vw] h-[17.8vh] aspect-[141/160] mr-[60px] bg-white rounded-3xl shadow-[0_3px_0_5px_rgba(0,0,0)]">
            <div role="leftPlayerImage" className="image leftPlayerImage w-[100%] image-center h-[54px] rounded-full absolute top-0 mt-[-27px]"/>
            <p className="text-center text-HeadingSm">PLAYER 1</p>
            <p className="text-center text-HeadingLg">12</p>
          </div>

          <div role="gameBoard" className="relative flex w-auto mt-[5.67vh] z-10">
            
            <div role="backboard" className="backboard image h-[70.67vh] aspect-[632/636]"/>

            <div role="pieces" className="absolute h-[70.67vh] aspect-[632/636] grid grid-cols-7 grid-rows-6 pb-[15%]">
              
            </div>

            <div role="frontboard" className="frontboard image h-[70.67vh] aspect-[632/636] absolute"/>

            <div className ="redTurnBackground image h-[16.67vh] absolute bottom-[-10%] w-[100%]">
            </div>

            <div className=" redPicker image absolute h-[3.3vh] top-[-3%] ml-[4vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[14vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[23.5vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[33.5vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[43.3vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[53vh] aspect-square ">
            </div>

            <div className=" picker redPicker image absolute h-[3.3vh] top-[-3%] ml-[63vh] aspect-square ">
            </div>

          </div>


          <div role="rightPlayer" className="flex flex-col justify-center w-[9.8vw] h-[17.8vh] aspect-[141/160] ml-[60px] bg-white rounded-3xl shadow-[0_3px_0_5px_rgba(0,0,0)] relative">
              <div role="rightPlayerImage" className="rightPlayerImage image h-[54px] rounded-full absolute top-0 w-[100%] image-center mt-[-27px]"/>

              <p className="text-center text-HeadingSm">PLAYER 2</p>
              <p className="text-center text-HeadingLg">23</p>
          </div>
        </div>

          <div className="w-[100vw] h-[22.2vh] absolute bottom-0 bg-darkPurple z-[0]"></div>
    </div>
  )
}
