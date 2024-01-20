import { useState } from "react";

const Home = ({onGame,timer }) => {
    const [selectValue, setSelectValue] = useState('30000');
    return (
        <div className="home">
            <div className="title">
                Typing Game
            </div>
            <div className="author des">
            Check your typing skills in a minute
            </div>
            <div className="selectTime">
                <select name="time" id="time" 
                    onChange={event=>setSelectValue(event.target.value)}
                    defaultValue={selectValue}
                >
                    <option value="30000">30 seconds</option>
                    <option value="60000">1 minute</option>
                    <option value="120000">2 minutes</option>
                    <option value="180000">3 minutes</option>
                    <option value="300000">5 minutes</option>
                </select>
            </div>
            <button className="btnPlay" onClick={ () => { 
                onGame('playGame');
                timer(selectValue)
                }}>
                Play Game
            </button>

            <div className="author">
                Coding & Design By Zin Lin Htike
            </div>
        </div>
    )
}
export default Home;