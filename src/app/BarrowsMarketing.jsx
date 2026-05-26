'use client';

import React, { useState } from "react";

const SERVICES = [
  {
    n: "01",
    title: "Natural Gas",
    blurb: "Distribution and transmission line installation built for regulated utility work.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/steel-gas-pipe-installed-in-road2.jpg?1730494127",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    n: "02",
    title: "Hydro Excavation",
    blurb: "Non-destructive digging with vac-truck crews for tight utility corridors.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/vac-truck1.jpg?1717566605",
    span: "",
  },
  {
    n: "03",
    title: "Electric",
    blurb: "Substation pads, underground electric, trenching, and utility infrastructure.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/substation.jpg?1717566676",
    span: "",
  },
  {
    n: "04",
    title: "Directional Boring",
    blurb: "Trenchless installs that keep roads, creeks, and finished sites intact.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/img-1443.jpg?1730494279",
    span: "md:col-span-2",
  },
  {
    n: "05",
    title: "Excavation",
    blurb: "Trenching, grading, site work, and pad prep from one accountable crew.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/barrows-equipment-with-sunset.jpg?1717566742",
    span: "",
  },
  {
    n: "06",
    title: "Fabrication",
    blurb: "In-house fabrication support for utility and infrastructure installs.",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/gas-fabrication.jpg?1717566788",
    span: "",
  },
  {
    n: "07",
    title: "Demolition",
    blurb: "Controlled tear-downs, cleanup, and site clearing before the next phase.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70",
    span: "",
  },
  {
    n: "08",
    title: "Water & Sewer",
    blurb: "Municipal and rural mainline, taps, services, and repair support.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=70",
    span: "",
  },
];

const STATS = [
  { value: "40+", label: "Years in business" },
  { value: "4", label: "States served" },
  { value: "120+", label: "Crew members" },
  { value: "1,200+", label: "Projects delivered" },
];

const PROJECTS = [
  {
    title: 'Rogers, AR 6" HDPE Gas Main',
    type: "Natural Gas Distribution",
    scope: "8,400 LF",
    year: "2025",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/steel-gas-pipe-installed-in-road2.jpg?1730494127",
  },
  {
    title: "Carroll County Substation",
    type: "Electric Infrastructure",
    scope: "12-acre site prep",
    year: "2024",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/substation.jpg?1717566676",
  },
  {
    title: "US-62 HDD River Crossing",
    type: "Directional Boring",
    scope: "1,140 ft bore",
    year: "2024",
    image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/img-1443.jpg?1730494279",
  },
];

