## Test Drive

Want to try this out? Clone & run.  There's a small sample project included.

```sh
git clone --depth 1 git@github.com:skellock/typescript-with-electron-react-kit.git
cd typescript-with-electron-react-kit
npm i
npm start
```

_Requires `node@>=8.2` and `npm@>=5.3`._ (NOTE: not really, but ya, upgrade ... there's some pretty big bugs in earlier versions)

## Start Your Own Project

Ready to start your project?

I'm still deciding on a simple way, but there will be a script you can run.

```sh
# this does exist yet
npm run time-to-shine
```


## Strip It Down to the Bones

You can keep the Electron parts but lose the rendering opinions.

* delete the directories under `src/renderer`
* change `src/renderer/index.tsx` to point to your new component


## Keep the Meat, Ditch the Fluff

If you want to just remove the examples and continue with the app layout:

* delete `src/renderer/features/example-using-tabs`
* remove corresponding lines from `src/renderer/index.ts`
* remove the same from `src/renderer/app/app.tsx`
* remove the `src/shared/models`
* remove the `src/main/database`

Now you're ready to start adding your own features.

## Testing

There's a script that does everything.

```sh
npm run sanity
```

It'll:

* clean up an temp files or build artifacts
* compile & check your typescript for errors
* lint both typescript and javascript for issues
* run the tests
* clean again
* compile the app in production mode
* clean 1 last time.

This is hooked up to a `pre-push` build script. This will help you not check in mistakes.  Trust me.

If you want to run in `watch` mode for testing while you develop (quite nice!):

```sh
# in terminal 1:
npm run watch:compile

# in terminal 2:
npm run watch:tests
```

Now when you edit your files, it'll recompile & re-run the relevant tests on the fly.  And it's quick!

If you are ready to see how much of your codebase is covered simply run:

```sh
npm run coverage
```

and check out the output in the coverage folder.


## Writing Components

When you are adding new components to your app you typically will want to write stories in `storybook`. You do this by simply creating a `<component name>.story.tsx` file along side your component and then writing stories that outline the different prop usage and put it in all the states that it could be in. While you are working on the component you will want to run

```sh
npm run storybook
```

and then switch to the storybook view from the `view` menu in your app so you can get a live preview of the component you are working on.



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
