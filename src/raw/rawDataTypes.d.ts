import { MemberNames, UnitType } from "../utils/constants";

export type RawUnit = {
  name: string;
  members: MemberNames[];
  type: UnitType;
  description: string;
};
