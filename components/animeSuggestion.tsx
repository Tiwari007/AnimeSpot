export function AnimeSuggestionForm() {
  return (
    <section className="animeSuggestion">
      <h1>
        Have an anime in mind? <br />Let us know!
        <form className="animeSuggestionForm">
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Enter your email"
            required
            style={{ margin: '0 1rem', padding: '0.8rem' }}
          />
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
  );
}