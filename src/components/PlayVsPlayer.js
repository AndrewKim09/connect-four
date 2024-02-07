import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { PauseMenu } from './PauseMenu';

export const PlayVsPlayer = () => {
  var redTurn = true;
  const [playerTurnText, setPlayerTurnText] = useState("PLAYER 1'S TURN");
  const [pauseMenu, setPauseMenu] = useState(false);
  var playerOneScore = 0;
  var playerTwoScore = 0;
  const [playerOneScoreView, setPlayerOneScoreView] = useState(0);
  const [playerTwoScoreView, setPlayerTwoScoreView] = useState(0);
  var lastMove;
  var timePassed = 0;
  var winner = false;
  var pause = false;
  var nextPlayer;
  const [timer, setTimer] = useState("15s");
  const MAXTIME = 15;
  var piecesPlayed = 0;
  
  const onMenuClick = () => {
    pause = !pause;
    $(".pauseMenuBackground").toggleClass("hidden");
    setPauseMenu(true);
  }
  
  const onContinue = () => {
    pause = false;
    $(".pauseMenuBackground").toggleClass("hidden");
    setPauseMenu(false);
  }

  const onRestart = () => {
    resetBoard();
    setPauseMenu(false);
  }

  const onMainMenu = () => {
    window.location.href = "http://localhost:3000/";
  }

  const findWinningPieces = (pieces, bool) => {
    $(".bottomColor").addClass("bottomUpAnimation")
      $(".turn").addClass("bottomUpAnimation")
      $(".playAgainBox").removeClass("hidden");
      $(".turn").addClass("winningBox")
      $(".playerText").removeClass("mt-[20%]");
      $(".playerText").addClass("mt-[1.9vh]");
      
      if($(".turn").hasClass("redTurnBackground")){
        nextPlayer = "PLAYER 1";
        $(".turn").removeClass("redTurnBackground")
      }
      else{
        nextPlayer = "PLAYER 2";
        $(".turn").removeClass("yellowTurnBackground")
      }
      
    console.log("finding winning pieces")
    for(let i = 0; i < pieces.length - 3; i++){
      if(pieces.slice(i, i+4).every((piece) => piece.hasClass(redTurn ? "red" : "yellow") == redTurn == bool)){
        for(let j = i; j < i+4; j++){
          pieces[j].children().addClass("winningPiece")
        }
        break;
      }
    }

  }


  const resetBoard = () => {
    $(".pieces").children().each(function() {
      $(this).removeClass("red")
      $(this).removeClass("yellow")
      $(this).addClass("empty")
      $(this).children().removeClass("winningPiece")
    });
    piecesPlayed = 0;

    $(".bottomColor").removeClass("bottomUpAnimation")
    $(".turn").removeClass("bottomUpAnimation")
    $(".playAgainBox").addClass("hidden");
    $(".bottomColor").removeClass("bg-redPlayer")
    $(".bottomColor").removeClass("bg-yellowPlayer")
    $(".bottomColor").addClass("bg-darkPurple")
    $(".turn").removeClass("winningBox")
    $(".playerText").removeClass("mt-[1.9vh]");
    $(".playerText").addClass("mt-[20%]");



    if(nextPlayer == "PLAYER 1"){
      redTurn = false;
      $(".turn").addClass("yellowTurnBackground")
      $(".picker").each(function() {
        $(this).removeClass("redPicker")
        $(this).addClass("yellowPicker")
      })
      setPlayerTurnText("PLAYER 2'S TURN");
    }
    else{
      redTurn = true;
      $(".turn").addClass("redTurnBackground")
      $(".picker").each(function() {
        $(this).removeClass("yellowPicker")
        $(this).addClass("redPicker")
      })
      setPlayerTurnText("PLAYER 1'S TURN");
    } 


    timePassed = 0;
    setTimer("15s");
    winner = false;
    pause = false;
  }

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
      horizontalPieces.push($(".row-"+lastMove.row+".col-"+i));
      if(i < 7)
        verticalPieces.push($(".row-"+i+".col-"+lastMove.column));
    }

    //get top left to bottom right
    var count = 0;
    while($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)-count)).length > 0){
      diagonalPieces.unshift($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)-count)));
      count++;
    }
    count = 1;
    while($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)+count)).length > 0){
      diagonalPieces.push($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)+count)));
      count++;
    }

    count = 0;

    //get bottom left to top right
    while($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)-count)).length > 0){
      secondDiagonalPieces.unshift($(".row-"+(parseInt(lastMove.row)-count)+".col-"+(parseInt(lastMove.column)-count)));
      count++;
    }
    count = 1;
    while($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)+count)).length > 0){
      secondDiagonalPieces.push($(".row-"+(parseInt(lastMove.row)+count)+".col-"+(parseInt(lastMove.column)+count)));
      count++;
    }

    console.log(horizontalPieces);
    console.log(verticalPieces);
    console.log(diagonalPieces);
    console.log(secondDiagonalPieces);

    for(let i = 0; i < 7; i++){
      horizontalString += horizontalPieces[i].hasClass(redTurn ? "red" : "yellow") == redTurn;
      if(i < 6)
        verticalString += verticalPieces[i].hasClass(redTurn ? "red" : "yellow") == redTurn;
    }

    for(let i = 0; i < diagonalPieces.length; i++){
      diagonalString += diagonalPieces[i].hasClass(redTurn ? "red" : "yellow") == redTurn;
    }
    for(let i = 0; i < secondDiagonalPieces.length; i++){
      secondDiagonalString += secondDiagonalPieces[i].hasClass(redTurn ? "red" : "yellow") == redTurn;
    }




    if(redTurn){
      if(horizontalString.includes("true".repeat(4)) || verticalString.includes("true".repeat(4)) || diagonalString.includes("true".repeat(4)) || secondDiagonalString.includes("true".repeat(4))){
        console.log("WINNER")
        setPlayerTurnText("PLAYER 1")
        setTimer("WINS");
        $(".bottomColor").removeClass("bg-darkPurple")
        $(".bottomColor").addClass("bg-redPlayer")
        winner = true;
        pause = true;
        playerOneScore = (playerOneScore + 1);
        setPlayerOneScoreView(playerOneScore);

        if(horizontalString.includes("true".repeat(4))){
          findWinningPieces(horizontalPieces, true)
        }
        else if(verticalString.includes("true".repeat(4))){
          findWinningPieces(verticalPieces, true)
        }

        else if(diagonalString.includes("true".repeat(4))){
          findWinningPieces(diagonalPieces, true);
        }

        else if(secondDiagonalString.includes("true".repeat(4))){
          findWinningPieces(secondDiagonalPieces, true)
        }
      }
    }

    else{
      if(horizontalString.includes("false".repeat(4)) || verticalString.includes("false".repeat(4)) || diagonalString.includes("false".repeat(4)) || secondDiagonalString.includes("false".repeat(4))){
        console.log("WINNER")
          setPlayerTurnText("PLAYER 2")
          setTimer("WINS");
          $(".bottomColor").removeClass("bg-darkPurple")
          $(".bottomColor").addClass("bg-yellowPlayer")
          winner = true;
          pause = true;
          playerTwoScore = (playerTwoScore + 1);
          setPlayerTwoScoreView(playerTwoScore);

          if(horizontalString.includes("false".repeat(4))){
            findWinningPieces(horizontalPieces, false, "horizontal");
          }

          else if(verticalString.includes("false".repeat(4))){
            findWinningPieces(verticalPieces, false, "vertical");
          }
            
          else if(diagonalString.includes("false".repeat(4))){
            findWinningPieces(diagonalPieces, false, "diagonal");
          }
  
          else if(secondDiagonalString.includes("false".repeat(4))){
            findWinningPieces(secondDiagonalPieces, false, "secondDiagonal");
          }

      }
    }
  }

  const switchTurns = () => {
    redTurn = !redTurn;
    console.log(redTurn)
    console.log("Switching turns")
    timePassed = 0;
    setTimer("15s")
    if(!pause){
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


  }


  useEffect(() => {

    $(document).ready(function() {

      setInterval(function() { //TIMER

        if(!pause){
          timePassed += 1;
          setTimer("" + ( MAXTIME - timePassed) + "s")
  
          if(timePassed > 15){
            switchTurns();
          }
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
          if(winner){
            resetBoard();
          }
          if(piecesPlayed == 42){
            resetBoard();
          }
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
              if(!winner)
                switchTurns();
              break;
            }
          }


        })
      })

      $(".playAgainBox").on("click", function() {
        resetBoard();
      })

      $(".menu").on("click", function() {
        console.log("menu")
      })

      $(".restart").on("click", function() {  
        resetBoard();
      })
      

    })
  }, [])


  return (
    <div role="Bodywrapper" className="flex flex-col items-center w-[100%] h-[100%] min-h-[100vh]">
      <div className="fixed top-0 bottom-0 left-0 right-0 z-40 hidden bg-black bg-opacity-50 pauseMenuBackground"></div>
      {pauseMenu? <PauseMenu onContinue={() => {onContinue()}} onRestart={() => {onRestart()}} onMainMenu={() => {onMainMenu()}}/>: ""}
        <div className="flex justify-between w-full lg:mt-[53px] md:mt-[2.93vh] items-center md:mb-[3.125vh] px-[2.46vh] mt-[6.16vh]">
            <button onClick={() => {onMenuClick()}} className="text-center w-[86px] h-[39px] bg-darkPurple rounded-[5000px] text-HeadingXs text-white lg:ml-[28%] md:ml-[6.54vh]">
                MENU
            </button>

            <div alt="logo" className="image logo w-[52px] h-[52px]"></div>

            <button className="restart text-center h-[39px] px-[20px] bg-darkPurple rounded-[5000px] text-HeadingXs text-white lg:mr-[28%] md:mr-[6.54vh] lg:m-0">
                RESTART
            </button>
        </div>

        <div role="gameBoardWrapper" className="relative inline-flex flex-col items-center justify-center align-middle lg:flex-row">
          <div role="leftPlayer" className="mt-[6.16vh] md:mb-[6.16vh] md:mt-0 h-[10vh] aspect-[142/81] lg:relative absolute lg:px-0 md:px-[4vh] top-0 left-0 flex lg:flex-col md:flex-row items-center md:h-[9.77vh] lg:justify-center md:justify-between lg:w-[9.8vw] lg:h-[17.8vh] md:w-[26.56vh] md:aspect-[141/160] mr-[60px] bg-white rounded-3xl shadow-[0_3px_0_5px_rgba(0,0,0)] md:order-first">
            <div role="leftPlayerImage" className="image leftPlayerImage image-center h-[54px] rounded-full absolute lg:top-0 lg:left-[50%] lg:translate-x-[-50%] w-[54px] md:left-[-10%] left-[-15%] lg:mt-[-15%]"/>
            
            <div className="flex flex-col items-center justify-between md:flex-row w-[100%] lg:flex-col">
              <p className="text-center text-HeadingSm">PLAYER 1</p>
              <p className="text-center text-HeadingLg">{playerOneScoreView}</p>
            </div>
          </div>

          <div role="gameBoard" className="relative flex w-auto lg:mt-0 md:mt-[3.55%] z-10">
            
            <div role="backboard" className="backboard lg:h-[71.67vh] md:aspect-[632/584] md:h-[58vh] h-[39.17vh] aspect-[632/584] md:mt-0 mt-1 flex justify-center">
              <div role="frontboard" className="frontboard image lg:h-[70.67vh] md:aspect-[632/584] md:h-[57vh] absolute z-20 h-[38.17vh] aspect-[632/584]"/>
            </div>

            <div role="pieces" className="pieces absolute lg:h-[70.67vh] md:h-[57vh] h-[39.17vh] aspect-[632/584] md:aspect-[632/584] grid grid-cols-7 grid-rows-6 pb-[8.6%] pt-[2%] pl-[1%] cursor-pointer">

              <div className="row-6 col-1 empty" column="1"><div className="row6 col1"></div></div>
              <div className="row-6 col-2 empty" column="2"><div className="row6 col2"></div></div>
              <div className="row-6 col-3 empty" column="4"><div className="row6 col3"></div></div>
              <div className="row-6 col-4 empty" column="3"><div className="row6 col4"></div></div>
              <div className="row-6 col-5 empty" column="5"><div className="row6 col5"></div></div>
              <div className="row-6 col-6 empty" column="6"><div className="row6 col6"></div></div>
              <div className="row-6 col-7 empty" column="7"><div className="row6 col7"></div></div>
              
              <div className="row-5 col-1 empty" column="1"><div className="row5 col1"></div></div>
              <div className="row-5 col-2 empty" column="2"><div className="row5 col2"></div></div>
              <div className="row-5 col-3 empty" column="3"><div className="row5 col3"></div></div>
              <div className="row-5 col-4 empty" column="4"><div className="row5 col4"></div></div>
              <div className="row-5 col-5 empty" column="5"><div className="row5 col5"></div></div>
              <div className="row-5 col-6 empty" column="6"><div className="row5 col6"></div></div>
              <div className="row-5 col-7 empty" column="7"><div className="row5 col7"></div></div>
              
              <div className="row-4 col-1 empty" column="1"><div className="row4 col1"></div></div>
              <div className="row-4 col-2 empty" column="2"><div className="row4 col2"></div></div>
              <div className="row-4 col-3 empty" column="3"><div className="row4 col3"></div></div>
              <div className="row-4 col-4 empty" column="4"><div className="row4 col4"></div></div>
              <div className="row-4 col-5 empty" column="5"><div className="row4 col5"></div></div>
              <div className="row-4 col-6 empty" column="6"><div className="row4 col6"></div></div>
              <div className="row-4 col-7 empty" column="7"><div className="row4 col7"></div></div>
              
              <div className="row-3 col-1 empty" column="1"><div className="row3 col1"></div></div>
              <div className="row-3 col-2 empty" column="2"><div className="row3 col2"></div></div>
              <div className="row-3 col-3 empty" column="3"><div className="row3 col3"></div></div>
              <div className="row-3 col-4 empty" column="4"><div className="row3 col4"></div></div>
              <div className="row-3 col-5 empty" column="5"><div className="row3 col5"></div></div>
              <div className="row-3 col-6 empty" column="6"><div className="row3 col6"></div></div>
              <div className="row-3 col-7 empty" column="7"><div className="row3 col7"></div></div>
              
              <div className="row-2 col-1 empty" column="1"><div className="row2 col1"></div></div>
              <div className="row-2 col-2 empty" column="2"><div className="row2 col2"></div></div>
              <div className="row-2 col-3 empty" column="3"><div className="row2 col3"></div></div>
              <div className="row-2 col-4 empty" column="4"><div className="row2 col4"></div></div>
              <div className="row-2 col-5 empty" column="5"><div className="row2 col5"></div></div>
              <div className="row-2 col-6 empty" column="6"><div className="row2 col6"></div></div>
              <div className="row-2 col-7 empty" column="7"><div className="row2 col7"></div></div>
              
              <div className="row-1 col-1 empty" column="1"><div className="row1 col1"></div></div>
              <div className="row-1 col-2 empty" column="2"><div className="row1 col2"></div></div>
              <div className="row-1 col-3 empty" column="3"><div className="row1 col3"></div></div>
              <div className="row-1 col-4 empty" column="4"><div className="row1 col4"></div></div>
              <div className="row-1 col-5 empty" column="5"><div className="row1 col5"></div></div>
              <div className="row-1 col-6 empty" column="6"><div className="row1 col6"></div></div>
              <div className="row-1 col-7 empty" column="7"><div className="row1 col7"></div></div>
            </div>

            <div role="Frontpieces" className="frontPieces absolute lg:h-[70.67vh] aspect-[632/584] md:h-[57vh] h-[38.5vh] grid grid-cols-7 lg:pb-[9%] lg:pt-[2%] md:pb-[9%] md:pt-[2.7%] cursor-pointer z-40">
            <div className="col-1" column="1"></div>
            <div className="col-2" column="2"></div>
            <div className="col-3" column="3"></div>
            <div className="col-4" column="4"></div>
            <div className="col-5" column="5"></div>
            <div className="col-6" column="6"></div>
            <div className="col-7" column="7"></div>
            </div>


            <div className="flex justify-center turnWrapper absolute md:bottom-[-13%] w-[100%] bottom-[-40%]">
              <div className ="turn align-top redTurnBackground image md:h-[16.67vh] h-[18.27vh] md:w-[30%] w-[18.27] aspect-[191/151] flex flex-col z-30">
                <p className='text-HeadingXs mt-[20%] text-center playerText'>{playerTurnText}</p>
                <p className="text-center text-HeadingLg">{timer}</p>
                <button className="playAgainBox hidden rounded-[5000px] w-[14.4vh] bg-darkPurple text-white py-2 px-2 text-center m-auto text-HeadingXs">PLAY AGAIN</button>
              </div>
            </div>

              <div className="hidden picker picker1 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[5.3vh] md:ml-[4vh] ml-[2.3vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker2 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[16vh] md:ml-[12.5vh] ml-[8.1vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker3 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[26.5vh] md:ml-[21vh] ml-[13.8vh] aspect-square z-30">
              </div>

              <div className="hidden picker picker4 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[37vh] md:ml-[29.7vh] ml-[19.5vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker5 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[47.5vh] md:ml-[38.3vh] ml-[25.3vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker6 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[58.3vh] md:ml-[46.8vh] ml-[31.1vh] aspect-square z-30">
              </div>


              <div className="hidden picker picker7 redPicker image absolute h-[3.3vh] top-[-3%] lg:ml-[69vh] md:ml-[55.4vh] ml-[36.8vh] aspect-square z-30">
              </div>


          </div>


          <div role="rightPlayer" className="mt-[6.16vh] mb-[6.16vh] md:mt-0 flex md:h-[9.77vh] lg:px-0 lg:flex-col flex-row md:px-[4vh] lg:justify-center md:justify-between lg:w-[9.8vw] md:w-[26.56vh] items-center lg:h-[17.8vh] md:aspect-[141/160] lg:ml-[60px] bg-white rounded-3xl shadow-[0_3px_0_5px_rgba(0,0,0)] relative lg:order-last order-first ml-auto h-[10vh] aspect-[142/81]">
              <div role="rightPlayerImage" className="rightPlayerImage image h-[54px] rounded-full absolute lg:top-0 lg:left-[50%] lg:translate-x-[-50%] w-[54px] image-center md:right-[-10%] right-[-16%] md:mt-auto lg:mt-[-15%]"/>

              <div className="flex flex-col items-center justify-between md:flex-row w-[100%] lg:flex-col">
                <p className="text-center md:order-2 text-HeadingSm lg:order-first sm:order-first">PLAYER 2</p>
                <p className="block text-center text-HeadingLg">{playerTwoScoreView}</p>
              </div>
          </div>
        </div>

          <div className="bottomColor w-[100vw] h-[22.2vh] absolute bottom-0 bg-darkPurple z-[0] rounded-t-[40px]"></div>
    </div>
  )
}
