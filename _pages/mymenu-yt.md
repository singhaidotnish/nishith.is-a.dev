---
layout: none
permalink: /mymenu-yt/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MyMenu — Nishith Singhai</title>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: #000;
      overflow: hidden;
      font-family: 'Courier New', monospace;
    }

    /* ── FULL SCREEN IFRAME ── */
    #app-frame {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      border: none;
      z-index: 1;
    }

    /* ── FLOATING PILL BUTTONS ── */
    .pill {
      position: fixed;
      top: 18px;
      z-index: 100;
      display: flex;
      align-items: center;
      gap: 7px;
      text-decoration: none;
      color: rgba(255,255,255,0.55);
      font-size: 11px;
      font-family: 'Courier New', monospace;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 7px 13px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      background: rgba(0,0,0,0.45);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: color 0.2s, border-color 0.2s, background 0.2s;
      cursor: pointer;
      white-space: nowrap;
    }
    .pill:hover {
      color: #ffaa00;
      border-color: rgba(255,170,0,0.45);
      background: rgba(0,0,0,0.7);
    }
    .pill.left  { left: 18px; }
    .pill.right { right: 18px; }
  </style>
</head>
<body>

  <!-- ← Back to Projects -->
  <a class="pill left" href="/projects/">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
    Projects
  </a>

  <!-- Open in new tab ↗ -->
  <a class="pill right" href="https://singhaidotnish.github.io/mymenu-yt/" target="_blank" rel="noopener">
    Open Fullscreen
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  </a>

  <!-- THE APP — full screen iframe -->
  <iframe
    id="app-frame"
    src="https://singhaidotnish.github.io/mymenu-yt/"
    title="MyMenu — Radial Link Navigator"
    allow="fullscreen"
    loading="eager"
  ></iframe>

</body>
</html>
