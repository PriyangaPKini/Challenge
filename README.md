# Challenge
A simple web-application  using reactjs, nodejs, express and postgresql.

Instruction to run the app.

Clone the repo.

##### To run the api server

Navigate to the api folder 

```
cd api/
```



Run the commands

```
npm install
npm start
```

Now the api is running  at http://127.0.0.1:5000/

##### Set up a postgresql database locally

install postgresql 

```
sudo apt-get update

sudo apt-get install postgresql postgresql-contrib
```



login to postgres account

```
sudo -u postgres psql
```



Create the database and tables

```
 CREATE DATABASE customerservicedb;

   

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



##### To run the front-end 

Navigate to the client folder 

```
cd client-app/
```



Run the commands

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



