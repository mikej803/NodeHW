


const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('File Name ?', (fileName)=> {
        rl.close();
        let readFile = fs.readFileSync('file1.txt', 'utf8');
        fs.writeFileSync('output.txt', readFile);
        console.log(readFile.toString().toUpperCase());
    })




    // fs.readFile(fileName, (error,contentsOfFile)=>{
    // if(error){
    //     console.log(error.message);
    //     return
    // }
    // console.log(contentsOfFile.toString().toUpperCase())
// })

// })