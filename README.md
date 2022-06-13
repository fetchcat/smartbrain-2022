## Developer Notes

### Deployment

[] app.yaml

[] api.yaml
[] dispatch.yaml

### Frontend

[x] Convert React Classes to Hooks
[x] Replace Particles
[] Updated Clarifai API
[] Context API?
[x] Use custom CSS instead of tachyons
[x] Tilt Error

### Backend

[x] Install Local PostgreSQL
[] Replace PostgreSQL with MySQL

CREATE TABLE users (
id serial PRIMARY KEY,
name VARCHAR(100),
email text UNIQUE NOT NULL,
entries BIGINT DEFAULT 0,
joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
id serial PRIMARY KEY,
hash VARCHAR(100) NOT NULL,
email text UNIQUE NOT NULL
);
