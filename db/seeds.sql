INSERT into message_cat (cat_desc) VALUES
("Things to do once this course is over");
("Things to do before I die")

INSERT into fonts (font_label, css_col) VALUES
("Montserrat Black" , "fonts"),
("New Spirit Medium" , "fonts"),
("IvyMode Italic", "fonts");

INSERT INTO colour (col_label, css_name) VALUES
("Aqua", "colours"),
("Tan", "colours"),
("Forest Green", "colours"),
("Cream", "colours");

INSERT into messages (message_desc, message_cat_id, font_id, colour_id) VALUES
    ("bungy jumping", 2, 2, 3),
    ("learn how to perform magic", 2, 3, 2),
    ("have a long nap", 1, 2, 3),
    ("have a drink", 1, 2, 3),
    