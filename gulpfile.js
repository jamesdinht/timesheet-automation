"use strict";
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update_specific;
var runSequence = require("run-sequence");
var gulpTslint = require("gulp-tslint");
var tslint = require("tslint");

gulp.task("build", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

// Download selenium webdriver
gulp.task("webdriver_update", webdriver_update({
    webdriverManagerArgs: ["--ignore_ssl"]
}));

gulp.task("timesheet", ["webdriver_update"], function() {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./dist/src/conf.js",
            args: []
        })).on("error", function (err) {
            throw err;
        });
});

gulp.task("lint:ts", function() {
    var program = tslint.Linter.createProgram("./tsconfig.json")
    return gulp.src("src/*.ts")
        .pipe(gulpTslint({ program }))
        .pipe(gulpTslint.report())
});

gulp.task("default", function() {
    runSequence("build", "timesheet");
});

gulp.task("watch", ["build"], function() {
    gulp.watch('src/*.ts', function() {
        runSequence("build", "lint:ts", "timesheet");
    });
});