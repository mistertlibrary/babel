/* ============================================================
   CATALOGUE OF ENGINES — catalogue.js
   The logic. The mischief. The small hours.
   Version 2.0 — ground-up redesign
   ============================================================ */

/* ============================================================
   SUBCATEGORY DESCRIPTIONS
============================================================ */
const SUBCATEGORY_DESCRIPTIONS = {
  "North America": "The engines that defined what most English-speaking users think search means. What looks like a neutral utility is, on closer inspection, a series of choices about relevance, monetization, and attention that compounded quietly into infrastructure. The portal era — Yahoo's human editors, AOL's walled garden — represented a different bet about what the web needed: not an algorithm, but a librarian. That bet lost. It is worth asking why.",
  "Europe & Russia": "The regional challengers that persisted where global platforms could not or would not adapt: Yandex built to understand Russian morphology before Google could; Qwant built explicitly as a GDPR-native alternative to American surveillance capitalism; Mojeek built by conviction that an independent index was worth the considerable effort. That several survive at all is a small argument about the importance of competition in information infrastructure.",
  "Asia": "Search as it looks from the Pacific Rim: a different set of defaults, a different relationship to the state, a different theory of what a search engine should do and for whom. Running the same query in Baidu and Google simultaneously makes the differences in information ecosystems visible in ways no textbook can replicate. Where you search is, in some meaningful sense, who you think the world belongs to.",
  "Global & Privacy-Focused": "The heterodox alternatives: engines organized around principles their founders found absent in the mainstream. Privacy, independence, subscription economics, revenue-sharing, decentralization, sheer stubbornness. The fact that this subcategory exists at all — that it is large enough to merit its own label — suggests that something in the dominant model has been found wanting. Whether these alternatives can survive their own ambitions is the open question.",
  "Specialized & Academic": "Tools that solve a different problem than general web search: not finding everything, but finding exactly one kind of thing with precision. Wolfram Alpha is not a search engine in any conventional sense; it is a computational oracle. Google Scholar is not a library database; it is a snapshot of the formal scholarly record, imperfect and indispensable. Each belongs in a research toolkit alongside, not instead of, the general-purpose engines.",
  "Text & General Web": "The core of the indie search project: engines that crawl, index, and return the web's quieter precincts with varying degrees of idealism and technical ambition. What they share is a conviction that the commercial index is not the only possible index, and that the difference between what Google surfaces and what the web contains is worth recovering. Some are built by single developers on home servers. Some are volunteer-distributed crawlers. All are arguments.",
  "The Old Web": "Nostalgia as epistemology. These projects treat early web aesthetics not as quaint historical curiosities but as evidence of a different set of assumptions about what the internet was for. The hand-built HTML page, the GeoCities aesthetic, the Neocities revival: each encodes a theory of publishing that held self-expression above optimization. Whether that theory is recoverable — or whether it was only ever possible under conditions of deliberate obscurity — is the animating question behind everything here.",
  "Archives & Historical": "Search tools built to recover what the live web does not preserve. The Wayback Machine's 800 billion archived pages, Jason Scott's BBS archaeology at textfiles.com, the Modernist Journals Project's recovery of avant-garde little magazines in their original form: each addresses the same structural problem, which is that the web is designed for currency and deeply indifferent to duration. These tools are acts of institutional memory applied to a medium that was built to forget.",
  "Forums & Community Search": "The web has always been a conversation; these tools help you find where that conversation happened. Forum posts and community threads are a form of knowledge that formal publication consistently fails to capture: firsthand accounts, expert opinions shared informally, minority views that never made it into the literature. Evaluating what you find requires the same critical attention to source and expertise that any other research demands, and the same recognition that consensus is not the same as correctness.",
  "Image, Code & Media": "Specialized search for specialized purposes: code fragments, terminal aesthetics, random text, cultural quotation. Each represents a theory of what is worth indexing specifically rather than incidentally. The narrowness is the point. A search engine that does one thing precisely is a different kind of object from one that does everything approximately.",
  "Meta-Search & Clustering": "The meta layer: engines that search the search engines, tools that reorganize results by topic rather than rank, interfaces that make the architecture of search visible rather than invisible. Carrot2's clustering visualization is the most instructive. The same query rendered as thematic constellations rather than a ranked list reveals something the list conceals: results have structure, and that structure carries meaning the ranking discards.",
  "Self-Hosted & Open Source": "The infrastructure layer, made available. Running Yioop on a small archive is an education in how search actually works that no textbook can provide. The knowledge that a functioning search engine can run on personal hardware reframes what search infrastructure means and raises the question, gently but insistently, of why we have allowed it to consolidate into so few hands.",
  "Global Aggregators": "The largest nets cast across the digitized record. These tools search many collections simultaneously, trading depth for breadth in ways that are genuinely useful for initial discovery. Together they represent the closest approximation to a searchable record of human knowledge that currently exists. The gaps are enormous. The gaps are the research agenda.",
  "Art Museums": "The museum's decision to digitize its collection is, at its best, an act of genuine generosity: the recognition that what was assembled by private wealth or public authority belongs, in some meaningful sense, to everyone. The CC0 commitments made by the Rijksmuseum, the Met, the NGA, and others are not merely licensing decisions. They are statements about the relationship between cultural institutions and the public they were built to serve.",
  "U.S. Natural History & Science": "The natural history collection occupies an unusual position: its research value is inseparable from the physical specimen, yet the database that describes that specimen can be enormously useful even when the object itself is unreachable. Knowing that a type specimen exists, where it is held, and what its collection data records is the necessary first step before any visit to a collection becomes possible.",
  "U.S. Libraries & Archives": "The research library has a different relationship to its holdings than the museum: it exists to be used, not merely visited. The portions of irreplaceable special collections now accessible digitally would have seemed impossible a generation ago. The portions that remain undigitized are typically larger than what has been digitized. That gap is worth knowing before any digital research project begins.",
  "U.S. State & Local": "The state and local digital collection is where American history becomes granular enough to be genuinely surprising. The photographs of a specific neighborhood in 1920. The manuscript diary of someone who witnessed a particular event. The newspaper that covered an incident that left no other documentary trace. These collections constitute a distributed archive of American experience that no single national institution could assemble.",
  "United Kingdom": "The British institution carries the accumulated weight of empire in its holdings, which is to say that researching here means encountering materials collected under conditions that were never purely intellectual. The British Museum holds objects from over 200 countries. The Qatar Digital Library has done what many of those institutions have not: collaborated with a partner nation to make those records genuinely bilingual and bicultural.",
  "Europe": "The European digital heritage infrastructure reflects a different theory of cultural ownership than the American model: the state as custodian of national patrimony, the national library as expression of cultural sovereignty. Europeana, the DDB, Manuscriptorium, and Gallica are each national or continental infrastructure projects with explicit mandates. They are also, in aggregate, indispensable for research in any area of European history, culture, or art.",
  "Americas, Asia, Middle East & Africa": "The collections in this section resist easy generalization, which is part of their value. The Acropolis Museum makes a structural argument for repatriation in the architecture of its galleries. The Qatar Digital Library models bilingual scholarship at scale. Trove's community annotation demonstrates what participatory digitization looks like nationally. Each institution embeds a theory of whose history is being preserved and for whom.",
  "Academic Texts & Books": "The full-text digital library for humanities and social science research: public domain books, open-access journals, historical texts in Greek and Latin, avant-garde periodicals, early modern English print, Hebrew religious scholarship, British history. Project Gutenberg has been doing this since 1971, which makes it older than the web itself. Perseus has been parsing Greek morphology since 1987. These are long-running acts of scholarly infrastructure that shaped what digital humanities became.",
  "Government & Declassified": "The state's paper trail, released under legal compulsion or historical inevitability. The CIA's FOIA Reading Room is the endpoint of a process that begins with a government secret and ends, decades later, with a searchable PDF. The gap between what is released and what remains classified is itself a form of evidence, if you know what you are looking for."
};

