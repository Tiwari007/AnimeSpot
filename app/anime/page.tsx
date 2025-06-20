"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../../components/LoadingSpinner";
import NotFound404 from "@/components/NotFound404";

type Anime = {
  title: string;
  image: string;
  description: string;
  sourceUrl: string;
};

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
      <Image
        src={anime.image}
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
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch("https://anime4ume-mongodb.onrender.com/api/animelist");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()).data;
        setAnimeData(data);
      } catch (error) {
        console.error("Failed to fetch anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {animeData.length > 0 ? (
        <>
          <section className="anime-section">
            <h1 className="anime-title">My Best Top 3 Anime</h1>
            <div className="anime-list">
              {animeData.slice(0, 3).map((anime) => (
                <AnimeCard anime={anime} key={anime.title} />
              ))}
            </div>
          </section>
          <section className="anime-section">
            <h1 className="anime-title">Some of my favourite Anime</h1>
            <ul className="anime-list-view">
              {animeData.slice(3, 10).map((anime, idx) => (
                <AnimeListItem anime={anime} idx={idx} key={anime.title} />
              ))}
            </ul>
          </section>
        </>
      ) : 
      <NotFound404 />
      }
    </>
  );
}