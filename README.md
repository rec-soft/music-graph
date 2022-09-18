# music-graph

Music Graph is a static website for traversing a graph of related music tastes.

## Installation

### Recommended IDE Setup

(From Vue) [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Project Setup

1. Install Node >=16 and git.
2. Checkout this repo and `cd` into it.
3. Install dependencies:

```sh
npm install
```

## Making Changes

### Editing the Music Graph Data

The data for the project is defined in [`map.ts`](https://github.com/rec-soft/music-graph/blob/main/src/map.ts), which consists of the following:

* `Genre` nodes - these will be rendered as individual pages on the map.
* `Relation` edges - these will be rendered as links that go from one `Genre` to another.

Example:

```ts
const nuMetal = new Genre(
    "Nu Metal",
    "I have to start with Linkin Park, which is regularly in my top-listened tracks every year. Particular big love for the Reanimation remix album, which leans more towards the electronic stuff. Nothing else has come out like it.",
    "4zP2e2aIzOZGEFTq1MDJmm"
);
const metalcore = new Genre(
    "Metalcore",
    "I got into metalcore after going to a couple Underoath shows (also featuring BMTH). High energy and delightfully angsty.",
    "0M3adYbGtyRHACP86dey1H"
);

nuMetal.addRelation(metalcore, "More metal");
```

TODO: use a typed object notation (e.g. protobuf) for data, rather than define it in code. Narrowing the API surface like this will make it easier to make changes, while decreasing the change for bugs.

### Local Development

Compile and Hot-Reload for Development:

```sh
npm run dev
```

Open the provided URL in a local browser to see your code live.

### Deploy

1. Type-Check, Compile and Minify for Production. This will build a set of assets in the `dist/` directory.

```sh
npm run build
```

2. Deploy to Github Pages. This will add some additional files and run a Github deployment workflow.

```sh
npm run deploy
```
