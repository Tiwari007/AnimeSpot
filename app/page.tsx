import Link from 'next/link';
import Image from 'next/image';
import features from '../config/features';

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
        { features.showPopularAnime && (
          <Link href="/anime" className="exploreBtn">
            Explore Popular Anime
          </Link>
        )}
        { features.showFavouriteAnime && (
          <Link href="/favouriteanime" className="exploreBtn">
            My Favourite Anime
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
    <section className="animeSuggestion">
        <h1>
          Have an anime in mind? <br />Let us know!
          <form className="animeSuggestionForm">
            <input
              type="text"
              id="animeName"
              name="animeName"
              placeholder="Enter anime title"
              required
              style={{ margin: '0 1rem', padding: '0.8rem' }}
            />
            <label htmlFor="animeReason">Why do you like this anime?</label>
            <textarea
              id="animeReason"
              name="animeReason"
              placeholder="Tell us what makes this anime special for you"
              required
              rows={4}
              style={{
                margin: '0 1rem 1rem 1rem',
                padding: '0.8rem',
                borderRadius: '12px',
                border: '1.5px solid #f76c8a',
                fontSize: '1.1rem',
                minWidth: '320px',
                maxWidth: '100%',
                resize: 'vertical'
              }}
            />
            <button type="submit" className="exploreBtn">
              Submit
            </button>
          </form>
        </h1>
    </section>
    </>
  );
}