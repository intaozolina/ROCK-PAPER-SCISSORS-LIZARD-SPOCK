import React from 'react';
import Logo from '../../Data/Icons/logo.png';

const HomePage = () => (
  <div>
    <h1>Welcome to Rock-Scissors-Paper-Lizard-Spock game!</h1>
    <img src={Logo} alt="Logo" />
    <p>
      Rock Paper Scissors Lizard Spock is an extension of the classic game of chance, Rock Paper Scissors, created by Sam Kass and Karen Bryla.

      Sam Kass explains he created the expanded game because it seemed like most games of Rock Paper Scissors with people you know would end in a tie.

      Rock Paper Scissors Lizard Spock was first mentioned in the Season 2 episode, The Lizard-Spock Expansion, the title of which references the game. It was last mentioned in The Rothman Disintegration.

      As Sheldon explains, Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.
    </p>
  </div>
);

export default HomePage;
