-- 1. database create
CREATE DATABASE school_db;

-- 2.  database select
USE school_db;

-- 3. Schools  table create ( according to Assignment)
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);