const EQUIPMENT = [
  { name: "Vac Truck Fleet", spec: "Vactor and Ramvac units", image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/vac-truck.jpg?1717566914" },
  { name: "HDD Rigs", spec: "Directional boring fleet", image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/img-1443.jpg?1730494279" },
  { name: "Excavators", spec: "Heavy and compact machines", image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/barrows-equipment-with-sunset.jpg?1717566742" },
  { name: "Fab Shop", spec: "Custom utility fabrication", image: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/gas-fabrication.jpg?1717566788" },
];

const HOMEPAGE_VIDEOS = [
  {
    type: "mp4",
    title: "Field Operations",
    label: "Utility work in motion",
    src: "https://www.weebly.com/uploads/b/120292723-683652031539492442/a9e74e8691a04b67bd650e2d5a148fc5_460.mp4",
    poster: "https://www.weebly.com/uploads/b/120292723-683652031539492442/a9e74e8691a04b67bd650e2d5a148fc5_460.jpg",
  },
  {
    type: "mp4",
    title: "Utility Crew Work",
    label: "Crews, equipment, and site prep",
    src: "https://www.weebly.com/uploads/b/120292723-683652031539492442/d542009b968649f19a4887fd97914d79_744.mp4",
    poster: "https://www.weebly.com/uploads/b/120292723-683652031539492442/d542009b968649f19a4887fd97914d79_744.jpg",
  },
  {
    type: "youtube",
    title: "Wilson Combat Expansion",
    label: "Excavation services project footage",
    youtubeId: "oJwhE2GRUHA",
    poster: "https://i.ytimg.com/vi/oJwhE2GRUHA/hqdefault.jpg",
  },
];

const HERO_BACKGROUNDS = [
  {
    src: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/editor/barrows-equipment-with-sunset.jpg?1717566742",
    alt: "Barrows excavation equipment at sunset",
  },
  {
    src: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/gas-line-lowering-into-ditch-1.jpeg?1714987654",
    alt: "Barrows excavators lowering gas line into a trench",
  },
  {
    src: "https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/background-images/2101326330.jpg",
    alt: "Barrows aerial site work with heavy equipment",
  },
];

const COUNTIES = ["Carroll", "Boone", "Madison", "Washington", "Benton", "Newton", "Marion", "Baxter", "Searcy", "Stone"];

function Button({ children, href, ghost = false, className = "" }) {
  const classes = `barrows-btn ${ghost ? "barrows-btn-ghost" : ""} ${className}`;
  return href ? (
    <a href={href} className={classes}>
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  ) : (
    <button className={classes}>
      {children}
      <span aria-hidden="true">-&gt;</span>
    </button>
  );
}

function BidButton({ children, ghost = false, className = "", onClick }) {
  return (
    <button type="button" onClick={onClick} className={`barrows-btn ${ghost ? "barrows-btn-ghost" : ""} ${className}`}>
      {children}
      <span aria-hidden="true">-&gt;</span>
    </button>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  const [heroBackgroundIndex, setHeroBackgroundIndex] = useState(0);
  const [bidModalOpen, setBidModalOpen] = useState(false);
  const [dispatchModalOpen, setDispatchModalOpen] = useState(false);
  const [videoSoundEnabled, setVideoSoundEnabled] = useState(false);
  const heroVideo = HOMEPAGE_VIDEOS[heroVideoIndex];
  const heroVideoRef = React.useRef(null);
  const youtubePlayerRef = React.useRef(null);
  const youtubeContainerId = "barrows-hero-youtube-player";

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroBackgroundIndex((index) => (index + 1) % HERO_BACKGROUNDS.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (heroVideo.type !== "mp4" || !heroVideoRef.current) return undefined;

    const video = heroVideoRef.current;
    video.currentTime = 0;
    video.muted = !videoSoundEnabled;

    const timeout = window.setTimeout(() => {
      const playRequest = video.play();
      if (playRequest) {
        playRequest.catch(() => {
          // Browsers can block autoplay with sound until the visitor interacts.
        });
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [heroVideo.type, heroVideoIndex, videoSoundEnabled]);

  React.useEffect(() => {
    if (heroVideo.type !== "youtube" || !youtubePlayerRef.current) return;

    if (videoSoundEnabled) {
      youtubePlayerRef.current.unMute?.();
    } else {
      youtubePlayerRef.current.mute?.();
    }
  }, [heroVideo.type, videoSoundEnabled]);

  React.useEffect(() => {
    if (heroVideo.type !== "youtube") {
      if (youtubePlayerRef.current?.destroy) {
        youtubePlayerRef.current.destroy();
        youtubePlayerRef.current = null;
      }
      return undefined;
    }

    let cancelled = false;

    const createPlayer = () => {
      if (cancelled || !window.YT?.Player) return;
      if (youtubePlayerRef.current?.destroy) {
        youtubePlayerRef.current.destroy();
      }

      youtubePlayerRef.current = new window.YT.Player(youtubeContainerId, {
        videoId: heroVideo.youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            if (videoSoundEnabled) {
              event.target.unMute();
            } else {
              event.target.mute();
            }
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setHeroVideoIndex((index) => (index + 1) % HOMEPAGE_VIDEOS.length);
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousReady === "function") previousReady();
        createPlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (youtubePlayerRef.current?.destroy) {
        youtubePlayerRef.current.destroy();
        youtubePlayerRef.current = null;
      }
    };
  }, [heroVideo.type, heroVideo.youtubeId, heroVideoIndex, videoSoundEnabled]);

  return (
    <div id="top" className="min-h-screen bg-stone-950 font-sans text-stone-100">
      <div className="hidden border-b border-stone-800 bg-stone-950 text-xs md:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2 font-mono uppercase tracking-widest text-stone-400">
          <div className="flex items-center gap-6">
            <span className="text-red-500">Licensed and Bonded</span>
            <span>AR / MO / OK / KS</span>
            <span>24/7 emergency locates</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:8704234813" className="hover:text-red-500">(870) 423-4813</a>
            <button type="button" onClick={() => setBidModalOpen(true)} className="uppercase hover:text-red-500">How can we serve?</button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-800 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <div className="leading-tight">
              <div className="font-display text-lg font-black uppercase tracking-wider text-stone-50">Barrows</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">Excavation / Berryville, AR</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider lg:flex">
            {["services", "projects", "equipment", "about", "safety", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-red-500">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BidButton onClick={() => setBidModalOpen(true)} className="hidden md:inline-flex">How can we be of service?</BidButton>
            <button
              type="button"
              onClick={() => setNavOpen((open) => !open)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center border border-stone-700 lg:hidden"
            >
              <span className="grid gap-1.5">
                <span className="block h-0.5 w-5 bg-stone-100" />
                <span className="block h-0.5 w-5 bg-stone-100" />
                <span className="block h-0.5 w-5 bg-stone-100" />
              </span>
            </button>
          </div>
        </div>
        {navOpen && (
          <nav className="border-t border-stone-800 bg-stone-950 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm uppercase tracking-wider">
              {["services", "projects", "equipment", "about", "safety", "contact"].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setNavOpen(false)}>{item}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {HERO_BACKGROUNDS.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === heroBackgroundIndex ? "opacity-55" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-5 right-6 hidden gap-2 md:flex" aria-hidden="true">
              {HERO_BACKGROUNDS.map((image, index) => (
                <span
                  key={image.src}
                  className={`h-1.5 w-8 transition-colors ${index === heroBackgroundIndex ? "bg-red-600" : "bg-stone-600/70"}`}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto grid max-w-[1560px] items-center gap-10 px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(360px,560px)] xl:gap-20">
            <div className="max-w-[760px]">
              <div className="section-label">00 / The Ozarks / Since 1983</div>
              <h1 className="mt-6 font-black uppercase leading-[1] tracking-tight text-stone-50 text-[1.35rem] min-[420px]:text-[1.65rem] sm:text-[2.35rem] xl:text-[3.25rem]">
                <span className="block whitespace-nowrap">We move <span className="text-red-500">earth</span>.</span>
                <span className="block whitespace-nowrap">We build <span className="text-red-500">infrastructure</span>.</span>
                <span className="block whitespace-nowrap">We don&apos;t <span className="italic">cut corners.</span></span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-stone-300">
                Multi-generational utility contractor delivering gas, electric, water, sewer, hydro excavation, and HDD work across the four-state region.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <BidButton onClick={() => setBidModalOpen(true)}>How can we be of service?</BidButton>
                <Button href="#services" ghost>See services</Button>
              </div>
            </div>
            <div className="relative w-full max-w-[520px] justify-self-center lg:translate-x-8 xl:justify-self-end xl:translate-x-12">
              <div className="absolute -inset-3 border border-red-700/25 bg-red-950/10" />
              <div className="relative overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between border-b border-stone-800 bg-stone-950/90 px-4 py-3">
                  <div>
                    <div className="font-display text-sm font-black uppercase tracking-wider text-stone-50">See the work</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-stone-500">Barrows crews in the field</div>
                  </div>
                  <span className="border border-red-700/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-red-500">
                    Reel {heroVideoIndex + 1}
                  </span>
                </div>
                <div className="relative aspect-video bg-stone-900">
                  {heroVideo.type === "youtube" ? (
                    <div
                      key={heroVideo.youtubeId}
                      id={youtubeContainerId}
                      className="h-full w-full"
                    />
                  ) : (
                    <video
                      key={heroVideo.src}
                      ref={heroVideoRef}
                      className="h-full w-full object-cover"
                      src={heroVideo.src}
                      poster={heroVideo.poster}
                      autoPlay
                      muted={!videoSoundEnabled}
                      preload="auto"
                      playsInline
                      controls
                      onEnded={() => setHeroVideoIndex((index) => (index + 1) % HOMEPAGE_VIDEOS.length)}
                    />
                  )}
                  <div className="pointer-events-none absolute left-4 top-4 bg-stone-950/85 px-3 py-1.5">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-red-500">{heroVideo.title}</div>
                    <div className="mt-0.5 text-xs font-semibold text-stone-100">{heroVideo.label}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-stone-800 bg-stone-950 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                    Built for utility, excavation, and infrastructure work.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setVideoSoundEnabled((enabled) => !enabled)}
                      className="border border-stone-700 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-stone-300 hover:border-red-600 hover:text-red-500"
                    >
                      Sound {videoSoundEnabled ? "on" : "off"}
                    </button>
                    <div className="flex gap-1.5" aria-label="Choose video">
                      {HOMEPAGE_VIDEOS.map((video, index) => (
                        <button
                          type="button"
                          key={video.src || video.youtubeId}
                          onClick={() => setHeroVideoIndex(index)}
                          className={`h-1.5 w-6 ${index === heroVideoIndex ? "bg-red-600" : "bg-stone-700"}`}
                          aria-label={`Play ${video.title}`}
                          aria-current={index === heroVideoIndex ? "true" : undefined}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-stone-800 bg-stone-950/90 backdrop-blur">
            <div className="mx-auto max-w-[1500px] px-6 py-8">
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-red-500">
                Excellence in Excavation and Utility Construction
              </div>
              <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-red-900/70 to-red-700/80 md:block" />
                <div className="flex items-center gap-5 border border-stone-800 bg-black/45 px-7 py-4 shadow-2xl shadow-black/30">
                  <div className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500 sm:block">
                    Four-state utility contractor
                  </div>
                  <img
                    src="https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/barrows-logo-1-removebg-preview_orig.png"
                    alt="Barrows Excavation"
                    className="h-16 w-auto md:h-20"
                  />
                  <div className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500 sm:block">
                    Berryville, Arkansas
                  </div>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-red-900/70 to-red-700/80 md:block" />
              </div>
            </div>
          </div>

          <div className="relative border-y border-stone-800 bg-stone-950/80 backdrop-blur">
            <div className="mx-auto grid max-w-[1500px] grid-cols-2 divide-x divide-stone-800 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-6 py-8">
                  <div className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-red-500">{stat.value}</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-b border-stone-800 bg-red-700 py-4 text-stone-50">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-xl font-black uppercase tracking-tight">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex shrink-0 items-center gap-12">
                {["Natural Gas", "Electric", "Hydro Excavation", "Directional Boring", "Site Work", "Fabrication", "Demolition", "Water & Sewer"].map((item) => (
                  <React.Fragment key={`${index}-${item}`}>
                    <span>{item}</span>
                    <span aria-hidden="true">/</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="services" className="border-b border-stone-800 bg-stone-950 py-24">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="section-label">01 / What we do</div>
                <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight">
                  Eight disciplines.<br />
                  <span className="text-stone-400">One crew you can trust.</span>
                </h2>
              </div>
              <p className="max-w-md text-stone-400">Self-perform across major utility trades so the project stays on one schedule, one safety plan, and one point of accountability.</p>
            </div>

            <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
              {SERVICES.map((service) => (
                <a key={service.n} href="#contact" className={`group relative overflow-hidden border border-stone-800 bg-stone-900 ${service.span}`}>
                  <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-red-500">{service.n}</div>
                    <div>
                      <h3 className="font-display text-2xl font-black uppercase leading-tight tracking-tight md:text-3xl">{service.title}</h3>
                      <p className="mt-2 max-w-xs text-sm text-stone-300">{service.blurb}</p>
                      <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400 transition-colors group-hover:text-red-500">Request scope -&gt;</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-stone-800 bg-stone-100 text-stone-900">
          <div className="h-2 w-full caution-stripe" />
          <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-stone-300 bg-stone-200">
                <img src="https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/kirk-and-opie_orig.jpeg" alt="Kirk and Opie Barrows" className="h-full w-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-stone-950 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-red-500">Kirk and Opie / Leadership</div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
                <span className="h-px w-8 bg-stone-900" />
                <span>02 / About us</span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-stone-950">
                Multi-generational.<br />
                <span className="text-stone-500">Single-minded about the work.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-700">
                Built in Berryville, Arkansas, Barrows has earned its reputation through respect, dedication, and direct accountability from leadership to the crew in the trench.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ["Safety First", "Every shift, every crew."],
                  ["Hard Work", "Show up and finish clean."],
                  ["Tenacity", "Weather, terrain, deadline."],
                  ["Commitment", "Own the outcome."],
                ].map(([title, text]) => (
                  <li key={title} className="border-t-2 border-red-600 pt-3">
                    <div className="font-display font-black uppercase tracking-tight">{title}</div>
                    <div className="mt-1 text-sm text-stone-600">{text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="equipment" className="border-b border-stone-800 bg-stone-950 py-24">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="section-label">03 / Fleet and shop</div>
                <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight">
                  Owned. Maintained.<br />
                  <span className="text-red-500">Ready to roll.</span>
                </h2>
              </div>
              <p className="max-w-sm text-stone-400">The fleet, shop, and people stay under one roof so critical-path work does not wait on someone else&apos;s schedule.</p>
            </div>
          </div>
          <div className="mt-14 overflow-x-auto">
            <div className="mx-auto flex w-max max-w-[1500px] gap-4 px-6">
              {EQUIPMENT.map((item, index) => (
                <article key={item.name} className="w-[320px] shrink-0 overflow-hidden border border-stone-800 bg-stone-900 md:w-[380px]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    <div className="absolute left-3 top-3 bg-stone-950/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-red-500">Asset / {String(index + 1).padStart(2, "0")}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black uppercase tracking-tight">{item.name}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-400">{item.spec}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-stone-800 bg-stone-900 py-24">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="section-label">04 / Recent work</div>
                <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight">
                  Boots on the ground.<br />
                  <span className="text-stone-400">Proof in the dirt.</span>
                </h2>
              </div>
              <button type="button" onClick={() => setBidModalOpen(true)} className="font-mono text-xs uppercase tracking-widest text-red-500 hover:text-red-400">How can we serve? -&gt;</button>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PROJECTS.map((project) => (
                <article key={project.title} className="group overflow-hidden border border-stone-800 bg-stone-950">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute right-3 top-3 bg-red-700 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-50">{project.year}</div>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-red-500">{project.type}</div>
                    <h3 className="mt-3 font-display text-xl font-black uppercase leading-tight tracking-tight">{project.title}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">
                      <span>Scope</span>
                      <span className="font-mono uppercase tracking-widest text-stone-200">{project.scope}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-stone-800 bg-stone-950 py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="section-label">05 / Where we work</div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-[0.95] tracking-tight">
                Headquartered in the<br />
                <span className="text-red-500">Ozarks.</span>
              </h2>
              <p className="mt-6 max-w-md text-stone-400">From the Berryville yard, crews mobilize across Arkansas, Missouri, Oklahoma, and Kansas.</p>
              <div className="mt-8">
                <div className="font-mono text-xs uppercase tracking-widest text-stone-400">Primary counties</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {COUNTIES.map((county) => (
                    <span key={county} className="border border-stone-700 px-3 py-1 font-mono text-xs uppercase tracking-widest text-stone-300">{county}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] border border-stone-800 bg-stone-900 p-6">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(185,28,28,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,28,28,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
                <svg viewBox="0 0 400 320" className="relative h-full w-full" role="img" aria-label="Four-state service area map">
                  <g fill="#292524" stroke="#44403c" strokeWidth="1">
                    <rect x="20" y="20" width="170" height="130" />
                    <rect x="190" y="20" width="190" height="130" />
                    <rect x="20" y="150" width="170" height="150" />
                    <rect x="190" y="150" width="190" height="150" />
                  </g>
                  <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2" fill="#78716c">
                    <text x="30" y="40">KANSAS</text>
                    <text x="200" y="40">MISSOURI</text>
                    <text x="30" y="170">OKLAHOMA</text>
                    <text x="200" y="170">ARKANSAS</text>
                  </g>
                  <circle cx="245" cy="190" r="28" fill="#b91c1c" opacity="0.2" />
                  <circle cx="245" cy="190" r="8" fill="#b91c1c" />
                  <circle cx="245" cy="190" r="3" fill="#0c0a09" />
                  <text x="260" y="194" fill="#f5f5f4" fontFamily="ui-sans-serif" fontSize="11" fontWeight="700">HQ / Berryville, AR</text>
                  <circle cx="245" cy="190" r="120" fill="none" stroke="#b91c1c" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="relative overflow-hidden border-b border-stone-800 bg-stone-950 py-24">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
            <img src="https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/published/vac-truck.jpg?1717566914" alt="" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
          </div>
          <div className="relative mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-2">
            <div>
              <div className="section-label">06 / Safety culture</div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-[0.95] tracking-tight">
                Everyone goes home.<br />
                <span className="text-red-500">Every night.</span>
              </h2>
              <p className="mt-6 max-w-lg text-stone-400">Daily JSAs, documented near-miss reporting, 811 procedure, drug-free workplace, and a safety manual supervisors actually use.</p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-800 pt-8">
                {[
                  ["0.78", "EMR"],
                  ["1,200d", "Since last LTI"],
                  ["100%", "OSHA 10 certified"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-display text-3xl font-black text-red-500 md:text-4xl">{value}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-stone-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-b border-stone-800 bg-stone-100 py-24 text-stone-950">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
                <span className="h-px w-8 bg-stone-950" />
                <span>07 / How can we be of service?</span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight">
                Got a job?<br />
                Let&apos;s dig in.
              </h2>
              <p className="mt-6 max-w-md text-stone-800">Tell us what you need. A Barrows estimator will follow up within one business day, sooner for emergency work.</p>
              <div className="mt-10 space-y-4 border-t-2 border-stone-950 pt-6 font-mono text-sm uppercase tracking-widest">
                <div className="flex justify-between gap-6"><span>Office</span><span className="text-right">49 CR 404<br />Berryville, AR 72616</span></div>
                <div className="flex justify-between"><span>Phone</span><a href="tel:8704234813" className="hover:underline">(870) 423-4813</a></div>
                <div className="flex justify-between"><span>Fax</span><span>(870) 423-6494</span></div>
                <div className="flex justify-between"><span>Email</span><a href="mailto:office@barrowsexcavation.com" className="hover:underline">office@barrowsexcavation.com</a></div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid h-full gap-6 bg-stone-950 p-8 text-stone-100 md:grid-cols-2">
                {[
                  ["Service review", "Send scope, location, and timing details for estimator follow-up."],
                  ["Emergency work", "Call dispatch for urgent locates, repairs, and field response."],
                  ["Four-state crews", "Arkansas, Missouri, Oklahoma, and Kansas utility support."],
                  ["Self-performed work", "Gas, electric, hydro excavation, boring, site work, and fabrication."],
                ].map(([title, text]) => (
                  <div key={title} className="border border-stone-800 bg-stone-900/60 p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-500">{title}</div>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{text}</p>
                  </div>
                ))}
                <div className="border-t border-stone-800 pt-6 md:col-span-2">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-display text-2xl font-black uppercase tracking-tight text-stone-50">Ready for details?</div>
                      <p className="mt-2 text-sm leading-6 text-stone-400">Tell us how Barrows can be of service or view the dispatch line.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <BidButton onClick={() => setBidModalOpen(true)}>How can we be of service?</BidButton>
                      <button type="button" onClick={() => setDispatchModalOpen(true)} className="barrows-btn barrows-btn-ghost">Call dispatch -&gt;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 pt-20 text-stone-300">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <img src="https://www.barrowsexcavation.com/uploads/1/2/0/2/120292723/barrows-logo-1-removebg-preview_orig.png" alt="Barrows Excavation" className="h-12 w-auto" />
                <div>
                  <div className="font-display font-black uppercase tracking-wider">Barrows Excavation</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Berryville, Arkansas</div>
                </div>
              </div>
              <p className="mt-6 max-w-xs text-sm text-stone-400">Excavation and utility construction across the four-state region since the early 1980s.</p>
            </div>
            <FooterColumn title="Services" links={["Natural Gas", "Electric", "Hydro Excavation", "Directional Boring", "Excavation", "Fabrication", "Demolition", "Water and Sewer"]} />
            <FooterColumn title="Company" links={["About Us", "Safety Policy", "Recent Projects", "Contact"]} />
            <FooterColumn title="Crew Resources" links={["Employee Portal", "Daily JSA", "Maintenance Request", "Careers"]} />
          </div>
        </div>
        <div className="mt-16 h-2 w-full caution-stripe" />
        <div className="py-6 text-xs">
          <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-3 px-6 font-mono uppercase tracking-widest text-stone-500 md:flex-row md:items-center">
            <div>&copy; {new Date().getFullYear()} Barrows Excavation, Inc. / Licensed and Bonded</div>
            <div className="flex gap-6">
              <a href="#contact" className="hover:text-red-500">Privacy</a>
              <a href="#safety" className="hover:text-red-500">Safety Manual</a>
              <a href="#contact" className="hover:text-red-500">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {bidModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="bid-modal-title">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-stone-700 bg-stone-950 text-stone-100 shadow-2xl shadow-black">
            <div className="flex items-start justify-between gap-6 border-b border-stone-800 px-6 py-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">How can we be of service?</div>
                <h2 id="bid-modal-title" className="mt-2 font-display text-2xl font-black uppercase tracking-tight">Tell us what you need</h2>
              </div>
              <button
                type="button"
                onClick={() => setBidModalOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-700 text-xl leading-none text-stone-300 hover:border-red-600 hover:text-red-500"
                aria-label="Close service request"
              >
                &times;
              </button>
            </div>
            <BidRequestForm />
          </div>
        </div>
      )}

      {dispatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="dispatch-modal-title">
          <div className="w-full max-w-xl border border-stone-700 bg-stone-950 text-stone-100 shadow-2xl shadow-black">
            <div className="flex items-start justify-between gap-6 border-b border-stone-800 px-6 py-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">Dispatch line</div>
                <h2 id="dispatch-modal-title" className="mt-2 font-display text-2xl font-black uppercase tracking-tight">Call Barrows dispatch</h2>
              </div>
              <button
                type="button"
                onClick={() => setDispatchModalOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-700 text-xl leading-none text-stone-300 hover:border-red-600 hover:text-red-500"
                aria-label="Close dispatch information"
              >
                &times;
              </button>
            </div>
            <div className="p-8">
              <div className="border border-stone-800 bg-stone-900/70 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">Phone number</div>
                <div className="mt-3 font-display text-4xl font-black tracking-tight text-red-500">(870) 423-4813</div>
                <p className="mt-5 text-base leading-7 text-stone-300">
                  For emergency work, active utility issues, or urgent project coordination, call the dispatch line directly from your phone.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="button" onClick={() => setDispatchModalOpen(false)} className="barrows-btn">Close -&gt;</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BidRequestForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Service request ready for routing.");
      }}
    >
      <div className="grid gap-4 p-8 md:grid-cols-2">
        <Field label="Name" name="name" />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Project location" name="location" full />
        <SelectField label="Service needed" name="service" full options={SERVICES.map((service) => service.title)} />
        <Field label="How can we be of service?" name="message" full textarea />
        <div className="flex flex-col items-start gap-4 border-t border-stone-800 pt-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-stone-400">Emergency? Call (870) 423-4813</p>
          <button type="submit" className="barrows-btn">Send request <span aria-hidden="true">-&gt;</span></button>
        </div>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", textarea = false, full = false }) {
  const className = "w-full border-0 border-b border-stone-700 bg-transparent px-0 py-2 text-stone-100 placeholder-stone-600 focus:border-red-500 focus:outline-none focus:ring-0";

  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">{label}</span>
      {textarea ? <textarea name={name} rows={4} className={className} /> : <input name={name} type={type} className={className} />}
    </label>
  );
}

function SelectField({ label, name, options, full = false }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">{label}</span>
      <select name={name} defaultValue="" className="w-full border-0 border-b border-stone-700 bg-transparent px-0 py-2 text-stone-100 focus:border-red-500 focus:outline-none focus:ring-0">
        <option value="" disabled className="bg-stone-950">Select a service</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-stone-950">{option}</option>
        ))}
      </select>
    </label>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="md:col-span-2">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-red-500">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#contact" className="text-stone-400 hover:text-stone-100">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

