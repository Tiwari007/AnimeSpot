export default function AboutPage() {
  return (
    <section className="about-section">
      <h1 className="about-title animate-pop">🌸 Anime4Ume</h1>
      <p className="about-desc animate-fadein">
        Anime4Ume is a personal anime website built to showcase a curated list of my favorite anime along with popular titles. It also features a community-driven suggestion system where users can recommend anime and share the reasons behind their picks. Whether you're a seasoned otaku or new to anime, this site helps you explore, discover, and share great shows!
      </p>
      <div className="about-features animate-slideup">
        <h2>🔥 Features</h2>
        <ul>
          <li>🎌 <b>Favorite Anime:</b> A collection of anime that I personally love and recommend.</li>
          <li>📈 <b>Popular Anime:</b> Highlighting trending and top-rated anime titles.</li>
          <li>💬 <b>User Suggestions:</b> Users can suggest their favorite anime and explain why it's worth watching.</li>
          <li>💡 <b>Community Picks:</b> Discover hidden gems and underrated shows through other users’ recommendations.</li>
        </ul>
      </div>
      <div className="about-tech animate-slideup-delay">
        <h2>🚀 Tech Stack</h2>
        <ul>
          <li><b>Frontend:</b> React.js / Next.js</li>
          <li><b>Styling:</b> CSS / SCSS Modules</li>
          <li><b>Backend (if any):</b> Node.js</li>
        </ul>
      </div>
    </section>
  );
}