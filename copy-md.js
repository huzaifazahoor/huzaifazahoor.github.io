const ABOUT_ME = [
    "\n## Contact",
    "- **Name:** Huzaifa Zahoor",
    "- **Website:** https://huzaifazahoor.online",
    "- **Followers:** 12K+",
    "- **Email:** huzaifazahoor654@gmail.com",
    "- **LinkedIn:** https://www.linkedin.com/in/huzaifazahoor",
    "- **GitHub:** https://github.com/huzaifazahoor",
    "- **Medium:** https://medium.com/@huzaifazahoor654",
    "- **Stack Overflow:** https://stackoverflow.com/users/7136640/huzaifa-zahoor",
    "- **YouTube:** https://www.youtube.com/@huzaifazahoor654",
];
function buildMarkdown() {
    const md = [];
    const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, " ") : "");

    // HERO
    const hero = document.getElementById("hero");
    if (hero) {
        md.push("# " + txt(hero.querySelector(".hero-title")));
        md.push("> " + txt(hero.querySelector(".hero-tag")));
        md.push(txt(hero.querySelector(".hero-sub")));
        hero.querySelectorAll(".stat").forEach((s) => {
            md.push("- **" + txt(s.querySelector(".stat-num")) + "** " + txt(s.querySelector(".stat-label")));
        });
    }

    md.push(...ABOUT_ME);

    // SUMMARY
    const sum = document.getElementById("summary");
    if (sum) {
        md.push("\n## " + txt(sum.querySelector(".section-title")));
        md.push(txt(sum.querySelector(".about-para")));
    }

    // SERVICES
    const serv = document.getElementById("services");
    if (serv) {
        md.push("\n## Services");
        serv.querySelectorAll(".service-card").forEach((c) => {
            md.push("\n### " + txt(c.querySelector(".service-name")));
            md.push(txt(c.querySelector(".service-desc")));
            c.querySelectorAll(".service-list li").forEach((li) => md.push("- " + txt(li)));
        });
    }

    // PORTFOLIO
    const port = document.getElementById("portfolio");
    if (port) {
        md.push("\n## Portfolio");
        port.querySelectorAll(".portfolio-card").forEach((card) => {
            const title = txt(card.querySelector(".portfolio-card-title"));
            md.push("\n### " + title);
            md.push(txt(card.querySelector(".portfolio-card-desc")));

            const link = card.querySelector("a.portfolio-card-link");
            const btn = card.querySelector("button.open-popup-btn");

            if (btn) {
                // has details popup
                const popup = document.getElementById("popup-" + btn.dataset.id);
                if (popup) {
                    const long = popup.querySelector(".popup-details p");
                    if (long) md.push(txt(long));
                    popup.querySelectorAll(".popup-details ol li").forEach((li) => md.push("- " + txt(li)));
                }
            } else if (link) {
                md.push("Live: " + link.href);
            }
        });
    }

    // BUILDS
    const builds = document.getElementById("builds");
    if (builds) {
        md.push("\n## Engineering Builds");
        builds.querySelectorAll(".portfolio-card").forEach((card) => {
            md.push("\n### " + txt(card.querySelector(".portfolio-card-title")));
            md.push(txt(card.querySelector(".portfolio-card-desc")));
            const link = card.querySelector("a.portfolio-card-link");
            if (link) md.push("Code: " + link.href);
        });
    }

    // EXPERIENCE
    const exp = document.getElementById("experience");
    if (exp) {
        md.push("\n## Experience");
        exp.querySelectorAll(".timeline-card").forEach((c) => {
            md.push("\n### " + txt(c.querySelector(".timeline-role")) +
                " — " + txt(c.querySelector(".timeline-company")));
            md.push("*" + txt(c.querySelector(".timeline-date")) + "*");
            c.querySelectorAll(".timeline-list li").forEach((li) => md.push("- " + txt(li)));
        });
    }

    // REVIEWS
    const rev = document.getElementById("reviews");
    if (rev) {
        md.push("\n## What Clients Say");
        rev.querySelectorAll(".review-card").forEach((c) => {
            const user = txt(c.querySelector(".review-username"));
            const country = txt(c.querySelector(".review-country"));
            const plat = txt(c.querySelector(".review-platform"));
            md.push("- \"" + txt(c.querySelector(".review-text")) +
                "\" — " + user + ", " + country + " (" + plat + ")");
        });
    }

    return md.join("\n");
}

document.querySelectorAll(".copy-md-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const old = btn.textContent;
        try {
            await navigator.clipboard.writeText(buildMarkdown());
            btn.textContent = "Copied!";
        } catch {
            btn.textContent = "Copy failed";
        }
        setTimeout(() => (btn.textContent = old), 1500);
    });
});