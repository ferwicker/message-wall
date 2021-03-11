
--  * Create schema.
DROP DATABASE IF EXISTS message_wall;
CREATE DATABASE message_wall;

-- * create tables.

USE message_wall;

CREATE TABLE messages (
id INT AUTO_INCREMENT PRIMARY KEY NOT NUll, 
message_desc VARCHAR(255),
message_cat_id INT FOREIGN KEY,
likes INT
);

CREATE TABLE message_cat (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    cat_desc VARCHAR(255)
);
