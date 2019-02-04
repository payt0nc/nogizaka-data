import * as fs from "fs";
import { updateAlbums } from "./process/updateAlbums";
import { updateMembers } from "./process/updateMembers";
import { updateSingles } from "./process/updateSingles";
import { updateSongs } from "./process/updateSongs";
import { albums } from "./raw/albums";
import { members } from "./raw/members";
import { singles } from "./raw/singles";
import { songs } from "./raw/songs";
import { units } from "./raw/units";

// Form all property pairs into an array.

const songsArray = Object.values(songs);
const membersArray = Object.values(members);
const singlesArray = Object.values(singles);
const albumsArray = Object.values(albums);
const unitsArray = Object.values(units);

// Process the raw data.

updateMembers(membersArray, unitsArray, singlesArray, songsArray);
updateSingles(singlesArray, songsArray);
updateAlbums(albumsArray, songsArray);
updateSongs(songsArray, singlesArray, albumsArray);

console.log("Data processing finished.\n");

// Store the processed data into several JSON files.

fs.writeFile("./src/json/members.json", JSON.stringify(membersArray), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("members.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/singles.json", JSON.stringify(singlesArray), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("singles.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/albums.json", JSON.stringify(albumsArray), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("albums.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/songs.json", JSON.stringify(songsArray), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("songs.json is sucessfully saved.");
  }
});

fs.writeFile("./src/json/units.json", JSON.stringify(unitsArray), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("units.json is sucessfully saved.");
  }
});
