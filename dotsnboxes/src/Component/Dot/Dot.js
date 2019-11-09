import React from 'react';
import './Dot.css';
const Dot = (props) => {
    const dots = Array(9).fill(null);


    

    const displayDot = (index) => {
        return (
            <span className="dot"></span>

        );
    }


    return (
        <table >
        <tr className="dot-row" border="1px">
            {displayDot(0)}
            {displayDot(1)}
            {displayDot(2)}
        </tr>

        <tr>
            {displayDot(3)}
            {displayDot(4)}
            {displayDot(5)}
        </tr>

        <tr>
            {displayDot(6)}
            {displayDot(7)}
            {displayDot(8)}
        </tr>
     </table>
    );


}

export default Dot;