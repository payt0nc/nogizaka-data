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
- `/dist/`: compiled `JS` file
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
  - [x] profileImage
  - [x] singleImages
- [ ] songs
  - [x] main
  - [x] creators
  - [ ] musicVideos
- [x] singles
- [x] albums
- [x] units

## Raw Data Processing

Process and calculate edited raw data to get more data like members' positions history.

TODO:

- Members
  - [x] Calculate `units` and `corps`
  - [x] Calculate `positionsHistory` and `positionsHistory` based on `singles`
- Singles
  - [x] Extract `songType` from `songs`
  - [x] Extract focus members/unit/corp from `songs`
- Albums
  - [x] Extract `songType` from `songs`
  - [x] Extract focus members/unit/corp from `songs`
- Songs
  - [x] Pair `single` and `albums` from `songs` and `albums`
  - [x] Calculate the artwork based on its `single` and `albums` properties
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
  - `single > focusPerformers`
    - `song > type` (raw)
    - `song > performers` (raw)
    - `song > formations` (raw)
- albums
  - `album > songs > type` (NOTE: has default values but should reference `songs`)
    - `song > type` (raw)
  - `album > focusPerformers`
    - `song > type` (raw)
    - `song > performers` (raw)
    - `song > formations` (raw)
- members
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

- [x] Replace `undefined` with empty `null` (because `undefined` will remove properties)
