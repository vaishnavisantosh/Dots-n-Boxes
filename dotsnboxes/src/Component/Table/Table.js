import React,{Component} from 'react';
import './Table.css'
const Test=()=>  {

    let index=0;

   const clicked = (e) => {
      if (e.nativeEvent.offsetX < 2) {
       let x=document.getElementsByClassName("data");
       x[0].style.borderLeft = "thick solid #0000FF"
        console.log('left')
        console.log(e.nativeEvent.offsetX);
      }else if (e.nativeEvent.offsetY<2){
        console.log('top')
        let x=document.getElementsByClassName("data");
       x[0].style.borderTop = "thick solid #0000FF"
      }
      else if (e.nativeEvent.offsetX>50) {
        console.log('right')
        console.log(e.nativeEvent.offsetX)
        let x=document.getElementsByClassName("data");
       x[0].style.borderRight = "thick solid #0000FF"
      } else if (e.nativeEvent.offsetY>50) {
        console.log('bottom')
        console.log(e.nativeEvent.offsetY)
        let x=document.getElementsByClassName("data");
       x[0].style.borderBottom = "thick solid #0000FF"
      }
    }
    
      var Rowlist = [];
      for (var i = 1; i <= 4; i++) {
          Rowlist.push(i);
      }
      return (
        <table className="table">
            <tbody>
        {Rowlist.map(r => (
         <tr color="red">
           {[1,2,3,4].map(c => {
            index=index+1
                return   <td className="data" onClick={(e)=>clicked(e,index)} index={index} > hi </td>
                
           }
           )}
           </tr>
         ))
        }
        </tbody>
              </table>
      );
    }
    

  
  export default Test;
 // React.render(<App />, document.getElementById('app'));