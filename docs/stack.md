# The Stack

Hey, so everyone has their favourites right? Here's a few of mine.

## Language

> **typescript**

[typescript - github](https://github.com/Microsoft/TypeScript)

Such a well polished and wonderful typing system. I know this is a stepping stone to a better language, but JavaScript is really comfortable at this point. TypeScript dials the safety part in.

## Language Support

> **tslint**

[tslint - github](https://github.com/palantir/tslint)

A linter with a great set of rules is awesome.

> **husky**, **lint-staged**, **prettier**

[husky - github](https://github.com/typicode/husky) /
[lint-staged - github](https://github.com/okonet/lint-staged) /
[prettier - github](https://github.com/prettier/prettier)

Some automation so I stop checking in crap-looking code.

## Rendering

> **react**, **react-dom**

[react - github](https://github.com/facebook/react)

Can't imagine doing web differently to be honest. I'm sure we will soon, but for mid-2017, this is dominating.

I like `preact` as well. I feel like the switching over will be pretty simple and I probably will.

## Components

> **glamor**

[glamor - github](https://github.com/threepointone/glamor)

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

* ✅ objects are first class
* ✅ strong on composibility
* ✅ performant out of the box (without configuration)
* ✅ works well with global styles and things like keyframes
* ✅ friendly devs
* ✅ a DSL that is true to CSS (especially with child selectors)
* ✅ built-in escape hatches
* ✅ clear docs with examples, patterns, and advice
* ✅ stable-ish API
* ✅ TypeScript-friendly
* ✅ testability without flushing caches or buffers

My advice? **Don't listen to my advice**. Explore & pick your own. Much, if not most, of your app is UI.

Start your app only when your gut says, "You'll fuck this up long before your styling lib gives out."

`glamor` gives me that vibe. 💃

> **Storybook**

[storybook - github](https://github.com/storybooks/storybook)

Provides a sandbox to work on your components with whatever props you can dream of wanting set to make sure your components are in tip top shape before and during use in your application. If you are writing a component you should be writing stories about it.

Also the storyshots addon for working with `jest` is a great way to add snapshot testing for your React components by using your stories. (Like we needed another reason to use storybook!!)

## Animations

> **react-transition-group**

[react-transition-group - github](https://github.com/reactjs/react-transition-group)

Brings enter + leave lifecycle events for animations.

> **popmotion**

[popmotion - github](https://github.com/Popmotion/popmotion)

Power animation & tweening library.

## Keyboard Support

> **mousetrap**

[mousetrp - github](https://github.com/ccampbell/mousetrap)

The main menu in electron has keyboard accelators, but we still need one in the renderer for convenience.

Mousetrap fills that gap. It's a pretty decent little library despite not being maintained any more (lol@js). Does the job though. I've tried a couple of others but keep coming back to this one.

## Utilities

> **ramda**

[ramda - github](https://github.com/ramda/ramda)

There's so much awesome packed in here. `pipe` for days. I'll be honest, it took me a long time get comfortable with `ramda`. Nowadays, you can pry it from my cold dead hands. PRECIOUS!!!

## Electron Things

> **electron-builder**

[electron-builder - github](https://github.com/electron-userland/electron-builder)

This does most of the heavy lifting for assembling cross-platform distributables.

> **electron-updater**

Allows our app to auto-update.

> **electron-is-dev**, **electron-log**

[electron-is-dev - github](https://github.com/sindresorhus/electron-is-dev) /
[electron-log - github](https://github.com/megahertz/electron-log)

A few quality-of-life utilities for working in Electron.

> **electron-store**

[electron-store - github](https://github.com/sindresorhus/electron-store)

Persist JSON to the file system.

> **electron-window-state-manager**

[electron-window-state-manager - github](https://github.com/TamkeenLMS/electron-window-manager)

Persist window coordinates & dimensions to disk to survive restarts.

## Bundler

> **fuse-box**

[fuse-box - github](https://github.com/fuse-box/fuse-box)

Yes, you read that right. Not WebPack. WebPack always rubbed me wrong. Maybe it's the config? Maybe it's the way they name things? I'm not sure.

What I do know is, once I started playing with FuseBox, I was sold. I like the devs behind this too.

## Testing

> **jest**

[jest - github](https://github.com/facebook/jest)

Because we're using TypeScript, Jest makes this much easier. Jest comes with mocking and coverage as well.

## Compile Time Utilities

> **npm-scripts-info**, **npm-run-all**

[npm-scripts-info - github](https://github.com/srph/npm-scripts-info) /
[npm-run-all - github](hhttps://github.com/mysticatea/npm-run-all)

Quality-of-life utilities for npm.

## Docs

> **docsify**

[docsify - github](https://github.com/QingWei-Li/docsify)

You're reading it right now.

* No build-time required.
* Themeable.
* Drops in your `master` branch.
* Supports plugins.
* Hooks up to github without deployment scripts.

Love it.
