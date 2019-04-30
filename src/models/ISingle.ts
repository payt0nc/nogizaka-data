import { ResultCd, RawCd } from "./commons";

type BehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type RawSingle = RawCd & {
  behindPerformers: BehindPerformers;
};

export type ResultSingle = ResultCd & {
  behindPerformers: BehindPerformers;
};

export type ResultSingles = {
  [title: string]: ResultSingle;
};
