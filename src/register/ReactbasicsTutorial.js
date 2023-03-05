import React from "react";
import { useState } from "react";

function reactTutorial(){

    const [count, setCount] = useState(0)

    function add(count){
        count ++
        setCount(count)
    }

    return(
        <h1>{count}</h1>
    )

}