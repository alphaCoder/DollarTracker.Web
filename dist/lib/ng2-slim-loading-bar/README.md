# ng2-slim-loading-bar [![Build Status](https://travis-ci.org/akserg/ng2-slim-loading-bar.svg?branch=master)](https://travis-ci.org/akserg/ng2-slim-loading-bar) [![npm version](https://img.shields.io/npm/v/ng2-slim-loading-bar.svg)](https://www.npmjs.com/package/ng2-slim-loading-bar) [![npm monthly downloads](https://img.shields.io/npm/dm/ng2-slim-loading-bar.svg?style=flat-square)](https://www.npmjs.com/package/ng2-slim-loading-bar)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Dependency Status](https://david-dm.org/akserg/ng2-slim-loading-bar.svg)](https://david-dm.org/akserg/ng2-slim-loading-bar)[![devDependency Status](https://david-dm.org/akserg/ng2-slim-loading-bar/dev-status.svg)](https://david-dm.org/akserg/ng2-slim-loading-bar#info=devDependencies)
===============
Angular2 component shows slim loading bar at the top of the page of your application.

Follow me [![twitter](https://img.shields.io/twitter/follow/akopkokhyants.svg?style=social&label=%20akopkokhyants)](https://twitter.com/akopkokhyants) to be notified about new releases.

Simple examples using ng2-slim-loading-bar:
- with SystemJS in [ng2-systemjs-demo](https://github.com/akserg/ng2-systemjs-demo)
- with Webpack in [ng2-webpack-demo](https://github.com/akserg/ng2-webpack-demo)

Online demo available [here](http://akserg.github.io/ng2-webpack-demo)

## Installation
First you need to install the npm module:
```sh
npm install ng2-slim-loading-bar --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:
```js
System.config({
    packages: {
        "/ng2-slim-loading-bar": {"defaultExtension": "js"}
    }
});
```

Finally, you can use *ng2-slim-loading-bar* in your Angular 2 project:
- Import `SlimLoadingBarService, SlimLoadingBar` from `ng2-slim-loading-bar/ng2-slim-loading-bar`
- Instantiate `SlimLoadingBarService` in the bootstrap of your application;
- Add `SlimLoadingBar` to the "directives" property of your application component;
- Add `<ng2-slim-loading-bar></ng2-slim-loading-bar>` tag in template of your application component.

```js
import {Component} from '@angular/core';
import {SlimLoadingBarService, SlimLoadingBar} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {bootstrap} from '@angular/platform/browser';

bootstrap(AppComponent, [
    SlimLoadingBarService // It is required to have 1 unique instance of your service
]);

@Component({
    selector: 'app',
    directives: [SlimLoadingBar],
    template: `
        <div>Hello world</div>
        <button (click)="startLoading()">Start Loading</button>
        <ng2-slim-loading-bar></ng2-slim-loading-bar>
    `
})
export class AppComponent {
    
    constructor(private slimLoadingBarService:SlimLoadingBarService) { }
    
    startLoading() {
        // We can listen when loading will be completed
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }
}
```

# License
 [MIT](/LICENSE)

# Credits 
Inspired by [ngProgress.js](https://github.com/VictorBjelkholm/ngProgress)
