Last Week :-
1. NextJS
2. Client Side NextJS  : vaguely [understood how to create frontends] 
   >> nexp create-next-app 
   >> SSR
   >> how react is not good for SEO as compared to NEXT

3. very initial discussion on Client components and server components


NEXTJS : You can create backends and frontend both together, no need of express [preferred ? Yes, most of the companies are now adapting this framework]
 -> cal.com, dub.sh , many YC companies do this
 -> There are lot of good reasons to have frontend and backend in same repo [will discuss later]
 -> Most good projects will be in NEXT [I need to look for this statement]
 -> Most companies landing page is either in NEXT or plain HTML, CSS and JS and the product will be in react
 [Like : neonDb landing page can be in next or vanilla HTML,CSS and JS AND other pages can be in react]


NEXTJs is fullstack framework : We can do frontend and backend with sam tech

-> like app.100xdevs.com gives you landing page BUT 
-> app.100xdevs.com/api/auth/session gives you your session detail in json like backends do

-------------------------------------------------------------------------------------
NEXTJs BACKEND : Not necessity but good idea
-------------------------------------------------------------------------------------
1. Single codebase for your whole application
2. No CORS Issues
3. Ease of deployment, deploy single codebase

if FE and BE in different codebase then, ![different deployment pipeliness](image.png)


**Recap Data Fetching in React** 

-> hitting backend after some time : waterfalling
React component -> ![User Card Component](image-1.png)
![how browser communicates with React based App, assuming react is hosted on some CDN](image-2.png)


-> DATA FETCHING IN NEXTJS : ![browser communication in nextJs](image-3.png)



**LOADING in NextJs**
-> just adding loading.tsx file right next to page.tsx file and writing fallback code inside loading.tsx [only if required]


**Introducint API routes in NextJs**
Benefits of writing backend code in nextJs
1. Code in single repo
2. All standard things that you get in backend framework like express : getRequest handling, postRequest Handling, returning status codes, returning headers... 
3. Server components can directly talk to backend : thye can talk to any backend, your own, anyother doesn;t matter


**Now lets bring backend in our own nextApp**
 -> did it inside app/api/v1/user/details/route.ts

Some Questions to answer :-
1. how to connect to database
2. how to add headers
3. how to get query and path parameters
4. how to get request body and all 


  -> Creating a authenticated basic application using nextJs
  [having Prisma, postgres, FE and BE, user authentication, todo CRUD]


1. _Link Tag in nextJs_  : inside landing page
   -> Forntend routing can be done using two ways :-
      1. Link component from "next/link"
      2. useRouter hook from "next/navigation"  : need to make our component as client component, and you cannot do prefetches in here : See DEVIN VIDEO OF KIRAT

      /* So, basically, whenever you hvae to do, something on onClick, like send something to th backend , then your current component needs to be client component, you can do several optimisations, like keeping one button component separate as client component and keep this button here as server component only [little complicated thinkk about this]*/

2. _Middlewares in nextJs_  : Really bad, I mean you can do global middlewares in next, but doing route specific middlewares is headache [there is some recent vulnerability found in next middlewares : see that in detail]     


3. _websocket server in nextJs_ : no you cannot

4. _role based authentication in nextJs_ : see CMS, using global middleware source/middleware.ts [this one checks two logins in same time]
[find the concerned middleware we are talking about]

5. _authentication and database in nextJs_  : 
    => get postgreSQL database from : avian or neondb
 
6. _Reduced Endpoints_  :  Now, say when you have to get users all todos from the backend, in nextJs you donot need to create a whole backend endpoint for it, you can directly do database calls from the server side components and only if you need your backend to be accessed by some other application like, mobile app say different react-native app, or so
[slide-10:Better Fetches from lecture slides]

7. _Singleton Prisma_  :  NextJs specific 
There are multiple scenerios:
      1. when you are in development environment and localhost postgreSQL database : NO ISSUE OCCURS WITH SAME CODE OF OURS
      2. When you are in production environment and cloud database is used : NO ISSUE OCCURS WITH SAME CODE OF OURS
      3. When you are in development env and doing constant code and using cloud database : so, due to hot reloading, the backend is hit so many times, so sooo many db clients get started 


THIS IS PURELY DEV MODE ISSUE : when using prisma with nextJs, to fix that we create a singleton prismaClient, it means every time nextApp recompiles no new prismaClient is generated.

So, moving the line : client = new PrismaClient(); to  a separate folder -> lib/db.ts
-> you can see this in CMS and dub.sh too

8. _There are somany more things to learn in nextJs_  : ![alt text](image-4.png)


To Learn yourself :-
1. Server Side Components and Client Side Components
2. learn default and constant export 
   => DEFAULT export 
   export default function handler(){

   }

   => constant export 
   export function handler(){

   }

3. Cloud vs ServerLess   
4. Horizontal Scaling needs load balancer and autoScale [ASG, serverless]
5. ![explore this](image-5.png) : have lot of in-memory cache
6.  See GSOC repo : p5.js web editor, rocket chat, most GSoC orgs have Docker files now, See playlist for which repos to try. Go through GSoC playlist 
7. Make your frontend - decent and unique