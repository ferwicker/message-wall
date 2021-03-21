INSERT INTO categories (category_label) VALUES 
	('Before I die I want to...'), 
	("I'm thankful for..."), 
	('My crazy dreams...');

INSERT INTO fonts (font_label, font_css) VALUES 
	('montserrat', 
    'font-family: montserrat, sans-serif; font-weight: 800; font-size: 40px; font-style: normal;'),
    ('newspirit', 
    'font-family: new-spirit, serif; font-weight: 500; font-size: 40px; font-style: normal;'),
    ('ivymode', 
    'font-family: ivymode,sans-serif; font-weight: 400; font-size: 40px; font-style: italic;');

INSERT INTO colours (colour_label, colour_css) VALUES
	('aqua', 'color: #6dc1b1;'),
    ('tan', 'color: #c4b887;'),
    ('forestgreen', 'color: #074338;'),
    ('cream', 'color: #f7f5ed;');

INSERT INTO messages (message_body, category_id, font_id, colour_id) VALUES
('Leave a legacy', '1', '2', '4'),
('Whoever invented chocolate', '2', '2', '3'),
('Riding a unicorn on the clouds', '3', '3', '1');