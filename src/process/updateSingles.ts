import { ISingles } from "../models/ISingle";
import { ISongs } from "../models/ISong";
import { FocusPerformersType, GITHUB_CONTENTS_PATH, MemberNames, SongType } from "../utils/constants";
import { convertPerformerNames } from "../utils/strings";

const recordSingleArtworks = (singles: ISingles) => {
  const ARTWORK_BASE_NAME = GITHUB_CONTENTS_PATH + "src/images/artworks/singles/";
  for (const single of Object.values(singles)) {
    const artworks = single.artworks;
    const songs = single.songs;

    if (single.hasArtworks) {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_large.jpg";
        artworks[key].medium = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_medium.jpg";
        artworks[key].small = ARTWORK_BASE_NAME + single.number.toString() + "/" + key + "_small.jpg";
      }
    } else {
      for (const key of Object.keys(artworks)) {
        artworks[key].large = ARTWORK_BASE_NAME + "artwork_no_image_large.png";
        artworks[key].medium = ARTWORK_BASE_NAME + "artwork_no_image_medium.png";
        artworks[key].small = ARTWORK_BASE_NAME + "artwork_no_image_small.png";
      }
    }

    for (const song of songs) {
      song.artwork = artworks[song.inCdType[0]];
    }
  }
};

const recordSingleSongType = (singles: ISingles, songs: ISongs) => {
  for (const single of Object.values(singles)) {
    for (const singleSong of single.songs) {
      singleSong.type = songs[singleSong.title].type;
    }
  }
};

const recordSingleFocusPerformers = (singles: ISingles, songs: ISongs) => {
  for (const single of Object.values(singles)) {
    for (const singleSong of single.songs) {
      const song = songs[singleSong.title];
      if (
        song.type === SongType.Title ||
        song.type === SongType.Under ||
        song.type === SongType.Coupling ||
        song.type === SongType.Lead ||
        song.type === SongType.FirstGeneration ||
        song.type === SongType.SecondGeneration ||
        song.type === SongType.ThirdGeneration ||
        song.type === SongType.FourthGeneration
      ) {
        if (song.performers.center !== null) {
          singleSong.focusPerformers = {
            type: FocusPerformersType.Center,
            name: convertPerformerNames(song.performers.center),
          };
        } else {
          singleSong.focusPerformers = {
            type: FocusPerformersType.None,
            name: [],
          };
        }
      } else if (song.type === SongType.Solo) {
        singleSong.focusPerformers = {
          type: FocusPerformersType.Solo,
          name: convertPerformerNames(song.formations.firstRow),
        };
      } else if (song.type === SongType.Unit) {
        if (song.performers.unit !== null && song.performers.unit !== "") {
          singleSong.focusPerformers = {
            type: FocusPerformersType.Unit,
            name: [song.performers.unit],
          };
        } else if (song.performers.center !== null) {
          singleSong.focusPerformers = {
            type: FocusPerformersType.Center,
            name: convertPerformerNames(song.performers.center),
          };
        } else if (
          song.formations.firstRow.length +
            song.formations.secondRow.length +
            song.formations.thirdRow.length +
            song.formations.fourthRow.length <
          3
        ) {
          singleSong.focusPerformers = {
            type: FocusPerformersType.Unit,
            name: convertPerformerNames([
              ...song.formations.firstRow,
              ...song.formations.secondRow,
              ...song.formations.thirdRow,
              ...song.formations.fourthRow,
            ]),
          };
        } else {
          singleSong.focusPerformers = {
            type: FocusPerformersType.Unit,
            name: [],
          };
        }
      } else if (song.type === SongType.None) {
        if (song.performers.center !== null) {
          singleSong.focusPerformers = {
            type: FocusPerformersType.None,
            name: convertPerformerNames(song.performers.center),
          };
        } else {
          singleSong.focusPerformers = {
            type: FocusPerformersType.None,
            name: [],
          };
        }
      }
    }
  }
};

export const updateSingles = (singles: ISingles, songs: ISongs) => {
  recordSingleArtworks(singles);
  recordSingleSongType(singles, songs);
  recordSingleFocusPerformers(singles, songs);
};
