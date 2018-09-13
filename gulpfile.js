'use strict';

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')
const del = require('del');
const concat = require('gulp-concat');
const gutil = require('gulp-util');

const devPaths = {
    "html": "./src/index.html",
    "sass": "./src/styles/main.scss",
    "allStyles": "./src/**/*.scss",
    "js": "./src/app/**/*.js",
    "images": "./src/images/**/*",
    "fonts": "./src/fonts/**/*"
};

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        notify: false
    });
});

gulp.task('sass', () => {
    gulp.src(devPaths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(
        {
            browsers: ['last 10 versions'],
            cascade: false
        })
    )
    .pipe(gcmq())
    .pipe(concat('all.css'))
    .pipe(gulp.dest("./src/styles"))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('html', () => {
    gulp.src(devPaths.html)
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', (done) => {
    webpack(webpackConfig, function(err, stats) {

        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString({
            // output options
        }));

        done();
    });
    gulp.src(devPaths.js)
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watcher', () => {
    gulp.watch(devPaths.allStyles, ['sass']);
    gulp.watch(devPaths.js, ['scripts']);
    gulp.watch(devPaths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);

gulp.task('build', () => {
    del(['./dist']).then(() => {
        console.log('Deleted folder DIST');
        gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
        gulp.src('./src/scripts/all.js').pipe(gulp.dest('./dist/scripts/'));
        gulp.src('./src/styles/all.css').pipe(gulp.dest('./dist/styles/'));
        gulp.src('./src/images/**/*').pipe(gulp.dest('./dist/images/'));
        console.log('Create folder DIST');
    });
    
});