/* ============================================================
   AUTHOR QUOTES — triggered by typing their names in the filter
============================================================ */
const AUTHOR_QUOTES = {
  "robbins": {
    text: "We're our own dragons as well as our own heroes, and we have to rescue ourselves from ourselves.",
    attr: "— Tom Robbins"
  },
  "popova": {
    text: "Creativity is the art of connecting the seemingly unconnectable.",
    attr: "— Maria Popova"
  },
  "sloan": {
    text: "I love librarians more than any other professionals. I think they are the guardians of everything good.",
    attr: "— Robin Sloan"
  },
  "boyd": {
    text: "Just because information is technically accessible does not mean that it is ethically accessible.",
    attr: "— danah boyd"
  }
};

/* ============================================================
   STAFF PICKS — Konami code easter egg
============================================================ */
const STAFF_PICKS = [
  {
    name: "Wiby",
    note: "\"The Surprise Me button is the most honest search interface ever built. Click it. Trust it. It knows what you need better than your query history does.\" — Desk 3, Reference"
  },
  {
    name: "Discmaster",
    note: "\"Everything the early internet was and wanted to be, preserved in amber on a hard drive in someone's rack. Four hours minimum. Clear your afternoon.\" — Special Collections"
  },
  {
    name: "Marginalia Search",
    note: "\"For when Google sends you to the mall again. The index of the web that actually reads, built by one person who believes the pre-SEO internet is worth finding.\" — Reading Room"
  },
  {
    name: "CIA FOIA Reading Room",
    note: "\"The government's paper trail, released under legal compulsion. The STARGATE files alone justify the detour. The MKULTRA files will change how you think about institutions.\" — Government Documents"
  },
  {
    name: "Blue Mountain Project",
    note: "\"Der Dada, cover to cover, in the form it actually circulated. Someone at Princeton spent years on this. We notice. You should too.\" — Periodicals"
  },
  {
    name: "Trove",
    note: "\"Australia's national digital library is quietly one of the finest in the world. The community corrections program — volunteers fixing OCR errors in century-old newspapers — is worth studying as a model.\" — Acquisitions"
  }
];

