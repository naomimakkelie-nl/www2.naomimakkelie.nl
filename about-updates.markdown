---
layout: page
title: About & Updates
permalink: /about-updates
order: 3
description: An overview of Naomi Mitsuko Makkelie's practice, recent highlights and press features.
---

<style>
  .about-page {
    --about-accent: rgba(0, 0, 0, 0.05);
    --about-border: rgba(0, 0, 0, 0.12);
    --about-muted: #4a4a4a;
    display: grid;
    gap: 3rem;
  }

  .about-hero {
    display: grid;
    gap: 2.5rem;
  }

  .about-hero__intro {
    display: grid;
    gap: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .about-hero__intro p {
    margin: 0;
  }

  .about-quick-facts {
    background: var(--about-accent);
    border: 1px solid var(--about-border);
    border-radius: 1rem;
    padding: 1.75rem;
    display: grid;
    gap: 1.25rem;
  }

  .about-quick-facts h2 {
    margin: 0;
    font-size: 1.25rem;
  }

  .about-quick-facts ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 1rem;
  }

  .about-quick-facts li {
    display: grid;
    gap: 0.25rem;
  }

  .about-quick-facts span {
    color: var(--about-muted);
    font-size: 0.95rem;
  }

  .about-video {
    display: grid;
    gap: 1.25rem;
  }

  .about-video__frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 1rem;
    overflow: hidden;
    background: #000;
  }

  .about-video__frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .about-highlights {
    display: grid;
    gap: 1.5rem;
  }

  .about-highlights__grid {
    display: grid;
    gap: 1.5rem;
  }

  .about-highlights article {
    border: 1px solid var(--about-border);
    border-radius: 1rem;
    padding: 1.5rem;
    display: grid;
    gap: 0.75rem;
    background: #fff;
  }

  .about-highlights time {
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: var(--about-muted);
  }

  .about-highlights h3 {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .about-highlights p {
    margin: 0;
    color: var(--about-muted);
    line-height: 1.6;
  }

  .about-highlights a {
    color: inherit;
  }

  @media (min-width: 768px) {
    .about-hero {
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
      align-items: start;
    }

    .about-highlights__grid {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>

<div class="about-page">
  <section class="about-hero">
    <div class="about-hero__intro">
      <p>Naomi Mitsuko Makkelie (1992) uses painting to probe the meaning, ethics and value of immortality. Her practice balances a deeply personal viewpoint with an awareness of existing within a much larger constellation. Through research that connects future, present and past across historical, scientific and cultural perspectives, she examines how cultural narratives are shaped. Rather than pursuing a single definitive reading, she leans into the subjectivity that surrounds her work, including the expectations projected onto her Japanese heritage.</p>
      <p>Since the beginning of the Covid-19 pandemic, Naomi has developed series of paintings and drawings that reference Japanese woodblock printing (Ukiyo-e) while documenting what it feels like to live through this era. She advocates for art and literature as vital archives that can sit alongside news media—offering lived, sometimes contradictory truths that counterbalance propaganda and incomplete accounts. Her fascination with how history is written includes an awareness that art can both clarify and cloud collective memory, and she champions artistic practices that question the status quo instead of trailing behind it.</p>
      <p>Born in Amsterdam, Naomi graduated cum laude from HKU (Utrecht University of the Arts) before completing the master programme at the Frank Mohr Institute in Groningen. She also studied psychology at the University of Amsterdam. Her accolades include the 2018 Buning Brongers Prize and a nomination for the Royal Prize for Painting. Recent exhibitions include W139, the Royal Palace of Amsterdam, Art Rotterdam, Arti et Amicitiae, Paviljoen Welgelegen, Museum IJsselstein, Nieuw Dakota and Arwe Gallery.</p>
    </div>
    <aside class="about-quick-facts" aria-labelledby="about-quick-facts-title">
      <h2 id="about-quick-facts-title">Quick facts</h2>
      <ul>
        <li>
          <strong>Based in</strong>
          <span>Amsterdam, The Netherlands</span>
        </li>
        <li>
          <strong>Practice</strong>
          <span>Painting and drawing with references to Ukiyo-e, autobiography and futurity</span>
        </li>
        <li>
          <strong>Education</strong>
          <span>HKU (BFA, cum laude), Frank Mohr Institute (MA), University of Amsterdam (Psychology)</span>
        </li>
        <li>
          <strong>Recognition</strong>
          <span>Buning Brongers Prize (2018), Royal Prize for Painting nominee</span>
        </li>
        <li>
          <strong>Selected venues</strong>
          <span>W139, Royal Palace of Amsterdam, Art Rotterdam, Arti et Amicitiae, Museum IJsselstein</span>
        </li>
      </ul>
    </aside>
  </section>

  <section class="about-video" aria-labelledby="about-video-title">
    <div>
      <h2 id="about-video-title">Interview highlight</h2>
      <p>Watch Naomi discuss her process in a recent feature by <em>New Face of Japan</em>. The interview touches on the balance between tradition, technology and the ways she archives the present moment through painting.</p>
    </div>
    <figure class="about-video__frame">
      <iframe src="https://customer-ducnjes7bpcd3viu.cloudflarestream.com/565f16d0b7e14a763599aefcf57d483a/iframe?preload=true&defaultTextTrack=en" title="Interview with Naomi Mitsuko Makkelie by New Face of Japan" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </figure>
    <figcaption>Interview by &ldquo;New Face of Japan&rdquo;, 2023.</figcaption>
  </section>

  <section class="about-highlights" aria-labelledby="about-highlights-title">
    <div>
      <h2 id="about-highlights-title">Updates, press &amp; publications</h2>
      <p>Recent coverage, publications and collaborations that spotlight Naomi’s practice.</p>
    </div>
    <div class="about-highlights__grid">
      <article>
        <time datetime="2023">2023</time>
        <h3>Portrait feature for <em>See All This</em> magazine</h3>
        <p>Photographed by Inga Polliweit, the editorial explores Naomi’s studio practice and the visual language she has developed around futurity and memory.</p>
      </article>
      <article>
        <time datetime="2022">2022</time>
        <h3><em>Painting is Present</em> with Arwe Gallery</h3>
        <p>Works from Naomi’s ongoing Ukiyo-e inspired series were presented in Arwe Gallery’s exhibition, accompanied by documentation by Thiemi Higashi (2018).</p>
      </article>
      <article>
        <time datetime="2020">2020</time>
        <h3>Essay for Museum IJsselstein’s <em>Ongetemd</em></h3>
        <p>Museum IJsselstein profiled Naomi’s work in the exhibition catalogue, reflecting on how her paintings narrate resilience and myth-making.</p>
      </article>
      <article>
        <time datetime="2019">2019</time>
        <h3><em>Seaweed p.1</em> in Mister Motley’s <em>Dit is een vertaling</em></h3>
        <p>Naomi’s drawing was published alongside essays examining translation, material memory and speculative storytelling.</p>
      </article>
      <article>
        <time datetime="2018">2018</time>
        <h3>Interview in the Buning Brongers Prize catalogue</h3>
        <p>Joost Galema spoke with Naomi about how science fiction and psychology inform her palette and painterly structures.</p>
      </article>
      <article>
        <time datetime="2018">2018</time>
        <h3>Artist statement archive</h3>
        <p>An extended artist statement was published online, outlining the conceptual foundations that continue to guide Naomi’s current bodies of work.</p>
      </article>
    </div>
  </section>
</div>
