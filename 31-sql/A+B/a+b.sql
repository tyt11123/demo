CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    description VARCHAR(255),
    quantity SERIAL,
    price SERIAL
);

DROP TABLE stock;