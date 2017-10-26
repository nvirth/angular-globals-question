import { Component, AfterViewInit } from '@angular/core';

// Importing jquery, declaring '$' locally
//
import * as $ from 'jquery';

// The next line will cause this error:
// Uncaught Error: Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.
//
//import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(): void {
    // Here I would like to use the '$' jquery object, extended
    // with the method 'collapse()', which has should be
    // added to it by the bootstrap.js, in index.html
    //
    // NOTES
    // * The '$' object is not declared globally here
    // * This solution does not work :)
    //
    $('.navbar-collapse').collapse('show');
    //
    // Now my questions are:
    // * Can I import jquery into $, and then import bootstrap,
    //   and make it extend the local $ object?
    // ** I guess this is not possible. If so, what is the
    //    intended solution for using such kind of 3rd party
    //    libs, which use globals and extend them?
  }
}
