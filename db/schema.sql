
--  * Create schema.
DROP DATABASE IF EXISTS message_wall;
CREATE DATABASE message_wall;

-- * create tables.

USE message_wall;

CREATE TABLE messages (
id INT AUTO_INCREMENT PRIMARY KEY NOT NUll, 
message_desc VARCHAR(100),
message_cat_id INT FOREIGN KEY,
likes INT,
font_id INT FOREIGN KEY,
color_id INT FOREIGN KEY
);

CREATE TABLE message_cat (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    cat_desc VARCHAR(100)
);

CREATE TABLE fonts (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    font_label VARCHAR(50),
    css_col VARCHAR(50)
);

CREATE TABLE colour (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    col_label VARCHAR(50),
    css_name VARCHAR(50)
);
