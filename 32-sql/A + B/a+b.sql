-- A

CREATE TABLE stock (
id SERIAL primary key,
quantity INT,
price INT,
citrus_id SERIAL
);

INSERT INTO stock ( id, quantity, price, citrus_id )
VALUES ( 1, 33, 25, 1 ),
( 2, 50, 15, 2 ),
( 3, 10, 35, 3 ),
( 4, 0, 20, 4 );

SELECT SUM(quantity) FROM stock
JOIN citrus
ON citrus.id = stock.citrus_id
WHERE color = 'orange';

-- B
SELECT * FROM citrus INNER JOIN stock ON citrus.id = stock.citrus_id;