/* ============================================================
   SPECIAL SEARCH RESPONSES
============================================================ */
const SPECIAL_SEARCHES = {
  "everything": {
    header: "The catalogue contains everything. That is its most dangerous feature.",
    show: "all"
  },
  "nothing": {
    header: "This is also the correct answer to several research questions.",
    show: "none"
  },
  "help": {
    header: "The catalogue is a guide to where things are kept, not to what they mean. That part is yours.",
    show: "none"
  },
  "babel": {
    header: "The catalogue contains all possible searches. Also this one.",
    show: "none"
  },
  "surprise me": {
    header: "",
    show: "random"
  }
};

/* ============================================================
   SESSION STATE
============================================================ */
const IA_IS_BORROWED = Math.random() < 0.10;

/* ============================================================
   FILTER MATCH
============================================================ */
function matchesFilter(e, query) {
  return (
    e.name.toLowerCase().includes(query)             ||
    e.description.toLowerCase().includes(query)      ||
    e.why.toLowerCase().includes(query)              ||
    e.tags.some(t => t.toLowerCase().includes(query))||
    (e.subject     && e.subject.toLowerCase().includes(query))     ||
    (e.affiliation && e.affiliation.toLowerCase().includes(query)) ||
    (e.note        && e.note.toLowerCase().includes(query))        ||
    (e.subcategory && e.subcategory.toLowerCase().includes(query))
  );
}

