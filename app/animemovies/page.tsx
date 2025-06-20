"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type AnimeMovie = {
  title: string;
  description: string;
  image: string;
  sourceUrl: string;
};

export default function AnimePage() {
  const [animeMoviesList, setAnimeMoviesList] = useState<AnimeMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://animespot-backend.onrender.com/anime/animemoviesdata")
      .then((res) => res.json())
      .then((data) => setAnimeMoviesList(data))
      .catch(() => setAnimeMoviesList([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            border: "6px solid #f3f3f3",
            borderTop: "6px solid #3498db",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            animation: "spin 1s linear infinite",
            marginBottom: "1rem",
          }}
        />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={{ fontSize: "1.2rem", color: "#555" }}>Loading...</div>
      </div>
    );
  }

  return (
    <section className="anime-section">
      <h1 className="anime-title">My Best Top 3 Anime Movies</h1>
      <div className="anime-list">
        {animeMoviesList.map((anime) => (
          <div className="anime-card-flip" key={anime.title}>
            <div className="anime-card-inner">
              <div className="anime-card-front">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={200}
                  height={180}
                  className="anime-img"
                />
                <h2 className="anime-name">{anime.title}</h2>
              </div>
              <div className="anime-card-back">
                <h2 className="anime-name">{anime.title}</h2>
                <p className="anime-desc">{anime.description}</p>
                <br />
                <a
                  href={anime.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anime-list-source-btn"
                >
                  Watch
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}