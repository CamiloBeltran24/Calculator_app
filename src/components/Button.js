import { useState } from "react";

function Button({ value }){
    

    return(
        <>
            <button 
                value={value}
                onClick={ () => console.log(value) }
            >{value}</button>
            <div>{value}</div>
        </>
    );
}


export {
    Button,
}