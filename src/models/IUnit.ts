import { UnitType, MemberNames } from "../utils/constants";

export type RawUnit = {
  name: string;
  members: MemberNames[];
  type: UnitType;
  description: string;
};

export type ResultUnit = {
  name: string;
  members: MemberNames[];
  type: UnitType;
  songs: string[];
  description: string;
};

export type ResultUnits = {
  [name: string]: ResultUnit;
};
