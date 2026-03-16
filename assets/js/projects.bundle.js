const projects = [
    { name: "dm-mindmap", image: "/assets/projects/solar-system.jpg", description: "3D Buzan-style mind map — tapered organic branches in Three.js. A tribute to Dilip Mukherjee.", url: null, color: "#1ABC9C" },
    { name: "mymenu-yt", image: "/assets/projects/mymenu-yt.png", description: "Galaxy-themed radial pie menu in React + Three.js. 2D/3D toggle — YouTube, AI, Trading & Utilities.", url: "/mymenu-yt/", color: "#ffaa00" },
    { name: "newtabfirefoxylicious", image: "/assets/projects/newtabfirefoxylicious.jpg", description: "Custom new-tab experiments for Firefox.", url: "https://singhaidotnish.github.io/newtabfirefoxylicious/", color: "#E67E22" },
    { name: "varsity-audio-monorepo", image: "/assets/projects/varsity-audio-monorepo.png", description: "Varsity chapters → scrape, TTS, upload pipeline.", url: "https://varsity-audio-monorepo-frontend.onrender.com", color: "#50C878" },
    { name: "TubeSidecarificity", image: "/assets/projects/tubesidecarificity.png", description: "YouTube sidecar tools: local ffmpeg, metadata, MP3.", url: null, color: "#34495E" },
    { name: "hyperfotopixelicious", image: "/assets/projects/hyperfotopixelicious.png", description: "Imaging & VFX experiments, tools, and pipelines.", url: null, color: "#F39C12" },
    { name: "minimalgotronifylicious", image: "/assets/projects/minimalgotronifylicious.png", description: "Minimal, AI-ready monorepo with docs & scripts.", url: null, color: "#9B59B6" },
    { name: "aipyqtfylicious", image: "/assets/projects/aipyqtfylicious.png", description: "AI-infused PyQt toolkit and sample apps.", url: null, color: "#E24A4A" },
    { name: "neo-titanium-mp", image: "/assets/projects/neo-titanium-mp.jpg", description: "Monorepo scaffold for modern pipelines / MP utilities.", url: "https://zarir-engineer.github.io/neo-titanium-global-enery/", color: "#4A90E2" }
];

let current = 0;

const stage       = document.getElementById("stage");
const dotNav      = document.getElementById("dotNav");
const currentNum  = document.getElementById("currentNum");
const totalNum    = document.getElementById("totalNum");
const prevBtn     = document.getElementById("prevBtn");
const nextBtn     = document.getElementById("nextBtn");

function init() {
    totalNum.textContent = projects.length;
    buildSlides();
    buildDots();
    buildFooter();
    show(0);
}

function buildSlides() {
    projects.forEach((p, i) => {
        const slide = document.createElement("div");
        slide.className = "project-slide";
        slide.dataset.index = i;

        slide.innerHTML = `
            <div class="project-card-outer">
                <div class="project-image">
                    <img
                        src="${p.image}"
                        alt="${p.name}"
                        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
                    >
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
            </div>
        `;

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

function buildFooter() {
    // Wire nav buttons
    prevBtn.textContent = "← prev";
    nextBtn.textContent = "next →";
    prevBtn.addEventListener("click", () => show(current - 1));
    nextBtn.addEventListener("click", () => show(current + 1));
}

function show(n) {
    // Hide current
    const slides = document.querySelectorAll(".project-slide");
    const dots   = document.querySelectorAll(".dot");

    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    // Update index (wrap around)
    current = (n + projects.length) % projects.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
    currentNum.textContent = current + 1;
}

// Keyboard navigation
document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft")  show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
});

init();
