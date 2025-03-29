So most of the react is done.
Tailwind we did it

After this we have to do typescript then postgress & prisma

and then we can build a project

Things that you will be learning today :-
1. Transitions
2. Creating sidebars
3. Absolute/ Fixed/ Relative positioning
4. Completing the design
5. Dark Mode, Hover Effects. (https://tailwindcss.com/docs/darkmodebasic-usage) 

only difficult thing in tailwind is toggle in dark and light mode with react, it gets easier with next



Harkirat coding : 
1. Basic responsive sidebar and content =>  ![alt text](image.png)
2. transition and transforms
3. ![ulgly way to do dark modes](image-1.png)
4. Tailwind says do this : ![alt text](image-2.png) => this sets your websites mode default to your device mode
5. ![this needs to be done if oyu want to manually toggle the dark mode](image-3.png)
6. And after the step 5, make sure your parent of whatever component oyu render has class dark to make it in dark mode and do not put anything if you want in light mode ![alt text](image-4.png)
7. after 6th step adding toggle theme button ![this is done when you wanna toggle button on some conditions](image-5.png)

OR just do this => ![alt text](image-6.png)
8. cleaner one I guess => ![alt text](image-7.png)

9. some basic code for the responsive screen to be build : ![alt text](image-8.png)

10. ![skeletons look like this](image-9.png)
11. See it => ![alt text](image-10.png)
12. ![alt text](image-11.png)
13. This is how icons used by harkirat => heroIcons from react => ![created a icons folder in component and created a component out of it](image-12.png)

14. You can see first hand implementations => Inside the git repo of cohort3.0 week13 otp component or something ->there you go to src->class-notes->Part1.jsx 

15. creation of some hook to check if the device width is beyond break point after which you need your sidebar to hidden ![alt text](image-14.png)  [or you could use useMediaQueries hook or something like that]

16. cms code going through it and understanding the implementation => ![alt text](image-13.png) and ![alt text](image-15.png)   -> SOMETHING ->listener on query So, => ![this is here listener on media query](image-16.png)

TODO------------------------------------------------------------------------
1. See through the CMS code and see how the sidebar is done there 
2. you might need libraries like framer and all to add fancy animations to the websites
3. See this : https://tailwindcss.com/docs/darkmodebasic-usage
4. See other IDEs =>  cursor - AI powered
5. check the cohort 3.0, week 13 otp code in guthuba nd see all the solutions provided by harkirat
6. Read thorugh tailwind docs for toggling the theme 
7. ASSIGNMENT => TRy TO codde over the top of current code and also take time to understand it
8. Learn these -> L2, GK and rollup [as these won't be taught as part of curriculum]  -> ![alt text](image-17.png)
more specifically => ![alt text](image-18.png)