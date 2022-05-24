import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly _name: string;
  readonly _special: number;
  readonly _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;

// Importacao de Type = https://app.betrybe.com/course/back-end/typescript/gabarito-tipagem-estatica-e-generics/solutions/0387725f-3609-4c9a-a742-fe35869a2b92/conteudos/9666c6b2-41e6-4a39-8278-3db041824e89