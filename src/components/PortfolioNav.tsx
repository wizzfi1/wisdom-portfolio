"use client";
import { useRef, useState } from "react";
import Link from "next/link";
export default function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Link className="wordmark" href="/" aria-label="Wisdom Shaibu home">
        w<span className="brand-dot">.</span>
        <span className="wordmark-name">Wisdom Shaibu</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="site-navigation"
        className={open ? "site-navigation is-open" : "site-navigation"}
        aria-label="Main navigation"
      >
        {[
          ["Work", "/#work"],
          ["About", "/#about"],
          ["Experience", "/#experience"],
        ].map(([name, href]) => (
          <Link key={name} href={href} onClick={() => setOpen(false)}>
            {name}
          </Link>
        ))}
        <a
          href="/Wisdom_Ojochegbe_Shaibu_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
        <a className="nav-contact" href="mailto:shaibuwisdom@gmail.com">
          Let’s talk ↗
        </a>
      </nav>
    </header>
  );
}
