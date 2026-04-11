const projects = [
    { name: "ADHD Trading Toolkit", image: null, placeholder: { icon: "🧠", label: "Checklist · IF-THEN · Psychology" }, description: "Checklist + AI coaching companion for traders with ADHD. Pre-market routines, IF-THEN impulse controls, and a Claude-powered psychology mirror. Built from personal recovery.", url: "https://ubiquitous-guide.onrender.com/", color: "#7c3aed" },
    { name: "AWA Asset", image: null, placeholder: { icon: "🏦", label: "Finance & Asset Management" }, description: "Professional finance website for Mahindra's AWA Asset — built with React, animated UI.", url: "https://awa-asset.onrender.com/", color: "#C0392B" },
    { name: "dm-mindmap", image: "/assets/projects/solar-system.jpg", placeholder: null, description: "3D Buzan-style mind map — tapered organic branches in Three.js. A tribute to Dilip Mukherjee.", url: null, color: "#1ABC9C" },
    { name: "mymenu-yt", image: "/assets/projects/mymenu-yt.png", placeholder: null, description: "Galaxy-themed radial pie menu in React + Three.js. 2D/3D toggle — YouTube, AI, Trading & Utilities.", url: "/mymenu-yt/", color: "#ffaa00" },
    { name: "newtabfirefoxylicious", image: null, placeholder: { icon: "🦊", label: "Firefox New Tab Extension" }, description: "Custom new-tab experiments for Firefox.", url: "https://singhaidotnish.github.io/newtabfirefoxylicious/", color: "#E67E22" },
    { name: "varsity-audio-monorepo", image: null, placeholder: { icon: "🎧", label: "Scrape → TTS → Upload" }, description: "Varsity chapters → scrape, TTS, upload pipeline.", url: "https://varsity-audio-monorepo-frontend.onrender.com", color: "#50C878" },
    { name: "TubeSidecarificity", image: null, placeholder: { icon: "📺", label: "YouTube Sidecar Tools" }, description: "YouTube sidecar tools: local ffmpeg, metadata, MP3.", url: null, color: "#34495E" },
    { name: "hyperfotopixelicious", image: null, placeholder: { icon: "🎨", label: "Imaging & VFX Experiments" }, description: "Imaging & VFX experiments, tools, and pipelines.", url: null, color: "#F39C12" },
    { name: "minimalgotronifylicious", image: null, placeholder: { icon: "⚙️", label: "AI-ready Monorepo Scaffold" }, description: "Minimal, AI-ready monorepo with docs & scripts.", url: null, color: "#9B59B6" },
    { name: "aipyqtfylicious", image: null, placeholder: { icon: "🤖", label: "AI + PyQt Desktop Apps" }, description: "AI-infused PyQt toolkit and sample apps.", url: null, color: "#E24A4A" },
    { name: "neo-titanium-mp", image: "/assets/projects/neo-titanium-mp.jpg", placeholder: null, description: "Monorepo scaffold for modern pipelines / MP utilities.", url: "https://zarir-engineer.github.io/neo-titanium-global-enery/", color: "#4A90E2" }
];

let current = 0;

const stage      = document.getElementById("stage");
const dotNav     = document.getElementById("dotNav");
const currentNum = document.getElementById("currentNum");
const totalNum   = document.getElementById("totalNum");
const prevBtn    = document.getElementById("prevBtn");
const nextBtn    = document.getElementById("nextBtn");

function makePlaceholderSVG(color, icon, label) {
    // lighten color for bg: blend with white at 15% opacity
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="680" height="220" viewBox="0 0 680 220">
            <rect width="680" height="220" fill="${color}" opacity="0.12"/>
            <rect width="680" height="220" fill="none" stroke="${color}" stroke-width="0" opacity="0.3"/>
            <!-- grid lines for texture -->
            <line x1="0" y1="55" x2="680" y2="55" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <line x1="0" y1="110" x2="680" y2="110" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <line x1="0" y1="165" x2="680" y2="165" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <line x1="170" y1="0" x2="170" y2="220" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <line x1="340" y1="0" x2="340" y2="220" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <line x1="510" y1="0" x2="510" y2="220" stroke="${color}" stroke-width="0.5" opacity="0.25"/>
            <!-- circle accent -->
            <circle cx="340" cy="95" r="38" fill="${color}" opacity="0.15"/>
            <circle cx="340" cy="95" r="38" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.4"/>
            <!-- icon -->
            <text x="340" y="107" text-anchor="middle" font-size="30" font-family="sans-serif">${icon}</text>
            <!-- label -->
            <text x="340" y="158" text-anchor="middle" font-size="13" font-family="-apple-system, sans-serif" fill="${color}" opacity="0.85" font-weight="500">${label}</text>
        </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
}

function init() {
    totalNum.textContent = projects.length;
    buildSlides();
    buildDots();
    prevBtn.textContent = "← prev";
    nextBtn.textContent = "next →";
    prevBtn.addEventListener("click", () => show(current - 1));
    nextBtn.addEventListener("click", () => show(current + 1));
    show(0);
}

function buildSlides() {
    projects.forEach((p, i) => {
        const imgSrc = p.image
            ? p.image
            : makePlaceholderSVG(p.color, p.placeholder.icon, p.placeholder.label);

        const slide = document.createElement("div");
        slide.className = "project-slide";
        slide.dataset.index = i;
        slide.innerHTML = `
            <div class="project-card-outer">
                <div class="project-image">
                    <img src="${imgSrc}" alt="${p.name}"
                        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="img-fallback">${p.name}</div>
                </div>
                <div class="color-bar" style="background:${p.color}"></div>
                <div class="project-body">
                    <div class="project-name">${p.name}</div>
                    <div class="project-description">${p.description}</div>
                    ${p.url
                        ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                               view project
                               <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
                                   <path d="M2 10L10 2M4 2h6v6"/>
                               </svg>
                           </a>`
                        : `<span class="project-wip">in progress</span>`
                    }
                </div>
            </div>`;
        stage.appendChild(slide);
    });
}

function buildDots() {
    projects.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.setAttribute("aria-label", `Go to project ${i + 1}`);
        dot.addEventListener("click", () => show(i));
        dotNav.appendChild(dot);
    });
}

function show(n) {
    const slides = document.querySelectorAll(".project-slide");
    const dots   = document.querySelectorAll(".dot");
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + projects.length) % projects.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
    currentNum.textContent = current + 1;
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft")  show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
});

init();
