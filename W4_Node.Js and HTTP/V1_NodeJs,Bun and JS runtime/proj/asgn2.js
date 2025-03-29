const fs = require('fs');
const { program } = require('commander');

program.name("TODOS AT YOUR DESK")
.description("viewing, adding, deleting or updating todos | only one of the facility to be used once at a time")
.version("1.0.0");

program.description("this is new preogra")
.option("-v, --view","view todo")
.option("-a, --add <todo...>","add todo with three arguments id > desc > time . Give all three arguments in order id > description > time OTHERWISE give only 1 (i.e. only discription) or 2 (i.e. only id and discription) or all three arguments")
.option("-d, --delete <int>","Delete todo by id")
.option("-u, --update <oldNew...>","update todo by old content > new content")
.action((options)=>{
    if(options){
        console.log("option used : ",options);
    }

    let read = fs.readFileSync("todo.json","utf-8");
    read = JSON.parse(read);

    // console.log(read.length);

    if(options.add){
        console.log(options.add.length);
        if(options.add.length==3){
            read.push({
                "id" : parseInt(options.add[0]),
                "desc" : options.add[1],
                "time" : options.add[2]
             })
        }
        else if(options.add.length==2){
            read.push({
                "id" : options.add[0],
                "desc" : options.add[1],
                "time" : null
            })
        }
        else if(options.add.length==1){
            read.push({
                "id" : read.length+1,
                "desc" : options.add[0],
                "time" : null
            })
        }

        read.sort((a,b)=> a.id-b.id);
        
        fs.writeFileSync("todo.json", JSON.stringify(read));
    }

    else if(options.view){
        console.log(read);
    }
    else if(options.delete){
        read = read.filter(item => item.id != options.delete[0]);
        read.sort((a,b)=> a.id-b.id);
        fs.writeFileSync("todo.json", JSON.stringify(read));
    }
    else if(options.update){
        // console.log(read);
        read = read.map( item => {
            if(item.desc  == options.update[0]){
                return {...item, desc: options.update[1]};
            }
            return item;
        });
        // console.log(read);
        fs.writeFileSync("todo.json",JSON.stringify(read));
    }
    else{
        console.log("give valid arguments");
    }

})

program.parse();




// console.log(read);

// console.log(read);    


