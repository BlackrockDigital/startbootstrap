// Assigning modules to local variables
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - Official Website (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Default task
gulp.task('default', ['minify-css']);

// Less task to compile the less files and add the banner
gulp.task('less', function() {
    return gulp.src('assets/less/startbootstrap.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify CSS
gulp.task('minify-css', function() {
    return gulp.src('assets/css/startbootstrap.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Watch Task that compiles LESS and watches for HTML or JS changes and reloads with browserSync
gulp.task('dev', ['less'], function() {
    gulp.watch('assets/less/*.less', ['less']);
});