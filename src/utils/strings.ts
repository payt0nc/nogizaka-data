import { MemberNames } from "./constants";
import { members } from "../raw/members";

export const convertPerformerNames = (names: MemberNames[]): string[] => {
  return names.map(name => {
    const { lastName, firstName } = members[name].nameNotations;
    return lastName + firstName;
  });
};