/* ============================================================
   BUILD CARD — the index card DOM
============================================================ */
function buildCard(engine, index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.style.animationDelay = Math.min(index * 0.022, 0.55) + 's';
  card.dataset.oa = engine.openAccess ? 'true' : 'false';

  // data-secret attributes for curious source readers
  if (engine.name === 'Marginalia Search') card.dataset.secret = 'anti-seo: the thesis, not the limitation';
  if (engine.name === 'Wiby')             card.dataset.secret = 'surprise-me: designed as a philosophy, not a feature';
  if (engine.name === 'Internet Archive') card.dataset.secret = 'universal-access-to-all-knowledge';
  if (engine.name === 'Perplexity AI')    card.dataset.secret = 'verify-the-citations: the confidence is not the accuracy';

  /* --- Classification bar --- */
  const bar = document.createElement('div');
  bar.className = 'card-bar';
  const subTag = document.createElement('span');
  subTag.className = 'card-subcat-tag';
  subTag.textContent = engine.subcategory || '';
  const callNum = document.createElement('span');
  callNum.className = 'card-callnum';
  callNum.textContent = engine._call || '';
  bar.appendChild(subTag);
  bar.appendChild(callNum);

  /* --- Card body --- */
  const body = document.createElement('div');
  body.className = 'card-body';

  /* Name row */
  const nameRow = document.createElement('div');
  nameRow.className = 'card-namerow';
  const nameLink = document.createElement('a');
  nameLink.className = 'card-name-link';
  nameLink.href = engine.url;
  nameLink.target = '_blank';
  nameLink.rel = 'noopener noreferrer';
  nameLink.setAttribute('aria-label', 'Open ' + engine.name + ' in a new tab');
  nameLink.textContent = engine.name;
  nameRow.appendChild(nameLink);

  if (engine.openAccess) {
    const stamp = document.createElement('span');
    stamp.className = 'oa-stamp';
    stamp.textContent = 'OPEN';
    stamp.setAttribute('title', 'Freely accessible');
    nameRow.appendChild(stamp);
  }
  if (engine.affiliation) {
    const aff = document.createElement('span');
    aff.className = 'card-affiliation';
    aff.textContent = engine.affiliation;
    nameRow.appendChild(aff);
  }
  body.appendChild(nameRow);

  /* URL */
  const urlEl = document.createElement('p');
  urlEl.className = 'card-url';
  urlEl.textContent = engine.url.replace(/^https?:\/\//, '');
  body.appendChild(urlEl);

  /* Description */
  const descEl = document.createElement('p');
  descEl.className = 'card-description';
  descEl.textContent = engine.description;
  body.appendChild(descEl);

  /* Why */
  const why = document.createElement('blockquote');
  why.className = 'card-why';
  const whyLabel = document.createElement('span');
  whyLabel.className = 'card-why-label';
  whyLabel.textContent = 'Use when';
  why.appendChild(whyLabel);
  why.appendChild(document.createTextNode(engine.why));
  body.appendChild(why);

  /* Tags */
  const tagsDiv = document.createElement('div');
  tagsDiv.className = 'card-tags';
  engine.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.dataset.tag = t;
    tag.textContent = t;
    tag.addEventListener('click', () => {
      filterInput.value = t;
      render(t);
      filterInput.focus();
    });
    tagsDiv.appendChild(tag);
  });
  if (engine.subject) {
    const stag = document.createElement('span');
    stag.className = 'tag tag-subject';
    stag.dataset.tag = engine.subject;
    stag.textContent = engine.subject;
    stag.addEventListener('click', () => {
      filterInput.value = engine.subject;
      render(engine.subject);
      filterInput.focus();
    });
    tagsDiv.appendChild(stag);
  }
  body.appendChild(tagsDiv);

  /* Note — with manicule (the pointing hand) */
  if (engine.note) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'card-note';
    const manicule = document.createElement('span');
    manicule.className = 'manicule';
    manicule.setAttribute('aria-hidden', 'true');
    manicule.textContent = '\u261e'; /* ☞ */
    const noteText = document.createElement('span');
    noteText.textContent = engine.note;
    noteDiv.appendChild(manicule);
    noteDiv.appendChild(noteText);
    body.appendChild(noteDiv);
  }

  card.appendChild(bar);
  card.appendChild(body);

  /* Internet Archive easter eggs */
  if (engine.name === 'Internet Archive') {
    /* 10% chance: "currently borrowed" stamp */
    if (IA_IS_BORROWED) {
      const bs = document.createElement('div');
      bs.className = 'borrowed-stamp';
      bs.innerHTML = '<div class="borrowed-stamp-inner">Currently Borrowed<span>Expected return: unknown. See current litigation.</span></div>';
      card.appendChild(bs);
    }
    /* Hover name for 3 seconds: name changes */
    const origName = engine.name;
    let iaTimer;
    nameLink.addEventListener('mouseenter', () => {
      iaTimer = setTimeout(() => {
        nameLink.textContent = 'Universal Access to All Knowledge';
        nameLink.classList.add('ia-revealed');
        setTimeout(() => {
          nameLink.textContent = origName;
          nameLink.classList.remove('ia-revealed');
        }, 2800);
      }, 3000);
    });
    nameLink.addEventListener('mouseleave', () => clearTimeout(iaTimer));
  }

  return card;
}

