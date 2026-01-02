const fs = require('node:fs');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const path = require('node:path');

async function run() 
{
    const rl = readline.createInterface({ input, output});

    try
    {
        const fileName = await rl.question("Filename: ");
        const content = await rl.question("Content: ");
        const fullPath = path.join(fileName + '.txt');

        const writeableStream = fs.createWriteStream(fullPath, { flags: 'a', encoding: 'utf-8' });

        writeableStream.on('error', (error) => {
            console.error("Write stream error: ", error.message);
            writeableStream.destroy();
        });

        writeableStream.on('finish', () => {
            console.log("Success!");
        });

        writeableStream.write(content + '\n');
        writeableStream.end();
    }
    catch(error)
    {
        console.error("An unexpected error occurred: ", error);
    }
    finally
    {
        rl.close();
    }
}

run();