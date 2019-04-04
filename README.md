# Nogizaka-lib Data

This is a project to process the raw data of [Nogizaka Lib](https://github.com/shawnrivers/nogizaka-lib) project to make them instantly available for the View.

## Copyrights

Profile images and CD artworks © 乃木坂LLC.

## Information Source

Most information in this project is from [Nogizaka46 official website](http://www.nogizaka46.com/) and [Wikipedia](https://ja.wikipedia.org/wiki/乃木坂46).

## Usage

Install necessary packages and build

```bash
npm install
npm run build
```

Watch and transpile `TypeScript` to `JavaScript`

```bash
npm run watch
```

## File Structure

- `main.ts`: entry point
- `/dist/`: transpiled and bundled `JS` file
- `/src/types/`: data types for raw data
- `/src/common/`: common used types
- `/src/raw/`: raw data
- `/src/json/`: final output `JSON` data

## Raw Data Type

Specify data types for raw data.
The purpose is to do type-check and unify input in data editing process.

TODO:

- [x] song
- [x] member
- [x] single & album
- [x] unit & corp

## Raw Data Editing

Edit and input raw data in `ts` files.

TODO:

- [ ] members
  - [x] main
  - [ ] photoAlbums shopping
  - [ ] profileImage
  - [ ] singleImages
- [ ] songs
  - [x] main
  - [x] creators
  - [ ] musicVideos
- [x] singles
- [x] albums
- [x] units

## Raw Data Processing

Process and calculate editted raw data to get more data like memebers' positions history.

TODO:

- Members
  - [x] Calculate `units` and `corps`
  - [x] Calculate `positionsHistory` and `positionsHistory` based on `singles`
- Singles
  - [x] Extract `songType` from `songs`
  - [x] Extract focus members/unit/corp from `songs`
  - [ ] Calculate the artwork for each song in single view
- Albums
  - [x] Extract `songType` from `songs`
  - [x] Extract focus members/unit/corp from `songs`
  - [ ] Calculate the artwork for each song in album view
- Songs
  - [x] Pair `single` and `albums` from `songs` and `albums`
- Units & Corps
  - [x] Extract performed songs from `songs`

### Relationships of Data Updating Among Each Data Set

- songs
  - `song > albums`
    - `single > songs > title` (raw)
  - `song > singles`
    - `album > songs > title` (raw)
- singles
  - `single > songs > type` (NOTE: has default values but should reference `songs`)
    - `song > type` (raw)
  - `single > focuesPerformers`
    - `song > type` (raw)
    - `song > performers` (raw)
    - `song > formations` (raw)
- albums
  - `album > songs > type` (NOTE: has default values but should reference `songs`)
    - `song > type` (raw)
  - `album > focuesPerformers`
    - `song > type` (raw)
    - `song > performers` (raw)
    - `song > formations` (raw)
- memebers
  - `member > units`
    - `unit > name` (raw)
    - `unit > type` (raw)
  - `member > positions`
    - `single > behindPerformers` (raw)
    - `single > song > type` ->
      - `song > formations` (raw)
      - `song > performers` (raw)

## Transfer Processed Raw Data into JSON

TODO:

- [ ] Replace `undefined` with empty string (because `undefined` will remove properties)
