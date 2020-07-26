-- Instructions: Use unsolved version of this file
-- and code out the solutions live with students

-- Show databases we already have
SHOW DATABASES;

-- Create a new database called pet_shop
CREATE DATABASE pet_shop;

-- If you need to delete a previous version of the db
-- IF EXISTS prevents an error if it does NOT exist
DROP DATABASE IF EXISTS pet_shop;

-- Specify the database we want to use
USE pet_shop;

-- Create a new table called customers and provide appropriate fields
-- Include a pet_age field with INT as its input but discuss why this
-- would be a bad idea for a real business
CREATE TABLE customers (
  name VARCHAR(30) NOT NULL,
  pet_type VARCHAR(30) NOT NULL,
  pet_name VARCHAR(30) NOT NULL,
  pet_age INT
);

-- Let's take a look at our newly created table
DESCRIBE customers;

-- Query all fields from the table
SELECT *
FROM customers;

-- Insert data into the table 
INSERT INTO customers (name, pet_type, pet_name, pet_age)
VALUES ('Jacob', 'dog', 'Misty', 10),
  ('Ahmed', 'rock', 'Rockington', 100),
  ('Peter', 'cat', 'Franklin', 2),
  ('Dave', 'dog', 'Queso', 1);

-- Query only the `pet_name` field in the customers table
SELECT pet_name
FROM customers;

-- Filter the query to show only dogs under the age of 5
SELECT pet_name
FROM customers
WHERE pet_type = 'dog'
AND pet_age < 5;
