import { UnitType } from "../common/types";

export type IUnit = {
  name: string;
  members: string[];
  type: UnitType;
  songs: string[];
  description: string;
};
