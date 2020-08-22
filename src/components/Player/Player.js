import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propTypes/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <li className="pb-10 pl-6 bg-gray-800 text-center rounded-lg xl:pl-10">
        <div className="pb-4 flex flex-row pr-4">
          <button type="button" onClick={this.deletePlayerEvent} className="text-red-600 text-shadow-1 text-2xl ml-auto delete-player-button"
                  aria-label="Delete Player" title="Delete Player">&times;</button>
        </div>
        <div className="space-y-6 xl:space-y-10 pr-6 xl:pr-10">
          <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={player.imageUrl} alt="" />
          <div className="space-y-2">
            <div className="font-medium text-lg leading-6 space-y-1">
              <h4 className="text-white">{player.name}</h4>
              <p className="text-indigo-400">{player.position}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Player;
