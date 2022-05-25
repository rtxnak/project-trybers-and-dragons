import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _attackType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._attackType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._attackType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;