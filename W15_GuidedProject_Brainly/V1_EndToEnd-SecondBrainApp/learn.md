We will mostly do BACKEND OF THE APP TODAY
-> We can't really use TS fully in frontend with react [very minimal use], unless you have a backend in TS, then you need some typeSafety in frontend too


TODAY's TASK :-
BUILDING A SECOND BRAIN APP => 
1. setting imp links inside this, so you can come to it when you need time, so this something like note app, but instead of taking notes you are storing likns, whose metadata is shown to user
2. you can also share your second brain to others. So people can see what all things you are interested in

![Starting UI of app](image-1.png)

So this app can do :-
1. where people can come and put links
2. using AI to find some specific content which is inside our links, which user vaguely remember. So, AI could Query through the whole big database of second brain to find matching tweet or link 
[ Here we use Vector Databases and embeddings you would have heard of]


TODAY ONLY - BACKEND [in TS] -> Now when you write express backend in TS, some things change

-> Extra endpoint ![where user can hit this open id of someone else to see their shared brain](image-2.png)
-> EXTRA THOUGHTS => one link can have more than one tags optimise your backend for that


-> enums used ![alt text](image-3.png)


Bootstraping the application
1. Initialise TypeScript  
   -> npm init -y
   -> npm i -D typescript
   -> npx tsc --init

   [Inside the tsconfig.json do following changes] :-
   -> "rootDir" : "./src"
   -> "outDir" : "./dist"

2. Install express with types [normal installation of express will create problems with express]

   -> npm install @types/express

3. Now after this you can collect all your needed dependencies as normal and start writing your skeleton codes   
4. command to run ts files directly 
   -> npx ts-node src/config.ts

--------------------------------------------------------------------------------------
COMPLETED BASIC BACKEND    | you can use //@ts-ignore before a line that gives error in TS -> but this practise is very bad  |
-------------------------------------------------------------------------------------
.d.ts file is declaration file

When your code is in TS .d.ts file is automatically generated 

but if you ever right library for NPM, and if it written in TS, then you publish the JS bundle and publish the d.ts file, you will not publish the TS files

always bring declaration files from npm i @types/moduleName , without this you won't be able to use benefits of typecript


NOW UNDERSTANDING THE ARCHITECTURE OF AI -> AI.md 

IMPROVEMENTS IN BACKEND NEEDED :-
-> learn how to set alias for npm start, dev and all other commands
-> Tags array can also be same tags from the tagModel, so adjust schema for that  => ![alt text](image-7.png)
-> using populate functionality of mongoDB object to select somethings only from the referenced variable ![alt text](image-8.png)
TODO:-
1. See enums and generics in TS
2. If you need very strict types in frontend and backend Then you should go through TRPC [will not be covered in course]
3. T3 stack  => complicates development a little unnecessity but yeah type safed
4. See this video => ![alt text](image.png)
5. dhardavassha India boy making second brain app
6. Pagination
7. see this project => ![alt text](image-9.png)
8. regex generator => ![alt text](image-10.png)