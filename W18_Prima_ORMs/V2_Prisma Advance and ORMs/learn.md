NEXTJS-------------------------------------------------- 
Prerequisites : React, Typescript and Tailwindcss


Today's TASK :-
1. SEO                                       - DONE✅
2. Waterfalling problem                      - DONE✅
3. Next.js offerings                         - DONE✅
4. bootstraping nextJS app                   - DONE✅
5. understanding routing in Next             - DONE✅
6. Server Side Rendering                     - DONE✅
7. Layouts                                   - DONE✅
8. Layouts in sub routes                     - DONE✅
9. Merging routes                            - 
10. components directories                   -
11. client and server components             - 


We will be needing following classes to fully complete NextJS :-
1. NextJS Advance
2. Client Side Rendering
3. Server Side Rendering
4. Static site generation


------------------------------------------------------------------------
INTRODUCTION TO NEXTJS
------------------------------------------------------------------------

pre-requisites : DOM_Manipulation and React

NextJS framework was introduced because of some inconveniences in React
1. In react project, you havw to maintain a separate Backend project for your API routes

    -> NextJS is backend and frontend both can be made using this famework, you can also connect to database
    -> In NextJS you can have BE and FE in same repository
    -> It has own implementation [for both returning JS and JSON from backend]

    -> __Remix__ is another framework, __Astro__ is one more. Made on top off React

    NextJS is independent framework, made by different company but heavily rely on react

2. React does not provide out of the box (you) routing
3. React is not SEO optimised [react is not as such SEO optimised as compared to NextJS app or HTML, CSS and JS app. This is why some companies make landing pages in raw HTML,CSS and JS and internal pages/dashboards in react. Example:neonDB]
   -> not exactly treu today bacuase of React Server Components
   -> We'll discuss
4. Waterfalling Problem
   -> because of this React is not SEO optimised



-------------------------------------------------------------------
SEO Optimisation
-------------------------------------------------------------------
Browsers have bunch crawlers that hit the websites and figure [google had page rank algorithm] out what the websites does.

It ranks it on Google based on HTML it gets back.
The crawlers dont usually run your JS and render your page to see the final output. 

[So, crawlers go to websites and see what its initial HTML results in]


TRY VISITING A REACT WEBSITE : you will eventually host it on internet.
Go to networks tab and see what is first response and see it is kind of very empty looking HTML, and then JSX file runs content is displayed on webpage. So, google crawler can't see what JSX returns to webpage

So, when you create websites , you have to optimise for crawlers too.So, somehow we need to get first request response to have informed HTML file

------------------------------------------------------------------------------
Waterfalling Problem 
------------------------------------------------------------------------------

Let's say you create medium like you create a medium like app, where you can read, write, update and delete the blog posts . Then the series of requests that go inorder for user to read his own request is lots. [as well these are sequential requests not even parallel]

Like for example see this ![4 requests goes out in order to get blog posts](image.png)

This is waterfalling problem.

So, nextJs prevents this : it would have given me blogs in first request itself. Making it SEO optimised, preventing 3 round trips ![alt text](image-1.png)


---------------------------------------------------------------------
NextJS offerings
---------------------------------------------------------------------

1. It provides you server side rendering
   -> client side rendering ![Inside react app](image-2.png)
   -> NextJS does SSR [Server Side Rendering] => ![inside nextJS app](image-3.png) >So, HTML is returned in first request so, making it SEO optimised

   -> So, in case of NextJS, our frontend also have a server that talks to BE server [big difference btw react and nextJS]
   -> In react at the end there is bundle, HTML, CSS and JS files are . created as dist folder, so after creating your project you can completely remove all the other project files and just serve dist folder that is your frontend. So, this dist is directly served on the sec2 server and lot of times it is not even servers these are CDNs (content delivery networks), just static files.

   -> whereas in case of NextJS frontend, there is some http server actually running which talks to the real backend, whenever request comes, a logic that actually runs hits backend  gets the data, renders it and then return it to the client

   -> So, react in production spits out HTML, CSS and JS and then just serve it, after this you can scale app via CDNs, that is why its very inexpensive to run react projects

2. API routes -> single codebase with frontend and backend
   -> so you donot have to worry about creating backend separately. You can directly talk to dbs from nextJS backend right where your frontend is ![alt text](image-4.png). Sometimes you create diff BE sometimes you wont

