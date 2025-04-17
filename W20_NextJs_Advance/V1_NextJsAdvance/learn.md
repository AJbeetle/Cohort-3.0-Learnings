NextJs_Advance topics to cover :

1. () -> Route groups
2. [] -> Dynamic groups 
3. [...]  -> Catch-all segments
4. Catch all [[...slog]]
5. Static site generation
6. Hydration
7. Middleware in next
8. Assignmnet/Project


-------------------------------------------------------------------------------
Route Groups = ()
-------------------------------------------------------------------------------
we know normal folders inside app folder are routes of our application [as next follows file based routing with App Router]
Now, what are (bounty) these kind of named folders : This folder is now ignored by nextJs router, you donot need this folder in routes. Main use case is for grouping some pages and having common layouts for them

Assignment : Create a signup and signin page in nextJs where both of the pages are wrapped in a layout, but no other pages are : DONE last class

![See again](image.png)


-------------------------------------------------------------------------------
Dynamic Groups = []
-------------------------------------------------------------------------------

A folder or file in the form [slug] defines a dynamic parameter in the route [eg. /blog/[slug]] might match /blog/hello-world or /blog/another-post
Inside your components, you can access this parameter via params.slug

SLUG : short hand for blog post

Assignment : create a frontend for a todo/posts application. Backend is at :-
jsonplaceholder websire

when user comes to "http://localhost:3000/posts/1", they should see post rendered from "https://jsonplaceholder.typicode.com/posts/1"

It should be a server component, feel free to use axios

-------------------------------------------------------------------------
Catch-all segments = [...]
-------------------------------------------------------------------------
A folder or file in the form /docs/[...slug]  (example in CMS : courses/[courseId]/[...modules] ) will match all segments in that position (e.g. docs/anything/here) will be matched by [...slug]

Assignment : Create apps/docs/[...slug]/page.tsx

![See this codebase](image-1.png)

Now, see your app folder : /docs/[...docId]/page.tsx
-> Now, in here you can view UI in any page after docs/anything/anything...  but there will be nothing at route /docs

For that you can either add page.tsx at docs level 
__OR__
using catch-all [[...slog]]
so see folder => blogs/[[...folderId]]

You can use any approach


-------------------------------------------------------------------------
Static Site Generation
-------------------------------------------------------------------------

Whenever you build nextJs App, some pages can be statically generated.
Static Generation = HTML is built at build time and is served directly


-> There are various ways to do it in nextJs = get serverSide props or static props

before next13 , way to server side render in nextJs was different
[assume you cannot create async component, then fetching from backend will be inisde useEffect, and then it becomes like react and there are no benefits of using next, so therefore the old approach of doing server side rendering in nextJs was :-]

![before next13, we had two functions, getServerSideProps() and getStaticProps() [for serverSide rendering and static site generation respectively] ](image-2.png)

-> So, before understanding next13 older version implementation we need to understand :-
        1. __Client Side Rendering [CSR]__ : Rendering happens on the client [browser] - REACT has heavy CSR
        2. __Server Side Rendering [SSR]__ : Rendering alreafy happens in the server and then the server returns the HTML, CSS and JS to the client  NEXTJs
        3. __Static site generation [SSG]__ : The framework __GastbyJs__ [very heavy on Static site generation] : Static means it is generated ones and will never change [or need not to change] , example : page that will be same for all users [ it means this page can be staticly generated ] -> 

        ![So the component that is static create index.html](image-3.png)  -> just for explaininig [donot do this literally]

        Static Side Generation : If in code base you can see come component is same for all users, then why to even server-side render it [because SSR takes some computer]. So, directly put the static component in .html files


        Now, the in older version of nextJs the static site generation was done by usinf the getServerSideProps() and getStaticProps() function. But, mow the later nextJs versions are smart enough to detect which component is to be server side rendered and which to be staticly generated

        -> So, say you have in app folder, page.tsx such that there you do no async operations and no backend calls, and the component is not async then the time when nextJs will build this project for production the homepage will be generated as static file only
        -> Assume you have dynamic route as blogs/[blogId], now this by default it is server side component so, while next build it won't be making it static file, it will be server rendered file only/

        Server Side Rendering actually means  :  whenever you come to a page that is SSR, then there is some compute going on the server side to understand what to send and then it compiled to a HTML and then returned, 

        whereas in static site generation :  whenever someone comes on a page, the server directly returns the static file for that page

        COMMAND RUN TO BUILD nextJs Project :-
        >> npm run build
        ![See here, page.tsx after build is spitted out as static file, so nextJs in later versions is smart enought to detect which file to be served as static and which as server-rendered](image-4.png)

        now, for dynamic route like blogs/[blogId] you can also force server side component to be rendered as statically [explore how to do this]. So. say if you have 500 blogs then they all will be first staticaly generated during build and then when application runs in production they will be directly served as html files [generating 500 static files takes a lot of BUILD TIME, but when the application is delpyed in production the accessing of blogs is very fast as compared to sever-side rendered pages] [exapmple  :  project.100xdevs.com serves all notion docs as static generated pages ]
        ![So, when you build project with dynamic route folder to be served as server-rendered component this is how it looks](image-5.png)

        COMMAND to run project in production env :-
        >> npm run start




