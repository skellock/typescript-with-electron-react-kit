// Tell the TS compiler that it's ok to load these
// types of extensions. Fuse Box and Webpack will have
// loaders that deal with these.
//
// You import like this:
//
//   import * as thing from "image.jpg"
//
// Note these commands tell TypeScript that it's ok. This doesn't
// automatically mean that you *can* import them. Ensure you've
// got the proper plugins loaded in the `fuse.ts` configuration.

declare module "*.jpeg"
declare module "*.jpg"
declare module "*.gif"
declare module "*.png"
declare module "*.svg"
declare module "*.json"
