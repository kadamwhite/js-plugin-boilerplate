console.log('config loading');
require.config({
	baseUrl: "src"
});

// Loads 'src/app', thanks to the baseURL above
require(['app']);