/* ============================================================
   RENDER GROUPED GRID
============================================================ */
function renderGroupedGrid(grid, list, specialMsg) {
  grid.innerHTML = '';

  if (specialMsg) {
    const p = document.createElement('p');
    p.className = 'placeholder';
    p.style.fontStyle = 'italic';
    p.style.fontFamily = "var(--display)";
    p.style.fontSize = '1rem';
    p.style.color = 'var(--accent)';
    p.textContent = specialMsg;
    grid.appendChild(p);
    return;
  }

  if (list.length === 0) {
    const p = document.createElement('p');
    p.className = 'placeholder';
    p.textContent = 'Nothing in this gallery answers to that description. Perhaps try a different angle of approach.';
    grid.appendChild(p);
    return;
  }

  /* Group by subcategory, preserving original insertion order */
  const groups = {};
  const order  = [];
  list.forEach(e => {
    const sub = e.subcategory || 'General';
    if (!groups[sub]) { groups[sub] = []; order.push(sub); }
    groups[sub].push(e);
  });

  order.forEach(sub => {
    const section = document.createElement('div');
    section.className = 'subcategory-section';
    section.id = 'sub-' + sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

    /* Drawer-front label */
    const drawer = document.createElement('div');
    drawer.className = 'subcat-drawer';
    const lbl = document.createElement('span');
    lbl.className = 'subcat-label';
    lbl.textContent = sub;
    const cnt = document.createElement('span');
    cnt.className = 'subcat-count';
    cnt.textContent = groups[sub].length + (groups[sub].length === 1 ? ' entry' : ' entries');
    drawer.appendChild(lbl);
    drawer.appendChild(cnt);
    section.appendChild(drawer);

    /* Subcategory description */
    if (SUBCATEGORY_DESCRIPTIONS[sub]) {
      const sdesc = document.createElement('p');
      sdesc.className = 'subcategory-desc';
      sdesc.textContent = SUBCATEGORY_DESCRIPTIONS[sub];
      section.appendChild(sdesc);
    }

    /* Card grid */
    const cg = document.createElement('div');
    cg.className = 'card-grid';
    groups[sub].forEach((e, i) => cg.appendChild(buildCard(e, i)));
    section.appendChild(cg);
    grid.appendChild(section);
  });
}

/* ============================================================
   RENDER
============================================================ */
const filterInput  = document.getElementById('filter-input');
const resultCount  = document.getElementById('result-count');
const authorFlash  = document.getElementById('author-flash');

function render(filterStr) {
  const raw   = (filterStr || '').trim();
  const query = raw.toLowerCase();

  /* Author quote easter egg */
  if (authorFlash && AUTHOR_QUOTES[query]) {
    const q = AUTHOR_QUOTES[query];
    authorFlash.innerHTML = '\u201c' + q.text + '\u201d <cite>' + q.attr + '</cite>';
    authorFlash.style.opacity = '1';
    setTimeout(() => {
      authorFlash.style.opacity = '0';
      setTimeout(() => { authorFlash.innerHTML = ''; }, 450);
    }, 5500);
  }

  /* Special search terms */
  const special = SPECIAL_SEARCHES[query];

  if (special && special.show === 'none') {
    renderGroupedGrid(document.getElementById('grid-conventional'),  [], special.header);
    renderGroupedGrid(document.getElementById('grid-indie'),          [], null);
    renderGroupedGrid(document.getElementById('grid-institutional'),  [], null);
    resultCount.textContent = '';
    buildSidebarNav({ conventional: [], indie: [], institutional: [] }, query);
    return;
  }

  if (special && special.show === 'random') {
    /* "Surprise me": pick a random engine and show only it */
    const pick = engines[Math.floor(Math.random() * engines.length)];
    const cats = { conventional: [], indie: [], institutional: [] };
    cats[pick.category].push(pick);
    renderGroupedGrid(document.getElementById('grid-conventional'),  cats.conventional,  null);
    renderGroupedGrid(document.getElementById('grid-indie'),          cats.indie,          null);
    renderGroupedGrid(document.getElementById('grid-institutional'),  cats.institutional,  null);
    resultCount.textContent = 'Surprise: ' + pick.name;
    buildSidebarNav(cats, query);
    return;
  }

  const allCats = { conventional: engines.filter(e => e.category === 'conventional'), indie: engines.filter(e => e.category === 'indie'), institutional: engines.filter(e => e.category === 'institutional') };

  const filtered = query ? engines.filter(e => matchesFilter(e, query)) : engines;
  const cats = { conventional: [], indie: [], institutional: [] };
  filtered.forEach(e => { if (cats[e.category] !== undefined) cats[e.category].push(e); });

  const src = (special && special.show === 'all') ? allCats : cats;
  const specialHeader = (special && special.show === 'all') ? special.header : null;

  renderGroupedGrid(document.getElementById('grid-conventional'),  src.conventional,  specialHeader);
  renderGroupedGrid(document.getElementById('grid-indie'),          cats.indie,          null);
  renderGroupedGrid(document.getElementById('grid-institutional'),  cats.institutional,  null);

  const total = filtered.length;
  resultCount.textContent = (query && special == null) ? (total + ' engine' + (total !== 1 ? 's' : '') + ' found') : '';

  if (!userDensityLocked) autoDensity(query ? total : engines.length);
  buildSidebarNav(cats, query);
}

