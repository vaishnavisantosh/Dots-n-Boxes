import React  from 'react';


const Td=React.forwardRef((props, ref)=>{

    return(
        <td ref={ref} className= "data" onClick={props.onClick}>
            {props.value}
        </td>
    );

});


export default Td;
