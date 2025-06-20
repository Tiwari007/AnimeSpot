'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import features from '../config/features';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span style={{ transform: open ? 'rotate(45deg) translate(6px, 6px)' : '' }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(7px, -7px)' : '' }} />
      </div>
      <Link href="/">
      <div className="logo">
        <Image src="/logo.webp" alt="AnimeSpot Logo" width={40} height={40} className="logo-img" />
        <span className="brand" style={{ marginLeft: 8 }}>AnimeSpot</span>
      </div>
      </Link>
      <div className={`links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        <Link href="/">Home</Link>
        { features.showAnimeOnNavigation && <Link href="/anime">Anime</Link> }
        { features.showAnimeMoviesOnNavigation && <Link href="/animemovies">Movies</Link> }
        { features.showAboutOnNavigation && <Link href="/about">About</Link> }
        { features.showContactOnNavigation && <Link href="/contact">Contact</Link> }
        { features.showFaqOnNavigation && <Link href="/faq" className="faqBtn">FAQ</Link> }
      </div>
    </nav>
  );
}