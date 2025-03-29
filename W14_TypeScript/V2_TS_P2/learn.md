Part 2 on TypeScript

Part1  :  we learnt abstract things 
P1 Learnings
1. Compiled vs Interpreted lang
2. Loosly vs strongly typed languages


Setting up TS environment :
1. Setup node environment > npm init -y
2. install typescript as dependency > npm i typescript 
3. check for the existence of typescript compiler > npx tsc -v || npx tsc --version
4. setup the tsc compiler  >  npx tsc --init 
5. after that you can configure your tsconfig.json as per project requirements
6. building ts files to js using tsc compiler => npx tsc -b || tsc -b [if tsc is installed globally] 


Typescript adds typeSafety in JS

intefaces in TS -> ![RandomObjects vs Class Objects](image.png)


So what we learnt is :-
1. Implementing interfaces [learnt types vs interfaces]
2. Abstract class vs Interfaces
3. Better understandin union -> ![alt text](image-4.png)
4. Learning Arrays

TODOOOO----------------------------------------------------

1. Check this out : ![alt text](image-1.png) and ![alt text](image-2.png) and ![hein what??](image-3.png)

2. Learn intersection and union in TS types  [understand deeply]
3. Learn how to create simple express HTTP servers using typescript => ![alt text](image-5.png)
4. One more topic you need to learn during TS is zod inference [type inference in zod], that is in TS advance but bettter you see it -> ![alt text](image-6.png)

5. confusion of intersection and union - very nicely explained ![alt text](image-7.png) , go through this reddit post : ![alt text](image-8.png)

6. Typescript types are open ![you won't be able to do p3:Point2D  = {x:1, y:1, name:"john" }   but you cam work through this like shown in image | so typescript types are open](image-9.png)
7. scope error ![alt text](image-13.png)
8. very nicely done explanation ![more refined](image-14.png) and ![alt text](image-15.png)   -> so intersection of two interfaces can be done using extending a interface into some other interface while union of two intersecn resulting an intersection I guess cannot be done
9. Interfaces can extend multiple types too ![instead of doing A & B for types to create a new ty you can create a interface out of it [A & B] like this : ](image-16.png)
10. vim editor some tips => ![alt text](image-17.png)
FROM THE TOP 
![image 1](image-10.png)
![image 2](image-11.png)
![intersection of two interfaces resulting to a type is allowed, but intersection of two interfaces resulting a interface is not valid](image-12.png)
