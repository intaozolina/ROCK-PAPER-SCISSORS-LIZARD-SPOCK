import React, { useState } from 'react';
import gameData, { gameOption } from '../../Data/gameData';
import './gamePage.scss';
import Logo from '../../Data/Icons/logo.png';

const GamePage = () => {
  const [playerChoice, setPlayerChoice] = useState<gameOption>({
    id: 0, name: '', imageSrc: '', winStatement: [],
  });
  const [computerChoice, setComputerChoice] = useState<gameOption>({
    id: 0, name: '', imageSrc: '', winStatement: [],
  });
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winMessage, setWinMessage] = useState('');

  const getComputerChoice = (): gameOption => {
    const index = Math.floor(Math.random() * gameData.length);
    return gameData[index];
  };

  const getWinner = (player:gameOption, computer:gameOption) => {
    if (player.name === computer.name) {
      return setWinMessage('TIE !!!');
    } if (player.winStatement.includes(computer.name)) {
      setPlayerScore(playerScore + 1);
      return setWinMessage('YOU WIN !!!');
    }
    setComputerScore(computerScore + 1); return setWinMessage(
      'YOU LOOSE !!!',
    );
  };

  return (
    <div className="hero">
      <div className="game__score">
        <span>
          Your score:
          <span className="score__count">{playerScore}</span>
        </span>
        <span>
          CPT score:
          <span className="score__count">{computerScore}</span>
        </span>
      </div>
      <h1 className="game__heading">Start playing! </h1>
      <div className="game__options">
        {gameData.map((option) => (
          <button key={option.id} onClick={() => { setPlayerChoice(option); setComputerChoice(getComputerChoice()); }} className="option__card">
            <img className="option__icon" src={option.imageSrc} alt={option.name} width="100px" />
            <p>{option.name.toUpperCase()}</p>
          </button>
        ))}
      </div>
      {playerChoice.id === 0 && (
        <h1 className="game__heading">Choose your hand-shape</h1>
      )}
      <h1 className="game__heading">{winMessage}</h1>
      <div className="game__box">
        <div className="player__box">
          {playerChoice.id === 0
            ? (<img className="player__icon" src={Logo} alt="logo" />)
            : (
              <div className="selection__box">
                <img className="player__image" src={playerChoice.imageSrc} alt={playerChoice.name} />
                <p>{playerChoice.name.toUpperCase()}</p>
              </div>
            )}
        </div>
        <div className="button__box">
          <button
            className="battle__btn"
            disabled={playerChoice.id === 0 || !!winMessage}
            onClick={() => {
              getWinner(playerChoice, computerChoice);
            }}
          >
            START BATTLE
          </button>
          <button
            className="battle__btn"
            disabled={!winMessage}
            onClick={() => {
              setPlayerChoice({
                id: 0, name: '', imageSrc: '', winStatement: [],
              });
              setComputerChoice({
                id: 0, name: '', imageSrc: '', winStatement: [],
              });
              setWinMessage('');
            }}
          >
            Play again
          </button>
        </div>
        <div className="player__box">
          {computerChoice.id === 0
            ? (<img className="player__icon" src={Logo} alt="logo" />)
            : (
              <div className="selection__box">
                <img className="player__image" src={computerChoice.imageSrc} alt={computerChoice.name} />
                <p>{computerChoice.name.toUpperCase()}</p>
              </div>
            )}
        </div>
      </div>

    </div>
  );
};

export default GamePage;
