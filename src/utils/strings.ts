import { MemberNames } from "./constants";
import { ResultMembers } from "../models/IMember";

export const convertPerformerNames = (
  names: MemberNames[],
  members: ResultMembers,
): string[] => {
  return names.map(name => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};
