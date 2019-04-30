import { ResultCdForSingleTemp, RawCd } from "./commons";

type BehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type RawSingle = RawCd & {
  behindPerformers: BehindPerformers;
};

export type ISingle = ResultCdForSingleTemp & {
  behindPerformers: BehindPerformers;
};

export type ISingles = {
  [title: string]: ISingle;
};
