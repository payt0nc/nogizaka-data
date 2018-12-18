import { IUnit, UnitType } from "../types/unit";

const unit1: IUnit = {
  name: "name",
  members: ["member 1", "member 2"],
  type: UnitType.Unit,
  songs: ["song 1", "song 2"],
  description: "some description"
};

const corp1: IUnit = {
  name: "name",
  members: ["member 1", "member 2"],
  type: UnitType.Corp,
  songs: ["song 1", "song 2"],
  description: "some description"
};

export const units = {
  "unit-1": unit1,
  "corp-1": corp1
};
