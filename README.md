# Question: How to use libs which use globals in Angular 2+

This repo contains code to demonstrate the above question.

The demonstration uses a bootstrap 4 default navbar, which gets collapsed on mobile devices. There will be a toggler button shown (burger) to toggle the navigation menu.

Let's say I would like to be able to run this code manually:<br/>
`$('.navbar-collapse').collapse('show');`<br/>
This code uses the `$` jquery object, and the `collapse()` extension method, which is patched into `$` via bootstrap.js.

There are 2 branches demonstrating my tries

* TS_import_based_solution_which_does_not_work
  * This repo shows how I tried to achieve the goal the TypeScript-ish way, which does not work
* Global_based_solution
  * This repo shows how I successfully achieved the goal, with a solution not so elegant.

The point is contained by these 2 commits:<br/>
[Working solution: Using globals]<br/>
[Not working solution: Trying to use TS imports]<br/>

# How to run the demonstration app

Clone the repo, and run `npm install` in its folder.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.




[Working solution: Using globals]: https://github.com/nvirth/angular-globals-question/commit/610fb9e1f4986d86270368338133823f1bf3e86c "Working solution: Using globals"
[Not working solution: Trying to use TS imports]: https://github.com/nvirth/angular-globals-question/commit/e485986c01cce9c3935a21c3ff06639c16fb0f7f "Not working solution: Trying to use TS imports"
