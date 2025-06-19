"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchAnimeList, fetchAnimeData, type Anime } from "../../lib/features/animeSlice";

function AnimeCard({ anime }: { anime: Anime }) {
  return (
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
  );
}

function AnimeListItem({ anime, idx }: { anime: Anime; idx: number }) {
  return (
    <li className="anime-list-item" key={anime.title}>
      <span className="anime-list-index">{idx + 1}.</span>
      <img
        src={anime.image || "https://media.kitsu.app/anime/poster_images/1/small.jpg"}
        alt={anime.title}
        width={60}
        height={80}
        className="anime-list-img"
      />
      <div className="anime-list-info">
        <span className="anime-list-title">{anime.title}</span>
        <span className="anime-list-desc">{anime.description}</span>
      </div>
      <a
        href={anime.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="anime-list-source-btn"
      >
        Watch
      </a>
    </li>
  );
}

export default function AnimePage() {
  const dispatch = useAppDispatch();
  const { animeList, animeData, loading, error } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeList());
    dispatch(fetchAnimeData());
  }, [dispatch]);
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

  if (error) {
    return (
      <div style={{ textAlign: "center", margin: "2rem", color: "#f76c8a" }}>
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <section className="anime-section">
        <h1 className="anime-title">My Best Top 3 Anime</h1>
        <div className="anime-list">
          {animeData.map((anime) => (
            <AnimeCard anime={anime} key={anime.title} />
          ))}
        </div>
      </section>
      <section className="anime-section">
        <h1 className="anime-title">Some of my favourite Anime</h1>
        <ul className="anime-list-view">
          {animeList.map((anime, idx) => (
            <AnimeListItem anime={anime} idx={idx} key={anime.title} />
          ))}
        </ul>
      </section>
    </>
  );
}