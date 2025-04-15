Learning Postgress and SQL 

So, after Next, Prisma and this postgress and SQL => move on to creating new projects


MOTIVATION WOHOO :-
1. Keep learning
2. Having good expectation in salary matric is OK [according to your skillSet, be realistic] but do not hold back from getting an internship or kick starting your company experience
3. Constant Learning - Beast Work, keep implmenting it
4. Be reachable to HRs and hiring managers, be in public and let people know your strengths and growth curve
5. Till now : for fresher level you know good enough, and another three weeks [nextJs, postGress and Prisma] you will be one level above and then little bit of DevOps knowledge you good to go + DSA 

FOCUS right now till next three week
[nextJS, Postgress, Drizzle, Devops :deploying to VMs, docker, dockerHub, [kubernetes, terraform are advance things]]




LEARNING --------------------------------------------------

-----------------------------------------------------------
TYPES OF DATABASES
-----------------------------------------------------------
very few use NoSql like __mongoDB__, very rudementary one (consulting sites)

mathongo : website use mongoDB [go to api calls and see the id field if it is _id : objectId then it is mongoDB]

__mySQL__ databases have been in market from way back : Some people only to SQL databases in jobs, data analysts 

The nested folder structure is much easier to create in NoSQL databases therefore people prefer them 

[app.100xdevs is good example for useCase of mongoDB] 

__firebase__ is another noSQL database

PROBLEMS : scaling, especially with firebase and very hard to migrate to SQL database

In SQL databases :
1. Postgress 
2. mySQL 

postgress is preferred more

Types of DB :-
1. __NoSQL Databases__ : No Structured Query language  [example : mongoDB]
Stores data in schema [structure of data] less fashion. Extremely, lean and fast way to store data\
   -> mongoDB is schemaless
   -> mongoose lets us force schema on nodeJS level
2. __Graph Databases__ : Data stored in form of graph [example : Neo4j]
   -> useful in cases where relationships need to be stored [social networks]

3. __Vector Datbases__ : data stored in form of vectors [example : pinecone, quedrent, superbase]
   -> text -> converted to embeddings [multi-dimensional vectors] -> embeddings stored in vector db
   -> useful in Machine Learning

4. __SQL Databases__ : Structured Query Language   [example: postgress and mySQL]
   -> promQL is another query language for Prometheus
   -> data can be accessed using SQL
   -> stores data in format of (rows and columns) / table
   -> 


-----------------------------------------------------------
Why not NoSQL used
-----------------------------------------------------------

SQL gives you some benefit [on scale] so using it means preparing yourself for the time when your application scales

UseCases of NoSQL :- 
   1. Hackathon Project  /  kiddo project
   2. Consulting Project
   3. When not many customers are gonna come


UseCases of SQL :-
  1. Scaling Application
  2. Big Production level Project
  3. Lots of customer base

The SchemaLess property of NoSQL database can corrupt your data [anyone can login to mongoDB UI and change data to whatever they want to be, as schema is not enforced on DB level]


-----------------------------------------------------------
Why SQL
-----------------------------------------------------------

SQL have strict schema. They require :-
1. defining schema
2. put in data that follows schema
3. update the schema as your app changes and perform migrationsv  :  little pain in the *** - maintaining migrations make life little bit hard 

There are 4 parts when using an SQL database 
1. Running the database                     
2. using a library that let's you connect and pull data in it.
3. Creating a table and defining its schema
4. Run queries on the databases to interact with the data [insert/update/delete]




__PART1__ : easiest way : go to neondb  :   neon.tech  [provides free postgree DB]
        other ways  : run locally using docker  [docker is used to start mongoDB, postgress, kafka, reddis locally ]
        dommand for docker : 
        >> docker run --name my-postgress -e POSTGRES_PASSWORD=mysecretPass -d -p5432:5432 postgres

        here -d is for detached mode, running on backend,
        -p for post mapping
        -> tried 1st way
           Connection string :-
            >> postgresql://neondb_owner:npg_kPerLNqUu47v@ep-winter-smoke-a1ew3exl-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

        -> connection string when you are running postgres locally : 
           >> postgresql://postgres:mysecretpassword@localhost:5432/postgres
           info about this string :-
           protocol://username:password@host/dbName


__PART2__ : like mongoDB compass is the UI that lets you see your mongoDB database on cloud [so adding or deleting database from ths GUI also makes changes on cloud database], so, mongoDB compass and mongoose are dufferent tools to connect to cloud database 
similarly, __pgAdmin GUI__ lets you connect to postgress cloud databse, or psql is popular CLI to run postgress database locally

other libraries that let connect to postgresql db :
   -> __psql__ : terminal based frontend to PostgreSql, interactive CLI to PostgreSql (TimescaleDB) database. With Psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results 

   psql comes bundled with postgresql, we dont need tutorial for this, we will communicate with db from nodeJS
   >> psql -h p-broken-frost-6913594.us-east-2.aws.neon.tech -d database1 -U 100xdevs
   about this :-
   psql -h hostName -d databaseName -U ownerName

   This command asksfor password and then you are connected to database

   SOMW COMMAN COMMANDS 
   >> \dt;      //show tables
  
   -> __pg__ : it is nodeJS library, can be used in backend app to store data in Postgres DB (similar to mongoose). We will be installing this eventually in our app.

__PART3__ : adding Schema to the DB
you can add schema in neondb website too, in the SQL Editor tab, remove all default code, and there you can write schema

OR 

you can write schema through psql CLI

Schema : It is nothing but creating tables 

>>>>>>>>>>>>>>
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
);
>>>>>>>>>>>>>>>

