import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export const PlayVsPlayer = () => {
  const [redTurn, setRedTurn] = useState(true)
  const [timer, setTimer] = useState(15);
  const [startTime, setStartTime] = useState({});
  const MAXTIME = 15;

  useEffect(() => {
    const newTime = new Date().getTime();
    console.log("newTime: " + newTime)
    setStartTime(newTime);
    console.log("startTime: " + startTime)
  }, [redTurn])

  useEffect(() => {

    $(document).ready(function() {

      setInterval(function() {
        console.log("startTime: " + startTime)

        var now = new Date().getTime();
        var distance = now - startTime;
        console.log("" + now - startTime )
        setTimer(MAXTIME - Math.floor(distance / 1000));

        if(Math.floor(distance / 1000) > 15){
          setRedTurn(!redTurn)
        }
      }, 1000)


      $(".col-1").each(function() {
        $(this).hover(function() {
          $(".picker1").removeClass("hidden")
        },
        function() {
          $(".picker1").addClass("hidden")
        }
        )

        $(this).on("click",function() {
          for(let i = 1 ; i <= 7 ;i++){
            if($(".row-"+i+".col-1").hasClass("empty")){
              
              $(".row-"+i+".col-1").removeClass("empty")
              $(".row-"+i+".col-1").addClass("red")
              break;
            }
          }
        })
      });

      $(".col-2").each(function() {
        $(this).hover(function() {
          $(".picker2").removeClass("hidden")
        },
        function() {
          $(".picker2").addClass("hidden")
        }
        )
      });

      $(".col-3").each(function() {
        $(this).hover(function() {
          $(".picker3").removeClass("hidden")
        },
        function() {
          $(".picker3").addClass("hidden")
        }
        )
      });

      $(".col-4").each(function() {
        $(this).hover(function() {
          $(".picker4").removeClass("hidden")
        },
        function() {
          $(".picker4").addClass("hidden")
        }
        )
      });

      $(".col-5").each(function() {
        $(this).hover(function() {
          $(".picker5").removeClass("hidden")
        },
        function() {
          $(".picker5").addClass("hidden")
        }
        )
      });

      $(".col-6").each(function() {
        $(this).hover(function() {
          $(".picker6").removeClass("hidden")
        },
        function() {
          $(".picker6").addClass("hidden")
        }
        )
      });

      $(".col-7").each(function() {
        $(this).hover(function() {
          $(".picker7").removeClass("hidden")
        },
        function() {
          $(".picker7").addClass("hidden")
        }
        )
      });
    })
  }, [])


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
            <div role="frontboard" className="frontboard image h-[70.67vh] aspect-[632/636] absolute"/>

            <div role="pieces" className="pieces absolute h-[70.67vh] aspect-[632/636] grid grid-cols-7 grid-rows-6 pb-[15%] cursor-pointer">
              <div className="row-7 col-1 empty"></div>
              <div className="row-7 col-2 empty"></div>
              <div className="row-7 col-3 empty"></div>
              <div className="row-7 col-4 empty"></div>
              <div className="row-7 col-5 empty"></div>
              <div className="row-7 col-6 empty"></div>
              <div className="row-7 col-7 empty"></div>

              <div className="row-6 col-1 empty"></div>
              <div className="row-6 col-2 empty"></div>
              <div className="row-6 col-3 empty"></div>
              <div className="row-6 col-4 empty"></div>
              <div className="row-6 col-5 empty"></div>
              <div className="row-6 col-6 empty"></div>
              <div className="row-6 col-7 empty"></div>
              
              <div className="row-5 col-1 empty"></div>
              <div className="row-5 col-2 empty"></div>
              <div className="row-5 col-3 empty"></div>
              <div className="row-5 col-4 empty"></div>
              <div className="row-5 col-5 empty"></div>
              <div className="row-5 col-6 empty"></div>
              <div className="row-5 col-7 empty"></div>
              
              <div className="row-4 col-1 empty"></div>
              <div className="row-4 col-2 empty"></div>
              <div className="row-4 col-3 empty"></div>
              <div className="row-4 col-4 empty"></div>
              <div className="row-4 col-5 empty"></div>
              <div className="row-4 col-6 empty"></div>
              <div className="row-4 col-7 empty"></div>
              
              <div className="row-3 col-1 empty"></div>
              <div className="row-3 col-2 empty"></div>
              <div className="row-3 col-3 empty"></div>
              <div className="row-3 col-4 empty"></div>
              <div className="row-3 col-5 empty"></div>
              <div className="row-3 col-6 empty"></div>
              <div className="row-3 col-7 empty"></div>
              
              <div className="row-2 col-1 empty"></div>
              <div className="row-2 col-2 empty"></div>
              <div className="row-2 col-3 empty"></div>
              <div className="row-2 col-4 empty"></div>
              <div className="row-2 col-5 empty"></div>
              <div className="row-2 col-6 empty"></div>
              <div className="row-2 col-7 empty"></div>
              
              <div className="row-1 col-1 empty"></div>
              <div className="row-1 col-2 empty"></div>
              <div className="row-1 col-3 empty"></div>
              <div className="row-1 col-4 empty"></div>
              <div className="row-1 col-5 empty"></div>
              <div className="row-1 col-6 empty"></div>
              <div className="row-1 col-7 empty"></div>
            </div>



              <div className ="redTurnBackground image h-[16.67vh] absolute bottom-[-10%] w-[30%] ml-[35%] flex flex-col">
                <p className='text-HeadingXs mt-[20%] text-center'>{redTurn ? "PLAYER 1'S TURN" : "PLAYER 2'S TURN"}</p>
                <p className="text-center text-HeadingLg">{timer}</p>
              </div>

              <div className="hidden picker picker1 redPicker image absolute h-[3.3vh] top-[-3%] ml-[4vh] aspect-square ">
              </div>

              <div className="hidden picker picker2 redPicker image absolute h-[3.3vh] top-[-3%] ml-[14vh] aspect-square ">
              </div>

              <div className="hidden picker picker3 redPicker image absolute h-[3.3vh] top-[-3%] ml-[23.5vh] aspect-square ">
              </div>

              <div className="hidden picker picker4 redPicker image absolute h-[3.3vh] top-[-3%] ml-[33.5vh] aspect-square ">
              </div>


              <div className="hidden picker picker5 redPicker image absolute h-[3.3vh] top-[-3%] ml-[43.3vh] aspect-square ">
              </div>


              <div className="hidden picker picker6 redPicker image absolute h-[3.3vh] top-[-3%] ml-[53vh] aspect-square ">
              </div>


              <div className="hidden picker picker7 redPicker image absolute h-[3.3vh] top-[-3%] ml-[63vh] aspect-square ">
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
