import React, { useEffect, useRef, useState } from 'react';
import { Play, Youtube } from 'lucide-react';

const VIDEO_ID = 'sM1s4xG2cRM';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section" ref={sectionRef}>
      {/* Animated background blobs */}
      <div className="vid-blob vid-blob-1" aria-hidden="true"></div>
      <div className="vid-blob vid-blob-2" aria-hidden="true"></div>

      {/* Grid overlay */}
      <div className="vid-grid" aria-hidden="true"></div>

      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">Veja em Ação</span>
          <h2>Do Feed ao Artigo em Minutos</h2>
          <p>Assista como o WP Content AI transforma fontes de conteúdo em artigos otimizados para SEO de forma completamente automática.</p>
        </div>

        <div className="video-wrapper reveal">
          <div className="video-frame">
            {/* Decorative corners */}
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

            {!isPlaying ? (
              <div className="video-thumb" onClick={() => setIsPlaying(true)}>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="WP Content AI - Demonstração"
                  className="thumb-img"
                />
                <div className="thumb-overlay"></div>

                {/* YouTube badge */}
                <div className="yt-badge">
                  <Youtube size={18} fill="white" />
                  YouTube
                </div>

                {/* Play button */}
                <button className="play-btn" aria-label="Assistir vídeo">
                  <div className="play-pulse"></div>
                  <div className="play-inner">
                    <Play size={28} fill="white" />
                  </div>
                </button>

                <div className="thumb-label">Clique para assistir</div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="WP Content AI - Demonstração"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              />
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .video-section {
          padding: var(--section-padding);
          background: #000;
          position: relative;
          overflow: hidden;
        }

        /* Background grid */
        .vid-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,200,150,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,200,150,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
        }

        /* Blobs */
        .vid-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: float 7s ease-in-out infinite;
        }
        .vid-blob-1 {
          width: 600px; height: 400px;
          background: radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%);
          top: -10%; left: -10%;
          animation-delay: 0s;
        }
        .vid-blob-2 {
          width: 500px; height: 350px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          bottom: -10%; right: -5%;
          animation-delay: 3.5s;
        }

        /* Center-aligned wrapper */
        .video-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Frame with glow */
        .video-frame {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(0,200,150,0.3);
          box-shadow:
            0 20px 50px -10px rgba(0,0,0,0.8),
            0 0 40px -10px rgba(0,200,150,0.15);
          aspect-ratio: 16 / 9;
          background: #000;
          z-index: 1;
        }

        /* Decorative corners */
        .corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: var(--primary);
          border-style: solid;
          z-index: 10;
          opacity: 0.7;
        }
        .corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
        .corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
        .corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
        .corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

        /* Thumbnail */
        .video-thumb {
          position: absolute;
          inset: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(0.7) saturate(0.9);
        }
        .video-thumb:hover .thumb-img {
          transform: scale(1.03);
          filter: brightness(0.55) saturate(0.8);
        }

        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
        }

        /* YouTube badge */
        .yt-badge {
          position: absolute;
          top: 20px; left: 20px;
          background: rgba(255,0,0,0.9);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          z-index: 5;
        }

        /* Play button */
        .play-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-pulse {
          position: absolute;
          width: 90px; height: 90px;
          border-radius: 50%;
          background: rgba(0,200,150,0.2);
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }

        .play-inner {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(0,200,150,0.5), 0 20px 40px rgba(0,0,0,0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          padding-left: 4px;
        }

        .video-thumb:hover .play-inner {
          transform: scale(1.1);
          box-shadow: 0 0 0 8px rgba(0,200,150,0.15), 0 20px 40px rgba(0,0,0,0.5);
        }

        .thumb-label {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          z-index: 5;
          transition: color 0.25s;
        }
        .video-thumb:hover .thumb-label { color: rgba(255,255,255,0.9); }

        /* Iframe */
        .video-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 6px;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.4);
        }
      `}} />
    </section>
  );
};

export default VideoSection;
