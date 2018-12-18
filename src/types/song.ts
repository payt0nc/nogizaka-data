export enum SongType {
  None = "none",
  Title = "title",
  Coupling = "coupling",
  Under = "under",
  Unit = "unit",
  Solo = "solo"
}

export interface ISongPerformers {
  center: string[] | undefined;
  fukujin: string[] | undefined;
  selected: string[] | undefined;
  solo: string | undefined;
  unit: string | undefined;
}

export interface ISongFormations {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
}

export interface ISong {
  title: string;
  single: string;
  album: string[] | undefined;
  type: SongType;
  performers: ISongPerformers;
  formations: ISongFormations;
}
