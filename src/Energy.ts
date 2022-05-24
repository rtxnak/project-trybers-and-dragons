export type EnergyType = 'mana' | 'stamina';

interface Energy {
  type_: EnergyType;
  amount: number;
}

export default Energy;

// https://app.betrybe.com/course/back-end/typescript/gabarito-tipagem-estatica-e-generics/solutions/0387725f-3609-4c9a-a742-fe35869a2b92/conteudos/9666c6b2-41e6-4a39-8278-3db041824e89?use_case=calendar