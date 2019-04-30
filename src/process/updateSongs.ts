import { ResultAlbums } from "../models/IAlbum";
import { ResultSingles } from "../models/ISingle";
import { ResultSongs, RawSong, ResultSong } from "../models/ISong";
import { arrayToObject } from "../utils/arrays";
import { SONGS, SongType } from "../utils/constants";

export const initializeSongs = (rawSongs: RawSong[]): ResultSongs => {
  const initializedArray = rawSongs.map(
    (rawSong): ResultSong => ({
      title: rawSong.title,
      key: SONGS[rawSong.title].key,
      single: { title: "", number: "" },
      albums: [],
      artwork: {
        large: "",
        medium: "",
        small: "",
      },
      musicVideo: rawSong.musicVideo,
      type: rawSong.type,
      creators: rawSong.creators,
      performers: rawSong.performers,
      performersTag: {
        name: "",
        singleNumber: "",
      },
      formations: rawSong.formations,
    }),
  );

  return arrayToObject(initializedArray, "title");
};

export const recordSongSingle = (
  songs: ResultSongs,
  singles: ResultSingles,
) => {
  for (const song of Object.values(songs)) {
    song.single.title = "";

    for (const single of Object.values(singles)) {
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.single.title = single.title;
          song.single.number = single.number;
          break;
        }
      }

      if (song.single.title !== "") {
        break;
      }
    }
  }
};

export const recordSongAlbums = (songs: ResultSongs, albums: ResultAlbums) => {
  for (const song of Object.values(songs)) {
    song.albums = [];

    for (const album of Object.values(albums)) {
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push({
            title: album.title,
            number: album.number,
          });
        }
      }
    }

    song.albums.sort(
      (albumA, albumB) =>
        new Date(albums[albumA.title].release).getTime() -
        new Date(albums[albumB.title].release).getTime(),
    );
  }
};

export const recordArtworks = (
  songs: ResultSongs,
  singles: ResultSingles,
  albums: ResultAlbums,
) => {
  for (const song of Object.values(songs)) {
    if (song.single.title !== "") {
      const single = singles[song.single.title];
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.artwork = single.artworks[singleSong.inCdType[0]];
          break;
        }
      }
    } else if (song.albums.length > 0) {
      const album = albums[song.albums[0].title];
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.artwork = album.artworks[albumSong.inCdType[0]];
        }
      }
    }
  }
};

const calculatePerformersTag = (
  song: ResultSong,
  albums: ResultAlbums,
): {
  name: string;
  singleNumber: string;
} => {
  if (song.type === SongType.Unit) {
    return { name: song.performers.unit, singleNumber: "" };
  }
  if (song.type === SongType.FirstGeneration) {
    return { name: "first generation", singleNumber: "" };
  }
  if (song.type === SongType.SecondGeneration) {
    return { name: "second generation", singleNumber: "" };
  }
  if (song.type === SongType.ThirdGeneration) {
    return { name: "third generation", singleNumber: "" };
  }
  if (song.type === SongType.FourthGeneration) {
    return { name: "fourth generation", singleNumber: "" };
  }
  if (song.type === SongType.Title) {
    return { name: "selected", singleNumber: song.single.number };
  }
  if (song.type === SongType.Under) {
    if (song.single.number === "") {
      if (song.albums.length > 0) {
        return {
          name: "under",
          singleNumber: albums[song.albums[0].title].previousSingleNumber,
        };
      }
    }
    return { name: "under", singleNumber: song.single.number };
  }

  return {
    name: "",
    singleNumber: "",
  };
};

export const recordPerformersTags = (
  songs: ResultSongs,
  albums: ResultAlbums,
) => {
  for (const song of Object.values(songs)) {
    song.performersTag = calculatePerformersTag(song, albums);
  }
};
