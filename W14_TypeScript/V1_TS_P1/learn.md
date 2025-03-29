1. never to use hooks inside for loops

There are multiple languages out there : 
  -> JS, Java, Python, C, C++, TypeScript, Rust, Go

  -> So languages basically are of two type : 
      1. Compiled
      2. Runtime OR Interpreted

-> Let's See this classification of programming languages:
     1. Strongly Typed Languages  : Ex - Java, C++, C : lesser runtime errors as it checks error in compile time : very good example is ALWAYS FIGHTING BORROW CHECKER IN RUST
     2. Loosely Typed Languages   : Ex - Python, JavaScript, Perl, php

     ![compiletime vs runtime](image.png)

     So, Compiled time is better because when you are compiling you got the error you did not get the binary or bytecode for deployment so nothing gets deployed so you fix the code and deploy, this way user will not see such issues, but
     in Interpreted languages, code will blast on runtime only so user will see backend crash 


     Loosly typed vs strongly typed  is not assigning the variable types while coding vs assigning the datatype of the variable while coding


     Language looks similar to JS but gives you type safety.
     TS is language developed and maintained by microsoft. It is a strict syntactical superset of JS and adds optional static typing to the language
     ![alt text](image-1.png)

     ![alt text](image-2.png)


     TypeScript Compiler : __tsc__  is the official typescript compiler that you can use to convert typeScript code into javaScript

     There are many other famous compilers/transpilers for converting Typescript to JS.Some famous ones are :-
        -> esbuild
        -> swc

    ex = tsc was not working with monorepos so used esbuild so you can use any compiler as per requirement


-----------------------------------------
Let's start typescript code -> newFolder
--------------------------------------------------

Learning TsConfig

![target](image-3.png)


-------------------------------------------------------------
Interfaces and Types 
-------------------------------------------------------------

So till now we have used primitive data types, but what if we need to us objects lets say our function accepts an object as an argument then what to do


-------------------------------------------------------------------
Setting up typescript environment
-> npm init -y
-> npm i typescript 
-> npx tsc -v
-> npx tsc --init



TODOSSSSSS 
1. How to do polymorphism in TS : overriding a function
2. Also learn hwo to do overloading
3. Create hooks in ts
4. Create a react component that takes todos as an input and renders them
5. figure out this error : ![alt text](image-4.png) and ![alt text](image-5.png)

6. ![See this guy SIH 2024](image-6.png)
7. ![what the hell is this](image-7.png)
8. Bun is better than node.js, it has built in  TS compiler, so there is no need to compile TS files to js everytime, it saves a lot of time by doing this quickly       -> See This [try BUN] 
9. Atom is a IDE too : WE HAVE BUNCH OF IDES => VSCode, Atom, Cursor, eclipse, intelliJ 
10. ![fiber as backend framework and ENT as ORM](image-8.png) => harkirat suggested Gin is faster and most codeBases are in this framework Gin
    -> seeing through listMonk ka github ![alt text](image-9.png)

11. polymorphism in TS => ![alt text](image-10.png)    
12. Issue opened in TS for what problem we were encountering ->![alt text](image-11.png)
13. Good github repo for Web3 - ![alt text](image-12.png)

