import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

function SimpleCounter() {
    const [counter, setCounter] = useState(0); 
    const [isRunning, setIsRunning] = useState(true); 

    // Efecto para incrementar el contador cada segundo si está corriendo
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
        return () => clearInterval(interval); // Limpieza del intervalo
    }, [isRunning]);

    // Manejar la parada del contador
    const handleStop = () => setIsRunning(false);

    // Manejar el reinicio del contador
    const handleReset = () => {
        setCounter(0); 
        setIsRunning(true); 
    };

    return (
        <div className="BigCounter">
            <div className="calendar">
                <i className="fas fa-clock"></i>
            </div>
            <div className="counter-container">
                <div className="four">{Math.floor(counter / 1000) % 10}</div>
                <div className="three">{Math.floor(counter / 100) % 10}</div>
                <div className="two">{Math.floor(counter / 10) % 10}</div>
                <div className="one">{counter % 10}</div>
            </div>
            <div className="buttons">
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};    


const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<SimpleCounter />);


// Finalmente lo hice! Tenia que ver el video porque yo aun no tengo conocimientos sufcientes para hacer Esto 
// Y con ayuda de chatgpt hice los botones. Lo unico que no he conseguido averiguar es porque no se ve el icono 
// de awesomeicons. Y tampoco como cambiar el titulo d ela pagina aunque lo he cambiado en todos lo html que hay 
// en el proyecto. Asi que supongo que es un fallo de conexion entre paginas/archivos que no he conseguido averiguar.
// En otro caso seria un fallo tonto creo, pero tratandose de un ejercicio de React, deberia saber conectar todo con
// todo. 