/* ============================================================
   SIDEBAR NAVIGATION — rebuilds on every render
============================================================ */
function buildSidebarNav(cats, query) {
  const nav = document.getElementById('sidebar-nav-content');
  if (!nav) return;
  nav.innerHTML = '';

  const galleries = [
    { label: 'I. Familiar Territories',     cat: 'conventional',  id: 'gallery-i'   },
    { label: 'II. The Unmapped Web',         cat: 'indie',         id: 'gallery-ii'  },
    { label: 'III. Archives & Institutions', cat: 'institutional', id: 'gallery-iii' },
  ];

  galleries.forEach(g => {
    const list  = cats[g.cat] || [];
    const total = list.length;
    const gDiv  = document.createElement('div');
    gDiv.className = 'nav-gallery';

    const gLink = document.createElement('a');
    gLink.href = '#' + g.id;
    gLink.className = 'nav-gallery-link';
    gLink.innerHTML = '<span>' + g.label + '</span><em>' + total + '</em>';
    gLink.addEventListener('click', () => { if (window.innerWidth <= 920) setSidebar(false, true); });
    gDiv.appendChild(gLink);

    /* Subcategory links with filtered counts */
    const subCounts = {};
    list.forEach(e => { const s = e.subcategory || 'General'; subCounts[s] = (subCounts[s] || 0) + 1; });
    const allSubs = [...new Set(engines.filter(e => e.category === g.cat).map(e => e.subcategory || 'General'))];

    if (allSubs.length > 0) {
      const scDiv = document.createElement('div');
      scDiv.className = 'nav-subcats';
      allSubs.forEach(sub => {
        const n   = subCounts[sub] || 0;
        const sid = 'sub-' + sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
        const a   = document.createElement('a');
        a.href      = '#' + sid;
        a.className = 'nav-sub-link' + (n === 0 ? ' empty' : '');
        a.innerHTML = '<span>' + sub + '</span><em>' + n + '</em>';
        a.addEventListener('click', () => { if (window.innerWidth <= 920) setSidebar(false, true); });
        scDiv.appendChild(a);
      });
      gDiv.appendChild(scDiv);
    }
    nav.appendChild(gDiv);
  });
}

/* ============================================================
   DENSITY CONTROL
============================================================ */
let userDensityLocked = false;

function autoDensity(count) {
  const d = count > 80 ? 'compact' : count > 28 ? 'standard' : 'spacious';
  setDensity(d, false);
}

function setDensity(d, lock) {
  document.body.dataset.density = d;
  document.querySelectorAll('.density-btns button').forEach(btn => btn.classList.toggle('active', btn.dataset.density === d));
  if (lock !== undefined) userDensityLocked = lock;
  try { localStorage.setItem('cat-density', d); } catch(e) {}
  if (lock) trackDensityEgg(d);
}

/* ============================================================
   THEME
============================================================ */
function getTimeDesc() {
  const h = new Date().getHours();
  if (h < 6)  return 'the small hours';
  if (h < 9)  return 'morning reading';
  if (h < 12) return 'the forenoon';
  if (h < 14) return 'after lunch';
  if (h < 17) return 'the long afternoon';
  if (h < 20) return 'early evening';
  if (h < 23) return 'the late session';
  return 'after midnight';
}

