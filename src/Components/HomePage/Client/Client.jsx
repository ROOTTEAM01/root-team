import line from '../../../img/line.png'
import './client.css'
import {useState} from "react";

export let Client = () => {

    let [currentNumber, setCurrentNumber] = useState(0);
    let [currentNumber2, setCurrentNumber2] = useState(0);
    let [currentNumber3, setCurrentNumber3] = useState(0);
    let [currentNumber4, setCurrentNumber4] = useState(0);

    setTimeout(() => {
        if (currentNumber < 99) {
            setCurrentNumber(currentNumber + 1)
        }
    }, 20)
    setTimeout(() => {
        if (currentNumber2 < 120) {
            setCurrentNumber2(currentNumber2 + 1)
        }
    }, 18)
    setTimeout(() => {
        if (currentNumber3 < 25) {
            setCurrentNumber3(currentNumber3 + 1)
        }
    }, 48)
    setTimeout(() => {
        if (currentNumber4 < 4.8) {
            setCurrentNumber4(currentNumber4 + 0.1)
        }
    }, 20)


    return (
        <>
            <section className="client-Item">
                <div className="ContClientItem">
                    <div className="countClientsItem"><h3 id="clientItem">{currentNumber}%</h3>
                        <p>Success in getting customer</p></div>
                    <div className="countClientsItem"><h3 id="clientItem2">{currentNumber3}k</h3>
                        <p>Thousands of successful business</p></div>
                    <div className="countClientsItem"><h3 id="clientItem3">{currentNumber2}+</h3>
                        <p>Total client who love Solvero</p></div>
                    <div className="countClientsItem"><h3 id="clientItem4">{currentNumber4.toFixed(1)}</h3>
                        <p>3.5 Reviews are very satisfied with us</p></div>
                </div>
                <div className="CompStyle">
                    <img src={line} alt=""/>
                </div>
            </section>
        </>
    )
}