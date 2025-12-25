const { Buffer } = require('node:buffer');
const path = require('node:path');
const readline = require('node:readline');
const fs = require('node:fs');

//1. Examine write of the Buffer object.
const buffer = Buffer.alloc(20);
buffer.write('Hello World', 'utf-8');
console.log(buffer.toString('utf-8'));
console.log(buffer);

//2. Examine methods basename, join, resolve, dirname of path module.
const filePath = './path_folder/text.txt';
console.log(path.dirname(filePath));
console.log(path.basename(filePath));

const folderName = 'second_folder';
const folderPath = path.join('/', 'path_folder_2', folderName, 'text2.txt');
console.log(path.dirname(folderPath));
console.log(path.basename(folderPath));

console.log(path.resolve('text.txt')); 
console.log(path.resolve('path_folder', 'text.txt'));
console.log(path.resolve('/path_folder', 'text.txt'));

/** 3. Create the application that writes content to the file
 * File name and the content are passed through command line
 * If there is no file — it is created, if the file exists — it is produced
   the content is written at the end of the file
 * Use method fs.stat() to check the existence of the file 
*/ 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("File name: ", fileName => {
    rl.question("Content: ", content => {
        let name = path.join(fileName + '.txt');
        fs.stat(name , err => {
            if (err)
            {
                fs.appendFile(name, content + '\n', err => {
                    if(err) console.log(err);
                    else console.log("File has been created and written successfully!");
                });
            }
            else 
            {
                fs.appendFile(name, content, err => {
                    if(err) console.log(err);
                    else console.log("File has been written successfully!");
                });
            }
        });
        rl.close();
    });
});
