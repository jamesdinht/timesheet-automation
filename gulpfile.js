"use strict";
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var protractor = require("gulp-protractor").protractor;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var webdriver_update = require("gulp-protractor").webdriver_update_specific;
var runSequence = require("run-sequence");

gulp.task("build", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

// Download selenium webdriver
gulp.task("webdriver_update", webdriver_update({
    browsers: ["ignore_ssl"]
}));

// Start standalone selenium server
gulp.task("webdriver_standalone", webdriver_standalone);

gulp.task("timesheet", ["webdriver_update"], function() {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./dist/src/conf.js",
            args: []
        })).on("error", function (err) {
            throw err;
        }).on("end", function() {

        });
});

gulp.task("default", ["build"]);

gulp.task("watch", ["build"], function() {
    gulp.watch('src/*.ts', function() {
        runSequence("build", "timesheet");
    });
});