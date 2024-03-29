import { ResultSongs } from "../models/ISong";
import { ResultUnit, ResultUnits, RawUnit } from "../models/IUnit";
import { SongType } from "../utils/constants";
import { arrayToObject } from "../utils/arrays";

export const initializeUnits = (rawUnits: RawUnit[]): ResultUnits => {
  const initializedArray: ResultUnit[] = rawUnits.map(
    (rawUnit): ResultUnit => ({
      name: rawUnit.name,
      members: rawUnit.members,
      type: rawUnit.type,
      songs: [],
      description: rawUnit.description,
    }),
  );

  return arrayToObject(initializedArray, "name");
};

export const recordUnitSongs = (units: ResultUnits, songs: ResultSongs) => {
  for (const unit of Object.values(units)) {
    for (const song of Object.values(songs)) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  }
};
