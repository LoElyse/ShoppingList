-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE items (
  "id" SERIAL PRIMARY KEY,
  "item" VARCHAR(100) NOT NULL,
  "quantity" INTEGER DEFAULT 0,
  "unit" VARCHAR(100) NOT NULL,
  "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO items
  ("item", "quantity", "unit", "purchased")
  VALUES
  ('Apples', 5, 'pounds', false),
  ('Bread', 1, 'loaf', false),
  ('Milk', 1, 'gallon', false),
  ('Sliced Almonds', 2, 'cups', false),
  ('Bananas', 1, 'bunch', false);
