import Link from 'next/link';
import Image from 'next/image';
import features from '../config/features';
import React from 'react';
import { AnimeSuggestionForm } from '@/components/animeSuggestion';

export default function HomePage() {
  return (
    <>
    <section className="hero">
      <div className="heroContent">
        <h1>Discover the<br />World of Anime</h1>
        <p>
          Immerse yourself in the captivating narratives and vibrant visuals of the anime universe.
          Explore a diverse range of genres, from action-packed adventures to heartwarming stories
        </p>
        { features.showFavouriteAnime && (
          <Link href="/favouriteanime" className="exploreBtn">
            My Favourite Anime
          </Link>
        )}
        { features.showFavouriteAnimeMovies && (
          <Link href="/movies" className="exploreBtn">
            My Favourite Anime Movies
          </Link>
        )}
        { features.showPopularAnime && (
          <Link href="/anime" className="exploreBtn">
            Explore Popular Anime
          </Link>
        )}
      </div>
      <div className="heroImage">
        <Image
          src="/avatar_anime.webp"
          alt="Anime Girl"
          width={800}
          height={900}
          priority
        />
      </div>
    </section>
    <AnimeSuggestionForm />
    </>
  );
}