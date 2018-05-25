const pg = require('pg-promise')();

const builder = process.env.USER

const dbconfig = {
    host: 'localhost',
    port: 5432,
    database: 'cal',
    }
    
const db = pg(dbconfig);

let findEventsByMonth = (month) => {
    return db.query(`SELECT * FROM events WHERE month ILIKE '${month}'`)
};

let insertEvents = (month, day, starttime, endtime, description) => {
    return db.query(`INSERT INTO events (month, day, starttime, endtime, description) VALUES
    ('${month}', '${day}', '${starttime}', '${endtime}', '${description}')`)
}

module.exports = {
    findEventsByMonth,
    insertEvents
}