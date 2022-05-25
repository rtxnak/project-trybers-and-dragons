import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _environment: SimpleFighter[] | Fighter[];

  constructor(
    player: Character | Fighter,
    environment: SimpleFighter[] | Fighter[],
  ) {
    super(player);
    this._environment = environment;
  }

  fight(): number {
    this._environment.forEach((enemy) => {
      while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;
