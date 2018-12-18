# NOGISONGS Data

This is a project to process the raw data of _NOGISONGS_ project to make them instantly available for the View.

## File Structure

- `main.ts`: entry point
- `/dist/`: transcompiled JS file
- `/src/types/`: data types for raw data
- `/src/common/`: common used types
- `/src/raw/`: raw data

## Raw Data Processing

### TODO

#### Members

- [ ] Calculate `units` and `corps`
- [ ] Calculate `positionsHistory` and `positionsHistory` based on `singles`

#### Singles

- [ ] Extract `songType` from `songs`
- [ ] Extract focus members/unit/corp from `songs`

#### Albums

- [ ] Extract `songType` from `songs`
- [ ] Extract focus members/unit/corp from `songs`

#### Songs

- [ ] Pair `single` and `albums` from `songs` and `albums`
