import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _attackType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._attackType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._attackType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;