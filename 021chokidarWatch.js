const { watch } = require('chokidar');

watch('.')
  .on('add', (path) => console.log(`File ${path} has been added`))
  .on('change', (path) => console.log(`File ${path} has been changed`))
  .on('unlink', (path) => console.log(`File ${path} has been removed`))
  .on('addDir', (path) => console.log(`Directory ${path} has been added`))
  .on('unlinkDir', (path) => console.log(`Directory ${path}has been removed`))
  .on('error', (error) => console.log(`Watcher error ${error}`))
  .on('ready', () => console.log('Initial scan complete,Ready for changes'));
