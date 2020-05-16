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


-- CREATE TABLE customer(
--     customer_id SERIAL PRIMARY KEY,
--     name VARCHAR(20),
--     age VARCHAR(5),
--     gender VARCHAR(10),
--     email VARCHAR(40),
--     phone VARCHAR(20),
--     address_id int DEFAULT NULL,
--     CONSTRAINT address
--     FOREIGN KEY (address_id) 
--     REFERENCES address(id) 
--     ON DELETE SET DEFAULT
-- );

-- CREATE TABLE address(
--     id SERIAL PRIMARY KEY, 
--     city VARCHAR(20),
--     state VARCHAR(20) ,
--     zipcode VARCHAR(10)    
--     );