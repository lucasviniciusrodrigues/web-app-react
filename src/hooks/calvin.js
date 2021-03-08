import React, { useState } from "react";
import hum from '../hum.jpg';
import Button from "../components/Button";

export default () => {
    //useState => variavel, metodoSeter
    const [display, setDisplay] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('Buscar o melhor ouvinte');

    function getCalvin() {
        setDisplay(!display);
        if (display) {
            setButtonTitle('Buscar o melhor ouvinte');
        } else {
            setButtonTitle('Esconder o melhor ouvinte');
        }
        
    }

    return (
        <div>
            <Button onClick={ getCalvin }> {buttonTitle} </Button>
            {
                display ? <img src={hum} className="App-calvin" alt="calvin"/> : null
            }
        </div>
    )
}