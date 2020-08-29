-- https://stackoverflow.com/questions/1293330/how-can-i-do-an-update-statement-with-join-in-sql-server

BEGIN;
UPDATE stock
SET quantity = quantity + 20
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'orange';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = CASE
WHEN quantity >= 20 THEN quantity - 20
ELSE quantity
END
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'orange';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'lime';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = CASE
WHEN quantity >= 30 THEN quantity - 30
ELSE quantity
END
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = CASE
WHEN quantity >= 20 THEN quantity - 20
ELSE quantity
END
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'lime';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'grapefruit';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = CASE
WHEN quantity >= 20 THEN quantity - 20
ELSE quantity
END
FROM citrus
WHERE citrus.id = stock.citrus_id
AND citrus.name = 'grapefruit';
COMMIT;