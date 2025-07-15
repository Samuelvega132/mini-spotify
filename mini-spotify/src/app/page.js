'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    fetch('/api/canciones')
      .then(res => res.json())
      .then(data => setCanciones(data));
  }, []);

const registrarReproduccion = async (id) => {
    await fetch('/api/reproducir', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎵 Mi Mini Spotify</h1>
      {canciones.map(c => (
        <div key={c.id} style={{ marginBottom: 20 }}>
          <h3>{c.titulo} - {c.artista} ({c.reproducciones} rep)</h3>
          <audio
            controls
            src={c.url_audio}
            onPlay={() => registrarReproduccion(c.id)}
          />
        </div>
    ))}
    </div>
  );
}