import { ISong } from "../models/ISong";
import { IUnit } from "../models/IUnit";
import { SongType } from "../utils/constants";

export const updateUnits = (units: IUnit[], songs: ISong[]) => {
  units.forEach(unit => {
    for (const song of songs) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  });
};
