const fs = require('fs');

// console.log(process.argv);

function main(filename){
    fs.readFile(filename, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            let m = data.trim().split(/\s+/).length;
            console.log(m);
        }
        
    })
}

main(process.argv[2]);   // this made our program almost like CLI but here we cannot have helper tag where we can see how many options we can have