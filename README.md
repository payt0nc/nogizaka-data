# NOGISONGS Data

This is a project to process the raw data of _NOGISONGS_ project to make them instantly available for the View.

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
- `/dist/`: transcompiled JS file
- `/src/types/`: data types for raw data
- `/src/common/`: common used types
- `/src/raw/`: raw data

## Raw Data Type

Specify the data type for raw data.
The purpose is to type check and unify input in data editing process.

TODO:

- [x] song
- [x] member
- [x] single & album
- [x] unit & corp

## Raw Data Editing

Edit and input raw data in `ts` files.

TODO:

- [ ] members
  - [x] Main
  - [ ] photoAlbums shopping
  - [ ] profileImage
  - [ ] singleImages
- [ ] songs
  - [ ] creators
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
- Albums
  - [x] Extract `songType` from `songs`
  - [x] Extract focus members/unit/corp from `songs`
- Songs
  - [ ] Pair `single` and `albums` from `songs` and `albums`
- Units & Corps
  - [ ] Extract performed songs from `songs`

## Transfer Processed Raw Data into JSON

TODO:

- [ ] Replace `undefined` with empty string (because `undefined` will remove properties)

## Store JSON Data in Firebase

- [ ] Save object to JSON file
- [ ] Upload to Firebase

## Store Images Data in Firebase

Image Files Structure:

- Member profile images
  - default image
    - large images
    - small images
  - image for each single
    - large images
    - small images
- Single & album artwork images
  - single artwork images
  - album artwork images

TODO:

- [ ] Upload to Firebase
