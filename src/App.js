// src/App.js

import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import PlayGame from './components/PlayGame';
import EndGame from './components/EndGame';
import './App.css'

function App() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  const [timer, setTimer] = useState('3000')

  
  useEffect(()=> {
    if(statusGame === 'playGame') {
      setScore({
        right: 0,
        wrong: 0
      });
      const timeOutGame = setTimeout(()=> {
        setStatusGame('endGame');
      }, timer)
      return () => clearTimeout(timeOutGame);
    }
  },[statusGame])
  //select time
  const handleTimer = (timer) => {
    setTimer(timer);
  }
  //select status (homepage, playgame, endGame)
  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  }
  //add score 
  const handleChangeScore = (type) => {
    if(type === 'right') {
      setScore({
        ...score,
       right: score.right + 1
      })
    }else {
      setScore({
        ...score,
        wrong: score.wrong + 1
      })
    }
  }
  //console.log(score)
console.log(timer)
  let layout;
  switch (statusGame) {
    case 'playGame': 
      layout = <PlayGame onChangeScore={handleChangeScore}/>
      break;
    case 'endGame':
      layout = <EndGame score={score} onGame={handleChangeStatusGame} timer={timer}/>
      break;
    default: 
      layout = <Home onGame={handleChangeStatusGame} timer={handleTimer}/>
      break;
  }
  return (
    <div className="App">
      { layout }
    </div>
  );
}

export default App;
