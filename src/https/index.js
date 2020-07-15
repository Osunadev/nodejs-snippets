// Node provides two modules to make http and https requests
const https = require('https'); // We're using the https one

function getRequest(url) {
  const promise = new Promise((resolve, reject) => {
    const request = https.request(url, res => {
      let data = '';

      // The data event when we have an incoming portion of data
      res.on('data', chunk => {
        // Chunk is just a chunk of raw (buffer) data
        data += chunk.toString();
      });

      // The end event when we received all of the data
      res.on('end', () => {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      });
    });

    // If we had some sort of error
    request.on('error', error => {
      reject(error.message);
    });

    // We're specifying that we're done sending the request body
    request.end();
  });

  return promise;
}

getRequest('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
