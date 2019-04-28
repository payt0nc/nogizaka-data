import * as fs from "fs";
import * as updateMembers from "./process/updateMembers";
import * as updateSongs from "./process/updateSongs";
import * as updateUnits from "./process/updateUnits";
import * as updateCds from "./process/updateCds";
import { albums } from "./raw/albums";
import { members } from "./raw/members";
import { singles } from "./raw/singles";
import { songs } from "./raw/songs";
import { units } from "./raw/units";

// Process the raw data.

updateCds.recordCdSongTypeFromSongs(singles, songs);
updateCds.recordCdSongTypeFromSongs(albums, songs);

updateMembers.recordUnits(members, units);
updateMembers.recordPositions(members, singles, songs);
updateMembers.recordProfileImages(members, Object.keys(singles).length);

updateCds.recordSingleArtworks(singles);
updateCds.recordCdFocusPerformersFromSongs(singles, songs);

updateCds.recordAlbumArtworks(albums);
updateCds.recordCdFocusPerformersFromSongs(albums, songs);

updateSongs.recordSongSingle(songs, singles);
updateSongs.recordSongAlbums(songs, albums);
updateSongs.recordArtworks(songs, singles, albums);

updateCds.recordCdSongArtworks(singles, songs);
updateCds.recordCdSongArtworks(albums, songs);

updateUnits.recordUnitSongs(units, songs);

// Form all property pairs into an array.

const songsArray = Object.values(songs);
const membersArray = Object.values(members);
const singlesArray = Object.values(singles);
const albumsArray = Object.values(albums);
const unitsArray = Object.values(units);

console.log("Data processing finished.\n");

// Store the processed data into several JSON files.

fs.writeFile("./src/json/members.json", JSON.stringify(membersArray, null, 2), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("members.json is successfully saved.");
  }
});

fs.writeFile("./src/json/singles.json", JSON.stringify(singlesArray, null, 2), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("singles.json is successfully saved.");
  }
});

fs.writeFile("./src/json/albums.json", JSON.stringify(albumsArray, null, 2), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("albums.json is successfully saved.");
  }
});

fs.writeFile("./src/json/songs.json", JSON.stringify(songsArray, null, 2), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("songs.json is successfully saved.");
  }
});

fs.writeFile("./src/json/units.json", JSON.stringify(unitsArray, null, 2), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("units.json is successfully saved.");
  }
});
