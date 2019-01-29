import * as fs from "fs";
import { recordAlbumFocusPerformers, recordAlbumSongType } from "./process/updateAlbums";
import { recordPositions, recordUnits } from "./process/updateMembers";
import { recordSingleFocusPerformers, recordSingleSongType } from "./process/updateSingles";
import { recordSongAlbums, recordSongSingle } from "./process/updateSongs";
import { albums } from "./raw/albums";
import { members } from "./raw/members";
import { singles } from "./raw/singles";
import { songs } from "./raw/songs";
import { units } from "./raw/units";

// Form all property pairs into an array.

const songsArray = Object.entries(songs);
const membersArray = Object.entries(members);
const singlesArray = Object.entries(singles);
const albumsArray = Object.entries(albums);
const unitsArray = Object.entries(units);

// Process the raw data.

recordUnits(membersArray, unitsArray);
recordSingleSongType(singlesArray, songsArray);
recordSingleFocusPerformers(singlesArray, songsArray);
recordPositions(membersArray, singlesArray, songsArray);
recordAlbumSongType(albumsArray, songsArray);
recordAlbumFocusPerformers(albumsArray, songsArray);
recordSongAlbums(songsArray, albumsArray);
recordSongSingle(songsArray, singlesArray);

// Store the processed data into several JSON files.

fs.writeFile("./src/json/members.json", JSON.stringify(membersArray), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("members.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/singles.json", JSON.stringify(singlesArray), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("singles.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/albums.json", JSON.stringify(albumsArray), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("albums.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/songs.json", JSON.stringify(songsArray), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("songs.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/units.json", JSON.stringify(unitsArray), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("units.json is sucessfully saved.");
  }
});
