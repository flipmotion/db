# DB Company web site

## Current design
The current design is in the wireframe stage. Current stage is to program as close as possible to https://drive.google.com/drive/folders/1TOau5h5wjotXMCtNXPnbZU3bxW8T55py.

## What's under the hood
The project relies on `styled-components` for styling and `react-router` + `react-transition-group` tandem for beetween-route animations.

## How to start the app
`yarn` to install dependecies, then
- start the app with `yarn start`.

## App layout
- All stateful components reside in `src/containers` folder
- Stateless components are in `src/components` folder
- Content is in `src/content`

## Animation aproach
The current component contract is: every component recieves an `transitionStage` prop, which is an invariant of `['entering', 'entered', 'exiting', 'exited', 'unmounted']`.

## Linting
The project uses prettier (default settings) and ESLint (thanks to Create React App, also no manual  settings).

## Branches
The development happens in the `dev` branch. `master` is syncronized with `dev` from time to time. Please check out `dev` to see the latest work, as `master` can be outdated!