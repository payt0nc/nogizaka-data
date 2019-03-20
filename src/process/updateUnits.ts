import { SongType } from "../common/constants";
import { ISong } from "../types/ISong";
import { IUnit } from "../types/IUnit";

export const updateUnits = (units: IUnit[], songs: ISong[]) => {
  units.forEach(unit => {
    for (const song of songs) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  });
};
