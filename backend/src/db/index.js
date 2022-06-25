const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'admin',
  port: 5432,
});
module.exports = {
    async query(text, params) {
        // invocation timestamp for the query method
        const start = Date.now();
        try {
            const res = await pool.query(text, params);
            console.log("In db res=",res)
            // time elapsed since invocation to execution
            const duration = Date.now() - start;
            console.log(
              'executed query', 
              {text, duration, rows: res.rowCount}
            );
            return res;
        } catch (error) {
            console.log('error in query', {text});
            throw error;
        }
    }
};