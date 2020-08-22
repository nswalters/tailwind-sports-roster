import React from 'react';

import playerShape from '../../helpers/propTypes/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <li className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
         <div className="space-y-6 xl:space-y-10">
           <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={player.imageUrl} alt="" />
           <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
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
