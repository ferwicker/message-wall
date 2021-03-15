
--  * Create schema.
DROP DATABASE IF EXISTS message_wall;
CREATE DATABASE message_wall;

-- * create tables.

USE message_wall;

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

CREATE TABLE messages (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 
message_desc VARCHAR(100),
message_cat_id INT,
likes INT,
font_id INT,
colour_id INT,
FOREIGN KEY (font_id) REFERENCES fonts(id),
FOREIGN KEY (colour_id) REFERENCES colour(id)
);