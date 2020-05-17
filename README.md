# Challenge
A simple web-application  using reactjs, nodejs, express and postgresql.

Instruction to run the app.

1. Clone the repo.

   ###### To run the api server

2. Navigate to the api folder 

   ```
   cd api/
   ```

   

3. Run the commands

   ```
   npm install
   npm start
   ```

   Now the api is running  at http://127.0.0.1:5000/

   ###### Set up a postgresql database locally

   1. install postgresql 

      ```
      sudo apt-get update
      
      sudo apt-get install postgresql postgresql-contrib
      ```

      

   2. login to postgres account

      ```
      sudo -u postgres psql
      ```

      

   3. Create the database and tables

      1. ```
         1. CREATE DATABASE customerservicedb;
         
            
         
            CREATE TABLE customers(
         
             	customer_id SERIAL PRIMARY KEY,
         
                 name VARCHAR(20),
         
                 age VARCHAR(5),
         
                 gender VARCHAR(10),
         
                 email VARCHAR(40),
         
                 phone VARCHAR(20),
         
                 city VARCHAR(20),
         
                 state VARCHAR(20),
         
                 zipcode VARCHAR(10)
         
             );
         ```

      

###### To run the front-end 

1. Navigate to the client folder 

   ```
   cd client-app/
   ```

   

2. Run the commands

   ```
   npm install
   npm start
   ```

   

Now, front-end is running at  http://127.0.0.1:3000/  

###### How can you use it?

1. List out the customers
2. Search a customer by name
3. Add a new customer
4. Edit a customer's details
5. Search a customer by name
6. Delete a customer



