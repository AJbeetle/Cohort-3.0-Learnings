
        document.addEventListener("DOMContentLoaded", async function(){
            const res = await fetch('http://localhost:3000/view');
            const data = await res.json();
            render(data);
        })
        document.querySelector(".add").addEventListener("click",async function(){
                let t = document.getElementById('desc').value;
                let id = 3;
                console.log(t);
                const req = await fetch('http://localhost:3000/add',{
                    method:'POST',
                    headers:{
                        "Content-Type" :"application/json"
                    },
                    // body: JSON.stringify({desc : t, i : id })
                    body: JSON.stringify({desc : t})
                });
                // const response = req.json();
                // console.log(respnose);
        })

        document.addEventListener("click",function(event){
            let todoitem = event.target.closest("a");
            console.log("clicked on : ",todoitem);
            // console.log("clicked on : ",todoitem.closest(".butt"));
            // console.log("clicked on : ",todoitem.closest(".butt").parentElement);
            // console.log("its parents : ",todoitem.parentElement);
            console.log("its parents class Name : ",todoitem.parentElement.className);
            // console.log("uppermost parent : ",todoitem.parentElement.parentElement.parentElement);
            // console.log(todoitem.parentElement.parentElement.parentElement.className);

            if(todoitem.parentElement.className == "but1"){
                let desc = todoitem.parentElement.parentElement.parentElement;
                let len = desc.children[0].children[0].children[1].innerHTML.length;
                if(desc.children[0].children[0].children[1].innerHTML.substring(len-4,len)=="DONE"){
                    desc.children[0].children[0].children[1].innerHTML = desc.children[0].children[0].children[1].innerHTML.substring(0,len-6);
                }
                else{
                    console.log(desc.children[0].children[0].children[1].innerHTML.length);
                    desc.children[0].children[0].children[1].innerHTML = desc.children[0].children[0].children[1].innerHTML + ": DONE"
                }
                desc.classList.toggle("completed");
            }
            else if(todoitem.parentElement.className == "but2"){
                let clas = todoitem.parentElement.parentElement.parentElement.className;
                console.log(clas);
                clas = clas.split(" ");
                // console.log(clas);
                let m = clas[0].split("m");
                // console.log(m[1]);
                m = parseInt(m[1]);
                // console.log(typeof(m));
                console.log(m);
                //    
                (async ()=>{
                    let res = await fetch("http://localhost:3000/delete",{
                        method:"DELETE",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify({id:m})
                    }) 

                    const val = await res.json();
                    console.log(val);

                    // **Remove item from frontend**
                    document.querySelector(`.item${m}`).remove();

                    // **Optionally re-fetch all todos**
                    const res2 = await fetch('http://localhost:3000/view');
                    const data = await res2.json();
                    document.querySelector('.contentTODO').innerHTML = "";  // Clear UI
                    render(data);  // Re-render updated todos
                })();
            }
            else if(todoitem.parentElement.className == "but3"){
                if(document.querySelector("dialog") != null){
                    document.querySelector("dialog").remove();
                }

                console.log("clicked on : ",todoitem.closest(".butt").parentElement);
                let placehold = todoitem.closest(".butt").parentElement;
                console.log(placehold.className);
                
                clas = placehold.className.split(" ");
                // console.log(clas);
                let m = clas[0].split("m");
                // console.log(m[1]);
                m = parseInt(m[1]);
                // console.log(typeof(m));
                console.log("id : ",m);

                let placeVal = placehold.children[0].children[0].children[1].innerHTML;
                console.log("placeholder value : ",placeVal);
                
                // let butt =todoitem.closest(".butt");
                // let cont = butt.closest("cont");
                // console.log(desc);
                // console.log(cont);
                // console.log("happy");

                let dialog = document.createElement("dialog");
                let h = document.createElement("h2");
                let inp = document.createElement("input");
                let button = document.createElement("button");

                h.innerHTML = "UPDATE Todo";
                inp.setAttribute("type","text");
                inp.setAttribute("class","dialogText");
                inp.setAttribute("value",placeVal);
                button.setAttribute("id","Save");
                button.innerHTML="Save";

                dialog.appendChild(h);
                dialog.appendChild(inp);
                dialog.appendChild(button);
                dialog.setAttribute("style",``)

                document.body.appendChild(dialog);  

                let d = document.querySelector("dialog");
                d.showModal();

                document.getElementById("Save").addEventListener("click",async function(){
                    let data = document.querySelector(".dialogText").value;
                    console.log(data);
                    let val =  await fetch("http://localhost:3000/update",{
                        method:"PUT",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify({id: m, data: data}) 
                    });

                    // let res = await val.json();
                    // console.log(res);
                    d.close();
                })


                
            }
        })
        function render(data){
            data.forEach(v => {
                let outer = document.createElement('div');
                let c = document.createElement('div');
                c.setAttribute('class',"cont");
                let b = document.createElement('div');
                b.setAttribute('class',"butt");
                //
                let wrap = document.createElement('div')
                wrap.setAttribute('class',"one")
                let id = document.createElement('div')
                id.setAttribute('class',"id")
                let desc = document.createElement('div')
                desc.setAttribute('class',"desc")
                //
                id.innerHTML = `${v.id}`;
                desc.innerHTML= `${v.desc}`;
                //
                outer.setAttribute('class',`item${v.id}`);
                wrap.appendChild(id);
                wrap.appendChild(desc);
                //
                c.appendChild(wrap);
                //
                let b1 = document.createElement('div')
                b1.setAttribute('class',"but1");
                let a1 = document.createElement('a');
                a1.setAttribute("href","");
                let im1 = document.createElement('img');
                im1.setAttribute('src',"./correct.png");
                im1.setAttribute("width", "20px");
                im1.setAttribute("height", "20px");
                // 
                a1.appendChild(im1);
                b1.appendChild(a1);
                b.appendChild(b1);
                // 
                //
                let b2 = document.createElement('div')
                b2.setAttribute('class',"but2");
                let a2 = document.createElement('a');
                a2.setAttribute("href","");
                let im2 = document.createElement('img');
                im2.setAttribute('src',"./remove.png");
                im2.setAttribute("width", "20px");
                im2.setAttribute("height", "20px");
                //
                a2.appendChild(im2);
                b2.appendChild(a2);
                b.appendChild(b2);
                //
                let b3 = document.createElement('div')
                b3.setAttribute('class',"but3");
                let a3 = document.createElement('a');
                a3.setAttribute("href","");
                let im3 = document.createElement('img');
                im3.setAttribute('src',"./pen.png");
                im3.setAttribute("width", "20px");
                im3.setAttribute("height", "20px");
                //
                a3.appendChild(im3);
                b3.appendChild(a3);
                b.appendChild(b3);
                // 
                outer.appendChild(c);
                outer.appendChild(b);
                //
                document.querySelector('.contentTODO').appendChild(outer);
               })
        }