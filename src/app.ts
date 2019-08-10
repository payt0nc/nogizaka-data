import * as fs from "fs";
import * as updateMembers from "./process/updateMembers";
import * as updateSongs from "./process/updateSongs";
import * as updateUnits from "./process/updateUnits";
import * as updateCds from "./process/updateCds";
import { rawAlbums } from "./raw/albums";
import { rawMembers } from "./raw/members";
import { rawSingles } from "./raw/singles";
import { rawSongs } from "./raw/songs";
import { rawUnits } from "./raw/units";

// Initialize raw data to result data type.

const units = updateUnits.initializeUnits(rawUnits);
const albums = updateCds.initializeAlbums(rawAlbums);
const singles = updateCds.initializeSingles(rawSingles);
const members = updateMembers.initializeMembers(rawMembers);
const songs = updateSongs.initializeSongs(rawSongs);

// Process the raw data.

updateCds.recordCdSongTypeFromSongs(singles, songs);
updateCds.recordCdSongTypeFromSongs(albums, songs);

updateMembers.recordUnits(members, units);
updateMembers.recordPositions(members, singles, songs);
updateMembers.recordProfileImages(members, Object.keys(singles).length);

updateCds.recordCdFocusPerformersFromSongs(singles, songs, members);
updateCds.recordCdFocusPerformersFromSongs(albums, songs, members);

updateSongs.recordSongSingle(songs, singles);
updateSongs.recordSongAlbums(songs, albums);
updateSongs.recordArtworks(songs, singles, albums);

updateCds.recordCdSongArtworks(singles, songs);
updateCds.recordCdSongArtworks(albums, songs);

updateSongs.recordPerformersTags(songs, albums);

updateUnits.recordUnitSongs(units, songs);

// Form all property pairs into an array.

const songsArray = Object.values(songs);
const membersArray = Object.values(members);
const singlesArray = Object.values(singles);
const albumsArray = Object.values(albums);
const unitsArray = Object.values(units);

console.log("Data processing finished.\n");

// Store the processed data into several JSON files.

const writeFile = (path: string, data: any[]) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`JSON saved in: ${path}`);
    }
  });
};

// Write data in this project.

writeFile("./src/json/members.json", membersArray);
writeFile("./src/json/singles.json", singlesArray);
writeFile("./src/json/albums.json", albumsArray);
writeFile("./src/json/songs.json", songsArray);
writeFile("./src/json/units.json", unitsArray);

// Write data to other project.

const PROJECT_PATH = __dirname + "/../../client/src/data";

writeFile(`${PROJECT_PATH}/members.json`, membersArray);
writeFile(`${PROJECT_PATH}/singles.json`, singlesArray);
writeFile(`${PROJECT_PATH}/albums.json`, albumsArray);
writeFile(`${PROJECT_PATH}/songs.json`, songsArray);
writeFile(`${PROJECT_PATH}/units.json`, unitsArray);
