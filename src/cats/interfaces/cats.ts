export interface Cat {
  id: number;
  name: string;
  age?: number;
  gender?: Sex;
}

type Sex = 0 | 1 | 2;

export enum Gender {
  男,
  女,
  未知,
}
