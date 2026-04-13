---
layout: splash
permalink: /projects/
---

<link rel="stylesheet" href="/assets/css/projects.css">
<script src="/assets/js/projects.bundle.js" defer></script>

<!-- Hamburger — outside carousel so fixed positioning works -->
<div class="proj-menu-btn" id="projMenuBtn" onclick="toggleMenu()">
    <span></span><span></span><span></span>
</div>
<div class="proj-menu-overlay" id="projMenuOverlay" onclick="toggleMenu()"></div>
<nav class="proj-menu" id="projMenu">
    <a href="/">About Me</a>
    <a href="/resume/">Résumé</a>
    <a href="/projects/">Projects</a>
    <a href="/thought-nuggets/">Thought Nuggets</a>
</nav>

<div class="carousel-wrapper">
    <div class="carousel-container">

        <div class="carousel-header">
            <h1>Projects Gallery</h1>
            <p>Things I've built</p>
        </div>

        <!-- Slides inject here -->
        <div id="stage"></div>

        <!-- Footer: dots + counter + nav -->
        <div class="carousel-footer">
            <div class="dot-navigation" id="dotNav"></div>
            <span class="project-counter">
                <span id="currentNum">1</span> / <span id="totalNum">9</span>
            </span>
            <div class="nav-buttons">
                <button class="nav-button" id="prevBtn"></button>
                <button class="nav-button" id="nextBtn"></button>
            </div>
        </div>

    </div>
</div>

<script>
function toggleMenu() {
    document.getElementById('projMenuBtn').classList.toggle('open');
    document.getElementById('projMenu').classList.toggle('open');
    document.getElementById('projMenuOverlay').classList.toggle('open');
}
document.querySelectorAll('.proj-menu a').forEach(a => {
    if (a.getAttribute('href') === window.location.pathname) a.classList.add('active');
});
</script>