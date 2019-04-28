import { ISongs } from "../models/ISong";
import { IUnits } from "../models/IUnit";
import { SongType } from "../utils/constants";

export const recordUnitSongs = (units: IUnits, songs: ISongs) => {
  for (const unit of Object.values(units)) {
    for (const song of Object.values(songs)) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  }
};