This schema is now defined at DB level -> ![DIFFERENT WAY OF DEFINING PRIMARY KEY](image.png)  AND ![COMPOSITE PRIMARY KEY](image-1.png)

ABOUT ABOVE SCHEMA CODE :-

SERIAL: A PostgreSQL-specific data type for creating an auto-incrementing integer. Every time a new row is inserted, this value automatically increments, ensuring each user has a unique id.

![adding data into table from neon website](image-2.png)
![Here we donot have id1 and id4 because query running for that increment failed, so postgress didnot came back to that incement, it just move ahead](image-3.png)


INTERACTING WITH THE DATABASE : CRUD Operations [Create, read, update, delete]

CRUD Applications : That support CRUD operations in DB
non-CRUD Applications : There we donot do CRUD operations like : in-memory db, backend talking to another backend, storing data in reddis instead of having a DB

-> INSERT 
   >>>>>>>
   INSERT INTO users (username, email, password)
   VALUES ('username_here','user@example.com','user_password');
   >>>>>>>

-> UPDATE 
   >>>>>>
   UPDATE users
   SET password = 'new_password'
   WHERE email = 'user@example.com';   
   >>>>>>   

-> DELETE
   >>>>>>>
   DELETE FROM users
   WHERE id=1;   
   >>>>>>>   

   >>>>>>> Deletes all entries from users table
   DELETE FROM users
   >>>>>>>

-> SELECT    
   >>>>>>>
   SELECT * FROM users;
   >>>>>>>


__PART4__    :  queries from Node.js app
  -> how to connect nodeJs app to postgres db 
  -> how to query DB from nodeJS app
  -> how to avoid SQL injections
  
SQL INJECTION : in index_2.ts

Q. why postgreSQL vs mySQL ?
 -> both understand SQL queries, see more about it, there are some pros and cons

Q. Pool connection by neondb ?
  ans : pooled connection : If you have multiple connections to your database, then you connect to the pooled database, which will have only three or some connections to your main database that way you donot have too many connections to your main database

Q. How to scale SQL databases ?
   -> They do scale vertically, it means you can add on more resources to the machine, increase its power of computation, or storage or whatever. They donot scale horizontally [some sql databases claim they do, but most of them don't, unless you shard them, sharding is diff concept] 
   -> mongoDB pitched this way only, that you can scale it horizontally, you can add multiple machines into the cluster and scale linearly, 10 machines came, grown 10x

   -> Sql grows vertically, increase size of machine, space, compute, use all threads in machine, for horizontal scaling you do sharding. Or you have master slave architecture in sql.
   In SQL databases, reads are more as compared to writes. So, you have master slave architecture, where you have master node, where all writes happen, and then you have bunch of slave nodes from where peole can read. This is replicated [not horizontally scale]. So, the db is replicated to master and slaves. So, write queries are going to master node, and some reads go to slave1, then some to slave2 and so on, this results in inconsistencies. If you have written something in master node and it has not reached the slaves yet then the person reading from slaves wouldn't get it, so resulting in data inconsistency. Therefore in such cases, you keep distributed acknowledgements, that when you do weite, giev the response to the user only when all replicas get the written data otherwise wait, or withold any read operations while write operations are happening on all replicas 

   -> Sharding : Say a company has diff database for Indian, Chinese, and USA people, so their database is sharded, divided acc to region. Now when some people from say USA need to communicate to Indian userrs, then it becomes very challenging to do joins in sharded databases. 
   One useCase of sharding : Say, in classx.co.in platform we have three persons, like harkirat.classx.co.in ; radhika.classx.co.in and raman.classx.co.in, all three will have their own courses. All three of them can have their own databases. So, harkirats website won't require radhika or ramans data and this true for other two people tooo, so this way you have sharded your applications database for different people. One waty of scaling 

Q.    
 

TODO :-
1. Do Aggregations in mongoDB
2. PostgreSQL vs mySQL
3. Explore more about SQL injections
4. Go through lecture slides : see if something you skipped
5. Understand this code : ![some authentication in websockets](image-4.png) and ![part 2 Authentication](image-5.png) : dustributed authentication between HTTP and websocket server : WHAAAAATTTT ????
6. Interseting question person to person chat :  ![alt text](image-6.png) 
   -> Backpack implementation 
      - You have chats table and rooms table
      - now roomId will be built like this, the room in which two users are talking can be uniquely identified as roomId : userId1-userId2. So, two people chatting will have their own separate room 
      - say, kirat [userID:12] is talking to raman [userID:56], then their roomId:12-56, now whenever they talk they will be connecting to this specific room [roomId:12-56] in the websocket server. So, all their chats, all pub/subs, subscriptions will be specified to that room.
      - Now in websocket server when chats flow, websocket server should slowly flow your chats to db, directly sending chats from websocket is not good practice, there should be some sort of queue, where you flow your chats and then pull it from there in bulk you can dump it into the db
      - only wierd thing is : chat table will become will become very big -> shards the chat table : SO, you can have separate table for each one-one chat, or separate table foe group chat, and then if table is indexed then you can store millions of chats and then when useer comes to the room only last 10-20 chats are fetched and then when they scroll up, more 10-20 chats before are fetched and so on..


7. Monorepo, turborepo and graphQL : if one of them is not covered : then learn by yourself      
8. Chat Apps : What all functionalities can you have :-
   -> Scale it 
   -> facilitate file uploads and sharing
   -> having thread, and replying and tagging people
   -> grouping people
   -> Kafka and reddis
        
9. AccessToken vs RefreshToken        