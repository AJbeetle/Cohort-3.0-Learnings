We were jyst lookign at codebase of dub.sh

-> dub,sh codebase : ![alt text](image.png)

accordian : is tab that you expand and collapse

Tailwind looks very ugle but people still use it because it is not opinitated, so users own their components, but in material UI if you use some component, then you will have to accept the design they made

things to know in a frontend framework 
1. flex
2. grid
3. Responsiveness
4. Background color, text colorm hover


-D in install command : describing the dependencies as dev-dependencies
. So there are two typws of dependencies : 
    1. dependency      : depenedencies needed for our production
    2. dev-dependency  : dependencies that are need not to be pushed to the production, these dependencies are needed to 

-> so what tailwind does is it takes infor from allt he files using tailwind and finally puts it inside one css file

The reason tailwing.config.js gets complicated in monorepos is because there the frontend code is in diffwrent repositories So, code is somewhere else only So, this configuration setting becomes a bit complex

At that point of time your config will look something like this : ![monorepo tailwing.config.js](image-1.png)

So, what happens is in whichever App.css OR index.css file you have kept three lines of following tailwing : 
@tailwind base;
@tailwind components;
@tailwind utilities;

So, these files will now contain the build css code from tailwind functionality. So, whatever classes you use in the components inside you jsx or html files, the corresponding or associated css file contains its css code like :

if you used className = "background-blue"
then the CSS for this class :-

background-blue {
    background : blue;
}

this will be added to associated CSS file 

![flex guide](image-2.png)


We will be using grids here : ![alt text](image-3.png)

RESPONSIVENESS : ![alt text](image-4.png)
  -> Only thing to mind is : Responsiveness in tailwind is mobile first, it means it is by default considering your designing for mobile, so tailwind uses mobile first breakpoint system.
  
  WHAT THIS MEANS IS THAT UNPREFIXED UTILITIES (like "uppercase") take effect on all screen sizes, while prefixed (like "md:uppercase") only take effect at the specified breakpoint and above.

  ![mobile first approach](image-5.png)

  ![changing the default value](image-6.png)




TODOO
1. GSAP or JSAP
2. Harkirats way of styling :                                                               ✅
   STEP1 : collect all colors in your tailwind config  => ![alt text](image-7.png)
   STEP2 : create components so create a folder inside src called components
   ![button component](image-8.png)
   ![button done](image-9.png)
   ![input component](image-10.png)
   ![otp component](image-11.png)
   ![better](image-12.png)
   ![more to it](image-13.png)
   ![something to khatarnak](image-14.png)

3. Assignment of cohort 2                                          :   
4. screen 3, when user puts number on one of otp boxes cursor should hop to next and if they press backspace twice cursor goes back                        : ✅
5. take home assignment  : Howework 1 : do all slides in best structured way and OTP component and Homework 2 : do the last slide from lecture slides
    -> Homework 1 => go to folder /frontend/homework               : ✅
    -> Homework 2 => go to folder /frontend/homework_more          : ✅
6. never to commit your dist folder
7. StoryBook learn