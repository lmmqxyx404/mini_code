"use strict";

// Increase max listeners for event emitters
require("events").EventEmitter.defaultMaxListeners = 100;

const gulp = require("gulp");

// const util = require('./lib/util');
// const task = require('./lib/task');

// All
// const _compileTask = task.define('compile', task.parallel(monacoTypecheckTask, compileClientTask, compileExtensionsTask, compileExtensionMediaTask));
// gulp.task(_compileTask);

gulp.task("watch-client", async () => {
  console.log("watch completed");
});
