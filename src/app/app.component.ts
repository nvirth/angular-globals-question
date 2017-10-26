import { Component, AfterViewInit } from '@angular/core';

// Making the global '$' available for TypeScript usage
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(): void {
    console.log("Using globals here...");
    
    // Here I am able to use the global '$' jquery object
    // Plus the extension method 'collapse()', which has been
    // added to the global $ by the bootstrap.js, in index.html
    //
    // To see the effect, shrink your browser's width, until the
    // navbar burget appears. You will see the dropdown menu opened by default.
    // If you comment this line out, the dropdown menu will be closed by default.
    //
    $('.navbar-collapse').collapse('show');
    //
    // Now my questions are:
    // * Is this the inteded way of using such 3rd party libs, which
    //   have globals, and patches/extensions to other globals?
  }
}
