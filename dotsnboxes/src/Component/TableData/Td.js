import React from 'react';

const Td=(props)=>{

    return(
        <td className= "data" onClick={props.onClick}>
            {props.value}
        </td>
    );

}


export default Td;