function initTheme() {
  let t;
  try { t = localStorage.getItem('cat-theme'); } catch(e) {}
  if (!t) { const h = new Date().getHours(); t = (h < 7 || h >= 19) ? 'dark' : 'light'; }
  applyTheme(t, false);
}

function applyTheme(t, save) {
  document.documentElement.dataset.theme = t;
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon)  icon.textContent  = t === 'dark' ? '\u263e' : '\u2600\ufe0f';
  if (label) label.textContent = t === 'dark' ? 'Dark'   : 'Light';
  if (save) try { localStorage.setItem('cat-theme', t); } catch(e) {}
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
}

/* ============================================================
   SIDEBAR
============================================================ */
function initSidebar() {
  let open = window.innerWidth > 920;
  try {
    const s = localStorage.getItem('cat-sidebar');
    if (s !== null && window.innerWidth > 920) open = (s === 'open');
  } catch(e) {}
  setSidebar(open, false);
}

function setSidebar(open, save) {
  const sb  = document.getElementById('sidebar');
  const btn = document.getElementById('sidebar-open');
  if (open) {
    sb.classList.remove('closed');
    sb.classList.add('open');
    document.body.classList.remove('sidebar-closed');
    if (btn) btn.classList.remove('visible');
  } else {
    sb.classList.add('closed');
    sb.classList.remove('open');
    document.body.classList.add('sidebar-closed');
    if (btn) btn.classList.add('visible');
  }
  if (save) try { localStorage.setItem('cat-sidebar', open ? 'open' : 'closed'); } catch(e) {}
}

function toggleSidebar() {
  setSidebar(document.getElementById('sidebar').classList.contains('closed'), true);
}

/* ============================================================
   EASTER EGGS
============================================================ */

/* 1. Type B-A-B-E-L anywhere (outside input) */
let babelBuf = '';
document.addEventListener('keydown', e => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  babelBuf = (babelBuf + e.key.toLowerCase()).slice(-5);
  if (babelBuf === 'babel') { triggerBabelEffect(); babelBuf = ''; }
});

function triggerBabelEffect() {
  const glyphs = ['\u2b21','\u2b22','\u2736','\u2b23','\u25c6','\u2666','\u2022'];
  const ov = document.createElement('div');
  ov.className = 'babel-overlay';
  for (let i = 0; i < 30; i++) {
    const h = document.createElement('span');
    h.className = 'babel-hex';
    h.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    h.style.left = (Math.random() * 100) + 'vw';
    h.style.fontSize = (1.2 + Math.random() * 3.2) + 'rem';
    h.style.animationDelay = (Math.random() * 0.9) + 's';
    h.style.animationDuration = (1.8 + Math.random() * 0.8) + 's';
    ov.appendChild(h);
  }
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 3500);
}

/* 2. Borges epigraph: click 7 times to expand */
let borgesClicks = 0;
const BORGES_FULL = 'The universe (which others call the Library) is composed of an indefinite, perhaps infinite number of hexagonal galleries, with vast air shafts between them, surrounded by very low railings. From any of the hexagons one can see, interminably, the upper and lower floors.';

const epigraphEl = document.querySelector('.epigraph');
if (epigraphEl) {
  epigraphEl.addEventListener('click', function() {
    borgesClicks++;
    if (borgesClicks === 7) {
      borgesClicks = 0;
      const existing = this.querySelector('.epigraph-expanded');
      if (existing) { existing.remove(); return; }
      const exp = document.createElement('p');
      exp.className = 'epigraph-expanded';
      exp.textContent = BORGES_FULL;
      this.appendChild(exp);
      setTimeout(() => { if (exp.parentNode) exp.remove(); }, 24000);
    }
  });
}

/* 3. Konami code: staff recommendations overlay */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
document.addEventListener('keydown', e => {
  if (document.activeElement.tagName === 'INPUT') { konamiIdx = 0; return; }
  konamiIdx = (e.key === KONAMI[konamiIdx]) ? konamiIdx + 1 : (e.key === KONAMI[0] ? 1 : 0);
  if (konamiIdx === KONAMI.length) { triggerStaffRecommendations(); konamiIdx = 0; }
});

