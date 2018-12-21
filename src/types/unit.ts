import { UnitType } from "../common/types";

export interface IUnit {
  name: string;
  members: string[];
  type: UnitType;
  songs: string[];
  description: string;
}
