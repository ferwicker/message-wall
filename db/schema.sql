DROP DATABASE IF EXISTS messagewall_db;
CREATE DATABASE messagewall_db;

USE messagewall_db;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    category_label VARCHAR(100)
);

CREATE TABLE fonts (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    font_label VARCHAR(100),
    font_css TEXT
);

CREATE TABLE colours (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    colour_label VARCHAR(100),
    colour_css TEXT
);

CREATE TABLE messages (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    message_body VARCHAR(140),
	category_id INT,
    font_id INT, 
    colour_id INT,
    FOREIGN KEY (category_id) REFERENCES fonts(id),
    FOREIGN KEY (font_id) REFERENCES fonts(id),
	FOREIGN KEY (colour_id) REFERENCES colours(id)
);