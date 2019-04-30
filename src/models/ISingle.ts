import { ResultCd } from "./commons";

export type ISingle = ResultCd & {
  behindPerformers: {
    trainees: string[];
    skips: string[];
  };
};

export type ISingles = {
  [title: string]: ISingle;
};
