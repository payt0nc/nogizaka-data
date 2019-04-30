import { ISongs } from "../models/ISong";
import { ResultUnit, ResultUnits, RawUnit } from "../models/IUnit";
import { SongType } from "../utils/constants";
import { arrayToObject } from "../utils/arrays";

export const initializeUnit = (rawUnits: RawUnit[]): ResultUnits => {
  const initializedArray: ResultUnit[] = rawUnits.map(rawUnit => ({
    name: rawUnit.name,
    members: rawUnit.members,
    type: rawUnit.type,
    songs: [],
    description: rawUnit.description,
  }));

  return arrayToObject(initializedArray, "name");
};

export const recordUnitSongs = (units: ResultUnits, songs: ISongs) => {
  for (const unit of Object.values(units)) {
    for (const song of Object.values(songs)) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  }
};
