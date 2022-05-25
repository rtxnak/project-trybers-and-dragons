import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _enemy: Character | Fighter;

  constructor(player: Character | Fighter, enemy: Character | Fighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    if (this.player.lifePoints > 0 || this._enemy.lifePoints > 0) {
      this.player.attack(this._enemy);
      this._enemy.attack(this.player);
    }
    
    return super.fight();
  }
}

export default PVP;
