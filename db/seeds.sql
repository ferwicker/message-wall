INSERT INTO categories (category_label) VALUES 
	('Before I die I want to...'), 
	("I'm thankful for..."), 
	('My crazy dreams...');

INSERT INTO fonts (font_label, font_css) VALUES 
	('Montserrat', 
    'font-family: montserrat, sans-serif; font-weight: 800; font-style: normal;'),
    ('New Spirit', 
    'font-family: new-spirit, serif; font-weight: 500; font-style: normal;'),
    ('IvyMode', 
    'font-family: ivymode,sans-serif; font-weight: 400; font-style: italic;');

INSERT INTO colours (colour_label, colour_css) VALUES
	('Aqua', 'color: #6dc1b1;'),
    ('Tan', 'color: #c4b887;'),
    ('Forest Green', 'color: #074338;'),
    ('Cream', 'color: #f7f5ed;');

INSERT INTO messages (message_body, category_id, font_id, colour_id) VALUES
('Leave a legacy', '1', '2', '4'),
('Whoever invented chocolate', '2', '2', '3'),
('Riding a unicorn on the clouds', '3', '3', '1');