-------------------------------------------------------------------------
Hydration
-------------------------------------------------------------------------
Before learning about hydration error : 

__SERVER SIDE COMPONENTS and CLIENT SIDE COMPONENTS__
Read :  https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md

RFC guys said that :-
1. There are some components that will only render on server but never re-render on the client side
   Example : we have good and bad route in app folder. in good folder the page.tsx never changes and in bad folder the code is written in such a way that there is some state variable introduced so, the contents on the page do change. so, in this scenerio, the bad folders' page.tsx needs to be made as client component;
   ![good folder and its page](image-6.png)
   ![bad folder and its page](image-7.png)

   -> So, the whole idea was : The reason to introduce server components  :  Some things donot change by (user interactions) OR (over time) keep them as server components
   -> and some things do change over time OR due to user interactions so, keep them as client components

   Question  :  Are server side components server-side rendered OR statically generated and Client components are client-side rendered ? 
   ans  : Yes or No ? :  When you check the bad page network tab and see what is returning, you will realise that even client side component is server side rendered 

   So, all good UseCases of ServerSide Component and ClientSide Component can be read on this rfcs link.

   Qyestion : Why can't we have all components as server side components OR all components as client side components ? Why so much disintegration ? What optimisations do you get when you try to vene break client component to a sever side component?
   -> So, in order to make bad folder as server side component, we do following, creating components folder [inside app folder], and there creating button.tsx where all client component code is and then in main bad/page.tsx you use this button component. Now bad is also a server side component
   ![components/count.tsx ](ima ge-8.png) and now our bad endpoint is server cide component again ![alt text](image-9.png). So as much as we can we are delegating our client side component, make it as far from main end point as possible. Deferring the client side component as much as possible.
   So, why are emphasizing in making a server component. Trying to keep as many thigns as server components ?


   ans :  There is very nice feature of server component that it just sends back the palin HTML and CSS, it does not give any scripts tag for JS to run on that component, whereas client component somehow send you the JS that will be run on it to make its state change. No you can make server components as client components, but now they will start sending some unnecessary JS to the frontend which we donot need if the component is not going tp change ever.

   Server Side component is like templating engine ejs , hein whaaattt????

   Inside a server component you can have client component no issue : but after once the boundary is croseed, after the client component node, all children need to be client component only [there is a weird way to make server side component inside client component]    
   
   So, if you go to app.100xdevs.com => The NavBar that you see is server side component -> it does not change, similarly logo is server side componenet but the left side, the userr profile is client side component as the UI change happens here because of user interaction [so there is button onClick handler that runs on client side only] , the search bar is client component, as the UI changes when we type on something, the state changes and UI is changing [thw onChange handler on clientSide]    


__HYDRATION__  :  Hydration is the process by which a client-side JS framweork (such as React) takes over an already rendered HTML page and makes it interactive. In a Next.js application, pages are often server-rendered (SSR) or statically generated (SSG). The server sends a fully formed HTML document to browser, allowing users to see meaningful content quickly (which is great for SEO and performance). Once the page arrives in the browser, React's Javascript bundle "hydrates" that static HTML by attaching event listeners and other interactive behaviours so that the page becomes a fully functional React application. 


-> When you have client side component , so understand this very very very important : CLIENT SIDE COMPONENT  -> It is not client side rendered , It is SERVER SIDE RENDERED and CLIENT SIDE HYDRATED.

MEANING -> see definition of hydrations
Client Side Hydrated means : Client Side Component is converted to static HTML with no JS interactions on it, served to the frontend and then via the process of hydration JS interactions are hydrated on the frontend, i.e. after some time JS file arrives and is applied to our server rendered HTML page
[Example : button comes in HTMl file immediately but its onClick handler is added later].

in hydration : It re-renders on client side also, it checks if state on  Virtual DOM is same as state on server side DOM or not, this is where hydration error comes time to time, ![in this scenerio see, what happens is when this client side component is rendered on server the time is say x and when it gets client side hydrated the time will be x+some miliseconds, so now when DOM are compared in client side and server side, they are totally different, and hence the  hydration error occurs](image-11.png)

So, you should always use these kind of things inside useEffect(), because now when it will get rendered on serverSide it will ignore useEffect and console.logs. Server never renders any interactive features, it only builds the uninteractive HTML, whatever forced you to put "use client" on component , that happens on client side using hydration 




-------------------------------------------------------------------------
Middlewares
-------------------------------------------------------------------------






-------------------------------------------------------------------------
Assignmnet and Project
-------------------------------------------------------------------------


TODO :-
1. Read through this : https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md
2. See if react19 has SSR
3. Moat vs Nuance : Moat -> something specialized thing/idea that cannot be replicated wherease Nuance : 
4. Find out  :  how you can force ServerSide component to be rendered statically after build
             : how you can force client side component to be server-rendered after build
             : means you can force a page to be serverSide rendered or client side rendered or static site generated

5. Read this : ![alt text](image-10.png)              
6. use Server : when is this used : to be used in actions : advance topic
7. ISR [Incremental Site Regeneration] : get rid of SSG of 500 pages, incrementaly if someone asks for some page then only it gets statically
8. 60 questions for interview prep : discord chammel
9. see virtual and horizontal scaling video on kirat youtube