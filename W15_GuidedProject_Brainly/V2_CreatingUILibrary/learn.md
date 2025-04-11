reference for UI/UX of frontend

1. ![alt text](image.png)
2. ![alt text](image-1.png)

Doing my own work in folder : BrainlyFE_Learn
Learning from harkirat : this file


Today we will do frontend of secondBrain app (aka Brainly)
We did Backend in Typescript with express and mongoDB

768-895

Frontend in TypeScript too

Components we need to build 
1. primary and secondary button [blue and lightBlue button resp] [text for them white and blue]              : DONE ✅
2. Cards                                          : DONE ✅
3. SideBar                                        : DONE ✅       
4. create Modal : when user click on Add Content, either user goes to another page where they can add content or modal pops up where they can add details                     : DONE ✅
5. share Modal : when user clicks on share Brain button this modal opens up     : DONE ✅
6. Add Search Component                                                         : DONE ✅


-> using recoil for state management
-> or using react Query to send data and store it somewhere  OR SWR or someOther

-> Eventually we will learn about monorepos where we will have our frontend and backend code in same folders

-> Afer doing this code in recoil , I will migrate while code into redux

-> SO, in biggr companies, we fiest create a gneric component and then use it everywhere in the project. It is also called like creating your own UI library

-> this is what __shadCN__ does they create pretty components and maintain a UI library for that, other UI library is __ascernity__ . Your own UI library can also depend on other UI library

-> How to do End to End of this application => take user Input, generate its embeddings from any AI model, then store these inside some vector DB and then optimise the search over these vector DB space and then send the user prompt with your context to AI model [with proper prompt engineering] and then send back the response to user
Use : __quedrent__ : open source vector database that you can self host
, __superbase__ : another vector DB




-> if you use ReactQuery you don't need recoil
-> ![Okay something interesting](image-2.png)


TODO :-
1. See how diffferent processes communicate | nod backend talking to python process [microservices]  |  also you can spawn a python process from nodeJS process

2. Quiz.100xdevs.com : work there