// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

const request = require('request');
const fs = require('fs');

//request syntax:
// request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//fs.writeFile syntax:
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const fetcher = function(url, file) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(`error: ${error}`);
    }
    fs.writeFile(file, body, (err) => {
      if(err) {
        //throw err;
        console.log(`error: ${err}`);
      }
      
      console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
    })
  });
};
let args = process.argv.slice(2);
let url = args[0];
let file = args[1];

fetcher(url, file);

//or:

// const domain = process.argv[2];
// const save = process.argv[3];

// request(domain, (error, response, body) => {
//   if (!error) {
//     fs.writeFile(save, body, (err) => {
//       if(!err) {
//         console.log(`Downloaded and saved ${body.length} bytes to ${file}`); 
//       } else console.log(`error: ${err}`);
//     })
//   } else console.log(`error: ${error}`);
  
// });