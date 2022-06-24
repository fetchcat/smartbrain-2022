CREATE DATABASE smartbrain;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  email text UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL,
  password VARCHAR(100) NOT NULL
);