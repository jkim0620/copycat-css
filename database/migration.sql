DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS colors;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE colors (
  id BIGSERIAL PRIMARY KEY,
  category VARCHAR(255),
  color_theme VARCHAR(255),
  color_name VARCHAR(255),
  color_white VARCHAR(64),
  color_black VARCHAR(64),
  color_pri VARCHAR(64) NOT NULL,
  color_sec VARCHAR(64) NOT NULL,
  color_ter VARCHAR(64)
);
