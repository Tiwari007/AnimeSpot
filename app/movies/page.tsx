"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchAnimeMovies } from "../../lib/features/animeSlice";

export default function AnimePage() {
  const dispatch = useAppDispatch();
  const { animeMovies, loading, error } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeMovies());
  }, [dispatch]);
  if (loading) {
    return <div style={{ textAlign: "center", margin: "2rem" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", margin: "2rem", color: "#f76c8a" }}>
        Error: {error}
      </div>
    );
  }

  return (
    <section className="anime-section">
      <h1 className="anime-title">My Best Top 3 Anime Movies</h1>
      <div className="anime-list">
        {animeMovies.map((anime) => (
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