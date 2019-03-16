import { IUnit } from "../types/IUnit";
import { ISong } from "../types/ISong";
import { SongType } from "../common/constants";

export const updateUnits = (units: IUnit[], songs: ISong[]) =>{
  units.forEach(unit => {
    for (const song of songs) {
      if (song.type === SongType.Unit && song.performers.unit === unit.name) {
        unit.songs.push(song.title);
      }
    }
  })
}