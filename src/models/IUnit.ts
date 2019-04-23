import { UnitType } from "../utils/constants";

export type IUnit = {
  name: string;
  members: string[];
  type: UnitType;
  songs: string[];
  description: string;
};

export type IUnits = {
  [name: string]: IUnit;
};
