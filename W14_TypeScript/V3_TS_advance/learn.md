This is advanced learning for typescript

Till now you should know :
  - Types and interfaces
  - how TS is used in simple nodejs project


Extra things we are learning
1. Pick API in TS
   -> __Pick__ allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type)
2. Partial API 
3. Readonly API : lets you enforce that internal values are also not allowed to change during compilation
4. Records and Map : Its earier and clearer way to deal with object
5. Exclude API
6. Type Inference in zod => ![basic zod runtime validations done in past](image.png)
   -> setting up this code locally  :> npm i express @types/express zod
   -> zod docs for type inference => ![alt text](image-1.png)
   -> ![line 3 is runtime variable and line 4 is compile time variable](image-2.png) and ![alt text](image-3.png). SO 4th line is TS type it never reaches JS, so zod inference lets you get a TS type given a runtime variable

   So, given a runtime JS variable that lets you do validation, you can infer its TS type by using this syntax :-

   <!-- type ZodType = z.infer<typeof ZodSchema>  -->



todo :-
1. enums and generics