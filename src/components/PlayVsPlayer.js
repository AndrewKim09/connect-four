import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export const PlayVsPlayer = () => {
  var redTurn = true;
  const [playerTurnText, setPlayerTurnText] = useState("PLAYER 1'S TURN");
  var lastMove;
  var timePassed = 0;
  const [timer, setTimer] = useState(15);
  const MAXTIME = 15;
  var piecesPlayed = 0;

  const checkWin = () => {
    console.log("checking for win");
    console.log(redTurn ? "red" : "yellow")
    var horizontalPieces = []
    var horizontalString =""
    var verticalPieces = []
    var verticalString = ""
    var diagonalPieces = [] //from top left to bottom right
    var diagonalString = ""
    var secondDiagonalPieces = [] //from bottom left to top right
    var secondDiagonalString = ""

    //get horizontal and vertical
    for(let i = 1; i < 8; i++){
      horizontalPieces.push($(".row-"+lastMove.row+".col-"+i).hasClass(redTurn ? "red" : "yellow") == redTurn);
      if(i < 7)
        verticalPieces.push($(".row-"+i+".col-"+lastMove.column).hasClass(redTurn ? "red" : "yellow") == redTurn);
    }

    //get top left to bottom right
    var count = 0;
    while($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)-count)).length > 0){
      diagonalPieces.push($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)-count)).hasClass(redTurn ? "red" : "yellow") == redTurn);
      count++;
    }
    while($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)+count)).length > 0){
      diagonalPieces.push($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)+count)).hasClass(redTurn ? "red" : "yellow") == redTurn);
      count++;
    }

    count = 0;

    //get bottom left to top right
    while($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)-count)).length > 0){
      secondDiagonalPieces.push($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)-count)).hasClass(redTurn ? "red" : "yellow") == redTurn);
      count++;
    }
    while($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)+count)).length > 0){
      secondDiagonalPieces.push($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)+count)).hasClass(redTurn ? "red" : "yellow") == redTurn);
      count++;
    }

    console.log(horizontalPieces);
    console.log(verticalPieces);
    console.log(diagonalPieces);
    console.log(secondDiagonalPieces);

    for(let i = 0; i <= 7; i++){
      horizontalString += horizontalPieces[i];
      if(i < 7)
        verticalString += verticalPieces[i]
    }

    for(let i = 0; i < diagonalPieces.length; i++){
      diagonalString += diagonalPieces[i];
      secondDiagonalString += secondDiagonalPieces[i];
    }


    if(redTurn){
      if(horizontalString.includes("true".repeat(4)) || verticalString.includes("true".repeat(4)) || diagonalString.includes("true".repeat(4)) || secondDiagonalString.includes("true".repeat(4))){
        console.log("WINNER")
        if(redTurn){
          setPlayerTurnText("PLAYER 1 WINS")
        }
        else{
          setPlayerTurnText("PLAYER 2 WINS")
        }
      }
    }

    else{
      if(horizontalString.includes("false".repeat(4)) || verticalString.includes("false".repeat(4)) || diagonalString.includes("false".repeat(4)) || secondDiagonalString.includes("false".repeat(4))){
        console.log("WINNER")
        if(redTurn){
          setPlayerTurnText("PLAYER 1 WINS")
        }
        else{
          setPlayerTurnText("PLAYER 2 WINS")
        }
      }
    }
  }

  const switchTurns = () => {
    redTurn = !redTurn;
    console.log(redTurn)
    console.log("Switching turns")
    timePassed = 0;
    setTimer(15)

    if(redTurn){
      console.log("Switching to red")
      $(".picker").each(function() {
        $(this).removeClass("yellowPicker")
        $(this).addClass("redPicker")
      })
      $(".turn").removeClass("yellowTurnBackground")
      $(".turn").addClass("redTurnBackground")
      setPlayerTurnText("PLAYER 1'S TURN")
    }
    else{
      console.log("Switching to yellow")
      $(".picker").each(function() {
        $(this).removeClass("redPicker")
        $(this).addClass("yellowPicker")
      })
      $(".turn").removeClass("redTurnBackground")
      $('.turn').addClass("yellowTurnBackground")
      setPlayerTurnText("PLAYER 2'S TURN")
    }


  }

  useEffect(() => {

    $(document).ready(function() {


      setInterval(function() {
        timePassed += 1;
        setTimer(MAXTIME - timePassed)

        if(timePassed > 15){
          switchTurns();
        }
      }, 1000)

      $(".frontPieces").children().each(function() {
        const column = $(this).attr("column")
        $(this).hover(function() {
          $(".picker"+column).removeClass("hidden")
        },
        function() {
          $(".picker"+column).addClass("hidden")
        }
        )

        $(this).on("click", function(){
          for(let i = 1; i < 7; i++){
            if($(".row-"+i+".col-"+column).hasClass("empty")){
              $(".row-"+i+".col-"+column).removeClass("empty")
              $(".row-"+i+".col-"+column).addClass(redTurn ? "red" : "yellow");

              lastMove = {
                row: `${i}`,
                column: column
              }
              checkWin();
              piecesPlayed++;

              switchTurns();
              break;
            }
          }


        })
      })
      

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
            <div role="frontboard" className="frontboard image h-[70.67vh] aspect-[632/636] absolute z-20"/>

            <div role="pieces" className="pieces absolute h-[70.67vh] aspect-[632/636] grid grid-cols-7 grid-rows-6 pb-[17%] pt-[2%] cursor-pointer">

              <div className="row-6 col-1 empty" column="1"></div>
              <div className="row-6 col-2 empty" column="2"></div>
              <div className="row-6 col-3 empty" column="3"></div>
              <div className="row-6 col-4 empty" column="4"></div>
              <div className="row-6 col-5 empty" column="5"></div>
              <div className="row-6 col-6 empty" column="6"></div>
              <div className="row-6 col-7 empty" column="7"></div>
              
              <div className="row-5 col-1 empty" column="1"></div>
              <div className="row-5 col-2 empty" column="2"></div>
              <div className="row-5 col-3 empty" column="3"></div>
              <div className="row-5 col-4 empty" column="4"></div>
              <div className="row-5 col-5 empty" column="5"></div>
              <div className="row-5 col-6 empty" column="6"></div>
              <div className="row-5 col-7 empty" column="7"></div>
              
              <div className="row-4 col-1 empty" column="1"></div>
              <div className="row-4 col-2 empty" column="2"></div>
              <div className="row-4 col-3 empty" column="3"></div>
              <div className="row-4 col-4 empty" column="4"></div>
              <div className="row-4 col-5 empty" column="5"></div>
              <div className="row-4 col-6 empty" column="6"></div>
              <div className="row-4 col-7 empty" column="7"></div>
              
              <div className="row-3 col-1 empty" column="1"></div>
              <div className="row-3 col-2 empty" column="2"></div>
              <div className="row-3 col-3 empty" column="3"></div>
              <div className="row-3 col-4 empty" column="4"></div>
              <div className="row-3 col-5 empty" column="5"></div>
              <div className="row-3 col-6 empty" column="6"></div>
              <div className="row-3 col-7 empty" column="7"></div>
              
              <div className="row-2 col-1 empty" column="1"></div>
              <div className="row-2 col-2 empty" column="2"></div>
              <div className="row-2 col-3 empty" column="3"></div>
              <div className="row-2 col-4 empty" column="4"></div>
              <div className="row-2 col-5 empty" column="5"></div>
              <div className="row-2 col-6 empty" column="6"></div>
              <div className="row-2 col-7 empty" column="7"></div>
              
              <div className="row-1 col-1 empty" column="1"></div>
              <div className="row-1 col-2 empty" column="2"></div>
              <div className="row-1 col-3 empty" column="3"></div>
              <div className="row-1 col-4 empty" column="4"></div>
              <div className="row-1 col-5 empty" column="5"></div>
              <div className="row-1 col-6 empty" column="6"></div>
              <div className="row-1 col-7 empty" column="7"></div>
            </div>

            <div role="Frontpieces" className="frontPieces absolute h-[70.67vh] aspect-[632/636] grid grid-cols-7 pb-[17%] pt-[2%] cursor-pointer z-40">
            <div className="col-1" column="1"></div>
            <div className="col-2" column="2"></div>
            <div className="col-3" column="3"></div>
            <div className="col-4" column="4"></div>
            <div className="col-5" column="5"></div>
            <div className="col-6" column="6"></div>
            <div className="col-7" column="7"></div>
            </div>



              <div className ="turn redTurnBackground image h-[16.67vh] absolute bottom-[-10%] w-[30%] ml-[35%] flex flex-col z-30">
                <p className='text-HeadingXs mt-[20%] text-center'>{playerTurnText}</p>
                <p className="text-center text-HeadingLg">{timer}</p>
              </div>

              <div className="hidden picker picker1 redPicker image absolute h-[3.3vh] top-[-3%] ml-[4vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker2 redPicker image absolute h-[3.3vh] top-[-3%] ml-[14vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker3 redPicker image absolute h-[3.3vh] top-[-3%] ml-[23.5vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker4 redPicker image absolute h-[3.3vh] top-[-3%] ml-[33.5vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker5 redPicker image absolute h-[3.3vh] top-[-3%] ml-[43.3vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker6 redPicker image absolute h-[3.3vh] top-[-3%] ml-[53vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker7 redPicker image absolute h-[3.3vh] top-[-3%] ml-[63vh] aspect-square z-30">
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
