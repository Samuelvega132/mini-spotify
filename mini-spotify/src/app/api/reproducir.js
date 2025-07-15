import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '12345678',
  database: 'CancionesBun',
  port: 1717
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;

    try {
      await pool.query(
        'UPDATE canciones SET reproducciones = reproducciones + 1 WHERE id = $1',
        [id]
      );
      res.status(200).json({ message: 'Reproducción registrada' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error actualizando' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
