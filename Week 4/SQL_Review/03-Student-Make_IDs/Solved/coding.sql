-- Instructions: Break students into groups and give them
-- the unsolved version of this and the table image


-- Create a new database called coding
CREATE DATABASE coding;

-- Specify that we want to use the coding database
USE coding;

-- Drop programming_languages table if it exists
DROP TABLE IF EXISTS programming_languages;

-- Create new programming_languages table with the fields 
-- id as a primary key, language and rating
CREATE TABLE programming_languages (
  id SERIAL PRIMARY KEY,
  language VARCHAR(20),
  rating INT
);

-- Insert new data to match the image
INSERT INTO programming_languages (language, rating)
VALUES ('HTML', 95),
	('JS', 99),
	('JQuery', 98),
	('MySQL', 70),
	('MySQL', 70);

-- Display what your table is showing now
SELECT * FROM programming_languages;

-- Query the rows with the language "MySQL"
SELECT *
FROM programming_languages
WHERE language = 'MySQL';

-- Drop that duplicate row from your table
DELETE FROM programming_languages
WHERE id = 5;

-- Display your table now
SELECT *
FROM programming_languages;

-- Add the following languages and ratings: Python - 98, C++ - 73, R - 95
INSERT INTO programming_languages (language, rating)
VALUES ('Python', 98),
	('C++', 73),
	('R', 95);

-- Display what the table looks like now
SELECT *
FROM programming_languages;

-- Update "JS" to "JavaScript"
UPDATE programming_languages
SET language = 'JavaScript'
WHERE id = 2;

-- Again, check your table
SELECT *
FROM programming_languages;

-- Change HTML's rating to 90
UPDATE programming_languages
SET rating = 90
WHERE id = 1;

-- Check that your changes have been made
SELECT *
FROM programming_languages;

-- BONUS
-- Add a "mastered" column with the BOOLEAN default of true
ALTER TABLE programming_languages
ADD COLUMN mastered BOOLEAN default true;
