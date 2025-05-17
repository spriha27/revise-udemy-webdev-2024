/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        name: "url",
        message: "Pass the name of the website URL: ",
    },
  ])
  .then((answers) => {
    console.log('Answer: ', answers.url);
    var qr_png = qr.image(answers.url);
    qr_png.pipe(fs.createWriteStream('url.png'));
    fs.writeFile("url.txt", answers.url, (err) => {
        if(err) throw err;
        console.log("The file has been saved.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(new Error("TTYError"));
    } else {
      console.log(new Error("Some else went wrong!"));
    }
  });