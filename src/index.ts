import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import getRandomInt from './utils';

const player1: Character = new Character('huguinho');
const player2: Character = new Character('zezinho');
const player3: Character = new Character('luisinho');

const lvlupTimes = getRandomInt(10, 20);

for (let index = 0; index < lvlupTimes; index += 1) {
  player1.levelUp();
}

const monster1: Monster = new Monster();
const monster2: Dragon = new Dragon();

const pvp: PVP = new PVP(player2, player3);

const pve: PVE = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};