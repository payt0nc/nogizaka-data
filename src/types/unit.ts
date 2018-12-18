export enum UnitType {
  Unit = "unit",
  Corp = "corp"
}

export interface IUnit {
  name: string;
  members: string[];
  type: UnitType;
  songs: string[];
  description: string;
}
