import React, { useState, useEffect } from 'react';
import './Table.css'
import Td from '../TableData/Td';

const Test = (props) => {

  const [playerTurn, setplayerTurn] = useState(true);
 // const [boxcreated, setBoxCreated] = useState(false);
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
 // const [boxfill, setBoxFill] = useState(true);
  let player = playerTurn ? 'Player1' : 'player2';

  const checkBoxCreated = (resultData) => {
    if (resultData.l === "visited" && resultData.r === "visited" && resultData.t === "visited" && resultData.b === "visited") {
      // setBoxCreated(true);
      //setBoxFill(false);
      console.log("created")
      return true;
    }
    return false;
  }


  const handleClick = (e, index) => {
    let resultData;
    let boxcrated;
    resultData = clicked(e, index);
    boxcrated = checkBoxCreated(resultData);
    if (boxcrated) {
      setplayerTurn(playerTurn);
    }

  }

  const clicked = (e, index) => {

    let result = { ...box };


    if (e.nativeEvent.offsetX < 2) {
      let x = document.getElementsByClassName("data");
      x[index].style.borderLeft = "thick solid #0000FF"
      console.log('left')
      console.log(e.nativeEvent.offsetX);
      if (box[index].l != "visited") {
        setplayerTurn(!playerTurn);
        result[index].l="visited";
        result[index].index=index;
        setBox(result);

        result = { ...box}
      }
      else {
        alert("already visited please choose another line")
        setplayerTurn(playerTurn);
      }

    } else if (e.nativeEvent.offsetY < 2) {
      console.log('top')
      let x = document.getElementsByClassName("data");
      x[index].style.borderTop = "thick solid #0000FF"
      if (box[index].t != "visited") {
        result[index].t="visited";
        result[index].index=index;
        setBox(result);

       // setBox({ ...box, t: 'visited', index: index });
        setplayerTurn(!playerTurn);
        result = { ...box}
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
      x[index].style.borderRight = "thick solid #0000FF"
      if (box.r != "visited") {
        result[index].r="visited";
        result[index].index=index;
        setBox(result);
      //  setBox({ ...box, r: 'visited', index: index });
        setplayerTurn(!playerTurn);
        result = { ...box}
      }
      else {
        alert("already visited please choose another line")
        setplayerTurn(playerTurn);
      }

    } else if (e.nativeEvent.offsetY > 50) {
      console.log('bottom')
      console.log(e.nativeEvent.offsetY)
      let x = document.getElementsByClassName("data");
      x[index].style.borderBottom = "thick solid #0000FF"
      if (box.b != "visited") {
        result[index].b="visited";
        result[index].index=index;
        setBox(result);
        //setBox({ ...box, b: 'visited', index: index });
        setplayerTurn(!playerTurn);
        result = { ...box}
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
      <Td value={player} onClick={(e) => handleClick(e, index)} />
    );
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
    </>
  );
}



export default Test;
 // React.render(<App />, document.getElementById('app'));