3. File Based Routing (no need for react-router-dom)
4. Bundle Size Optimisations, Static Site Generation
5. Maintained by Vercel Team


DOWNSIDES :-
1. Can't be distributed by CDN, always needs a server running that does SSR and hence is expensive
2. Very Opinionated, very hard to move out of it

BOOTSTRAPING NOW---------------------------------------------------------------------

Starting nextJS application :-
 >> npx create-next-app@latest
 -> Turbopack : It is an incremental bundler optimized for JS and TS, written in Rust and Built into Next.js
 
![Important bits of folder structure](image-5.png)

next.config  :  which we might need to change time to time, we will come to it, when we reach monorepos

most of code is written in app folder 
-> page.tsx is the entry point of the app
-> page.tsx is what gets rendered on the http://localhost:3000/ route, landing route

----------------------------------------------------------------
Routing in Next
----------------------------------------------------------------

![Routing done in react](image-6.png)
![routing done in next](image-7.png)


------------------------------------------------------------------
Server Side Rendering
------------------------------------------------------------------

See page.tsx inside blogs folder,
better formatted -> ![alt text](image-8.png)

------------------------------------------------------------------
Layouts and LAYOUTS in SUB ROUTES
------------------------------------------------------------------

What is server and client in NEXTJS => So, the process that runs on localhost:3000 is the nextJs server and the browser is the client, now see our server does not return JSON, it returns fully rendered HTML files

Q. If Home page contains links to the various other pages of the website will nextJs get those pages too ?
ans  :  it depends on how you tell nextJs to prefetch those. How it done in projects.100xdevs.com is -> when you are on some page, and there exists some linking buttons, then prefetch those pages andlet user seemlessly move through the app. So, if we use NextJs link tags then it prefetches pages

When using react you would have done this in order to bring blogs on page => ![Client side rendering](image-10.png), this could be done in nextJs also which is client side componenet [we will come to those later] , but it takes away the benefit of server side rendering [so, empty div will get rendered first, request will go out and then component will be re-renderes, so you donot see any server side rendering benefits : proper waterfalling happens]


![writing code this way gets you the benefits of server side rendering](image-11.png)

LAYOUTS and LAYOUTS in SubRoutes:- 

layout.tsx => it is saying define a component that wraps all other pages that comes after inside of this. So, root layout wraps all our children in layout sections. Can be used to add navBar in layouts

adding signup and signin routes inside auth route, now I want that only in signin and signup page I want a heading written "Welcome User, We feel Happy to see you OnBoard"
So, in order to do that, just inside auth route create a loyout.tsx file and there define your common component that needs to be rendered in signin and signup subroutes

using folder name (auth) => does this  =>![alt text](image-13.png)

NEXT WEEK :-
1. Merging Routes
2. Components Directory
3. Client and Server components
4. Backend Routes in next
5. Authentication and cookies
6. PRISMA and database

Q. Why need NEXTJs, just write landing page in HTML, CSS and JS and then whole app i
n react ?
ans : yes you can do that, preferred as it is cheaper. Distributed via CDN, easier to scale. Completely depends on requirements

Q. Can we do conditional rendering in layouts.tsx 
ans : maybe Might lead to some hydration error, but yes you can do

Q. as BE and FE both code bases in same repo : it might be hard to scale this app

TODO:-
1. Seeing open source project having : nextApp -> dub.sh
2. Figure out where is dub.sh : page.tsx or landing page tsx, also find subRoutes 
3. Hydration Error : We will understand this when we reach server and client components
4. SSR in react => u can use react-renderer-server [useCase is your codeBase is in react and you want to send promotional emails to people which have some HTML in it, and there you cannot send react components] Cal.com does that =>![github of cal.com](image-9.png)
5. backend endpoint where user schedules a meeting, doing sequential requests in the endpoint might not be very feasible way [what if backend dies and user is still waiting for email to arrive but it never does] -> so better to do this, when user schedules a meeting just await for meeting entry to be put on db and then notify user meeting scheduled and for other tasks where you need to 
 -> send email to host and visitors, whatsapp, and set on calender  : HEREuse queues and some worker models there, where workers pull from the queue and slowly sends out emails, whatsapp and whatever other tasks you have
 ![see the architecture here](image-12.png) 
 -> sending email use Amazon SES or something....
6. Many to Many relationship in PRISMA - tricky part



