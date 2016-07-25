var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

var devAppFolder = './app';
var distAppFolder = './dist/app';
var distLibFolder = './dist/lib';

var libFiles = [
        "node_modules/@angular/common/**/*",
        "node_modules/@angular/compiler/**/*",
        "node_modules/@angular/core/**/*",
        "node_modules/@angular/http/**/*",
        "node_modules/@angular/platform-browser/**/*",
        "node_modules/@angular/platform-browser-dynamic/**/*",
        "node_modules/@angular/router/**/*",
        "node_modules/@angular/router-deprecated/**/*",
        "node_modules/@angular/upgrade/**/*",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/systemjs/dist/system-polyfills.js",
        "node_modules/rxjs/**/*",
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/d3/d3.min.js",
        "node_modules/ng2-nvd3/build/lib/ng2-nvd3.js",
        "node_modules/angular2-jwt/angular2-jwt.js",
        "node_modules/ng2-bs3-modal/**/*",
        "node_modules/ng2-select/**/*",
        "node_modules/ng2-slim-loading-bar/**/*"
    ];
    
    gulp.task('copyLibs', function () {
        gulp.src(libFiles, { base: "node_modules" }).pipe(gulp.dest(distLibFolder));
    });
    
    gulp.task('cleanLibs', function () {
        return del(distLibFolder +'/**/*');
    });
    
    gulp.task('cleanApp', function (params) {
        return del(distAppFolder+'/**/*');
    });
    
    gulp.task('copyHtml', function () {
    gulp.src(devAppFolder + '/**/*.html').pipe(gulp.dest(distAppFolder));
    });
    
    gulp.task('watchForHtmlChanges', function () {

    watch(devAppFolder + '/**/*.html', function (file) {
        if (file.event == 'change' || file.event == 'add') {            
            gulp.src(file.path, { "base": devAppFolder }).pipe(gulp.dest(distAppFolder));
            console.log('HTML UPDATED', file.relative);
        } else if (file.event == 'unlink') {
           
            var fname = distAppFolder + '/' + file.relative;
            del(fname);
            console.log('DELETED', file.relative);
        }
    });
});


gulp.task('rebuild', ['cleanApp', 'copyHtml'], function() {
    var tsProject = ts.createProject('./tsconfig.json');
    tsProject.src(devAppFolder + '/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distAppFolder));
});

gulp.task('rebuildAll', ['cleanLibs', 'copyLibs', 'cleanApp', 'copyHtml'], function() {
    var tsProject = ts.createProject('./tsconfig.json');
    tsProject.src(devAppFolder + '/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distAppFolder));
});

gulp.task('watchAll', ['watchForHtmlChanges','watchForTsChanges'], function() {
   console.log('WATCHING ALL'); 
});

gulp.task('watchForTsChanges', function () {
    var tsProject = ts.createProject('./tsconfig.json');
    watch(devAppFolder + '/**/*.ts', function (file) {
        console.log('FILE: ', file.relative,' EVENT: ', file.event);
        if (file.event == 'change' || file.event == 'add') {
            tsProject.src(file.path)
                .pipe(sourcemaps.init())
                .pipe(ts(tsProject))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(distAppFolder));
            console.log('COMPILED', file.relative);
        } else if (file.event == 'unlink') {
           
            var fname = distAppFolder + '/' + file.relative;
            fname = fname.replace(/.ts$/, '.js');
            del([fname, fname + '.map']);
            console.log('DELETED', file.relative);
        }
    });
});