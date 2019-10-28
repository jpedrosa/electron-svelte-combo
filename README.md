# Electron and Svelte combo.

The aim of this project is to serve as a small template combining both
Electron and Svelte.

## Purpose

Svelte is often focused on the UI side of matters and some of its examples out
there don't have enough input from external APIs. I.e. Svelte examples often
focus on the output side of programs. Electron comes in by providing a lot of
input APIs to hook Svelte with.

Also, it's not always obvious how to plug diverse projects into a building
block. So the more examples we have of it the more chance for us to learn how
it all fits together.

## Reference

This project has mostly joined the ideas of the basic Electron and Svelte
projects out there:

* [https://github.com/Rich-Harris/svelte-template-electron](https://github.com/Rich-Harris/svelte-template-electron)

* [https://github.com/Blade67/Sveltron](https://github.com/Blade67/Sveltron)

* [https://github.com/electron/electron-quick-start](https://github.com/electron/electron-quick-start)

# Installation

Clone the repository. Then run "npm install". Then the npm scripts in the
package.json file can be run like so: "npm run dev"

Electron can be started by running "electron static/main_electron.js" directly,
but the "npm run dev" command will start electron in development mode already.

# [LICENSE - MIT](LICENSE)