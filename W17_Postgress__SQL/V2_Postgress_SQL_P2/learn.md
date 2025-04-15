Yesterday Completed Basics of Postgres
Today's Advance topics :-
1. Relationships and Transactions
2. Joins

--------------------------------------------------------------
Relationsships and transactions 
--------------------------------------------------------------

![mongoDB relationships](image-1.png)
![one to many relationship in sql databases](image-2.png)
Normalization of database [1nf, 2nf, 3nf and BCNF]

Schema Designing can be done on the basis of these rules, decomposing databases and 1nf,2nf,3nf or BCNF.

FOREIGN KEY RELATIONSHIP

>>>>>>>>>>>>>>
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCASE    
);

>>>>>>>>>>>>>>

ON DELETE CASCADE  : deltes the addresses table relation if users are delted 
ON DELETE RESTRICT : if user treis to delete the user, then restrict them if the relation in foreign key exists. So, developer first need to delete addresses corresponding to that foreign key and then delete the users
  -> similarly in S3 bucket, asks you to first empty the bucket and then only you can delte the bucket

It depends on useCase on what to use


NOW when dong queries in backend there can be inconsistencies, when backend crashes or the database goes down, example for that is when doing transaction through some two peoples bank account, two qeuries to run ![one for deducting money from oen persons accounta and another for inc the amount in some other users account](image-3.png). So, if here the backend crashes it will be bizarre situation.

There to solve the issues like these we have __Transactions__ . So, if you have bunch of queries that need to run together and either they all should run or all should fail, then you put them in a transaction.

![This is how you send a transaction to the SQL database](image-4.png) :  now if any one of queries fail inside the transaction other, queries are rolled back, doing in nodeJS,see index_1.ts


-----------------------------------------------------------------
JOINS
-----------------------------------------------------------------
Benefits of creating relations is that we can joining tables, and extract variety of information

See index.ts

TYPES OF JOINS :-

1. __INNER JOIN__ : Returns rows when there is at least one match in both sides. If there is no match, the rows are not returned.
Example : Find all users with their addresses : If user hasn't filled their address, then that user will also not be returned. There will be no entry fot that user in our JOIN result. BY DEFUALT JOIN is INNER JOIN

2. __OUTER JOIN__ :

3. __LEFT JOIN__  : Returns all rows from the left table and matched rows from the right table, if no rows in right table then NULL in those cols for the user


5. __RIGHT JOIN__ : Returns all rows from the right table and matched rows fromm the left table, if no rows in left table then NULL in those cols for the user

6. __FULL JOIN__  : Returns all rows from right and left both the tables, if no rows corrsponding to left/right are found in right/left then put NULL in there. 
 

TODO PROJECT for relationships and Joins 
1. Build app.100xdevs.com : see there are nest ed folder structure and how videos are stored in a course ![mongoStructure](image.png)  :  this is hard to build in SQL and easy in noSQL try both ways
2. digitalOcean
3. Chess or Metaverse project [Do multiplayer chess : add people chats]