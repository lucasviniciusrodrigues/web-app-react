import React from "react";
import hum from '../hum.jpg';
import { useRef, useLayoutEffect } from "react";
import Button from "../components/Button";

export default () => {
    const divRef = useRef()

    function getCalvin() {
    }

    return (
        <div>
            <Button onClick={ getCalvin }>Buscar o melhor ouvinte</Button>
            <img src={hum} className="App-calvin" alt="calvim"/>
        </div>
    )
}
