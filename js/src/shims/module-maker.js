define(function() {
  'use strict';

  // This module puts a Require context around the global ModuleMaker function,
  // so that it can be included in the built application even if it's enqueued
  // using the normal WordPress script methods.

  // Export the global for direct use within the application
  return window.ModuleMaker;
});
