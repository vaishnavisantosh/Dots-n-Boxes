import React, { useState, useEffect } from 'react';
import './Table.css'
import Td from '../TableData/Td';

const Test = (props) => {

  const [playerTurn, setplayerTurn] = useState(true);//handles next player turn
  const [square, setSquare] = useState(Array(9).fill(null));//stores player information after creating box
  const temp = 4;//for 4X4 game
  const [box, setBox] = useState([
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    },
    {
      index: null,
      l: '',
      r: '',
      t: '',
      b: ''
    }]

  )
  let player = playerTurn ? 'Player1' : 'player2';

  const calculateWinner=(square)=>{
    let player1arr,winner,player1Count,player2Count;
      player1arr=square.filter(value=>value=="player1");
      player1Count=player1arr.length;
      player2Count=square.length-player1Count;

    if(!(square.includes(null))){  
      if(player1Count>player2Count){
        return "player1";
      }
      else{
        return "player2";
      }
    }
    else{
      return false;
    }
      
      
  }

  const checkBoxCreated = (resultData, index) => {
    if (resultData[index].l === "visited" && resultData[index].r === "visited" && resultData[index].t === "visited" && resultData[index].b === "visited") {
      let squares = [...square];
      squares[index] = player;
      setSquare(squares);
      console.log("created")
      return true;
    }
    return false;
  }


  const handleClick = (e, index,square) => {
    let resultData;
    let boxcrated;
    let winner;
    
    if(!(square.includes(null))){
    winner=calculateWinner(square);
 // alert(`winner is ${winner}`);
    }
    else{
    resultData = clicked(e, index);
    boxcrated = checkBoxCreated(resultData, index);
    if (boxcrated) {
      setplayerTurn(playerTurn);
    }

  }

  
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
            
           playerTurn? x[index].style.borderLeft = "thick solid #0000FF": x[index].style.borderLeft = "thick solid red";
            result[index].l = "visited";
            result[index].index = index;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]

          }
          else {

          playerTurn?  x[index].style.borderLeft = "thick solid #0000FF":x[index].style.borderLeft = "thick solid red";;
          playerTurn? x[adjacentRight].style.borderRight = "thick solid #0000FF":x[adjacentRight].style.borderRight = "thick solid red";

            result[index].l = "visited";
            result[index].index = index;
            result[adjacentRight].r = "visited";
            result[adjacentRight].index = adjacentRight;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]
          }
        }

      }
      else {
        alert("already visited please choose another line")
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
         playerTurn? x[index].style.borderTop = "thick solid #0000FF":x[index].style.borderTop = "thick solid red";
         playerTurn? x[adjacentBottom].style.borderBottom = "thick solid #0000FF":x[adjacentBottom].style.borderBottom = "thick solid red";

          result[index].t = "visited";
          result[index].index = index;
          result[adjacentBottom].b = "visited";
          result[adjacentBottom].index = adjacentBottom;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box]
        }
        else {
         playerTurn? x[index].style.borderTop = "thick solid #0000FF":x[index].style.borderTop = "thick solid red";;
          result[index].t = "visited";
          result[index].index = index;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box]



        }
      }
      else {
        alert("already visited please choose another line")
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
           playerTurn? x[index].style.borderRight = "thick solid #0000FF":x[index].style.borderRight = "thick solid red";
            result[index].r = "visited";
            result[index].index = index;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]

          }
          else {

            playerTurn? x[index].style.borderRight = "thick solid #0000FF":x[index].style.borderRight = "thick solid red";
            playerTurn?x[adjacentLeft].style.borderLeft = "thick solid #0000FF":x[adjacentLeft].style.borderLeft = "thick solid red"

            result[index].r = "visited";
            result[index].index = index;
            result[adjacentLeft].l = "visited";
            result[adjacentLeft].index = adjacentLeft;
            setBox(result);
            setplayerTurn(!playerTurn);
            result = [...box]
          }
        }

      }
      else {
        alert("already visited please choose another line")
        setplayerTurn(playerTurn);
      }
    }
    else if (e.nativeEvent.offsetY > 50) {
      
      let x = document.getElementsByClassName("data");
      playerTurn?x[index].style.borderBottom = "thick solid #0000FF":x[index].style.borderBottom = "thick solid red";
      let adjacentTop;
      adjacentTop = index + 3;


      if (box[index].b != "visited") {
        if (adjacentTop <= 8) {

         playerTurn? x[index].style.borderBottom = "thick solid #0000FF":x[index].style.borderBottom = "thick solid red"
         playerTurn? x[adjacentTop].style.borderTop = "thick solid #0000FF":x[adjacentTop].style.borderTop = "thick solid red"

          result[index].b = "visited";
          result[index].index = index;
          result[adjacentTop].t = "visited";
          result[adjacentTop].index = adjacentTop;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box]
        }
        else {
         playerTurn? x[index].style.borderBottom = "thick solid #0000FF": x[index].style.borderBottom = "thick solid red";
          result[index].b = "visited";
          result[index].index = index;
          setBox(result);
          setplayerTurn(!playerTurn);
          result = [...box];
        }
      }
      else {
        alert("already visited please choose another line")
        setplayerTurn(playerTurn);
      }
    }

    return (result)


  }



  // console.log("boxxxxxx",box);

  const displayTd = (index) => {
    return (
      <Td value={square[index]} onClick={(e) => handleClick(e, index,square)} />
    );
  }

  let msg;
  let winner;
  winner=calculateWinner(square);
  if(winner==='player1' || winner==='player2'){
    msg=`${winner} is winner`;
  }
  else{
    msg=null;
  }
  



  

  return (
    <>

       Its time of {player} 
      

      <table className="table">
        <tbody>

          <tr>
            {displayTd(0)}
            {displayTd(1)}
            {displayTd(2)}

          </tr>
          <tr>
            {displayTd(3)}
            {displayTd(4)}
            {displayTd(5)}

          </tr>
          <tr>
            {displayTd(6)}
            {displayTd(7)}
            {displayTd(8)}

          </tr>

        </tbody>
      </table>
      <div className="msg">
      {msg}
      </div>
     
    </>
  );
}



export default Test;
 