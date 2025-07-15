import { Pool } from 'pg';

const pool = new Pool({
  host: 'dpg-d1q9muffte5s73d3nb00-a.oregon-postgres.render.com',
  user: 'samuelbun132',
  password: 'Pcx9Lccnl8PhseLPNNCAEGiNKdI8fUiU',
  database: 'cancionesbun',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM canciones');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Error al obtener canciones' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
