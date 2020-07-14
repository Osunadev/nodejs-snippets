const path = require('path');
const fs = require('fs');

console.log('__filename:', __filename); // Absolute path of the file being executed
console.log('__dirname:', __dirname); // Absolute path of the directory that the currently executing script resides in
console.log('Name of the current script:', path.basename(__filename));
console.log('');

// These are both the same because they point to the current working directory
// which is the location from where we're executing our node.js script
console.log('process.cwd():', process.cwd());
console.log('./:', path.resolve('./'));
console.log('');

// Reading the content of our package.json
const packageJsonPath = path.join(__dirname, '../../package.json');
console.log('Path of our package.json:', packageJsonPath);

fs.readFile(packageJsonPath, (err, data) => {
  // We know that our data is a Buffer, that's why we need
  // to convert it into a string

  if (!err) {
    const content = JSON.parse(data.toString());
    console.log(content);
  } else {
    console.log("We couldn't find the specified file!");
  }
});
