import React from 'react';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('Could not get players!', err));
  }

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <Player key={player.id} player={ player } />);

    return (
      <div className="bg-gray-900">
        <div className="mx-auto py-8 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-10">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto">
              <h2 className="text-3xl leading-9 font-extrabold text-white tracking-tight sm:text-4xl py-6">Meet your team</h2>
              <h4 className="text-2xl leading-6 font-bold text-white tracking-tight sm:text-2xl py-4">The Nashville Predators</h4>
              <p className="text-lg leading-7 text-gray-300">They call Bridgestone Arena their home.</p>
              <p className="text-base text-gray-600">2017 Stanley Cup Finalists</p>
            </div>
            <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {playerCards}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
