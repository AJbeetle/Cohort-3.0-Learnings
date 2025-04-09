Learning Architecture of AI in Brainly App

So, Brainly is an application which stores all the links of the user that they put because they cannot work on these currently but are interseted to visit them later whenever needed.

Now, this list will keep on inc and inc and this knowledge base will become very huge

Now, what Brainly has to do is provide a searching algorithm of such kind that if someone asks it about the content of some specific type they get the context from the knowledge base and return the link and about it to the user


So, user have power to query on the knowledgeBase such that the algo can get context from the knowledgeBase and get the right doc for the user which they are kind of pointing to

Now here application can be at two levels :-
1.BASIC LEVEL :- 
![Basic One : That it just returns you the desired item from the knowledgeBase](image-4.png)


2. ADVANCED LEVEL :-
![you give context to GPT to about how much and about related to what information I need details](image-5.png)

So, like you query on knowledgBase for => "Tell me basics about Rust" and this request goes to the HTTP Server and this HTTP server pulls the most relevant content from the knowledgeBase and add it as a context and send this whole information to GPT to generate summarised result for the user and thn returns it.
This way user gets the information about Rust, which is very closley related to what content they wanted to read earlier

Also, if in case user has more than one content relating to the query they made, then backend should pull all the context and then wrap it in user's demand quote as context and then send it to the AI model to genrate results.

THIS TILL NOW WAS WHAT TO DO 

NOW THINKING ABOUT HOW TO DO :-
1. How to select relevant content from the knowledgebase to put into our context array.
   The options can be :
     -> elasticSearch
     -> Embeddings
     -> Vector Similarities
     -> .Or 
     -> Keywords
     -> filter with tags
   These all options are very Web2 Answers, before LLM were a thing, or before Vector Databases and Embeddings were a thing

   What is elasticSearch => Whenever you go to harkirat100x devs and do search for ntoes, there elasticSearch is used, it is library used for very fastly searching through the database.There is one more company albolia, whihc provides library similar to elasticSearch for very fastly searching through relevant information called algolia

   We want to do something better

   ANOTHER AI way is : Embeddings and Vector Databases a whole new thing

   if you have ever heard of [chat with pdf RAGs] then you would know little . RAG > Retrieval Augmented Generation

   video from karpaki => buliding GPT from scratch [there things are covered in fair details]

   Now, 


   ![4Blue1Brown](image-6.png)







MY OBSERVATION OR UNDERSTANDING ---------------------------------------------------------------------------

NOW THERE ARE BASICALLY THREE-FOUR MAIN THINGS THAT YOU HAVE TO FIGURE OUT WHILE CREATING THIS SOFTWARE :-
1. Extracting Valid Information from the USER QUERY 
   -> As user queries are very much human language . So, you have to do NLP (Natural Language Processing).
   Example of Queries : "Tell me about basics of rust" OR "Tell me about the Trumph tweet I shred a few weeks ago" OR "WHat are trumps stance on H1b Visas"

2. Then on the basis of valid keywords that user asked for extract the valid content from the knowledgeBase that matches user query
    -> Very Cleanly Optimised Database Query to generate array of context relevant to user query [Using Vector Databases]


3. And once you have user Query + context array, forwarding the Proper prompt to AI model for generating very structured result for the user 
    -> Prompt Engineering at its top notch level to generate very user specific results for USERS NEEDS


---------------------------------------------------------------------------