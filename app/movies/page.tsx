import Image from 'next/image';
import animeMoviesList from '../../sampleData/animeMoviesList';

export default function AnimePage() {
  return (
    <>
      <section className="anime-section">
        <h1 className="anime-title">My Best Top 3 Anime Movies</h1>
        <div className="anime-list">
          {animeMoviesList.map((anime: { title: string; description: string; image: string, sourceUrl: string }) => (
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
                    href={anime?.sourceUrl}
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
      {/* <section className="anime-section">
        <h1 className="anime-title">Some of my favourite anime Movies</h1>
        <ul className="anime-list-view">
          {animeList.map((anime, idx) => (
            <li className="anime-list-item" key={anime.title}>
              <span className="anime-list-index">{idx + 1}.</span>
              <img
                src={anime.image ? anime.image : 'https://media.kitsu.app/anime/poster_images/1/small.jpg'}
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
                href={anime?.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="anime-list-source-btn"
              >
                Watch
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}