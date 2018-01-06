## Test Drive

Want to try this out? Clone & run. There's a small sample project included.

```sh
git clone --depth 1 git@github.com:skellock/typescript-with-electron-react-kit.git
cd typescript-with-electron-react-kit
rm -rf .git
git init
git add .
npm i
npm start
```

_Requires `node@>=8.6` and `npm@>=5.4`._ (NOTE: not really, but ya, upgrade ... there's some pretty big bugs in earlier versions)

## Start Your Own Project

Ready to start your project?

This sample app has a few things that should be swapped out for your settings.

#### Reset git

You'll want to start from a fresh source control history.

* delete the `.git` directory
* re-initialize git by running `git init`

#### Change App Settings

Open `package.json` and change these keys to be your own:

* name
* productName
* description
* license
* author
* repository
* homepage
* build.mac.category
* build.publish

## Strip It Down to the Bones

If you're looking for a really fresh start:

* delete the `src/views` directory
* delete the `src/models` directory
* delete the `src/services` directory
* delete the `src/i18n` directory
* delete the `src/app/root-component.tsx` file
* change `src/app/index.tsx` to point to your new root component

## Keep the Meat, Ditch the Fluff

If you want to just remove the examples and continue with the app layout:

* delete the `src/views/example` directory
* delete the contents of `src/models`
* delete the contents of `src/services`
* create a new react component under `src/views` (i prefer a sub-directory under here)
* open `src/app/root-component.tsx` and point to your new component

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

This is hooked up to a `pre-push` build script. This will help you not check in mistakes. Trust me.

If you want to run in `watch` mode for testing while you develop (quite nice!):

```sh
# in terminal 1:
npm run watch:compile

# in terminal 2:
npm run watch:tests
```

Now when you edit your files, it'll recompile & re-run the relevant tests on the fly. And it's quick!

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
