import React, { useState, useRef } from 'react';
import './index.css'; 

const Canciones = [
  { titulo: "Cerveza", artista: "Ráfaga", src: "/Rafaga-Cerveza.mp3" },
  { titulo: "Mentirosa", artista: "Ráfaga", src: "/Rafaga-Mentirosa.mp3" },
  { titulo: "A Esa", artista: "Karina", src: "/Karina-A Esa.mp3" },
  { titulo: "Ya No Somos Ni Seremos", artista: "Christian Nodal", src: "/Christian Nodal-Ya No Somos Ni Seremos.mp3" },
  { titulo: "Otra noche", artista: "Los Angeles", src: "/Los Ángeles-Otra Noche.mp3" },
  { titulo: "Amapola", artista: "Papaya Dada", src: "/Amapola-Papaya Dada.mp3" },
  { titulo: "Una Vida Pasada", artista: "Camilo", src: "/Camilo-Una Vida Pasada.mp3" }
];

const ListaDeReproduccion = () => {
  const [indiceCancionActual, setIndiceCancionActual] = useState(null);
  const audioRef = useRef(new Audio());
  const [cancionReproduciendo, setCancionReproduciendo] = useState(null);
  const [artistaReproduciendo, setArtistaReproduciendo] = useState(null);

  const reproducirCancion = (indice) => {
    if (indiceCancionActual !== null) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(Canciones[indice].src);
    audioRef.current.play();
    setIndiceCancionActual(indice);
    setCancionReproduciendo(Canciones[indice].titulo);
    setArtistaReproduciendo(Canciones[indice].artista);
  };

  const pausarCancion = () => {
    audioRef.current.pause();
    setCancionReproduciendo(null); 
    setArtistaReproduciendo(null);
  };

  return (
    <div>
      <h1>Reproductor de Música</h1>
      <ul>
        {Canciones.map((cancion, indice) => (
          <li key={indice}>
            {cancion.titulo} - {cancion.artista}
            <div>
              <button onClick={() => reproducirCancion(indice)}>Reproducir</button>
              <button onClick={pausarCancion}>Pausar</button>
            </div>
          </li>
        ))}
      </ul>

      {cancionReproduciendo && artistaReproduciendo && (
        <h2>Reproduciendo: {cancionReproduciendo} - {artistaReproduciendo}</h2>
      )}
    </div>
  );
};

export default ListaDeReproduccion;
