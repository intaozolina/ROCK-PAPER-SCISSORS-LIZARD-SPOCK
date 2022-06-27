import React, { useEffect, useState } from 'react';
import gameData, { gameOption } from '../../Data/gameData';
import './gamePage.scss';
import Logo from '../../Data/Icons/logo.png';

const GamePage = () => {
  const [playerChoice, setPlayerChoice] = useState<gameOption>();
  const [computerChoice, setComputerChoice] = useState<gameOption>();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winMessage, setWinMessage] = useState('');

  const getComputerChoice = () => {
    const index = Math.floor(Math.random() * gameData.length + 1);
    return gameData[index];
  };

  const getWinner = (player:gameOption, computer:gameOption) => {
    if (player.name === computer.name) {
      setWinMessage('TIE !!!');
    } if (player.winStatement.includes(computer.name)) {
      setPlayerScore(playerScore + 1);
      setWinMessage('YOU WIN !!!');
    } setComputerScore(computerScore + 1); setWinMessage(
      'YOU LOOSE !!!',
    );
  };

  return (
    <div className="hero">
      <div className="game__score">
        <span>
          Your score:
          {playerScore}
        </span>
        <span>
          CPT score:
          {computerScore}
        </span>
      </div>
      <h1 className="game__heading">Pick your hand-shape </h1>
      <div className="game__options">
        {gameData.map((option) => (
          <button key={option.id} onClick={() => { setPlayerChoice(option); }} className="option__card">
            <img className="option__icon" src={option.imageSrc} alt={option.name} width="100px" />
            <p>{option.name.toUpperCase()}</p>
          </button>
        ))}
      </div>

      <div className="game__box">
        <div className="player__box">
          {playerChoice === undefined
            ? (<img className="player__icon" src={Logo} alt="logo" />)
            : (
              <div>
                <img className="player__icon" src={playerChoice.imageSrc} alt={playerChoice.name} />
                <p>{playerChoice.name}</p>
              </div>
            )}
        </div>
        <button
          disabled={playerChoice === undefined}
          onClick={() => { setComputerChoice(getComputerChoice()); getWinner(playerChoice as gameOption, computerChoice as gameOption); }}
        >
          START BATTLE
        </button>
        <div className="player__box">
          {computerChoice === undefined
            ? (<img className="player__icon" src={Logo} alt="logo" />)
            : (computerChoice
              && (
              <div>
                <img className="player__icon" src={computerChoice.imageSrc} alt={computerChoice.name} />
                <p>{computerChoice.name}</p>
              </div>
              )
            )}
        </div>
      </div>
      <h1>{winMessage}</h1>
      <button onClick={() => { setPlayerChoice(undefined); setComputerChoice(undefined); setWinMessage(''); }}>Play again</button>
    </div>
  );
};

export default GamePage;
