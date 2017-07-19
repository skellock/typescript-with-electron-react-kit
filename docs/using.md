## Test Drive

Want to try this out? Clone & run.  There's a small sample project included.

```sh
git clone git@github.com:skellock/electron-starter.git
cd electron-starter
npm i
npm start
```

_Requires `node@>=8.1` and `npm@>=5.2`._

## Start Your Own Project

Ready to start your project?

I'm still deciding on a simple way, but there will be a script you can run.

```sh
npm run time-to-shine
```

## But I Don't Want...

You can keep the Electron parts but lose the rendering opinions.

* delete the directories under `src/renderer`
* change `src/renderer/index.tsx` to point to your new component
* remove `rebass` from `package.json`


## Building

To build your apps, first bundle it:

```sh
npm run compile
```

Then you can `pack` a copy to see what it will look like assembled:

```sh
npm run pack
```

And when you're ready to ship:

```sh
npm run dist
```

To create a .zip and .dmg in the `dist` directory.

And when you're ready to upload to github (if that's what you're doing), you can run:

```sh
npm run draft
```

This will make a new release based on the version number found in your `package.json` file (so you might want to bump that first).

I made it draft mode, because you'll probably want to do release notes. For that step, jump on to github and checkout the draft under releases to complete the process.
