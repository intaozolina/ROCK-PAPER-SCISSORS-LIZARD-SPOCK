import Rock from './Icons/Rock.png';
import Paper from './Icons/paper1.png';
import Scissors from './Icons/scissors1.png';
import Lizard from './Icons/Lizard.png';
import Spock from './Icons/Spock.png';

export type gameOption = {
  id: number,
  name: string,
  imageSrc: string,
  winStatement: string [],
}

const gameData: gameOption[] = [
  {
    id: 1,
    name: 'rock',
    imageSrc: Rock,
    winStatement: ['lizard', 'scissors'],
  },
  {
    id: 2,
    name: 'paper',
    imageSrc: Paper,
    winStatement: ['rock', 'spock'],
  },
  {
    id: 3,
    name: 'scissors',
    imageSrc: Scissors,
    winStatement: ['paper', 'lizard'],
  },
  {
    id: 4,
    name: 'lizard',
    imageSrc: Lizard,
    winStatement: ['paper', 'spock'],
  },
  {
    id: 5,
    name: 'spock',
    imageSrc: Spock,
    winStatement: ['rock', 'scissors'],
  },
];

export default gameData;
