# DB Company web site

## Current design
The current design is in the wireframe stage: https://drive.google.com/drive/folders/1TOau5h5wjotXMCtNXPnbZU3bxW8T55py?usp=sharing

## How to start the app
`npm i` first, then
- to start storybook, execute `npm run storybook` and navigate to `localhost:9009`
- to start the app, execute `npm run start`.

## App layout
- All stateful components reside in `src/containers` folder
- Stateless components are in `src/components` folder
- Content is in `src/content`

## Animation aproach
The current component contract is: every component recieves an `animationStage` prop, which is an invariant of ['entering', 'entered', 'exiting', 'exited', 'unmounted']

## Linting
The project uses prettier (default settings) and ESLint (thanks to Create React App, also no manual  settings).

## Branches
The main development happens in `dev` branch, with which `master` is syncronized time to time. Please check out `dev` to see the latest work, `master` branch can be outdated!