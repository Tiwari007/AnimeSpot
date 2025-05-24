import Image from 'next/image';

const animeData = [
  {
    title: 'Attack on Titan',
    description: 'Humans fight for survival against giant humanoid Titans.',
    image: '/attackontitan.png',
  },
  {
    title: 'My Hero Academia',
    description: 'A world where superpowers are the norm and heroes rise.',
    image: '/myheroacademia.png',
  },
  {
    title: 'Demon Slayer',
    description: 'A boy becomes a demon slayer to save his sister.',
    image: '/demonslayer.png',
  },
];

export default function AnimePage() {
  return (
    <section className="anime-section">
      <h1 className="anime-title">My Favourite Anime</h1>
      <div className="anime-list">
        {animeData.map((anime) => (
          <div className="anime-card-flip" key={anime.title}>
            <div className="anime-card-inner">
              <div className="anime-card-front">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={200}
                  height={180}
                  // style={{ objectFit: 'cover', height: '100%' }}
                  className="anime-img"
                />
                <h2 className="anime-name">{anime.title}</h2>
              </div>
              <div className="anime-card-back">
                <h2 className="anime-name">{anime.title}</h2>
                <p className="anime-desc">{anime.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}