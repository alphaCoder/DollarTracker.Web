var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

var devAppFolder = './app';
var distAppFolder = './dist/app';
var distLibFolder = './dist/lib';

var libFiles = []