function triggerStaffRecommendations() {
  const pick = STAFF_PICKS[Math.floor(Math.random() * STAFF_PICKS.length)];
  const ov = document.createElement('div');
  ov.className = 'staff-overlay';
  ov.innerHTML = [
    '<div class="staff-card">',
    '<div class="staff-card-label">Staff Recommendation \u2014 ',
    new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
    '</div>',
    '<div class="staff-card-engine">', pick.name, '</div>',
    '<p class="staff-card-note">', pick.note, '</p>',
    '<span class="staff-card-dismiss">click anywhere to dismiss</span>',
    '</div>'
  ].join('');
  ov.addEventListener('click', () => ov.remove());
  document.body.appendChild(ov);
}

/* 4. Midnight event */
let midnightFired = false;
function checkMidnight() {
  const n = new Date();
  if (n.getHours() === 0 && n.getMinutes() === 0 && n.getSeconds() < 8 && !midnightFired) {
    midnightFired = true;
    triggerMidnightEvent();
    setTimeout(() => { midnightFired = false; }, 70000);
  }
}
setInterval(checkMidnight, 4000);

function triggerMidnightEvent() {
  const ov  = document.createElement('div');
  ov.className = 'midnight-overlay';
  const msg = document.createElement('p');
  msg.className = 'midnight-message';
  msg.textContent = 'The library does not sleep. Neither, apparently, do you.';
  ov.appendChild(msg);
  document.body.appendChild(ov);
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('active')));
  setTimeout(() => {
    ov.style.transition = 'background 2s ease, opacity 2s ease 0.2s';
    ov.style.opacity = '0';
    setTimeout(() => ov.remove(), 2500);
  }, 5500);
}

/* 5. Density scramble: compact > spacious > compact > spacious within 5 seconds */
const densityEggSeq = [];
let densityEggTimer;

function trackDensityEgg(d) {
  densityEggSeq.push(d);
  if (densityEggSeq.length > 4) densityEggSeq.shift();
  clearTimeout(densityEggTimer);
  densityEggTimer = setTimeout(() => { densityEggSeq.length = 0; }, 5500);
  if (densityEggSeq.join(',') === 'compact,spacious,compact,spacious') {
    triggerCardScramble();
    densityEggSeq.length = 0;
  }
}

function triggerCardScramble() {
  document.querySelectorAll('.card').forEach((card, i) => {
    const rot = (Math.random() * 14 - 7).toFixed(1);
    card.style.setProperty('--sr', rot + 'deg');
    setTimeout(() => {
      card.classList.add('scrambling');
      card.addEventListener('animationend', () => card.classList.remove('scrambling'), { once: true });
    }, i * 5);
  });
}

/* 6. Patient footer message: appears after 3 minutes of the page being open */
setTimeout(() => {
  const el = document.getElementById('footer-patient');
  if (el) el.style.opacity = '1';
}, 3 * 60 * 1000);

/* ============================================================
   STATIC CHARMS — set once at load
============================================================ */

/* Title by time of day */
document.title = 'The Catalogue of Engines \u2014 ' + getTimeDesc();

/* Footer engine count in decimal and hexadecimal */
(function() {
  const el = document.getElementById('engine-count-hex');
  if (!el) return;
  const n = engines.length;
  el.textContent = n + ' engines catalogued \u00b7 0x' + n.toString(16).toUpperCase();
})();

/* ============================================================
   EVENT LISTENERS
============================================================ */
filterInput.addEventListener('input', function() { render(this.value); });

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('sidebar-close').addEventListener('click', () => setSidebar(false, true));
document.getElementById('sidebar-open').addEventListener('click',  () => setSidebar(true, true));

document.querySelectorAll('.density-btns button').forEach(btn => {
  btn.addEventListener('click', () => setDensity(btn.dataset.density, true));
});

/* ============================================================
   INIT
============================================================ */

/* Assign stable call numbers once, before rendering */
(function assignCallNumbers() {
  const counts = {};
  const numerals = { conventional: 'I', indie: 'II', institutional: 'III' };
  engines.forEach(e => {
    if (!counts[e.category]) counts[e.category] = 0;
    counts[e.category]++;
    e._call = (numerals[e.category] || '?') + '.' + String(counts[e.category]).padStart(3, '0');
  });
})();

initTheme();

/* Restore density preference */
(function() {
  let d; try { d = localStorage.getItem('cat-density'); } catch(e) {}
  if (d) { setDensity(d, true); }
})();

initSidebar();
render();

