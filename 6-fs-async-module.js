const fs = require('fs');

// Initiate an asynchronous file read operation
fs.readFile('content/sample.txt', 'utf8', (err, data) => {
  // This callback function gets executed after the file is read

  // Check if there was an error
  if (err) {
    // If there is an error, log it and exit the callback
    console.error('Error reading file:', err);
    return;
  }

  // If there is no error, log the contents of the file
  console.log('File contents:', data);
});

// This line of code will be executed before the file is read
// This is because the file read operation is asynchronous
// the callback function will be executed after the file is read
console.log('Reading file...')

// writing to a file
fs.writeFile('content/out.txt', 'written using async', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
