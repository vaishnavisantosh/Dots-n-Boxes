import React, { useState, useRef } from 'react';
import './Game.css'
import Td from '../TableData/Td';

const Game = (props) => {
  let msg = null;
  const temp = localStorage.getItem('grid');//for 4X4 6X6 8X8 game
  const player1 = localStorage.getItem('player1')
  const player2 = localStorage.getItem('player2')

  let arrayOfRef=new Array((temp-1)*(temp-1)).fill(React.createRef())

  let refs = useRef(arrayOfRef);
  const [playerTurn, setplayerTurn] = useState(true);//handles next player turn
  const [square, setSquare] = useState(Array((temp-1)*(temp-1)).fill(null));//stores player information after creating box
  
  
  let arrayForCreatingBoxState =  new Array((temp-1)*(temp-1)).fill({
    index: null,
    l: '',
    r: '',
    t: '',
    b: ''
  })

  const [box, setBox] = useState(arrayForCreatingBoxState)
  let player = playerTurn ? player1 : player2;
  console.log(box);

  const calculateWinner = (square) => {
    let player1arr, player1Count, player2Count;
    player1arr = square.filter(value => value == "player1");
    player1Count = player1arr.length;
    player2Count = square.length - player1Count;

    if (!(square.includes(null))) {
      if (player1Count > player2Count) {
        return player1;
      }
      else {
        return player2;
      }
    }
    else {
      return false;
    }


  }

  const checkBoxCreated = (resultData, index) => {
    if (resultData[index].l === "visited" && resultData[index].r === "visited" && resultData[index].t === "visited" && resultData[index].b === "visited") {
      let squares = [...square];
      squares[index] = player;
      setSquare(squares);
      // console.log("created")
      return true;
    }
    return false;
  }


  const handleClick = (e, index, square) => {
    let resultData;
    let boxcrated;
    let winner;

    if (!(square.includes(null))) {
      winner = calculateWinner(square);
      // alert(`winner is ${winner}`);
    }
    else {
      resultData = clicked(e, index);
      boxcrated = checkBoxCreated(resultData, index);
      if (boxcrated) {
        setplayerTurn(playerTurn);
      }

    }


  }

  const optimised = (index, border1, border2, adjacent, result) => {
    result[index][border1] = "visited";
    result[index].index = index;
    result[adjacent][border2] = "visited";
    result[adjacent].index = adjacent;
    setBox(result);
  }





  const clicked = (e, index) => {

    let result = [...box];


    if (e.nativeEvent.offsetX < 2) {
      let x = document.getElementsByClassName("data");
      console.log('left')
      console.log(e.nativeEvent.offsetX);
      let adjacentRight;
      adjacentRight = index - 1;

      if (box[index].l != "visited") {
        if (adjacentRight > 0 || adjacentRight < 3 || adjacentRight < 6) {

          if (index == 0 || index == 3 || index == 6) {

            playerTurn ? refs.current[index].current.style.borderLeft = "thick solid #0000FF" : refs.current[index].current.style.borderLeft = "thick solid red";
            result[index].l = "visited";
            result[index].index = index;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]

          }
          else {

            playerTurn ? refs.current[index].current.style.borderLeft = "thick solid #0000FF" : refs.current[index].current.style.borderLeft = "thick solid red";
            playerTurn ? refs.current[adjacentRight].current.style.borderRight = "thick solid #0000FF" : refs.current[adjacentRight].current.style.borderRight = "thick solid red";

            optimised(index, 'l', 'r', adjacentRight, result);

            setplayerTurn(!playerTurn);
            result = [...box]
          }
        }

      }
      else {
        //alert("already visited please choose another line")
        msg = "already visited please choose another line";
        setplayerTurn(playerTurn);
      }
    }

    else if (e.nativeEvent.offsetY < 2) {
      console.log('top')
      let x = document.getElementsByClassName("data");
      let adjacentBottom;
      adjacentBottom = index - 3;


      if (box[index].t != "visited") {
        if (adjacentBottom >= 0) {
          playerTurn ? refs.current[index].current.style.borderTop = "thick solid #0000FF" : refs.current[index].current.style.borderTop = "thick solid red";
          playerTurn ? refs.current[adjacentBottom].current.style.borderBottom = "thick solid #0000FF" : refs.current[adjacentBottom].current.style.borderBottom = "thick solid red";

          optimised(index, 't', 'b', adjacentBottom, result);

          setplayerTurn(!playerTurn);
          result = [...box]
        }
        else {
          playerTurn ? refs.current[index].current.style.borderTop = "thick solid #0000FF" : refs.current[index].current.style.borderTop = "thick solid red";

          result[index].t = "visited";
          result[index].index = index;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box]



        }
      }
      else {
        // alert("already visited please choose another line")
        msg = "already visited please choose another line";

        setplayerTurn(playerTurn);
      }
    }

    else if (e.nativeEvent.offsetX > 50) {
      console.log('right')
      console.log(e.nativeEvent.offsetX)
      let x = document.getElementsByClassName("data");
      let adjacentLeft;
      adjacentLeft = index + 1;
      //x[index].style.borderRight = "thick solid #0000FF"

      if (box[index].r != "visited") {
        if (adjacentLeft < 2 || adjacentLeft < 5 || adjacentLeft <= 9) {

          if (index == 2 || index == 5 || index == 8) {
            playerTurn ? refs.current[index].current.style.borderRight = "thick solid #0000FF" : refs.current[index].current.style.borderRight = "thick solid red";
            result[index].r = "visited";
            result[index].index = index;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]

          }
          else {

            playerTurn ? refs.current[index].current.style.borderRight = "thick solid #0000FF" : x[index].style.borderRight = "thick solid red";
            playerTurn ? refs.current[adjacentLeft].current.style.borderLeft = "thick solid #0000FF" : refs.current[adjacentLeft].current.style.borderLeft = "thick solid red"

            optimised(index, 'r', 'l', adjacentLeft, result);

            setplayerTurn(!playerTurn);
            result = [...box]
          }
        }

      }
      else {
        //alert("already visited please choose another line")
        msg = "already visited please choose another line";

        setplayerTurn(playerTurn);
      }
    }
    else if (e.nativeEvent.offsetY > 50) {

      let x = document.getElementsByClassName("data");
      playerTurn ? refs.current[index].current.style.borderBottom = "thick solid #0000FF" : refs.current[index].current.style.borderBottom = "thick solid red";
      let adjacentTop;
      adjacentTop = index + 3;


      if (box[index].b != "visited") {
        if (adjacentTop <= 8) {

          playerTurn ? refs.current[index].current.style.borderBottom = "thick solid #0000FF" : refs.current[index].current.style.borderBottom = "thick solid red"
          playerTurn ? refs.current[adjacentTop].current.style.borderTop = "thick solid #0000FF" : refs.current[adjacentTop].current.style.borderTop = "thick solid red"

          optimised(index, 'b', 't', adjacentTop, result);

          setplayerTurn(!playerTurn);
          result = [...box]
        }
        else {
          playerTurn ? refs.current[index].current.style.borderBottom = "thick solid #0000FF" : refs.current[index].current.style.borderBottom = "thick solid red";
          result[index].b = "visited";
          result[index].index = index;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box];
        }
      }
      else {
        // alert("already visited please choose another line")
        msg = "already visited please choose another line";

        setplayerTurn(playerTurn);
      }
    }

    return (result)


  }



  // console.log("boxxxxxx",box);

  const DisplayTd = (index) => {
    console.log(refs);
    return (
      <Td value={square[index]} ref={refs.current[index]} onClick={(e) => handleClick(e, index, square)} />
    );
  }

  let message;
  let winner;
  winner = calculateWinner(square);
  if (winner === 'player1' || winner === 'player2') {
    message = `${winner} is winner`;
  }
  else {
    message = null;
  }
  //let msg1;
  if (msg == null) {
    msg = null;
  }
  else {
    msg = msg;
  }

  

   




      return (
        <>

          Its time of {player}

          {msg}


          <table className="table">
            <tbody>

              {/* <tr >
            {DisplayTd(0)}
            {DisplayTd(1)}
            {DisplayTd(2)}

          </tr>
          <tr>
            {DisplayTd(3)}
            {DisplayTd(4)}
            {DisplayTd(5)}

          </tr>
          <tr>
            {DisplayTd(6)}
            {DisplayTd(7)}
            {DisplayTd(8)}

          </tr> */}
        
          {new Array(temp-1).fill(1).map(()=>(
                <tr>
                 {new Array(temp-1).fill(1).map(()=><>{DisplayTd(1)}</>)
                 }
                 </tr>
               ))
          }
                             

            </tbody>
          </table>
          <div className="msg">
            {message}
          </div>

        </>
      );
    }



    export default Game;
