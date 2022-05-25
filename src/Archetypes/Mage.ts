import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _attackType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._attackType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._attackType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}

export default Mage;