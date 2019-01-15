import * as fs from "fs";
import { recordAlbumFocusPerformers, recordAlbumSongType } from "./src/process/updateAlbums";
import { recordPositions, recordUnits } from "./src/process/updateMembers";
import { recordSingleFocusPerformers, recordSingleSongType } from "./src/process/updateSingles";
import { recordSongAlbums, recordSongSingle } from "./src/process/updateSongs";
import { albums } from "./src/raw/albums";
import { members } from "./src/raw/members";
import { singles } from "./src/raw/singles";
import { songs } from "./src/raw/songs";
import { units } from "./src/raw/units";
import { IMember } from "./src/types/member";

// TODO: Load the raw data.

const rawData = {
  songs,
  members,
  singles,
  albums,
  units
};

// Form all property pairs into an array.
const songsList = Object.entries(songs);
const membersList = Object.entries(members);
const singlesList = Object.entries(singles);
const albumsList = Object.entries(albums);
const unitsList = Object.entries(units);

// TODO: Process the raw data.

recordUnits(membersList, unitsList);
recordSingleSongType(singlesList, songsList);
recordSingleFocusPerformers(singlesList, songsList);
recordPositions(membersList, singlesList, songsList);

recordAlbumSongType(albumsList, songsList);
recordAlbumFocusPerformers(albumsList, songsList);

recordSongAlbums(songsList, albumsList);
recordSongSingle(songsList, singlesList);

for (let songElement of songsList) {
  const song = songElement[1];
  console.log(song.title, song.single, song.albums);
}

// console.log(members);

// TODO: Store the processed data into a JSON file.

// fs.writeFile("raw-data.json", JSON.stringify(rawData), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File is sucessfully saved.");
//   }
// });

// TODO: Post and update the remote data in Firebase.

// console.log(firebase.default.database);
