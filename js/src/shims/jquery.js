define(function() {
  // WordPress enqueues jQuery in noConflict mode. In order for it to be
  // easily referenced from within our application, we need to move it
  // into the AMD context: however, we don't want to load it via AMD,
  // because that could disrupt other plugins that expect it to be loaded
  // in the usual fashion. As a compromise, our script can depend on jQuery,
  // but load it via this manual shim instead of loading it with Require.
  // We still enqueue jQuery separately, as a dependency of the Require config.
  return window.jQuery;
});
