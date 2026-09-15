const fs = require('fs');
fs.writeFile('example.txt','I am tanvi aagrwal, I am athlete',(err) =>{
    if(err) throw err;
    console.log('File created!');

    //READ
    fs.readFile('example.txt', 'utf8', (err,data) =>{
        console.log('File content:', data);
    });

    //UPDATE
    fs.writeFile('example.txt','I am Tanvi Aagrwal and I am an Athlete.',(err) =>{
        if (err) throw err;
        console.log('File overwritten (updated)!');
    });

    //UPDATE (append)
    fs.appendFile('example.txt', '\nThis line was added.' , (err) =>{
        if(err) throw err;
        console.log('File updated (appended)!');
    });

    //DELETE
    fs.unlink('example.txt',(err) => {
        if (err) throw err;
        console.log('File deleted!');
    });
});