# Electron Starter

This is my own personal electron starter kit.

I will be bikeshedding with myself. I'm going to change my mind quite a bit.  You might prefer something more stable.

Still here?  Ok, let's do this.

# Test Drive

Want to try this out? Clone & run.  There's a small sample project included.

```sh
git clone git@github.com:skellock/electron-starter.git
cd electron-starter
npm i
npm start
```

_Requires `node@>=8.1` and `npm@>=5.2`._

# Start Your Own Project

Ready to start your project?

I'm still deciding on a simple way, but there will be a script you can run.

```sh
npm run time-to-shine
```

# Using

Your source files will live in the `src/main` and `src/renderer` directories.

To build your apps, first bundle it:

```sh
npm run compile
```

Then you can `pack` a copy to see what it will look like assembled:

```sh
npm run pack
npm run dist
```

And when you're ready to ship:

```sh
npm run dist
```

To create a .zip and .dmg.


# What's Inside?

libs | why
-----|------
**react**, **react-dom** | Can't imagine doing web differently to be honest. I'm sure we will soon, but for mid-2017, this is dominating.
**mobx**, **mobx-state-tree**, **mobx-react** | It brings the same things to the table as Redux, but with considerably less typing.
**ramda** | Lodash/fp is also a good choice here. I like ramda because I'm comfortable with it. `pipe` for life.
**typescript**, **tslint** | Such a well polished and wonderful typing system. I know this is a stepping stone to a better language, but JavaScript is really comfortable at this point. TypeScript dials the safety part in.
**fuse-box** | A fantastic bundler. WebPack always rubbed me wrong. Maybe it's the config? Maybe it's the way they name things? I'm not sure. What I do know is, once I started playing with FuseBox, I was sold. I like the devs behind this too.
**husky**, **lint-staged**, **prettier** | Some automation so I stop checking in crap looking code.
**ava** | This is my favourite testing framework. I've tried them all. The devs behind this are very talented, helpful, and friendly.
**npm-scripts-info**, **npm-run-all** | Quality-of-life utilities for npm.

# License

MIT
