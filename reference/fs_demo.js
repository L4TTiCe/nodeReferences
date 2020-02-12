const path = require('path');
const fs = require('fs');

var folder_name = 'test';
var file_name = 'hello.txt';

// Create Folder
fs.mkdir(path.join(__dirname, folder_name), {}, function(err) {
    if (err) throw err;
    console.log(`Created ${folder_name} folder...`)
});

// Create and Write to File
fs.writeFile(path.join(__dirname, folder_name, file_name), "Hello World!\n", err => {
    if (err) throw err;
    console.log(`Created ${file_name}, in ${folder_name} folder...`)
});

// Append to File
fs.appendFile(path.join(__dirname, folder_name, file_name), "I like Node.js\n", err => {
    if (err) throw err;
    console.log(`Appended ${file_name}, in ${folder_name} folder...`)

    // Read File
    fs.readFile(path.join(__dirname, folder_name, file_name), 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`\nRead data from ${file_name} :\n${data}\n---EOF---`)
    });
});

