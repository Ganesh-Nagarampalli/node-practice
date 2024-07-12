const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      const success = true; // Simulate a successful operation
  
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed.");
      }
    }, 1000);
  });

  // resolve is called when the operation is successful
  // reject is called when the operation fails

  // resolve() is called after 1 second
  // reject() is not called in this example
  
myPromise
    .then((result) => {
    console.log(result); // Output: "Operation was successful!"
    })
    .catch((error) => {
    console.error(error); // This will not run in this example
    });
