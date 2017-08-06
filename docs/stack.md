# The Stack

Hey, so everyone has their favourites right? Here's a few of mine.


## Language

> **typescript**

Such a well polished and wonderful typing system. I know this is a stepping stone to a better language, but JavaScript is really comfortable at this point. TypeScript dials the safety part in.


## Language Support

> **tslint**

A linter with a great set of rules is awesome.

> **husky**, **lint-staged**, **prettier**

Some automation so I stop checking in crap-looking code.


## Rendering

> **react**, **react-dom**

Can't imagine doing web differently to be honest. I'm sure we will soon, but for mid-2017, this is dominating.

I like `preact` as well.  I feel like the switching over will be pretty simple and I probably will.

## Component Styling ##

> **glamor**

The winner is: 

* ~vanilla css~ 
* ~sass~ 
* ~css modules~
* ~diy~
* ~radium~
* ~aphrodite~
* ~styletron~
* ~styled-components~
* ~typestyle~
* ~emotion~
* ~glam~
* ~glamorous~
* `glamor`!

I've flip-flopped on this quite a bit. We're spoiled by awesome options.

`glamor` nails what I'm looking for:

* ✅  objects are first class
* ✅  strong on composibility
* ✅  performant out of the box (without configuration)
* ✅  works well with global styles and things like keyframes
* ✅  friendly devs
* ✅  a DSL that is true to CSS (especially with child selectors)
* ✅  built-in escape hatches
* ✅  clear docs with examples, patterns, and advice
* ✅  stable-ish API
* ✅  TypeScript-friendly
* ✅  testability without flushing caches or buffers

My advice? **Don't listen to my advice**. Explore & pick your own. Much, if not most, of your app is UI. 

Start your app only when your gut says, "You'll fuck this up long before your styling lib gives out."

`glamor` gives me that vibe. 💃


## Animations

**react-transition-group**

Brings enter + leave lifecycle events for animations.

**popmotion**

Power animation & tweening library.


## State Management

> **mobx**, **mobx-react**

It brings the same things to the table as `redux`, but with considerably less typing.


## Keyboard Support

> **mousetrap**

The main menu in electron has keyboard accelators, but we still need one in the renderer for convenience.

Mousetrap fills that gap. It's a pretty decent little library despite not being maintained any more (lol@js). Does the job though. I've tried a couple of others but keep coming back to this one.


## Utilities

> **ramda** 

There's so much awesome packed in here. `pipe` for days. I'll be honest, it took me a long time get comfortable with `ramda`. Nowadays, you can pry it from my cold dead hands. PRECIOUS!!!


## Electron Things

> **electron-builder**

This does most of the heavy lifting for assembling cross-platform distributables.

> **electron-updater**

Allows our app to auto-update.

> **electron-is-dev**, **electron-log**

A few quality-of-life utilities for working in Electron.

> **electron-store**

Persist JSON to the file system.

> **electron-window-state-manager**

Persist window coordinates & dimensions to disk to survive restarts.


## Bundler

> **fuse-box**

Yes, you read that right. Not WebPack. WebPack always rubbed me wrong. Maybe it's the config? Maybe it's the way they name things? I'm not sure.

What I do know is, once I started playing with FuseBox, I was sold. I like the devs behind this too.


## Testing

> **ava**

This is my favourite testing framework. I've tried them all. The devs behind this are very talented, helpful, and friendly.


## Compile Time Utilities

> **npm-scripts-info**, **npm-run-all**

Quality-of-life utilities for npm.


## Docs

> **docsify**

You're reading it right now.

* No build-time required.
* Themeable.
* Drops in your `master` branch.
* Supports plugins.
* Hooks up to github without deployment scripts.

Love it.
