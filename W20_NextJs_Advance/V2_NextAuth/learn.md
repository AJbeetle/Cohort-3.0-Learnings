We will do Hydration and middlewares in offline video

---------------------------------------------------------------------
AUTHENTICATION and NextAuth 
---------------------------------------------------------------------

NextAuth is a library that lets you do authentication in Next.js

Now while login user using email you need to verify email by sending them OTP so, no one does fake emails


NON NextAuth Ways :-
1. OAuth - generic protocol we can code ourself : https://authO.com/ [OAuth is protocola and authO is company]
2. Clerk.com 
3. Firebase auth
4. In House using cookies


If you want to login yousing google, without external libraries, you need to understand about OAuth protocol, today we will introduce NextAuth Library


------------------------------------------------------------------------------------------
-> WHT NOT JWT+localstorage 
------------------------------------------------------------------------------------------

JWT (token based authentication) pattern of authentication ![Authorization header ](image.png)
Q. Can we do token based authentication in nextJs ? 
ans : So, the answer is NO, token based authentication uses localStorage which cannot be accessed while Server Side Rendering. So what happens is :-
      1. you go to signin page, enteer username and details, now press enter, the NEXTJs backend sends back the JWT token, in response object
         [now in non-next what we used to do is, whatever token, came from the server, we used to save it in localstorage]
      2. Now when the user will be directed to /users page in frontend , which will in return send a request to backend to fetch the user details [Niw see, the request this page is sending in our non-next app used to take JWT token from the localstorage and then send it as Authorization headers to backend ] now in the server side when next will try to access localStorage it will not get anything, because localStorage is brpwser specific part and serrvers donot have this. SO server side rendering will fail and hence token based authentication cannot work here


      
      But you can easily do cookie based authentication 
      Read this chatGPT chat : https://chatgpt.com/share/6802397f-e3a0-8002-8459-3602c485701b

      ![you use cookie based approach](image-1.png)


trying to do token based auth :-
1. ![api end point for signin](image-2.png)
2. ![singin page](image-4.png)
3. ![clicked on signin button, and see request goes to backend](image-3.png) and ![this the token that you get back](image-5.png) and ![this token is also stored in localStorage](image-6.png)
4. Now let's create a profile page in Frontend
   👉 DUMB WAY OF RETURNING PROFILE PAGE [REACT WAY : CLIENT SIDE RENDERING]
   -> ![writing backend endpoint for profile](image-7.png)
   -> ![So, this is page.tsx FE page for users](image-8.png)
    THIS METHOD WORKS :  THIS IS CLIENT SIDE RENDERING : happens on the browser, this is not optimal approach to do in nextJs, then what is advantage of using nextJs if you are gonna code like react only
    
   👉 SERVER SIDE RENDERING 
   -> ![This is page.tsx code as server component](image-9.png)
   SO NOW THE CODE BREAKS : because this is server component and localStorage is not defined on server side



------------------------------------------------------------------------------------------
-> NextAuth
------------------------------------------------------------------------------------------

NextAuth library helps you add Authentication to your NextApp
It supports Various Providers : 
   > Login with email
   > Login with google
   > Login with facebook
   > ... many more providers

NextAuth is very generic library and it supports various providers : appleProvider, googleProvider, facebookProvider, emailProvider etc.. which are all companies that expose OAuth. login with facebook is a thing, login wiht google is a thing ....

So, if in future new company exposes their OAuth like login with tiktok then you can easily use their provider 


and as all these companies use same OAuth protocol therefore it is very easy to create new provider for that company by just changing some urls here and there

![gist of nextAuth](image-10.png)

If you want to add singlr route handler for :-
 -> /api/auth/user
 -> /api/auth/random
 -> /api/auth/123
 -> /api/auth/id

Then you can use catchAll routes


GO TO FOLDER : app/api/auth/[...nextAuth]

there you will find file route.ts : read it

const handler = NextAuth({
})


Now inside NextAuth function you provide config object inside of which on of the things you give is array of Providers :- 
The most configurable Provider is credentials provider :  allows you to hanfle signing with arbitrary credentials, suha as username or password, or two factor authentication or hadware device [eg. YubiKey U2F/ FIDO]



NOW WE HAVE SEEN HOW YOU CAN ADD A PAGE FOR SIGNIN, NOW THINGS TO LEARN IS :-
 -> HOW to redirect user to its UserDashboard page when he/she is logged in
 -> How to show them LOGIN button if they are not logged in and
 -> How to show them LOGOUT button if they are logged in

before learning above three points we need to have some pre-requisite learning:-

So, there is a hook that nextAuth provides is : __useSession()__ which is easiest way to check is users is signed in or not. [import {useSession} from "next-auth/react"]
So, this useSession hook is to be wrapped insde __SessionProvider__ component = [ import {SessionProvider} from "next-auth/react" ] 
amd then now inside there you can also use __SignIn__ and __SignOut__ function from next-auth = [ import {Signin, SignOut} from "next-auth/react" ]

Now see : page.tsx of app folder [homepage]



NOW TILL NOW ONLY LEARNT ABOUT : building blocks of nextAuth

More things to learn are :
1. getServerSession function
2. useServerSession hook              : Ye hota bhi h kuch ???


to avoid the discussion of how server component can be a child to client component [maybe vice-versa]. we created RealHome component in home page which uses useSession hook and then is wrapped inside SessionProvider
Right now inside client component cannot have server component code here, function canot be async

Now we will use better approach, till now client component was being used to check if user is signed in or not, now we will do it in server component, using getServerSession from "next-auth"

![Now this way, once you have session object from getServerSession, you can show user details by querying database rigth there in the server component and return dashboard for the user ](image-11.png)


![CMS home page](image-12.png)


SO, What we have learnt till now :
1. why cannot use token based auth with localStorage in NextApp
2. nextAuth
3. Credentials provider
4. useSesion
5. getServerSession


TOLEARN LATER :
1. Callbacks
2. How to add DB here
3. prisma-adapter
4. providers.jsx

what clientId and clientSecret is to be put in googleProvider ?
 -> in google go to :  google auth console ![alt text](image-13.png) => search oauth ![alt text](image-14.png)  -> click on create credentials , then click on OAuth clientId ![alt text](image-15.png) -> set application type = web application, give name : anything, add URL http://localhost:3000 ![ and after this add very imp authorized redirect URIs : http://localhost:3000/api/auth/google/callback then click on create](image-16.png)  -> it will spit out clientId and client Secret![alt text](image-17.png) -> put these in env file and you are good to go

todo:-
1. Login with google and facebook can be done using PASSPORTJs in express and node : see chess project video 
2. Explore OAuth Protocol
3. Backend as a service : supabase or firebase
4. nodeJs streams 
5. AS MENTIONED ABOVE :- 
    a. Callbacks
    b. How to add DB here
    c. prisma-adapter
    d. providers.jsx
6. explore pgai
7. see this : ![alt text](image-18.png)
8. Learn about pre-signed URLs
9. Notion doc in discord channel for interview prep : check it out
10. what is closure in JS vs Java
11. Middlewares
12. ![very nice project - once build I would like to practice on something like this](image-19.png)
13. ![see youtube video of how websockets scale - around 4 hour video](image-20.png)
14. Create Scribble Project
15. We will study serverless backends
16. See these : ![projects to look on](image-21.png)
17. How to overright the frontend of nextAuth ? - see CMS implementation ![alt text](image-22.png)
18. Web3 companies backend : Pyhthon, GoLang, MERN, RUST