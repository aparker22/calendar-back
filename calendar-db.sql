/*
psql -d postgres -f ./db_util.sql ====> creates db and tables
psql -d pc ==========> opens up db in terminal
*/

DROP DATABASE IF EXISTS cal;
CREATE DATABASE cal;

\c cal;

CREATE TABLE events (
    ID SERIAL PRIMARY KEY,
    month VARCHAR (100)  NOT NULL,
    day integer NOT NULL,
    starttime VARCHAR (100) NOT NULL,
    endtime VARCHAR (100) NOT NULL,
    description VARCHAR (100) NOT NULL
);

INSERT INTO events (month, day, starttime, endtime, description) VALUES
    ('may', 28, '12:00 am', '12:00 pm', 'Memorial Day');

