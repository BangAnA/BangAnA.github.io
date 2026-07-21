(function () {
  "use strict";

  const content = window.SITE_CONTENT;
  let language = "en";

  const icons = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-6 10 6-10 6zm4 2.4V17c2.7 2.1 9.3 2.1 12 0v-5.6M22 9v7"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6M9 16h6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12zM12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>',
  };

  const sectionLabels = {
    about: { en: "About", zh: "简介" },
    news: { en: "News", zh: "动态" },
    research: { en: "Research", zh: "研究" },
    publications: { en: "Publications", zh: "论文" },
    projects: { en: "Projects", zh: "项目" },
    experience: { en: "Experience", zh: "经历" },
    service: { en: "Service", zh: "服务" },
  };

  function t(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "object" && !Array.isArray(value)) {
      return value[language] || value.en || value.zh || "";
    }
    return value;
  }

  function externalAttributes(url) {
    if (!url || url.startsWith("#") || url.startsWith("mailto:")) return "";
    return ' target="_blank" rel="noopener noreferrer"';
  }

  function renderRichText(value) {
    let text = t(value);
    const advisor = content.about && content.about.advisor;

    if (!advisor || !text.includes("{{advisor}}")) return text;

    const advisorName = t(advisor.name);
    const advisorMarkup = advisor.url
      ? `<a class="advisor-link" href="${advisor.url}"${externalAttributes(advisor.url)}>${advisorName}</a>`
      : advisorName;

    return text.replaceAll("{{advisor}}", advisorMarkup);
  }

  function renderNavigation() {
    const nav = document.getElementById("site-nav");
    nav.innerHTML = Object.entries(sectionLabels)
      .map(([id, label]) => `<a href="#${id}">${t(label)}</a>`)
      .join("");
  }

  function renderProfile() {
    const profile = content.profile;
    const visibleLinks = profile.links.filter((link) => link.url);
    document.getElementById("profile-sidebar").innerHTML = `
      <div class="profile-card">
        <div class="avatar-wrap">
          <img class="avatar" src="${profile.avatar}" alt="${t(profile.name)}" />
          <span class="availability-dot" title="Open to collaboration"></span>
        </div>
        <h1 class="profile-name">${t(profile.name)}</h1>
        <p class="profile-role">${t(profile.role)}</p>
        <p class="profile-institution">${t(profile.institution)}</p>
        <p class="profile-bio">${t(profile.bio)}</p>

        <div class="profile-meta">
          <div>${icons.pin}<span>${t(profile.location)}</span></div>
          <div>${icons.mail}<a href="mailto:${profile.email}">${profile.email}</a></div>
        </div>

        <div class="profile-links">
          ${visibleLinks
            .map(
              (link) => `
                <a href="${link.url}"${externalAttributes(link.url)}>
                  ${icons[link.icon] || icons.arrow}<span>${link.label}</span>
                </a>`,
            )
            .join("")}
        </div>
      </div>`;
  }

  function renderOpenings() {
    if (!content.openings.enabled) return "";
    return `
      <aside class="openings-card" aria-labelledby="openings-title">
        <div class="openings-signal"><span></span>${t(content.openings.label)}</div>
        <div class="openings-content">
          <h2 id="openings-title">${t(content.openings.title)}</h2>
          <p>${t(content.openings.description)}</p>
          <div class="tag-list">
            ${content.openings.tags.map((tag) => `<span>${t(tag)}</span>`).join("")}
          </div>
        </div>
        <a class="circle-link" href="mailto:${content.profile.email}" aria-label="Email me">${icons.arrow}</a>
      </aside>`;
  }

  function sectionHeading(id, title, index) {
    return `
      <div class="section-heading">
        <span class="section-index">${String(index).padStart(2, "0")}</span>
        <h2 id="${id}-title">${t(title)}</h2>
        <span class="heading-rule"></span>
      </div>`;
  }

  function renderAbout(index) {
    return `
      <section class="content-section" id="about" aria-labelledby="about-title">
        ${sectionHeading("about", content.about.title, index)}
        <div class="about-layout">
          <div class="prose">
            ${content.about.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
          </div>
          <div class="interest-panel">
            <p class="panel-label">${language === "en" ? "Research interests" : "研究兴趣"}</p>
            <div class="interest-list">
              ${content.about.interests.map((interest) => `<span>${t(interest)}</span>`).join("")}
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderNews(index) {
    return `
      <section class="content-section" id="news" aria-labelledby="news-title">
        ${sectionHeading("news", content.news.title, index)}
        <div class="news-list">
          ${content.news.items
            .map(
              (item, itemIndex) => `
                <article class="news-item">
                  <time>${item.date}</time>
                  <span class="news-dot ${itemIndex === 0 ? "is-new" : ""}"></span>
                  <p>${t(item)}</p>
                </article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderResearch(index) {
    return `
      <section class="content-section" id="research" aria-labelledby="research-title">
        ${sectionHeading("research", content.research.title, index)}
        <div class="research-grid">
          ${content.research.items
            .map(
              (item) => `
                <article class="research-card">
                  <span class="card-number">${item.number}</span>
                  <div class="research-icon" aria-hidden="true"><span></span><span></span><span></span></div>
                  <h3>${t(item.title)}</h3>
                  <p>${t(item.description)}</p>
                </article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderPublicationImage(item) {
    if (!item.image || !item.image.src) return "";

    return `
      <figure class="publication-image">
        <img src="${item.image.src}" alt="${t(item.image.alt) || item.title}" loading="lazy" />
      </figure>`;
  }

  function renderPublications(index) {
    return `
      <section class="content-section" id="publications" aria-labelledby="publications-title">
        ${sectionHeading("publications", content.publications.title, index)}
        <p class="section-note">${t(content.publications.note)}</p>
        <div class="publication-list">
          ${content.publications.items
            .map(
              (item) => `
                <article class="publication-item">
                  <div class="publication-year">${item.year}</div>
                  <div class="publication-content${item.image && item.image.src ? " has-image" : ""}">
                    <div class="publication-body">
                      <span class="publication-badge">${t(item.badge)}</span>
                      <h3>${item.title}</h3>
                      <p class="authors">${item.authors}</p>
                      <p class="venue">${item.venue}</p>
                      <p class="publication-description">${t(item.description)}</p>
                      <div class="publication-links">
                        ${item.links
                          .filter((link) => link.url)
                          .map(
                            (link) => `<a href="${link.url}"${externalAttributes(link.url)}>${link.label} ${icons.arrow}</a>`,
                          )
                          .join("")}
                      </div>
                    </div>
                    ${renderPublicationImage(item)}
                  </div>
                </article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderProjects(index) {
    return `
      <section class="content-section" id="projects" aria-labelledby="projects-title">
        ${sectionHeading("projects", content.projects.title, index)}
        <div class="project-grid">
          ${content.projects.items
            .map(
              (item) => `
                <article class="project-card">
                  <div class="project-art" aria-hidden="true">
                    <span class="art-orbit"></span>
                    <span class="art-core"></span>
                    <span class="art-grid"></span>
                  </div>
                  <div class="project-body">
                    <span class="project-status">${t(item.status)}</span>
                    <h3>${t(item.title)}</h3>
                    <p>${t(item.description)}</p>
                    <div class="technology-list">
                      ${item.technologies.map((technology) => `<span>${technology}</span>`).join("")}
                    </div>
                    <a href="${item.link}"${externalAttributes(item.link)}>${language === "en" ? "View project" : "查看项目"} ${icons.arrow}</a>
                  </div>
                </article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderExperience(index) {
    return `
      <section class="content-section" id="experience" aria-labelledby="experience-title">
        ${sectionHeading("experience", content.experience.title, index)}
        <div class="timeline">
          ${content.experience.items
            .map(
              (item) => `
                <article class="timeline-item">
                  <time>${item.period}</time>
                  <div class="timeline-marker"></div>
                  <div>
                    <h3>${t(item.title)}</h3>
                    <p class="timeline-place">${t(item.place)}</p>
                    <p>${t(item.detail)}</p>
                  </div>
                </article>`,
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderService(index) {
    return `
      <section class="content-section" id="service" aria-labelledby="service-title">
        ${sectionHeading("service", content.service.title, index)}
        <ul class="service-list">
          ${content.service.items.map((item) => `<li><span>↗</span>${t(item)}</li>`).join("")}
        </ul>
      </section>`;
  }

  function renderMain() {
    document.getElementById("main-content").innerHTML = [
      renderOpenings(),
      renderAbout(1),
      renderNews(2),
      renderResearch(3),
      renderPublications(4),
      renderProjects(5),
      renderExperience(6),
      renderService(7),
    ].join("");
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    document.getElementById("site-footer").innerHTML = `
      <div>
        <p>© ${year} ${t(content.profile.name)}</p>
        <p>${t(content.footer.text)}</p>
      </div>
      <a href="#home">${language === "en" ? "Back to top" : "返回顶部"} ↑</a>`;
  }

  function updatePageMetadata() {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = t(content.site.title);
    document.getElementById("brand-name").textContent = t(content.profile.name);
    document.querySelector(".brand-mark").textContent = content.site.brandInitials;
    document.getElementById("language-label").textContent = language === "en" ? "中文" : "English";
    document.getElementById("language-toggle").setAttribute(
      "aria-label",
      language === "en" ? "Switch to Chinese" : "切换为英文",
    );
  }

  function render() {
    updatePageMetadata();
    renderNavigation();
    renderProfile();
    renderMain();
    renderFooter();
  }

  document.getElementById("language-toggle").addEventListener("click", function () {
    language = language === "en" ? "zh" : "en";
    render();
  });

  document.getElementById("menu-toggle").addEventListener("click", function () {
    const nav = document.getElementById("site-nav");
    const isOpen = nav.classList.toggle("is-open");
    this.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("#site-nav a")) {
      document.getElementById("site-nav").classList.remove("is-open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    }
  });

  render();
})();
