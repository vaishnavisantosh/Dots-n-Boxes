import React,{Component} from 'react';
import './Table.css'
import Td from '../TableData/Td';

const Test=(props)=>  {

   

   const clicked = (e,index) => {
      if (e.nativeEvent.offsetX < 2) {
       let x=document.getElementsByClassName("data");
       x[index].style.borderLeft = "thick solid #0000FF"
        console.log('left')
        console.log(e.nativeEvent.offsetX);
      }else if (e.nativeEvent.offsetY<2){
        console.log('top')
        let x=document.getElementsByClassName("data");
       x[index].style.borderTop = "thick solid #0000FF"
      }
      else if (e.nativeEvent.offsetX>50) {
        console.log('right')
        console.log(e.nativeEvent.offsetX)
        let x=document.getElementsByClassName("data");
       x[index].style.borderRight = "thick solid #0000FF"
      } else if (e.nativeEvent.offsetY>50) {
        console.log('bottom')
        console.log(e.nativeEvent.offsetY)
        let x=document.getElementsByClassName("data");
       x[index].style.borderBottom = "thick solid #0000FF"
      }
    }

const displayTd=(index)=>{
  return (
    <Td  onClick={(e) => clicked(e,index)} />
);
}

    
      
      return (
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
      );
    }
    

  
  export default Test;
 // React.render(<App />, document.getElementById('app'));