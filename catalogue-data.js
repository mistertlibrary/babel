// catalogue-data.js
// The engines. 211 of them, as of this writing.
// To add an entry, append an object to the array following the schema below.
//
// Schema:
//   name        (string)   — display name
//   url         (string)   — canonical link; always opens in new tab
//   category    (string)   — "conventional" | "indie" | "institutional"
//   subcategory (string)   — groups entries within each gallery
//   description (string)   — 2-4 sentences; honest librarian annotation
//   why         (string)   — when and why to reach for this one specifically
//   tags        (string[]) — features, behaviors, audience
//   subject     (string)   — disciplinary focus, if applicable
//   affiliation (string)   — parent institution or organization
//   openAccess  (boolean)  — freely accessible without subscription
//   note        (string)   — the odd, the useful, the delightful; manicule field
//
// ============================================================

const engines = [

  /* ---- CONVENTIONAL ---- */

  {
    name: "Google",
    url: "https://google.com",
    category: "conventional",
    subcategory: "North America",
    description: "The catalogue that became the building. Google processes billions of queries a day, a figure that sounds like a miracle until you realize it has quietly reorganized how human beings understand the act of knowing something. Its AI integration through Gemini now places synthesized summaries above the results themselves, which is either the logical future of search or a slow substitution of navigation for narration. Both things are true.",
    why: "Start here when you need the widest possible net, recent news, local information, or AI-assisted synthesis on an unfamiliar topic. For academic work, combine with Google Scholar. Knowing how to read past the first page of results is itself a research skill worth practicing.",
    tags: ["AI-assisted", "comprehensive", "images", "video", "news", "multilingual"],
    subject: "",
    affiliation: "Alphabet Inc.",
    openAccess: true,
    note: "Google's results are increasingly shaped by its own products, advertising partners, and AI summaries. That shaping is largely invisible. Treat the first three results with the same skepticism you would apply to any source with a financial interest in your attention."
  },

  {
    name: "Bing",
    url: "https://bing.com",
    category: "conventional",
    subcategory: "North America",
    description: "Microsoft's persistent challenger has become something genuinely interesting with the arrival of Copilot: an AI assistant woven directly into the search interface, capable of sustaining a research conversation rather than simply returning a list. Its image and video search are legitimately excellent. Because Bing licenses its index to DuckDuckGo, Yahoo, and several others, understanding it means understanding a significant portion of the commercial search ecosystem.",
    why: "Strong for image and video research, and for users who want AI-assisted summaries with cited sources inline. Useful for comparing results against Google on the same query; the differences reveal how ranking decisions shape what knowledge looks like.",
    tags: ["AI-assisted", "images", "video", "multilingual", "metasearch-backend"],
    subject: "",
    affiliation: "Microsoft",
    openAccess: true,
    note: "DuckDuckGo, Yahoo, AOL, HotBot, and others run on Bing's index. Much of the commercial web's search infrastructure rests on two foundations: Google's and Bing's."
  },

  {
    name: "Yahoo Search",
    url: "https://search.yahoo.com",
    category: "conventional",
    subcategory: "North America",
    description: "Yahoo was once the front porch of the early web, a place where human editors organized the internet into something a person could actually browse. That curatorial project was discontinued in 2014. What remains is a Bing-powered index wrapped in a portal of news, finance, sports, and email. It is a different kind of artifact: a reminder that search didn't have to become what it became, that other architectures for navigating knowledge were possible and briefly existed.",
    why: "Useful for users already embedded in the Yahoo ecosystem. More interesting as a case study in how human-curated web directories functioned before algorithmic indexing displaced them. The history of Yahoo's original directory is worth knowing.",
    tags: ["portal", "news", "Bing-powered", "general"],
    subject: "",
    affiliation: "Yahoo Inc. / Apollo Global Management",
    openAccess: true,
    note: "Yahoo's hand-edited web directory launched in 1994 and was discontinued in 2014. It organized tens of thousands of websites into subject categories maintained by human beings. That directory was something worth mourning."
  },

  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com",
    category: "conventional",
    subcategory: "North America",
    description: "DuckDuckGo's founding argument is simple and still unusual: your searches are your own business. It pulls from Bing's index without building a behavioral profile of you, without storing your queries, without feeding the surveillance infrastructure that underwrites most of the commercial web. The results are not always as comprehensive as Google's. That is sometimes the price of a search engine that treats you as a reader rather than a data point.",
    why: "The best default choice for students concerned about search privacy, or for any research where you'd prefer your queries not accumulate into a profile. The !bang syntax, which routes queries directly to specific sites with a short code, is one of the most useful productivity features in search.",
    tags: ["privacy", "no tracking", "Bing-powered", "bang syntax"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "DuckDuckGo also maintains a tracker-blocking browser. Its !bang syntax covers thousands of sites: !w sends you to Wikipedia, !scholar to Google Scholar, !ia to the Internet Archive. Worth learning."
  },

  {
    name: "AOL Search",
    url: "https://search.aol.com",
    category: "conventional",
    subcategory: "North America",
    description: "AOL once mailed floppy disks to every household in America, and for a significant portion of the population, its interface was the internet. Search now runs on Bing, the familiar portal aesthetic intact: a front page of news, weather, and entertainment built for users who want a comfortable, already-familiar starting point. It still answers the phone, even if it's mostly nostalgia calling.",
    why: "Functionally equivalent to Yahoo and Bing. Worth understanding historically as one of the first mass-market internet portals, and as a case study in how early decisions about access shaped the public's first encounter with networked information.",
    tags: ["portal", "Bing-powered", "general", "legacy"],
    subject: "",
    affiliation: "Yahoo Inc. / Apollo Global Management",
    openAccess: true,
    note: "AOL was acquired by Verizon in 2015, then sold alongside Yahoo to Apollo Global Management in 2021. Two icons of early internet culture, now under the same private equity roof."
  },

  {
    name: "Ask.com",
    url: "https://ask.com",
    category: "conventional",
    subcategory: "North America",
    description: "Ask Jeeves launched in 1996 with a premise that felt almost literary: type a question in plain English and a virtual butler would find the answer. The butler was retired in 2006, the name shortened to Ask.com, and the backend quietly handed to Google. What remains is a clean interface for conversational queries, more useful than its reputation for simple factual questions, less useful for complex research.",
    why: "Helpful for students who are still learning to phrase research questions in natural language. The Q&A format can surface relevant questions you hadn't thought to ask, which makes it useful at the beginning of an inquiry.",
    tags: ["Q&A", "conversational", "Google-powered", "general"],
    subject: "",
    affiliation: "IAC",
    openAccess: true,
    note: "The original Ask Jeeves character was inspired by P.G. Wodehouse's Jeeves. Not the worst origin story for a search engine."
  },

  {
    name: "Lycos",
    url: "https://lycos.com",
    category: "conventional",
    subcategory: "North America",
    description: "Named after Lycosidae, the wolf spider family, Lycos was among the first web crawlers and one of the most visited sites on the internet at its late-1990s peak. It was sold, acquired, sold again, and arrived at the present day as a Bing-powered portal. The wolf spider now borrows someone else's web. There is something quietly remarkable about a search engine that has outlasted most of the sites it originally indexed.",
    why: "Primarily a historical artifact. Its current search duplicates Bing. Valuable for classroom discussions of the early search landscape, domain-level consolidation, and how a generation of web services was absorbed into a smaller number of platforms.",
    tags: ["portal", "Bing-powered", "legacy", "general"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Lycos operated Tripod and Angelfire, two of the early free web hosting services where a generation of teenagers learned to build their first websites. Both still exist, technically."
  },

  {
    name: "Yandex",
    url: "https://yandex.com",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Yandex built one of the few genuinely independent search indices outside the Google-Bing duopoly, and it built that index to understand Russian: a morphologically complex language that broke early Western search engines. It powers a remarkable ecosystem across Russia and Central Asia. Its status as a resource for Western researchers has been complicated by geopolitics, raising questions about information infrastructure and national sovereignty that search engines rarely make so visible.",
    why: "Essential for research involving Russian-language sources, Central Asian web content, or the political economy of search infrastructure. Approach with awareness of its relationship to the Russian state and the limits on what its index contains or excludes.",
    tags: ["Russian", "multilingual", "independent index", "maps", "AI-assisted"],
    subject: "",
    affiliation: "Yandex N.V.",
    openAccess: true,
    note: "Yandex restructured in 2023, separating its international operations from Russian assets following geopolitical pressure. The mechanics of that separation illuminate how deeply search infrastructure is entangled with national politics."
  },

  {
    name: "Ecosia",
    url: "https://ecosia.org",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Ecosia donates the majority of its advertising revenue to tree-planting and reforestation projects worldwide, making it the only major search engine whose business model is a form of environmental advocacy. It runs on Bing's index, so the results are familiar. What differs is where the surplus goes. Whether individual search habits can meaningfully address deforestation is a genuine question. Ecosia is, at minimum, a demonstration that commercial search infrastructure could be organized around different values.",
    why: "A practical default for environmentally-conscious users who want Bing-quality results. Its monthly financial transparency reports are genuinely useful primary sources for discussions of corporate accountability and the economics of mission-driven companies.",
    tags: ["environmental", "Bing-powered", "trees", "privacy", "transparent"],
    subject: "environmental studies",
    affiliation: "Ecosia GmbH",
    openAccess: true,
    note: "Ecosia publishes monthly financial reports showing exactly how much revenue was generated and how much was donated. The transparency is unusual in the industry and worth examining as a model."
  },

  {
    name: "Qwant",
    url: "https://qwant.com",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Built in France and launched in 2013, Qwant made its argument in the language of European values: no behavioral profiling, no targeting based on personal data, no advertising shaped by what you've previously searched for. It developed a partial index of its own before supplementing with Bing, and operates under GDPR principles by conviction rather than compliance. It is a search engine that treats privacy as architecture, not as a feature to toggle on.",
    why: "A strong choice for privacy-conscious research and for classroom discussions of GDPR, data sovereignty, and the regulatory divergence between American and European approaches to user data. Its 'Qwick' shortcuts function like DuckDuckGo's !bangs.",
    tags: ["privacy", "no tracking", "EU", "GDPR", "multilingual"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Qwant's interface is available in over 25 languages. Its approach to privacy compliance is described in its technical documentation, which is readable and unusually plain-spoken."
  },

  {
    name: "Startpage",
    url: "https://startpage.com",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Startpage occupies a strange and useful position: it queries Google on your behalf and returns the results without Google ever knowing you asked. No IP address logged, no search history stored, no advertising profile built. It is a proxy that lets you use the world's most comprehensive index without feeding the world's most comprehensive behavioral data operation. The trade is a clean one, if you trust the intermediary.",
    why: "The best option for users who want Google's index without Google's data collection. Useful for research on sensitive topics. A productive teaching tool for explaining how search engines log, store, and monetize behavioral data.",
    tags: ["privacy", "Google-powered", "no tracking", "anonymous", "proxy"],
    subject: "",
    affiliation: "Privacy One Group",
    openAccess: true,
    note: "Startpage is based in the Netherlands and holds European privacy certifications. In 2019 an American advertising company acquired a minority stake, generating controversy among privacy advocates. The implications are worth discussing."
  },

  {
    name: "Swisscows",
    url: "https://swisscows.com",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Operating from Switzerland under some of the world's more stringent data protection laws, Swisscows applies what it calls semantic search: attempting to understand the intent behind a query rather than just its keywords. It filters adult content by default and stores no personal data. The branding is cheerful and rural, a deliberate departure from the austere interfaces of its peers, as if clean search results and clean mountain air shared the same source.",
    why: "A family-safe default with genuine privacy protections, suitable for younger students or classroom environments. Useful for discussions of how search interface design embeds values: what a search engine chooses to filter, and by what logic, is itself a meaningful decision.",
    tags: ["privacy", "family-safe", "semantic", "no tracking", "Swiss"],
    subject: "",
    affiliation: "Hulbee AG",
    openAccess: true,
    note: "The cows are real. Swisscows uses Swiss farming imagery throughout its branding as a deliberate signal of national identity and trust. It works better than it has any right to."
  },

  {
    name: "Mojeek",
    url: "https://mojeek.com",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "Mojeek built its own index from scratch, an act that in the current search landscape amounts to a principled defiance of consolidation. Most search engines license their results from Google or Bing; Mojeek crawls the web independently, which means its results are genuinely different: less shaped by commercial ranking pressures, more likely to surface smaller, less-optimized sites. Its index is smaller than Google's. That is a feature as often as it is a limitation.",
    why: "Use Mojeek when you want results unmediated by the major indices. Valuable for research that compares how different engines surface different versions of the same web. One of the few truly independent English-language alternatives to the Google-Bing duopoly.",
    tags: ["independent index", "privacy", "no tracking", "UK"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Mojeek was founded in the UK in 2004 and has crawled the web continuously since. Its index currently covers several billion pages, built and maintained without external investment."
  },

  {
    name: "Seznam",
    url: "https://seznam.cz",
    category: "conventional",
    subcategory: "Europe & Russia",
    description: "In a search landscape where Google dominates virtually every national market, Seznam holds real share in the Czech Republic, one of the only local engines to have survived the consolidation era intact. It offers email, maps, news, and a genuine independent index tuned for Czech-language content. That it exists at all is a small lesson in how cultural specificity can sometimes resist network effects.",
    why: "Essential for Czech-language research and for discussions of how search localization works in practice. A good case study in digital sovereignty and the conditions under which regional internet services can survive beside global platforms.",
    tags: ["Czech", "independent index", "multilingual", "portal", "maps"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Seznam means 'list' in Czech. It was founded in 1996 and is one of Europe's oldest surviving internet portals, which makes it an anomaly worth studying."
  },

  {
    name: "Baidu",
    url: "https://baidu.com",
    category: "conventional",
    subcategory: "Asia",
    description: "Baidu is China's dominant search engine, the gateway to an internet that is, by design and law, substantially different from the one most English-language researchers inhabit. It offers maps, a knowledge base, an AI assistant, and a search index shaped by China's regulatory environment. Researching with Baidu means researching a different information ecosystem: different omissions, different emphases, and a different set of assumptions about what should be accessible.",
    why: "Indispensable for research on Chinese-language topics, contemporary Chinese culture, or the political economy of information access. Running the same query in Baidu and Google simultaneously makes the differences in information ecosystems visible in a way that no textbook can replicate.",
    tags: ["Chinese", "AI-assisted", "maps", "censored", "independent index"],
    subject: "",
    affiliation: "Baidu Inc.",
    openAccess: true,
    note: "Baidu does not index content blocked by Chinese censorship. Comparing Baidu and Google results on historically sensitive topics is a direct, concrete way to make information control legible."
  },

  {
    name: "Naver",
    url: "https://naver.com",
    category: "conventional",
    subcategory: "Asia",
    description: "South Korea's dominant internet portal is less a search engine than an entire information universe: news, shopping, webtoons, user-generated encyclopedias, community forums, and a search index organized around the dense social fabric of Korean internet life. Naver's blog and café ecosystems function as primary sources in ways that have no Western equivalent, making it essential for Korean-language research and fascinating for anyone studying how different cultures structure knowledge online.",
    why: "Required for any research touching Korean language, culture, or current events. Valuable as a case study in portal-style search, largely displaced in Western markets but dominant elsewhere, and in how platform design shapes what counts as authoritative information.",
    tags: ["Korean", "portal", "blogs", "shopping", "news", "encyclopedia"],
    subject: "",
    affiliation: "Naver Corporation",
    openAccess: true,
    note: "Naver's 'Knowledge iN' Q&A service has accumulated over 600 million questions and answers since 2002. It is one of the largest knowledge bases in the Korean language."
  },

  {
    name: "Yahoo Japan",
    url: "https://yahoo.co.jp",
    category: "conventional",
    subcategory: "Asia",
    description: "Yahoo Japan became, in the Japanese market, a genuine institution: part search engine, part e-commerce platform, part news aggregator, part auction house. It developed independently from the American Yahoo and, for a generation of Japanese internet users, it was simply the internet. Its search is now powered by Google, but its portal functions remain distinctly local, and its auction ecosystem is one of the largest in the world.",
    why: "Essential for Japanese-language research. Its auction platform is a significant primary source for researchers studying Japanese commerce, popular culture, and collecting. The history of Yahoo Japan as a distinct regional entity illuminates how global brands develop local identities.",
    tags: ["Japanese", "portal", "Google-powered", "auctions", "news"],
    subject: "",
    affiliation: "LY Corporation (SoftBank / Naver joint venture)",
    openAccess: true,
    note: "Yahoo Japan and LINE merged their parent companies in 2023. The resulting LY Corporation is one of Japan's largest internet companies, a useful illustration of platform consolidation in a non-Western market."
  },

  {
    name: "Sogou",
    url: "https://sogou.com",
    category: "conventional",
    subcategory: "Asia",
    description: "Long valued for its integration with WeChat and its strength in Chinese voice and image search, Sogou was acquired by Tencent in 2021, deepening its roots in China's dominant social and payments ecosystem. It also offers AI-powered translation and text input tools that extend its utility well beyond search, particularly for researchers working across Chinese and other languages.",
    why: "Useful for Chinese-language research, especially for content that circulates within the Tencent and WeChat ecosystems. Its translation and input method tools make it practically useful for anyone working with Chinese-language text.",
    tags: ["Chinese", "AI-assisted", "voice search", "image search", "WeChat"],
    subject: "",
    affiliation: "Tencent",
    openAccess: true,
    note: "Sogou's input method editor for Chinese text is one of the most widely used in China, which gives it a presence in daily writing that extends far beyond search."
  },

  {
    name: "360 Search",
    url: "https://so.com",
    category: "conventional",
    subcategory: "Asia",
    description: "Built by Qihoo 360, a Chinese internet security company, 360 Search entered the market with the unusual advantage of being bundled with one of China's most popular antivirus products. That distribution model made it a significant player quickly. Like Baidu and Sogou, it operates within China's regulatory environment. Its integration with security software gives it a distinctive angle on safe browsing within a censored information ecosystem.",
    why: "Worth knowing for research on the Chinese search market and the relationship between internet security software and search engine adoption. A useful illustration of how distribution channels and bundling shape market share.",
    tags: ["Chinese", "security-integrated", "general"],
    subject: "",
    affiliation: "Qihoo 360",
    openAccess: true,
    note: "360 Search is the third-largest search engine in China by market share, behind Baidu and a resurgent Bing. That ranking is a data point in a much larger story about Chinese internet regulation."
  },

  {
    name: "Brave Search",
    url: "https://search.brave.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Brave Search is among the more significant new entrants in the search landscape: an engine built on a genuinely independent index, funded by the company that makes the privacy-focused Brave browser. It does not license from Google or Bing. It answers to no advertiser. It offers a paid ad-free tier and a transparent approach to ranking. Whether a self-funded independent index can sustain itself long-term is the most interesting open question in commercial search right now.",
    why: "Ideal for researchers who want results unmediated by the Google-Bing duopoly. Useful for discussions of search independence, alternative business models, and what it would actually take to build competing information infrastructure.",
    tags: ["independent index", "privacy", "no tracking", "ad-free option"],
    subject: "",
    affiliation: "Brave Software",
    openAccess: true,
    note: "Brave Search's 'Goggles' feature lets users apply and share custom ranking filters. It is one of the more genuinely novel ideas in search to emerge in years."
  },

  {
    name: "Presearch",
    url: "https://presearch.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Presearch is an experiment: a decentralized search engine that rewards users with cryptocurrency tokens for searching and runs its index on a distributed network of nodes rather than centralized servers. The vision is a search commons owned by its participants rather than a corporation. Results are currently supplemented by established indices, which complicates the idealism somewhat. The architecture is nonetheless a genuine attempt to imagine a different kind of information infrastructure.",
    why: "Fascinating for discussions of decentralization, blockchain technology, and alternative models for public information infrastructure. Useful as a provocation: who should own the index of the web, and how might that ownership be structured?",
    tags: ["decentralized", "blockchain", "privacy", "experimental"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Whether blockchain is the right architecture for a search commons remains an open question. Presearch's value is less in its current results than in the question it keeps asking."
  },

  {
    name: "Kagi",
    url: "https://kagi.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Kagi charges a monthly subscription fee, which is either a small price for an excellent search engine or the clearest available statement about the economics of attention. Because it has no advertising revenue to protect, it has no incentive to shape results toward commercial interests. It combines multiple indices, lets users block or promote specific domains permanently, and treats search quality as a product worth paying for. The results are, by most accounts, very good.",
    why: "The best available example of a subscription-based alternative to ad-supported search. Essential for discussions about attention economics, advertising models, and what users might gain by paying directly for services rather than exchanging their behavioral data.",
    tags: ["subscription", "ad-free", "privacy", "customizable", "high quality"],
    subject: "",
    affiliation: "Kagi Inc.",
    openAccess: false,
    note: "Kagi's 'Small Web' lens surfaces personal blogs and independent sites, recreating something like the pre-SEO web on demand. The 'Lenses' feature more broadly is one of the most useful ideas in search customization."
  },

  {
    name: "You.com",
    url: "https://you.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "You.com launched with an interesting premise: a search engine you could configure to weight certain sources more heavily, essentially building a personalized index. It has since leaned into AI, offering a conversational interface that competes with Perplexity. The tension between personalization and the universal index is one of the genuinely interesting design problems in contemporary search, and You.com sits directly in the middle of it.",
    why: "Useful for exploring how AI and personalization are reshaping search interfaces. Good for classroom discussions of filter bubbles: when you can choose which sources your search engine trusts, what do you choose, and what does that choice say about your assumptions?",
    tags: ["AI-assisted", "personalized", "conversational", "apps"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "You.com's AI assistant can run code, generate images, and search the web in a single interface. It represents a broad, somewhat ambitious vision of what a search engine might eventually become."
  },

  {
    name: "Perplexity AI",
    url: "https://perplexity.ai",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Perplexity answers your question directly, cites its sources inline, and invites follow-up. It is less a search engine than a research interlocutor: something between a reference librarian and a very fast graduate student who has read everything and should still be fact-checked. Its citation model is genuinely useful for students learning to evaluate sources, though the AI can be confidently wrong in ways that are harder to detect than a broken link.",
    why: "Excellent for getting oriented quickly on an unfamiliar topic. The visible, clickable citations make it a better teaching tool than AI systems that answer without attribution. Always verify the sources it returns; the citations are a starting point, not a guarantee.",
    tags: ["AI-assisted", "conversational", "cited sources", "research aid"],
    subject: "",
    affiliation: "Perplexity AI Inc.",
    openAccess: true,
    note: "Perplexity has faced scrutiny from publishers for summarizing their content without adequate compensation or traffic. The ethics of AI-mediated search and content use remain genuinely unsettled."
  },

  {
    name: "HotBot",
    url: "https://hotbot.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "HotBot launched in 1996 as one of the fastest and most technically advanced search engines of its era, renowned for its vivid interface and near-real-time indexing. Wired magazine built it; venture capital inflated it; consolidation absorbed it. It now operates as a Bing-powered metasearch aggregator. The hot rod of 1996 runs on borrowed engines, but the name still carries a faint charge from that first electric era of search.",
    why: "A historical data point more than a current research tool. Useful for discussions of early search engine design, the dot-com boom and bust, and the consolidation that compressed a field of dozens of competitors into the current duopoly.",
    tags: ["metasearch", "legacy", "Bing-powered", "general"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "HotBot was originally powered by Inktomi, another early search engine whose technology was eventually absorbed into Yahoo. The genealogy of search engines is surprisingly tangled, and worth tracing."
  },

  {
    name: "Dogpile",
    url: "https://dogpile.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Dogpile asks the other search engines so you don't have to, aggregating results from Google, Bing, and Yahoo into a single ranked list. The metasearch model rests on a simple premise: no single index is complete, so asking several at once surfaces more. It is not the most efficient research tool in an era when one engine dominates, but the underlying philosophy remains sound.",
    why: "Useful for demonstrating how different engines return different results for identical queries. A concrete classroom exercise: run the same question through Dogpile, Google, and Mojeek and compare what surfaces. The differences are the lesson.",
    tags: ["metasearch", "aggregator", "Google-powered", "Bing-powered"],
    subject: "",
    affiliation: "InfoSpace / Blucora",
    openAccess: true,
    note: "Dogpile launched in 1996. The name was coined because several search engines were piling on to answer a single query. That image is either charming or alarming depending on how you think about search infrastructure."
  },

  {
    name: "Excite",
    url: "https://excite.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Excite was one of the great portals of the 1990s web, a gateway through which millions of people first encountered the internet as a navigable place. It famously turned down the opportunity to acquire Google for $750,000 in 1999, a decision that became one of the most analyzed in internet business history. It persists today as a metasearch portal, technically operational, a clock stopped at a very particular moment in technological time.",
    why: "Primarily a historical artifact. The Excite-Google acquisition story is useful for discussions of corporate decision-making in the early internet economy and how a small number of pivotal choices shaped the web we now inhabit.",
    tags: ["metasearch", "portal", "legacy", "general"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The terms of the rejected Google acquisition are described differently across sources. What every account agrees on: a $750,000 offer, a refusal, and one of the larger opportunity costs in the history of the commercial internet."
  },

  {
    name: "MetaGer",
    url: "https://metager.org",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "MetaGer is a German non-profit metasearch engine that has operated since 1996 under the principle that search should serve the user rather than extract value from them. It is open source, funded by donations and membership fees, and routes queries through anonymous proxies so that neither MetaGer nor the destination search engines can connect a query to its user. It is a small, serious, principled project.",
    why: "One of the best available examples of non-profit, open-source search infrastructure. Essential for discussions about alternative organizational models and what it would mean to treat search as a public good rather than a commercial product.",
    tags: ["non-profit", "open source", "privacy", "metasearch", "German", "EU"],
    subject: "",
    affiliation: "SUMA-EV (German Association for Free Access to Knowledge)",
    openAccess: true,
    note: "MetaGer's source code is publicly available. You can, in principle, run your own instance. That is either an interesting footnote or a modest vision of what public information infrastructure could look like."
  },

  {
    name: "Yep",
    url: "https://yep.com",
    category: "conventional",
    subcategory: "Global & Privacy-Focused",
    description: "Yep arrives with an unusual proposition: it returns 90% of its advertising revenue to the creators of the content its index surfaces. Built by Ahrefs, a company whose primary business is SEO analytics, Yep is either a generous experiment in rethinking the attention economy or a very well-executed piece of brand positioning. The index is genuinely independent. The revenue-sharing model is, at minimum, a different set of values encoded in search infrastructure.",
    why: "Valuable for discussions of creator economies, the ethics of search advertising, and what it might look like to build web infrastructure that compensates the people whose work makes it valuable. Also practically useful as an independent alternative to the major indices.",
    tags: ["independent index", "revenue-sharing", "privacy", "creator economy"],
    subject: "",
    affiliation: "Ahrefs",
    openAccess: true,
    note: "Ahrefs built one of the web's largest link indices for SEO analysis before turning that infrastructure toward Yep. The technical foundation is real; the experiment is live."
  },

  {
    name: "Wolfram Alpha",
    url: "https://wolframalpha.com",
    category: "conventional",
    subcategory: "Specialized & Academic",
    description: "Wolfram Alpha doesn't search the web. It computes. Feed it a mathematical expression, a historical date, a chemical compound, a geographic comparison, a unit conversion, a statistical query, and it returns not a list of sources but a structured answer derived from curated data. It is less an index than an oracle: formal, precise, and often startling in what it knows. The engine behind it is Mathematica. The ambition behind that is something older: a computable model of the world's knowledge.",
    why: "Reach for Wolfram Alpha when your question has a calculable answer. It excels at math, science, engineering, data analysis, and factual lookups where precision matters more than breadth. Essential for STEM research and for any student learning to distinguish between retrieval and computation.",
    tags: ["computational", "STEM", "math", "science", "data", "no ads"],
    subject: "mathematics, science, engineering",
    affiliation: "Wolfram Research",
    openAccess: true,
    note: "Wolfram Alpha's natural language processing is genuinely remarkable: type a question in plain English and it will often identify the computation you meant. When it can't answer, it usually tells you precisely why, which is itself instructive."
  },

  {
    name: "Google Scholar",
    url: "https://scholar.google.com",
    category: "conventional",
    subcategory: "Specialized & Academic",
    description: "Google Scholar indexes academic papers, theses, books, preprints, court opinions, and patent filings across disciplines and publishers. It is not a library database; it does not guarantee peer review, verify credentials, or filter for quality. What it does is cast a very wide net across the formal and semi-formal scholarly record, making it one of the best starting points for academic research and one of the most important tools for understanding what the conversation around a topic looks like. 'Cited by' links and 'Related articles' are among the most useful navigational features in academic search.",
    why: "Start here for any academic inquiry. Use the 'Cited by' feature to trace how an idea has traveled through the literature; use 'Related articles' to find adjacent work. Pair with your library's databases for full-text access to paywalled materials.",
    tags: ["academic", "peer-reviewed", "citations", "multidisciplinary", "free"],
    subject: "academic research",
    affiliation: "Alphabet Inc.",
    openAccess: true,
    note: "Google Scholar does not restrict results to peer-reviewed work. Preprints, dissertations, and self-archived papers appear alongside published articles. Evaluating what you find is your responsibility, which is precisely why it belongs in a research methods course."
  },

  {
    name: "Petal Search",
    url: "https://petalsearch.com",
    category: "conventional",
    subcategory: "Asia",
    description: "Petal Search was built because Huawei needed it. When U.S. trade sanctions cut the company off from Google Mobile Services in 2019, Huawei responded by building its own search infrastructure from the ground up. The result was an engine with genuine independent indexing in select markets, multilingual support across 55 languages, and AI-powered visual and voice search. The web-based version was quietly discontinued in 2023; Petal now lives primarily as a mobile app, deeply integrated into Huawei's hardware ecosystem. It is a search engine shaped entirely by geopolitics.",
    why: "Primarily relevant for Huawei device users and for researchers interested in the political economy of search infrastructure. The story of how trade sanctions produced an independent search engine is one of the cleaner illustrations of how deeply internet services are entangled with national policy.",
    tags: ["mobile", "Huawei", "multilingual", "AI-assisted", "independent index"],
    subject: "",
    affiliation: "Huawei",
    openAccess: true,
    note: "Petal Search's web index was discontinued in June 2023. It remains active as a mobile application on Huawei and Honor devices. Its origin story, a search engine born of a trade ban, makes it an unusually legible case study in the infrastructure politics of the internet."
  },

  {
    name: "Cốc Cốc",
    url: "https://coccoc.com",
    category: "conventional",
    subcategory: "Asia",
    description: "Vietnam's most widely used local browser and search engine, Cốc Cốc built its own crawler with particular attention to Vietnamese language and culture, a language whose tonal diacritics and compound words create genuine indexing challenges that international engines handle poorly. It integrates news, maps, and entertainment for a domestic audience and holds a meaningful share of a market that Google otherwise dominates. Its name means 'knock knock' in Vietnamese, the sound of opportunity at the door.",
    why: "Essential for Vietnamese-language research and for any inquiry that touches Vietnamese digital culture, news, or commerce. A good comparative case alongside Naver and Seznam for discussions of how regional engines survive and thrive by doing one thing the global players do less well: understanding the language.",
    tags: ["Vietnamese", "independent index", "multilingual", "portal"],
    subject: "",
    affiliation: "Cốc Cốc LLC",
    openAccess: true,
    note: "Cốc Cốc has an English-language interface and is accessible globally, though its index and editorial priorities are oriented toward Vietnamese content. Its browser is the more widely used product; the search engine is embedded within it."
  },


  /* ---- INDIE — TEXT & GENERAL WEB ---- */

  {
    name: "Marginalia Search",
    url: "https://search.marginalia.nu",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Marginalia doesn't want to be Google. That's not a limitation: it's a thesis. Built and maintained by a single developer in Sweden, it deliberately indexes the web's quieter parishes: text-rich personal sites, wikis, and old-web holdouts that algorithmic ranking has buried under sponsored results and content farms. The engine actively penalizes commercial and SEO-optimized pages, making it one of the few places online where results feel selected by someone who reads.",
    why: "Reach for Marginalia when mainstream results feel over-optimized. It is singularly good at finding genuine writing on niche topics: the kind of deep-dive personal site that Google buried on page forty. Essential for any student trying to understand what the pre-SEO web looked and felt like.",
    tags: ["indie web", "text-first", "anti-SEO", "independent index", "open source", "no tracking"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Built by Viktor Lofgren. The project homepage is at marginalia-search.com; this URL is the search interface. A 'random' feature drops you into an arbitrary indexed page with no query required. Note: Mojeek, another fully independent crawler, is catalogued in Gallery I."
  },

  {
    name: "Stract",
    url: "https://stract.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Stract is an open-source search engine built by Mikkel Denker, a computer science student at the Technical University of Denmark, as a thesis project and principled rebellion against the homogeneity of the commercial search landscape. It runs on a genuine independent index and is funded by the EU's NLnet Foundation. Its most distinctive feature is 'Optics': a customization layer letting users apply different search lenses, IndieWeb, academic, ad-free, blogosphere, or write their own. It is a search engine for people who want to see the machinery.",
    why: "Use Stract when you want independent-index results with meaningful customization. The Optics system is genuinely powerful: activating the IndieWeb optic makes the results feel like a different internet. Excellent for discussions of search transparency, open-source infrastructure, and why ranking decisions are political as much as technical.",
    tags: ["indie web", "open source", "independent index", "customizable", "no tracking", "EU-funded", "optics"],
    subject: "",
    affiliation: "NLnet Foundation (EU NGI0)",
    openAccess: true,
    note: "Stract's source code is on GitHub. The Optics system allows anyone to write and share a custom ranking filter, which is as interesting a democratization of search relevance as anything the major engines have offered. Currently running from a server in Denker's office."
  },

  {
    name: "Mwmbl",
    url: "https://mwmbl.org",
    category: "indie",
    subcategory: "Text & General Web",
    description: "The name is Welsh, pronounced 'mumble,' taken from Mumbles, the coastal village where its creator lives. The ambition is larger: an open-source, non-profit search engine whose index is built by volunteers who donate spare computing cycles via a browser extension or command-line crawler. No advertising. No corporate backing. No data collection. The index currently holds around 500 million URLs, tiny by commercial standards and growing steadily. Mwmbl is less a finished product than an ongoing argument that web search infrastructure should belong to its users.",
    why: "Practically useful for niche queries where community-curated results outperform commercial ones. Philosophically essential for any discussion of information commons, distributed infrastructure, and what it would mean for the public to own the index of the internet. You can also contribute to it directly.",
    tags: ["community-built", "non-profit", "open source", "distributed crawling", "no tracking", "independent index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "You can contribute to Mwmbl's index by installing its Firefox extension, which crawls the web passively using your spare bandwidth. That participation is the point: the index improves only because people choose to build it."
  },

  {
    name: "Wiby",
    url: "https://wiby.me",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Wiby indexes only the kind of pages most search engines have stopped trying to find: personal sites, hobbyist pages, plain HTML, text-heavy content written by people with something specific to say. It does not index Reddit, YouTube, Twitter, or any of the aggregator platforms that dominate modern results. What remains is a genuinely different internet: someone's exhaustive guide to 1970s synthesizers, a Finnish academic's personal field notes, a GeoCities-era fan site still quietly online. The 'Surprise Me' button drops you into a random indexed page with no search term required.",
    why: "Essential for students trying to understand what personal publishing on the web looks and feels like. The 'Surprise Me' button alone is worth assigning: ask students to click it ten times, record what they find, and write about what those results suggest about who was on the internet before it became a commercial medium.",
    tags: ["indie web", "personal sites", "old web", "no ads", "open source", "independent index", "surprise me"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Wiby is open source under GPLv2 and serves plain HTTP as well as HTTPS, making it usable on vintage hardware. Its index is entirely user-submitted: pages are added only when someone nominates them. The curator is invisible but present in every result."
  },

  {
    name: "Teclis",
    url: "https://teclis.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Teclis is a small, non-commercial search engine with its own independent index, quietly mapping a web that prioritizes sites without aggressive monetization or tracking infrastructure. It is less a finished product than a growing collection of things worth finding. The index is not large, and the interface is spare. Both are deliberate: Teclis believes the experience of search should not itself be a product.",
    why: "A useful companion to Marginalia and Stract for finding genuinely non-commercial web content. Results often surface sites invisible to the major indices because they are too small, too niche, or too principled to have optimized for commercial search.",
    tags: ["indie web", "non-commercial", "independent index", "privacy", "no tracking"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Teclis's limited index is a design choice rather than a constraint. The goal is a well-tended small space, not a comprehensive map of everything."
  },

  {
    name: "Blogsurf",
    url: "https://blogsurf.io",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Blogsurf indexes personal blogs and independent web writing, functioning as a discovery engine for the small web rather than a general-purpose search tool. The results surface the kind of long-form personal publishing that algorithmic search has effectively rendered invisible: thoughtful posts by working professionals, academics writing outside their institutions, hobbyists with something specific to teach. It is a search engine for finding writers, not just answers.",
    why: "Excellent for research that benefits from diverse personal perspectives: contemporary practice in a field, niche expertise, or the kind of honest account that formal publication rarely produces. Also useful for helping students understand blogging as a legitimate form of intellectual discourse.",
    tags: ["blogs", "indie web", "personal sites", "small web", "discovery"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Blogsurf's scope is deliberately limited to blogs and personal writing. The limitation is the feature."
  },

  {
    name: "Mold Net",
    url: "https://moldymoldyguy.fly.dev",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A genuinely experimental crawler that indexes a quirky, self-selected slice of the web, hosted on Fly.dev by an independent developer. The index is small and the interface minimal. What makes it interesting is what makes all small indie crawlers interesting: the selection criteria, implicit or explicit, that determine what gets indexed. Mold Net's particular corner of the web is worth exploring precisely because it is someone else's corner, and someone else's idea of what's worth finding.",
    why: "Best approached as an experiment in what search feels like when the curator is a single enthusiastic person rather than an algorithm. Results are unpredictable in the best sense.",
    tags: ["indie web", "experimental", "small index", "personal project"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Hosted on Fly.dev, which indicates a small personal project. Availability may be intermittent. Treat it as a cabinet of curiosities: worth the visit when the doors are open."
  },

  {
    name: "River",
    url: "https://river.maxbittker.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Max Bittker makes tools that reimagine how people move through information, and River is among the more quietly radical of them: a search engine oriented around the personal web, surfacing small sites and personal pages with a warm, unhurried interface. Bittker's other projects include sandspiel.club and orb.farm, which signals a consistent sensibility: careful, curious, genuinely interested in what computation can feel like at a human scale.",
    why: "Worth knowing for its sensibility as much as its results. River asks what search would feel like if its primary value were serendipity rather than efficiency. Use it when you want to explain to students that software has a point of view, and that point of view is made by a specific person with specific values.",
    tags: ["indie web", "personal web", "discovery", "small index", "personal project"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Max Bittker's full project portfolio is worth exploring alongside River. His work clusters around the idea that digital tools can be gentle and surprising, which is not a design premise you encounter often."
  },

  {
    name: "Infotiger",
    url: "https://infotiger.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A minimal search engine with a retro aesthetic and a small independent index, running clean and fast on what appears to be one person's conviction that search doesn't need to be complicated. The interface strips away everything the commercial engines have added in the name of engagement and leaves the box.",
    why: "A useful illustration of minimalist design philosophy applied to search infrastructure. The contrast with Google's increasingly elaborate interface is itself pedagogically interesting: what features have been added, and in whose interest were they added?",
    tags: ["indie web", "minimal", "retro", "small index", "independent index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The spareness of Infotiger's interface is a statement. Not every search engine needs to know what you did last Thursday."
  },

  {
    name: "Childishism",
    url: "https://childishism.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Whimsical is the right word, and it is not used dismissively. Childishism approaches web search as if the interface itself could be a form of play, which is a more interesting design premise than it sounds. The results are unpredictable, the interface is unexpected, and the whole thing suggests that someone had a genuinely good time building it.",
    why: "Useful for introducing students to the idea that interfaces encode assumptions, and that those assumptions can be questioned, subverted, or simply made strange. Also useful for the occasional thing you genuinely didn't know you were looking for.",
    tags: ["experimental", "playful", "indie web", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Experimental projects like this sometimes go offline without warning. Treat it as a visit to a particularly interesting gallery: worth the trip when the doors are open."
  },

  {
    name: "Newgle",
    url: "https://www.newgle.xyz",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A search engine oriented toward the odder, less-commercial corners of the web: .xyz and other non-.com domains, personal sites, niche communities. The name is a gentle joke, but the intent is earnest: to find things that the commercial indices have decided aren't worth ranking. The .xyz extension is favored by a disproportionate number of indie web projects, hobby sites, and experiments, which gives Newgle's results a particular texture.",
    why: "A good companion to Marginalia and Wiby for finding content outside the .com mainstream. The domain-focus is a useful teaching tool: how top-level domain choices signal a website's relationship to commercial culture is itself worth discussing.",
    tags: ["indie web", "non-commercial", "small index", "experimental", ".xyz"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The .xyz extension was introduced in 2014 and has become a preferred domain for projects that want to signal non-commercial or experimental intent. Whether that signal is reliable is a good research question."
  },

  {
    name: "BananaSlug",
    url: "https://www.bananaslug.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Long-tail search: queries that are too specific, too niche, or too weird for the commercial engines to have anticipated. BananaSlug is built around the hypothesis that the most interesting questions are the ones that produce zero mainstream results. The name is cheerful evidence that whoever built it has a sense of humor about the project.",
    why: "Best for research questions that are genuinely specific: narrow historical events, niche technical topics, obscure cultural phenomena. Use it when Google returns only Wikipedia and four content farms. Sometimes the long tail is exactly where the answer lives.",
    tags: ["long-tail", "indie web", "niche queries", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "A banana slug is a bright yellow mollusk native to the Pacific Coast of North America. It moves slowly and leaves a distinctive trail. This is either an accurate description of niche-query research or a complete coincidence."
  },

  {
    name: "Moonjump",
    url: "https://moonjump.app",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Clean, unhurried, and small. Moonjump is the kind of indie search engine that suggests its maker spent a weekend building exactly the tool they wanted and then shared it. The index is modest; the interface is considered; the experience is notably different from the commercial engines' deliberate urgency.",
    why: "A good entry point for students exploring alternative search, especially alongside heavier projects like Stract or Mwmbl. The contrast in scale between Moonjump and Google is itself a data point about what search infrastructure costs and who can afford to build it.",
    tags: ["indie web", "minimal", "small index", "clean UI"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Small indie search engines appear and disappear with some regularity. Check availability before assigning."
  },

  {
    name: "Sese 搜索",
    url: "https://sese.yyj.moe",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A small, quirky search engine with Chinese-language leanings and a genuinely mixed index. The interface is deliberately eccentric. Sese sits at an interesting intersection: a personal web project that reflects a different cultural relationship to search, indexing pages that neither Baidu nor Google has prioritized.",
    why: "Interesting for research on how different communities build and use search infrastructure. The Chinese-character UI elements alongside English results make it a useful conversation starter about search localization and the assumptions embedded in interface design.",
    tags: ["Chinese-leaning", "indie web", "experimental", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The name translates loosely as 'search' in Chinese. The interface borrows visual elements from both Chinese and Western search traditions. Availability is not guaranteed."
  },

  {
    name: "greppr",
    url: "https://greppr.org",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Named for the Unix command-line search utility, greppr brings a developer's sensibility to general web search: fast, minimal, without ceremony. The interface suggests that whoever built it finds current search engines irritatingly over-produced. grep finds the thing; it does not suggest ten other things you might have meant.",
    why: "A useful illustration of the grep philosophy applied to information retrieval: find the thing, show the thing, stop there. Worth using alongside a discussion of command-line culture and the aesthetic values that developer communities embed in their tools.",
    tags: ["indie web", "minimal", "developer-oriented", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "grep is a Unix utility for searching plain text using regular expressions. Naming a search engine after it is a specific kind of declaration about what a search engine should do."
  },

  {
    name: "Plumb.one",
    url: "https://plumb.one",
    category: "indie",
    subcategory: "Text & General Web",
    description: "An independent search engine with a deliberately minimal design. The name suggests precision and alignment; the interface delivers: clean, considered, unencumbered by the feature accumulation that characterizes commercial search. Plumb refers to exact vertical alignment, as measured with a plumb bob. The metaphor is precise: a search engine that aspires to accuracy without drift.",
    why: "Part of the broader ecology of indie search engines that together make a case that alternatives to the commercial duopoly are possible and worth building.",
    tags: ["indie web", "minimal", "independent index", "privacy"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "A plumb bob is a weight suspended on a string used to determine exact vertical alignment. The metaphor for search is apt: results should be straight, not tilted by commercial interest."
  },

  {
    name: "Clew",
    url: "https://clew.se",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A Swedish indie search engine, minimal and privacy-respecting, built around the idea that finding things on the web shouldn't require surrendering your browsing habits to an advertising platform. The name refers to a ball of yarn: in Greek mythology, the clew Theseus followed through the labyrinth. As a metaphor for search, the thread you follow through the archive of the web, it is quietly perfect.",
    why: "A good addition to the privacy-focused search toolkit, with a sensibility shaped by Scandinavian design values: functional, unornamented, principled. Compare its results to Mojeek and Brave Search for a full picture of independent European indexing.",
    tags: ["indie web", "privacy", "minimal", "Swedish", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The myth of Theseus and the Minotaur is one of the oldest navigation metaphors in Western culture. A Swedish search engine named after Ariadne's thread is either poetic or coincidental, and the distinction may not matter."
  },

  {
    name: "Kukei",
    url: "https://kukei.eu",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A tiny experimental search engine indexing a deliberately curated niche of the web. The interface is spare; the index is small; the principle is clear: some slices of the internet are worth indexing specifically rather than incidentally. The .eu domain and austere aesthetic suggest a European indie web sensibility committed to building what it wants to use.",
    why: "Best understood as an experiment in what a highly focused, niche-curated index feels like to use. The contrast with general-purpose search reveals that comprehensiveness is not the only value a search engine can hold.",
    tags: ["indie web", "experimental", "niche index", "minimal", "EU"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The index is small enough that results can feel genuinely surprising. Treat availability as variable."
  },

  {
    name: "Gumbo.io",
    url: "https://gumbo.io",
    category: "indie",
    subcategory: "Text & General Web",
    description: "An indie search experiment with a hand-curated small index. The name suggests richness, mixture, and the value of things that don't easily sort into categories. Gumbo is a soup made by letting disparate things become something unified through time and heat; it's a good metaphor for a curated index built by someone who finds many different kinds of things worth saving.",
    why: "Worth exploring for its curatorial sensibility. The small index means you encounter things; the commercial engines' large indices often mean you find only what you already expected.",
    tags: ["indie web", "curated", "small index", "experimental"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Indie search experiments like this one are worth checking regularly rather than treating as stable resources. What you find depends heavily on when you visit."
  },

  {
    name: "Yup! Search",
    url: "https://yup.is",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A community-oriented search engine with an indie, weird-web sensibility. The exclamation point is doing real work: this is a search engine that is enthusiastic about what it finds. Results skew toward personal sites and niche content in ways that the commercial engines have stopped prioritizing, and the community orientation means that what gets indexed reflects collective investment rather than algorithmic indifference.",
    why: "Part of the broader indie search ecosystem that collectively argues for a more diverse information infrastructure. A search engine whose users feel some stake in what it indexes is a different kind of infrastructure than one whose users are the product.",
    tags: ["indie web", "community", "weird web", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Community-driven search depends on community participation. The health of the index reflects the health of the community, which is true of more information systems than we generally acknowledge."
  },

  {
    name: "GarlicToum",
    url: "https://garlictoum.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A search engine that leans into the plain, unglamorous, hand-built web with something approaching affection. The name is a Lebanese garlic sauce, thick, pungent, and deeply polarizing, made by emulsifying garlic with oil and lemon until something unexpectedly smooth and powerful emerges. The search engine is similarly committed to its position: this slice of the web, indexed with care, presented without apology.",
    why: "Best for finding plain-HTML, content-first pages that the commercial engines have deprioritized. A useful illustration of how search engines encode assumptions about what good web content looks like, and what we lose when those assumptions go unexamined.",
    tags: ["indie web", "plain web", "experimental", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Toum requires patience and commitment to make correctly. So does building a search engine. The metaphor is apt."
  },

  {
    name: "Bento",
    url: "https://bento.sh",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Tiny, playful, and minimal. Bento is named for the Japanese lunch box: a small, carefully organized container for a satisfying variety of things. The search engine lives up to the metaphor: clean, considered, unpretentious. It doesn't overpromise and it doesn't underdeliver. It finds things, presents them, and stops.",
    why: "A good entry point for younger or less technically confident students exploring the indie search landscape. The interface is friendly in a way that more ideologically committed engines sometimes aren't.",
    tags: ["indie web", "minimal", "playful", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The bento aesthetic is about proportion: the right amount of the right things, organized so nothing is wasted. It's a better philosophy for information design than most search engines manage."
  },

  {
    name: "Alpha Search",
    url: "https://alphasearch.org",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A DIY search engine running on a personal server, built by someone who wanted to understand how search actually works by doing it. The index is small; the technology is transparent; the whole project has the energy of a science experiment that unexpectedly works. It is a demonstration that the infrastructure for information retrieval does not require corporate-scale resources.",
    why: "Useful for students interested in the mechanics of search infrastructure. The knowledge that a functioning search engine can run on personal hardware reframes what search infrastructure means, and raises the question of why we've allowed it to consolidate.",
    tags: ["indie web", "DIY", "personal server", "small index", "educational"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The scale is the point. Alpha Search doesn't aspire to be Google; it aspires to demonstrate that you don't have to be Google to build a search engine."
  },

  /* ---- INDIE — THE OLD WEB ---- */

  {
    name: "Old'aVista",
    url: "https://oldavista.com",
    category: "indie",
    subcategory: "The Old Web",
    description: "A nostalgic homage to AltaVista, the early search giant that briefly felt like the fastest and most powerful thing on the internet before Google arrived and changed what power meant. Old'aVista's interface is a loving recreation of that mid-1990s aesthetic: the specific fonts, the particular shade of blue, the search box that suggested you could ask it anything and it would try. Whether it indexes old web content or simply cosplays the era varies; the cultural gesture is the point.",
    why: "An excellent classroom artifact for discussions of the history of search, the aesthetics of early web design, and the cultural moment when the internet felt genuinely new. The visual vocabulary of 1990s web design is itself a primary source worth analyzing.",
    tags: ["retro", "old web", "nostalgia", "AltaVista-inspired", "indie"],
    subject: "web history, digital culture",
    affiliation: "",
    openAccess: true,
    note: "AltaVista launched in 1995 at Digital Equipment Corporation and was briefly the most capable search engine in existence. It was acquired by Overture in 2003 and then by Yahoo. The original domain now redirects to Yahoo Search, which is a very specific kind of ghost."
  },

  {
    name: "VHSearch!",
    url: "https://vhs.neocities.org",
    category: "indie",
    subcategory: "The Old Web",
    description: "Hosted on Neocities, the modern free web-hosting platform that deliberately evokes GeoCities, VHSearch comes with a VHS aesthetic: scan lines, analog warmth, the deliberate imperfection of magnetic media. It is a retro search project for a community already committed to the proposition that the early web's aesthetic values were worth preserving. A generation that didn't experience the original is building its nostalgic approximation, and doing so with considerable care.",
    why: "A primary source for discussions of the contemporary retro-web movement, which is itself a meaningful cultural phenomenon. What we choose to memorialize tells us something about what we think we've lost.",
    tags: ["retro", "VHS", "Neocities", "old web", "indie"],
    subject: "digital culture, web history",
    affiliation: "Neocities",
    openAccess: true,
    note: "Neocities was founded in 2013 by Kyle Drake as a response to GeoCities closing in 2009. It currently hosts hundreds of thousands of personal websites and has become one of the primary homes of the indie web revival."
  },

  {
    name: "OldSearch",
    url: "https://oldsearch.org",
    category: "indie",
    subcategory: "The Old Web",
    description: "Minimal search oriented toward old-style HTML pages: documents that existed before CSS frameworks, JavaScript frameworks, and the design assumptions that underlie every commercial website today. The results feel like visiting a reading room that has remained untouched since 2001, where the pages load instantly because they contain nothing but text and the occasional image that was small enough to load over dial-up.",
    why: "For students who have never experienced a web page that loads immediately because it contains only what it needs. OldSearch makes this experience reproducible and searchable, which is a useful corrective to the assumption that the current web is the inevitable web.",
    tags: ["retro", "old web", "HTML-only", "minimal", "indie"],
    subject: "web history",
    affiliation: "",
    openAccess: true,
    note: "HTML pages without CSS are not merely old: they are fast, accessible on any device, and often contain more actual information per kilobyte than any modern equivalent. This is either nostalgia or a quiet argument about design priorities."
  },

  {
    name: "HTML-5 Search",
    url: "https://html5.org/search/",
    category: "indie",
    subcategory: "The Old Web",
    description: "A small search interface over HTML5 reference pages, examples, and documentation hosted at html5.org, one of the original HTML5 advocacy sites predating MDN's current dominance. It sits at a productive intersection: the format that defines the modern web, searchable through an interface that feels like it predates the modern web.",
    why: "Useful for students learning HTML5 who want to browse reference material outside the large commercial documentation platforms. Also interesting as a case study in disciplinary search: a tool built specifically to serve a technical community's documentation needs.",
    tags: ["HTML5", "reference", "developer", "retro-style", "small index"],
    subject: "computer science, web development",
    affiliation: "HTML5.org",
    openAccess: true,
    note: "html5.org predates both the W3C's formal HTML5 specification and MDN's rise to documentation dominance. Its search tool reflects its role as early-adopter reference infrastructure."
  },

  /* ---- INDIE — ARCHIVES & HISTORICAL ---- */

  {
    name: "Discmaster",
    url: "https://discmaster.textfiles.com/search",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "Discmaster is a search interface over Jason Scott's textfiles.com archive: millions of files from old software discs, bulletin board systems, shareware CDs, and the digital archaeology Scott has spent decades collecting. The archive includes text files, executables, images, fonts, and sounds from the pre-web digital world. It is a primary source for the history of computing culture: what people were writing, sharing, and building before the internet became the internet.",
    why: "Invaluable for any research touching the history of digital culture, BBS culture, the pre-web internet, or early software history. The textfiles.com collection is one of the most significant archives of informal digital communication in existence. Scott's archival practice is itself a case study in digital preservation worth discussing at length.",
    tags: ["archive", "BBS history", "digital history", "computing history", "text files", "Internet Archive"],
    subject: "digital history, computing history, media history",
    affiliation: "Internet Archive / textfiles.com",
    openAccess: true,
    note: "Jason Scott is an archivist, filmmaker, and Internet Archive staff member. His documentary films — BBS: The Documentary (2005) and GET LAMP (2010) — are primary sources for pre-web internet culture. Both are freely available online."
  },

  {
    name: "Higher Intellect",
    url: "https://preterhuman.net",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "An archive of over 850,000 texts, PDFs, ebooks, and images accumulated over decades and organized around a sprawling interest in culture, counterculture, technology, philosophy, and the genuinely obscure. The name is immodest; the collection is remarkable. Higher Intellect is the kind of archive that could only have been assembled by one person, or a small community, over a very long time, with no curatorial logic beyond passionate accumulation.",
    why: "A treasure trove for researchers interested in counterculture history, alternative media, and the kinds of texts that don't make it into institutional archives. The collection's idiosyncrasy is a feature: what someone chose to save reveals as much as what they saved.",
    tags: ["archive", "ebooks", "texts", "counterculture", "digital repository", "eclectic", "PDFs"],
    subject: "cultural history, counterculture, philosophy",
    affiliation: "",
    openAccess: true,
    note: "The domain name preterhuman.net, meaning 'beyond human' or 'outside the ordinary,' signals the collection's orientation toward esoteric and alternative knowledge. The archive has been online in various forms since the mid-1990s."
  },

  {
    name: "Elephind",
    url: "https://elephind.com",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "A search engine specifically for digitized historical newspapers, aggregating collections from hundreds of libraries, archives, and cultural institutions into a single searchable interface. Originally launched in 2012, taken offline in 2023 due to hosting costs, and relaunched as version 2 in late 2025, Elephind is currently the most comprehensive single access point for historical newspaper content that would otherwise require visiting dozens of institutional databases separately. The relaunched version includes AI-powered smart search and over 47 million pages indexed.",
    why: "Essential for historical research involving newspapers, journalism history, local history, genealogy, or primary source work. The ability to search across institutional collections simultaneously is genuinely invaluable. Elephind finds the newspaper; the hosting institution provides the text. Always identify the source institution for any result you use.",
    tags: ["newspapers", "historical", "archive", "genealogy", "primary sources", "AI-assisted"],
    subject: "history, journalism, genealogy",
    affiliation: "Veridian",
    openAccess: true,
    note: "Currently free but moving toward a subscription model to cover hosting costs. Access conditions may change. The collection currently includes 150+ million pages still being added from contributing institutions including state libraries, university archives, and cultural organizations."
  },

  {
    name: "ChatNoir",
    url: "https://www.chatnoir.eu",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "A search engine for web archives, built by academic researchers at Bauhaus-Universität Weimar, that allows users to search the Common Crawl and other large archived collections of the web. It is one of the few tools that makes the historical web searchable at scale, maintained specifically for researchers who need to study what the web contained at specific moments in the past.",
    why: "Invaluable for digital humanities researchers, historians studying online discourse, and anyone who needs to find content that existed on the web but may no longer be live. The Common Crawl archive contains petabytes of web content reaching back to 2008; ChatNoir makes it searchable.",
    tags: ["web archives", "Common Crawl", "digital humanities", "academic", "historical web", "research"],
    subject: "digital humanities, web history, information science",
    affiliation: "Bauhaus-Universität Weimar",
    openAccess: true,
    note: "Common Crawl is a nonprofit that has been archiving the web since 2008. Its datasets are freely available for research. ChatNoir is one of the most accessible interfaces for querying that archive without writing code."
  },

  {
    name: "Semantic Scholar",
    url: "https://semanticscholar.org",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "Built by the Allen Institute for AI, Semantic Scholar applies machine learning to academic literature: not merely indexing papers but mapping the relationships between them, identifying influential research, summarizing key findings, and surfacing connections that traditional citation analysis misses. It covers over 200 million papers across all scientific disciplines and is entirely free. The AI-powered features are genuinely useful for navigating an unfamiliar field quickly and for understanding how an idea has traveled through the literature.",
    why: "Use Semantic Scholar when Google Scholar's flat results list isn't sufficient. The semantic search, citation graphs, and AI summaries are particularly valuable for getting oriented in a new field or tracing the development of an idea across decades. Always read the primary sources: the summaries are a map, not the territory.",
    tags: ["academic", "AI-assisted", "citations", "machine learning", "multidisciplinary", "free", "non-profit"],
    subject: "academic research",
    affiliation: "Allen Institute for AI",
    openAccess: true,
    note: "Semantic Scholar is a nonprofit project, which is unusual in the academic database landscape. Its influence graph, which visualizes how papers cite and are cited, is one of the more useful tools for understanding a field's intellectual structure."
  },

  {
    name: "IndieWeb Discover",
    url: "https://indieweb-search.jamesg.blog",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "A search and discovery tool for IndieWeb sites, personal blogs, and feeds built by James G., a developer and writer embedded in the IndieWeb community. It indexes sites that have implemented IndieWeb standards: microformats, webmentions, RSS. It is less a general search engine than a discovery layer for a specific community's publishing infrastructure, which makes it a map of intentional, principled personal publishing.",
    why: "Essential for anyone studying the IndieWeb movement: a deliberate, community-organized effort to give people ownership of their own web presence by building on open standards rather than platform silos. The search results are a map of what that community has built.",
    tags: ["IndieWeb", "blogs", "personal web", "microformats", "community", "discovery", "webmentions"],
    subject: "digital humanities, web culture",
    affiliation: "",
    openAccess: true,
    note: "The IndieWeb is organized around owning your data and publishing on your own domain. Its standards include webmentions, microformats, and IndieAuth. James G.'s search tool is one practical way to explore what the community has built."
  },

  /* ---- INDIE — FORUMS & COMMUNITY ---- */

  {
    name: "Boardreader",
    url: "https://boardreader.com",
    category: "indie",
    subcategory: "Text & General Web",
    description: "A search engine dedicated to forums, discussion boards, and threaded conversations: the kind of firsthand, peer-to-peer knowledge exchange that general search engines surface badly. Boardreader's index covers thousands of boards across topics from automotive repair to medieval history to niche software. Forum posts are often the best available source for practical, experiential knowledge: the kind of thing that experts share informally, that never makes it into formal publications, and that Google buries under promotional content.",
    why: "Use Boardreader when you need firsthand accounts, practical troubleshooting, or community knowledge rather than formally published expertise. Teaching students to evaluate forum posts critically, who is the poster, what is their evident expertise, how current is this thread, is excellent practice for source evaluation more broadly.",
    tags: ["forums", "discussion boards", "community knowledge", "practical research"],
    subject: "community research, practical knowledge",
    affiliation: "",
    openAccess: true,
    note: "The culture of online forums is itself a significant area of digital humanities research. Boardreader provides access to that culture; evaluating what you find there is a different and equally important skill."
  },

  {
    name: "Reddit Search",
    url: "https://www.reddit.com/search/",
    category: "indie",
    subcategory: "Text & General Web",
    description: "Reddit is the largest repository of frank, unmediated human opinion on the internet, which is either its greatest virtue or its most urgent problem depending on the day. Its search function indexes decades of threaded conversation across 100,000+ communities: firsthand accounts, expert answers, minority opinions, embarrassing confessions, and the kind of practical troubleshooting knowledge that never makes it into formal documentation. The signal-to-noise ratio varies enormously by subreddit and thread age. The search itself is famously imperfect. Neither of these things diminishes the fact that running a query on Reddit often surfaces something the rest of the web will not give you.",
    why: "Use Reddit search for firsthand experiential knowledge: how something actually behaves in practice, what a community really thinks about something, what questions people are asking that formal sources have not yet answered. Append 'reddit' to any Google query to route toward community discussion, or search directly here. Evaluate source subreddit, post date, and commenter history with the same critical attention you would bring to any anonymous source.",
    tags: ["community", "forums", "firsthand accounts", "social", "discussions", "practical knowledge"],
    subject: "community knowledge, practical research",
    affiliation: "Reddit Inc.",
    openAccess: true,
    note: "Reddit's API restrictions, implemented in 2023, eliminated many of the third-party tools that made the platform's content more searchable and accessible to researchers. The native search has improved somewhat in response. The restrictions also ended several significant academic research programs that depended on the API. That tradeoff is worth examining."
  },,

  /* ---- INDIE — IMAGE, CODE & MEDIA ---- */

  {
    name: "greenscreens.art",
    url: "https://greenscreens.art",
    category: "indie",
    subcategory: "Image, Code & Media",
    description: "An experimental project organized around the aesthetic of early terminal and green-screen computing. It is less a research tool than a digital art project curated around a specific visual sensibility: the green phosphor glow of pre-graphical computing, reclaimed as aesthetic rather than limitation. The results are a curated collection of pages and screenshots with a visual relationship to that history.",
    why: "Useful for discussions of computing aesthetics, the cultural memory of early terminals, and how design choices encode historical meaning. The green-screen aesthetic is now widely used in film, games, and graphic design to signal 'computer stuff.' Examining its origin is worth doing.",
    tags: ["experimental", "aesthetic", "terminal", "art project", "digital history"],
    subject: "digital humanities, media history",
    affiliation: "",
    openAccess: true,
    note: "Green-screen displays were standard from the 1960s through the 1980s. The color was the result of phosphor chemistry, not design preference. Its current nostalgic associations are almost entirely retroactive."
  },

  {
    name: "random:txt",
    url: "https://randomtxt.com",
    category: "indie",
    subcategory: "Image, Code & Media",
    description: "Selects a random page from a curated collection of text-heavy websites, with no search term required. The experience is closer to browsing than searching: press a button, something interesting appears. It is a pure expression of the serendipitous discovery model that early web culture prized and that algorithmic optimization has largely eliminated.",
    why: "Useful for demonstrating the value of non-algorithmic discovery: what you find when nothing is optimizing for your engagement. Pair with Wiby's 'Surprise Me' feature for a classroom exercise on serendipity as a research method.",
    tags: ["random", "text-first", "discovery", "serendipity", "indie web"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The curatorial act in random:txt is worth examining: who selected these pages? What criteria determine a 'text-heavy' website? The invisible curator is always present, even in a random discovery engine."
  },

  {
    name: "CodeSearch",
    url: "https://codesearch.app",
    category: "indie",
    subcategory: "Image, Code & Media",
    description: "A narrow, specialized search tool for code snippets: the small, practical fragments of programming knowledge that developers share informally. Code search is a genuine research practice in software development, and finding well-commented, well-sourced examples is a skill distinct from general web search.",
    why: "Useful for students learning to program who need to find examples of specific techniques. Also valuable as a discussion point: code is a form of knowledge with its own publication and citation norms, and searching for it requires understanding those norms.",
    tags: ["code", "programming", "snippets", "developer", "specialized"],
    subject: "computer science",
    affiliation: "",
    openAccess: true,
    note: "A code snippet that works in one version of a language may fail silently in another. Evaluating code examples requires the same critical attention to provenance and currency that evaluating any other source does."
  },

  {
    name: "Archive-Tracker",
    url: "https://archive-tracker.net",
    category: "indie",
    subcategory: "Image, Code & Media",
    description: "A search interface over a reference-text archive organized in an encyclopedic style, designed for navigating structured informational content rather than the general web. The scope is narrow and deliberately so: a well-organized small archive is often more useful than a poorly organized large one, and the encyclopedic model has a long, reliable track record.",
    why: "A useful illustration of the encyclopedic organization model applied to digital collections. Compare its structure and retrieval experience to Wikipedia and to Google to understand how different organizational principles produce different search experiences.",
    tags: ["archive", "encyclopedia-style", "reference", "small index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "The encyclopedic model of knowledge organization predates digital computing by centuries. Understanding how it translates into search interface design is relevant to anyone studying information architecture."
  },

  /* ---- INDIE — META-SEARCH & CLUSTERING ---- */

  {
    name: "Carrot2",
    url: "https://search.carrot2.org",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "Carrot2 has a genuinely beautiful idea at its core: rather than presenting results as a flat list, it organizes them into labeled thematic groups in real time, giving you an instant topical map of what's out there. Built originally as a graduate thesis project at Poznań University of Technology in 2001, it is now open source and actively maintained. The visualization modes, including a circular 'Lingo' view and a treemap, make the clustering visible in ways that reward careful attention.",
    why: "One of the most useful tools in research methods instruction precisely because it makes information organization visible and interactive. Running a search in Carrot2 and Google simultaneously shows students that the same set of results can be structured in radically different ways. The thematic clusters are also practically useful for narrowing a broad topic at the beginning of a research project.",
    tags: ["clustering", "visualization", "open source", "thematic organization", "metasearch", "academic"],
    subject: "information science, research methods",
    affiliation: "Carrot Search / Poznań University of Technology",
    openAccess: true,
    note: "Carrot2 began as Dawid Weiss's master's thesis in 2001. The commercial spin-off, Carrot Search, develops Lingo3G, used by several large clients. The open-source version remains freely available. Both the thesis origin and the commercial extension are worth discussing."
  },

  {
    name: "Seekport",
    url: "https://www.seekport.com",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A metasearch portal with a distinctive layout that aggregates results from multiple sources. The interface makes the act of aggregation visible, which is useful for students learning that 'search results' are not a natural feature of information but a constructed, source-dependent artifact. Seekport has a multilingual orientation and works reasonably well for non-English queries.",
    why: "Good for demonstrating how the same query produces different results depending on which index is consulted. Pair with Dogpile for a broader lesson on metasearch as a research strategy and on why the source of an index matters.",
    tags: ["metasearch", "aggregator", "multilingual"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Seekport's multilingual orientation is a practical advantage over several other tools in this section, particularly for researchers working in European languages."
  },

  {
    name: "Keybot",
    url: "https://www.keybot.com",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A translation-oriented search tool that finds multilingual content and parallel text: useful for researchers working across languages who want to find how a phrase or concept is expressed in other linguistic contexts. It is specialized in the best sense: narrow, purposeful, and genuinely useful within its domain.",
    why: "Valuable for language learners, translators, and researchers working with multilingual sources. Also useful for discussing how language shapes what is findable: many concepts exist in the literature of one language without direct equivalents in another.",
    tags: ["multilingual", "translation", "parallel text", "language", "specialized"],
    subject: "linguistics, translation studies",
    affiliation: "",
    openAccess: true,
    note: "Keybot's specialty is finding parallel texts: the same content in multiple languages. This makes it unusually useful for translation research and for verifying how technical terminology travels across linguistic contexts."
  },

  {
    name: "Thunderstone Web Catalog",
    url: "https://search.thunderstone.com/texis/websearch15/",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A search catalog powered by Thunderstone's Texis engine, one of the older and more robust full-text search platforms in existence. Thunderstone has been building search infrastructure since 1984, which in software terms is approximately the Bronze Age, and the catalog reflects that institutional solidity: structured, precise, and less interested in engagement than in returning exactly what was asked for.",
    why: "A useful illustration of enterprise-grade search infrastructure applied to a public catalog. The contrast with consumer search in interface design, query syntax, and result structure is instructive for students learning about information retrieval as an engineering problem.",
    tags: ["full-text", "enterprise", "catalog", "legacy", "precise"],
    subject: "information science",
    affiliation: "Thunderstone Software",
    openAccess: true,
    note: "Thunderstone Software, founded in 1984, produces the Texis database and search engine used by hundreds of institutions. Its longevity in the search infrastructure market is unusual and worth examining."
  },

  {
    name: "Gnomit",
    url: "https://www.gnomit.com",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A keyword-centric search interface with minimal, focused design. Gnomit doesn't try to anticipate what you meant; it searches for what you typed. This is either a limitation or a feature depending on how precisely you formulate queries, and in a research context, precision usually wins. The engine is a reminder that natural-language interpretation and keyword retrieval are different things with different affordances.",
    why: "Useful for exact-phrase searching and for situations where keyword precision matters more than semantic interpretation. A good tool for teaching the difference between natural-language and keyword-based search, and when each approach is appropriate.",
    tags: ["keyword", "minimal", "precise", "indie"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "Most modern search engines try to interpret what you meant rather than what you said. Gnomit is less forgiving and, in return, less presumptuous."
  },

  {
    name: "YARN",
    url: "https://yarn.co/yarn-find",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A searchable database of quotes and clips from film and television, built on the premise that cultural references are a navigable dataset. Find any line from any episode in the index; get back a shareable GIF or clip. YARN is a reminder that search engines are not neutral tools but reflect specific theories about what knowledge is worth organizing, and who gets to decide what counts as cultural literacy.",
    why: "An excellent classroom example of domain-specific search and the argument it makes about culture: that film and television dialogue constitutes a form of cultural literacy worth indexing. Also useful for discussions of remix culture, fair use, and the creative use of archival material.",
    tags: ["film", "television", "quotes", "cultural reference", "GIFs", "specialized"],
    subject: "media studies, cultural studies",
    affiliation: "",
    openAccess: true,
    note: "YARN stands for 'You're A Real Nerd,' which is either self-aware or aspirational depending on your relationship to knowing the exact episode number of a television quote."
  },

  {
    name: "MetaStrips",
    url: "https://metastrips.net",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A small, curated meta-search page for indie search engines: a search engine for search engines, which has a pleasingly recursive quality. MetaStrips functions as a discovery tool for the alternative search landscape, offering a single interface for querying several of the engines catalogued in this gallery simultaneously.",
    why: "A useful starting point for students wanting to explore the indie search landscape more broadly. Its existence as a dedicated meta-index for alternative search tools is itself evidence that the field is substantial enough to require navigation.",
    tags: ["metasearch", "indie search", "discovery", "meta-index"],
    subject: "",
    affiliation: "",
    openAccess: true,
    note: "A meta-search engine for indie search engines is either the logical endpoint of the indie search movement or its most characteristic gesture. The recursiveness is intentional."
  },

  {
    name: "SearchNodes",
    url: "https://searchnodes.net",
    category: "indie",
    subcategory: "Meta-Search & Clustering",
    description: "A personal search node that federates queries to multiple small, indie indices simultaneously: a kind of personal switchboard for the alternative search ecosystem. The federation model, where a single query fans out to multiple independent sources, is a meaningful architectural alternative to the centralized index model that the major commercial engines represent.",
    why: "An advanced tool for power users who want to query multiple indie indices simultaneously. Also useful for discussions of federated search architecture and what it means to distribute search infrastructure across many small nodes rather than consolidating it in a few large platforms.",
    tags: ["federated", "indie search", "personal search", "distributed"],
    subject: "information science",
    affiliation: "",
    openAccess: true,
    note: "Federation is a concept from distributed systems: independent nodes that interoperate without central authority. The challenge of applying this to search is that an index's value scales with its size. Whether federation can overcome that challenge is an open question."
  },

  /* ---- INDIE — SELF-HOSTED & OPEN SOURCE ---- */

  {
    name: "Yioop",
    url: "https://www.yioop.com",
    category: "indie",
    subcategory: "Self-Hosted & Open Source",
    description: "An open-source search engine you can download, configure, and run on your own server, designed for small archives, intranets, and specialized collections. Yioop handles crawling, indexing, and search in a single package, and its documentation is clear enough that a technically inclined student could set up a functioning instance. It is the most complete self-hosted search solution for small organizations and the most accessible demonstration of what search engines actually do.",
    why: "Invaluable for library and information science discussions about search infrastructure. Running Yioop on a small archive reveals the machinery: the crawl, the index, the ranking, the query parser. Understanding that machinery changes how you use the commercial tools.",
    tags: ["self-hosted", "open source", "PHP", "small archives", "intranet", "educational"],
    subject: "information science, library technology",
    affiliation: "Seekquarry",
    openAccess: true,
    note: "Yioop can crawl external sites, index local documents, or both. Its multi-language support and built-in wiki make it useful as a complete knowledge management platform, not just a search engine. The documentation is genuinely good."
  },

  {
    name: "Seekquarry",
    url: "https://www.seekquarry.com",
    category: "indie",
    subcategory: "Self-Hosted & Open Source",
    description: "The open-source search framework underlying Yioop, available as a standalone toolkit for developers who want to build search and indexing capabilities into other applications. Seekquarry is less a consumer product than an infrastructure project: a set of well-documented components for anyone who needs to build search from the ground up.",
    why: "Relevant primarily for students interested in the technical architecture of search. The framework's source code, combined with its documentation, provides a relatively accessible entry point into how search engines are actually built, which is a different kind of knowledge from knowing how to use them.",
    tags: ["open source", "framework", "developer", "self-hosted", "PHP", "infrastructure"],
    subject: "information science, computer science",
    affiliation: "",
    openAccess: true,
    note: "Seekquarry and Yioop share their technical foundation and community. Understanding the distinction between an end-user application and the framework it runs on is itself a useful lesson in software architecture."
  },


  /* ---- INSTITUTIONAL — GLOBAL AGGREGATORS ---- */

  {
    name: "Digital Public Library of America",
    url: "https://dp.la/search",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "The DPLA aggregates the digital collections of libraries, archives, and museums across the United States into a single searchable interface, over 50 million items spanning photographs, manuscripts, maps, audio recordings, films, and books. Built on open infrastructure, governed by a nonprofit, and designed explicitly for public benefit. Searching the DPLA means searching dozens of institutional collections simultaneously, which is either the logical endpoint of digitization work or a demonstration of how much remains undigitized.",
    why: "The best single starting point for primary source research in American history, culture, and art. The Primary Source Sets, curated for educators, are especially well-designed for classroom use. The DPLA's API also makes it useful for digital humanities projects involving large-scale data analysis.",
    tags: ["aggregator", "primary sources", "U.S. history", "open access", "API", "non-profit"],
    subject: "American history, culture, art",
    affiliation: "Digital Public Library of America",
    openAccess: true,
    note: "The DPLA's Primary Source Sets are thematically organized collections of documents, images, and artifacts designed for K-12 and undergraduate teaching. They are among the best-designed free educational resources in American libraries."
  },

  {
    name: "Europeana",
    url: "https://www.europeana.eu/en/search",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "Europeana aggregates over 50 million cultural objects from more than 3,000 European institutions: national libraries, art museums, archives, and audiovisual collections from across the EU and beyond. It is the DPLA's European counterpart, built on open standards and governed by the European Commission's digital heritage mandate. The collection ranges from ancient manuscripts to twentieth-century film, all searchable in multiple languages.",
    why: "Essential for any research touching European history, art, literature, or culture. The newspaper collection and the ability to filter by time period, format, and contributing country make it particularly powerful for comparative historical research.",
    tags: ["aggregator", "European history", "multilingual", "open access", "manuscripts", "newspapers"],
    subject: "European history, art, culture",
    affiliation: "Europeana Foundation / European Commission",
    openAccess: true,
    note: "Europeana also maintains curated exhibitions and a collection of primary source teaching resources, both worth exploring alongside the main search interface."
  },

  {
    name: "HathiTrust Digital Library",
    url: "https://catalog.hathitrust.org/Search/Home",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "A partnership of over 200 research libraries, HathiTrust has digitized nearly 20 million volumes: books, journals, government documents, and serials accumulated by major academic libraries over more than a century of collecting. Public domain materials are fully readable online. In-copyright materials are searchable and bibliographically retrievable, with full access for affiliated institution users.",
    why: "Invaluable for finding full texts of public domain books and for confirming what library collections hold. The full-text search across millions of volumes, including within in-copyright materials, is a research capability available nowhere else at this scale.",
    tags: ["books", "full-text", "academic", "public domain", "serials", "government documents"],
    subject: "academic research, book history",
    affiliation: "HathiTrust Research Center / University of Michigan",
    openAccess: true,
    note: "Login with institutional credentials expands access to in-copyright materials for users affiliated with member libraries. Even without login, the full-text search capability and bibliographic records are freely available."
  },

  {
    name: "Internet Archive",
    url: "https://archive.org/search",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "The Internet Archive is an act of faith: the belief that everything worth knowing should remain available to everyone, forever. Since 1996 it has been archiving the web, digitizing books, collecting software, preserving music and film, and building infrastructure for free knowledge access that no government or commercial entity has matched. The Wayback Machine holds over 800 billion web pages. The texts collection contains millions of books, many fully readable. The Prelinger Archives hold 6,000 ephemeral films. The depth is staggering and the organization imperfect, which together make it one of the most productive archives in existence.",
    why: "Indispensable for primary source research of almost any kind. Use it for historical web content via the Wayback Machine, for public domain books, for ephemeral films, for digitized periodicals, and for audio recordings. Also the primary host for Jason Scott's textfiles.com and Discmaster collections.",
    tags: ["web archive", "books", "films", "audio", "non-profit", "Wayback Machine", "open access", "ephemera"],
    subject: "digital history, media history, book history",
    affiliation: "Internet Archive",
    openAccess: true,
    note: "The Internet Archive's controlled digital lending program, which allows borrowing of in-copyright books, has been the subject of significant legal challenges from publishers. The outcome of those cases will shape the future of digital library access in ways worth following closely."
  },

  {
    name: "Google Arts & Culture",
    url: "https://artsandculture.google.com/search",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "Google Arts & Culture aggregates high-resolution images, virtual tours, and curated content from over 2,000 cultural institutions worldwide, including many whose own search interfaces are less capable. The gigapixel resolution of some works makes details visible that are invisible in gallery conditions. The project reflects Google's particular theory of cultural access: more is more, and seamlessness is the highest virtue.",
    why: "The best available source for high-resolution images of artworks in international collections, many freely downloadable for educational use. Image resolution and institutional breadth remain unmatched by any comparable aggregator.",
    tags: ["art", "high-resolution", "virtual tours", "global", "museums", "images"],
    subject: "art history, visual culture",
    affiliation: "Alphabet Inc.",
    openAccess: true,
    note: "Image rights vary by institution and work. Google Arts & Culture provides the interface; the contributing institution holds the copyright. Check individual image terms before using in published work."
  },

  {
    name: "WorldCat",
    url: "https://www.worldcat.org",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "WorldCat is the union catalog of the world's libraries: over 500 million items held across more than 10,000 member institutions, searchable in a single interface. It does not provide digital access to most of what it catalogs. It tells you where to find it. That is a different and equally important function. Knowing that a particular manuscript exists, which libraries hold it, and how to request it through interlibrary loan is the foundation of scholarly research.",
    why: "Essential for verifying that a source exists and finding the nearest copy. The interlibrary loan request links make it a practical tool for obtaining materials that have not been digitized.",
    tags: ["library catalog", "ILL", "global", "bibliographic", "academic"],
    subject: "library science, academic research",
    affiliation: "OCLC",
    openAccess: true,
    note: "WorldCat's data is itself a significant research resource: the distribution of holdings across libraries reveals which institutions have prioritized which subjects, which is a form of bibliographic evidence about intellectual history."
  },

  {
    name: "Biodiversity Heritage Library",
    url: "https://www.biodiversitylibrary.org/search",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "A consortium of natural history museums and botanical gardens has digitized over 60 million pages of natural history literature, from Linnaeus through the early twentieth century, and made it freely searchable. The collection includes field notes, illustrated monographs, voyage journals, and taxonomic publications that constitute the primary literature of natural history. The illustrations alone constitute one of the great visual archives of the pre-photographic scientific record.",
    why: "Indispensable for research in natural history, ecology, botany, zoology, or the history of science. The full-text search across centuries of scientific literature is a capability that would have seemed miraculous to any nineteenth-century naturalist. Use it for original species descriptions, historical distribution records, and visual documentation of extinct species.",
    tags: ["natural history", "science", "botany", "zoology", "full-text", "illustrations", "open access"],
    subject: "natural history, biology, history of science",
    affiliation: "Smithsonian Libraries / BHL Consortium",
    openAccess: true,
    note: "The BHL's OCR text search occasionally misreads eighteenth-century typefaces, particularly long-s characters. When searching for historical species names, try variant spellings. The illustrated plates are indexed separately and worth browsing independently."
  },


  /* ---- INSTITUTIONAL — U.S. ART MUSEUMS ---- */

  {
    name: "Metropolitan Museum of Art Collection",
    url: "https://www.metmuseum.org/art/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Met's online collection covers over 490,000 objects across 17 curatorial departments: nearly 5,000 years of art from every corner of the world. Over 490,000 images are freely available under Creative Commons Zero, meaning no permission is required for any use. The search interface allows filtering by culture, medium, period, and geography. It is one of the most complete and most freely licensed major museum collections online.",
    why: "The open-access licensing makes it a first-choice source for art history research and classroom illustration. The depth across departments, particularly ancient Near East, Egyptian art, and Asian art, fills gaps that Western European-focused collections leave.",
    tags: ["art", "open access", "global", "CC0", "encyclopedic", "images"],
    subject: "art history, world cultures",
    affiliation: "Metropolitan Museum of Art",
    openAccess: true,
    note: "The Thomas J. Watson Library's digital collections, including digitized art publications and auction catalogs, are separate from the main collection search and equally worth exploring for art historical research."
  },

  {
    name: "Smithsonian Open Access",
    url: "https://collections.si.edu/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Smithsonian's aggregated collections search covers over 5 million objects across nineteen museums, nine research centers, and a zoo, all searchable simultaneously. In 2020 the Institution made 4.7 million images available under Creative Commons Zero. The breadth is without parallel in American museum life: from the Wright Flyer to Harriet Tubman's shawl to Apollo 11's command module, all discoverable in a single query.",
    why: "The scope is the argument. Run a search here before visiting individual Smithsonian museum collections. The CC0 licensing means all available images can be freely downloaded and reused. Individual sub-collections are also searchable separately via their own interfaces.",
    tags: ["encyclopedic", "open access", "CC0", "U.S. history", "science", "art", "natural history"],
    subject: "American history, art, science, natural history",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "Sub-collections worth bookmarking separately: Cooper Hewitt (design), Freer/Sackler (Asian art), Hirshhorn (modern and contemporary), National Portrait Gallery, National Museum of the American Indian, National Air and Space Museum, and National Museum of Natural History."
  },

  {
    name: "Art Institute of Chicago",
    url: "https://www.artic.edu/collection",
    category: "institutional",
    subcategory: "Art Museums",
    description: "One of the great encyclopedic museums in North America offers its collection of over 50,000 objects online, with thousands of open-access images. The holdings include an extraordinary collection of Impressionist and Post-Impressionist paintings, significant holdings in photography, prints, and architecture, and one of the finest collections of Japanese woodblock prints in the world. The search and filtering interface is among the most refined of any major American museum.",
    why: "Particularly strong for research in Impressionism, American art, photography, and printmaking. The Ryerson and Burnham Library's digital resources add art historical publications and archival materials.",
    tags: ["art", "Impressionism", "photography", "prints", "open access", "architecture"],
    subject: "art history",
    affiliation: "Art Institute of Chicago",
    openAccess: true,
    note: "The Art Institute's collection data is available via a free API, making it one of the most developer-friendly museum collections in the country. Researchers building digital humanities projects should note this."
  },

  {
    name: "Cleveland Museum of Art",
    url: "https://www.clevelandart.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Cleveland has one of the genuinely great encyclopedic collections in American museology, and it has committed fully to open access: over 40,000 objects available under Creative Commons Zero. The collection is particularly strong in medieval and Byzantine art, arms and armor, and Asian art. The search interface and image quality are excellent.",
    why: "The CC0 licensing and depth of the medieval and Asian art holdings make it particularly valuable for research in those areas. The collection data is available via API.",
    tags: ["art", "open access", "CC0", "medieval", "Asian art", "encyclopedic"],
    subject: "art history, medieval studies, Asian art",
    affiliation: "Cleveland Museum of Art",
    openAccess: true,
    note: "Cleveland's ArtLens app and digital gallery are among the more thoughtfully designed museum technology projects in the U.S. The underlying collection data is freely available."
  },

  {
    name: "Minneapolis Institute of Art",
    url: "https://collections.artsmia.org",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Mia's online collection covers over 89,000 objects with particularly strong representation of Asian, African, and Oceanic art alongside more conventional Western European holdings. The search interface supports filtering by culture, period, and medium. Collection data is released as open linked data, an unusual and significant commitment to interoperability.",
    why: "Exceptionally strong for global art history research, particularly in areas where American encyclopedic collections are often weak. The linked open data release makes it useful for digital humanities projects involving museum collection analysis.",
    tags: ["art", "global", "Asian art", "African art", "linked open data", "open access"],
    subject: "art history, world cultures",
    affiliation: "Minneapolis Institute of Art",
    openAccess: true,
    note: "Mia publishes its collection data on GitHub under Creative Commons Zero. The deliberate choice to release structured data for computational reuse reflects a theory of museum openness that extends well beyond image licensing."
  },

  {
    name: "MoMA Collection",
    url: "https://www.moma.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Museum of Modern Art holds one of the most significant collections of twentieth and twenty-first century art in existence: painting, sculpture, drawing, prints, photographs, architecture, design, film, and media art from 1880 to the present. The online collection covers over 80,000 works, many with substantial curatorial notes and bibliographic records.",
    why: "Essential for any research in modern and contemporary art, design, photography, or architecture. The film stills collection is particularly valuable for cinema studies. Exhibition histories and bibliographies linked from collection records extend research utility considerably.",
    tags: ["modern art", "contemporary art", "photography", "film", "design", "architecture"],
    subject: "modern art, design, film",
    affiliation: "Museum of Modern Art",
    openAccess: true,
    note: "MoMA's online collection includes works not currently on view with full exhibition histories, which function as a form of provenance documentation useful for art market research."
  },

  {
    name: "National Gallery of Art",
    url: "https://images.nga.gov",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The NGA has released over 55,000 open-access images from its collection under Creative Commons Zero, with no use restrictions. The collection concentrates on Western European and American art from the Middle Ages through the early twentieth century, with exceptional holdings in Italian Renaissance, Dutch and Flemish, and French Impressionist work. As a federal institution, its digital resources carry an implicit public mandate.",
    why: "The CC0 licensing and consistent high-resolution imaging make this the go-to source for Western European art history images. As a federally funded institution, its open-access commitment is structurally more stable than that of private museums.",
    tags: ["art", "CC0", "open access", "European painting", "American art", "federal"],
    subject: "art history, Western European painting",
    affiliation: "National Gallery of Art (U.S. Federal Government)",
    openAccess: true,
    note: "The NGA's IIIF manifest makes its images compatible with any IIIF-compliant viewer or digital humanities tool. Researchers building image-based projects should note this interoperability."
  },

  {
    name: "NYPL Digital Collections",
    url: "https://digitalcollections.nypl.org/search/index",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The New York Public Library's digital collections hold over 900,000 items: prints, photographs, maps, manuscripts, posters, menus, illustrated books, and ephemera from five centuries of collecting. The scope is catholic and eccentric in the best sense: the world's largest collection of restaurant menus sits alongside the Schomburg Center's African Diaspora photographs and the Berg Collection's literary manuscripts.",
    why: "An essential resource for American cultural history, particularly strong for New York history, African American history, and the visual culture of the nineteenth and early twentieth centuries. The restaurant menu collection alone is a fascinating primary source for food history, immigration, and commerce.",
    tags: ["prints", "photographs", "maps", "manuscripts", "posters", "ephemera", "open access", "NYC"],
    subject: "American history, cultural history, art",
    affiliation: "New York Public Library",
    openAccess: true,
    note: "The Schomburg Center for Research in Black Culture maintains its own digital collections separately, including the critically important photograph archives of James Van Der Zee and other African American photographers."
  },

  {
    name: "Rijksmuseum Collection",
    url: "https://www.rijksmuseum.nl/en/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Rijksmuseum in Amsterdam has set the benchmark for museum open access: over 700,000 objects online, the majority downloadable at full resolution with no restrictions. The Dutch and Flemish painting collection is among the finest in the world. The Rijksstudio feature allows anyone to download, crop, and remix collection images. The institution's philosophy is explicit: great art belongs to the world, and digital infrastructure should reflect that.",
    why: "The Rijksstudio's high-resolution downloads and unrestricted licensing make this the finest resource for Dutch and Flemish art and, arguably, for art history image research generally. Download quality often exceeds what is available in print publications.",
    tags: ["Dutch masters", "Flemish painting", "open access", "high-resolution", "Rijksstudio", "CC0"],
    subject: "Dutch and Flemish art, European art history",
    affiliation: "Rijksmuseum",
    openAccess: true,
    note: "The Rijksmuseum API is one of the best-documented museum APIs available, offering programmatic access to the full collection. It has been used in hundreds of digital humanities projects worldwide."
  },

  {
    name: "Victoria and Albert Museum",
    url: "https://collections.vam.ac.uk/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The V&A holds the world's preeminent collection of design, applied arts, and performance history: furniture, textiles, ceramics, jewelry, fashion, theater design, metalwork, and photography across twelve galleries covering 5,000 years of human making. The online collection covers over a million objects with detailed metadata. For research in design history, material culture, or the history of making, the V&A has no peer.",
    why: "Essential for design history, fashion history, textile studies, ceramics, and theater design. The collection's global scope, strong in South Asian, East Asian, and Islamic decorative arts as well as European, makes it unusual among encyclopedic collections.",
    tags: ["design", "fashion", "ceramics", "textiles", "photography", "global", "material culture"],
    subject: "design history, material culture, fashion history",
    affiliation: "Victoria and Albert Museum",
    openAccess: true,
    note: "The V&A's National Art Library, accessible through the museum, holds one of the finest collections of art and design publications in the world. The digital catalogue is searchable from the main interface."
  },

  {
    name: "Harvard Art Museums",
    url: "https://harvardartmuseums.org/collections/object-query",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Three museums under one roof: the Fogg, the Busch-Reisinger (German art), and the Arthur M. Sackler. The combined collection of 250,000 objects is available online with an unusually detailed scholarly apparatus: conservation records, comparative images, exhibition histories, and bibliographic notes that go well beyond what most museum databases provide. The Busch-Reisinger is the only museum outside Germany dedicated to German, Austrian, and Swiss art.",
    why: "The depth of curatorial and conservation documentation makes it particularly valuable for object-level scholarly research. The Busch-Reisinger holdings are irreplaceable for German Expressionism, Bauhaus, and related movements.",
    tags: ["art", "German art", "Bauhaus", "conservation records", "academic", "encyclopedic"],
    subject: "art history, German art, Bauhaus",
    affiliation: "Harvard University",
    openAccess: true,
    note: "Harvard Art Museums' API provides access to the full collection data and is well-documented. The conservation notes, which document treatment histories and technical analyses, are an unusual primary source for art historical research."
  },

  {
    name: "Brooklyn Museum",
    url: "https://www.brooklynmuseum.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Brooklyn Museum holds one of the finest Egyptian art collections in the United States and significant holdings in African, Oceanic, and Indigenous American art alongside European and American painting. Its feminist art collection and archives, including the Elizabeth A. Sackler Center for Feminist Art, are nationally significant. The online collection is extensively documented with curatorial commentary.",
    why: "Essential for Egyptian art and for feminist art history. The collection's comparative strength in non-Western art makes it a useful corrective to collections dominated by Western European painting.",
    tags: ["Egyptian art", "African art", "feminist art", "American art", "encyclopedic"],
    subject: "art history, Egyptian art, feminist studies",
    affiliation: "Brooklyn Museum",
    openAccess: true,
    note: "The Brooklyn Museum was a founding partner in NYARC, the New York Art Resources Consortium, providing a shared catalog for the research libraries of Brooklyn, MoMA, and the Frick."
  },

  {
    name: "MFA Boston",
    url: "https://collections.mfa.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Museum of Fine Arts Boston holds one of the most comprehensive collections in North America: exceptional Egyptian, Nubian, and ancient Mediterranean art alongside the largest collection of Japanese art outside Japan, strong early American decorative arts, and significant European painting. The online collection is fully searchable with high-quality images.",
    why: "The Japanese art collection is unmatched in the Western Hemisphere and essential for any serious research in that area. The American decorative arts holdings are primary sources for colonial and federal-period material culture.",
    tags: ["Japanese art", "Egyptian art", "American decorative arts", "encyclopedic", "open access"],
    subject: "art history, Japanese art, American decorative arts",
    affiliation: "Museum of Fine Arts, Boston",
    openAccess: true,
    note: "The MFA's textile collection is among the finest in the country. It includes pre-Columbian Andean textiles that are primary sources for archaeological research."
  },

  {
    name: "Philadelphia Museum of Art",
    url: "https://www.philamuseum.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Philadelphia Museum holds an encyclopedic collection with particular distinction in South Asian and Himalayan art, European painting and decorative arts, and American art from the colonial period forward. The Marcel Duchamp archive is the largest in the world. The online collection is well-documented and includes significant holdings not on permanent display.",
    why: "The Duchamp holdings are irreplaceable for Dada and conceptual art research. The South Asian collection is one of the finest in North America.",
    tags: ["art", "Duchamp", "South Asian art", "European painting", "American art", "encyclopedic"],
    subject: "art history, Dada, South Asian art",
    affiliation: "Philadelphia Museum of Art",
    openAccess: true,
    note: "The Archives of American Art, a Smithsonian research center, holds extensive documentary material on American artists including correspondence, diaries, and studio photographs. The natural companion to the PMA's American art collection."
  },

  {
    name: "Frick Collection Digital",
    url: "https://www.frick.org/research-and-collections/digital-collections/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Henry Clay Frick's personal collection of Old Master paintings, sculpture, and decorative arts, assembled at his Fifth Avenue mansion and now one of the finest small museums in the world. The digital collection includes the collection objects, the Frick Art Reference Library's holdings, and digital surrogates of the library's photographic archive of art historical images accumulated since 1920. That photo archive is one of the most significant documentation resources for Western art history.",
    why: "The Frick Art Reference Library's digital collections are a separate and equally important resource: auction records, exhibition catalogs, and a photo archive covering tens of thousands of works. Essential for provenance research and art market history.",
    tags: ["Old Masters", "art history", "provenance research", "auction records", "photo archive"],
    subject: "art history, European painting, provenance",
    affiliation: "Frick Collection",
    openAccess: true,
    note: "The Frick is a founding member of NYARC. Its Gilded Age auction catalog digitization project, documenting late nineteenth-century collecting, is a significant resource for American art market history."
  },

  {
    name: "Getty Museum Collection",
    url: "https://www.getty.edu/art/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The J. Paul Getty Museum holds exceptional collections at two campuses: the Getty Villa for Greek, Roman, and Etruscan antiquities, and the Getty Center for European painting, drawings, illuminated manuscripts, and photography. The online collection is meticulously documented with full provenance records. The Getty's open-access image program has made over 100,000 images freely available under Creative Commons Zero.",
    why: "The provenance documentation is unusually thorough, making it valuable for both object-level research and discussions of repatriation and cultural property. The illuminated manuscript and photography collections are world-class.",
    tags: ["antiquities", "European painting", "manuscripts", "photography", "CC0", "provenance"],
    subject: "art history, classical antiquity, photography",
    affiliation: "J. Paul Getty Trust",
    openAccess: true,
    note: "The Getty Research Institute maintains the Getty Portal, an aggregator of digitized art historical materials from partner institutions. The Getty Publications Virtual Library offers over 300 scholarly art books as free PDFs."
  },

  {
    name: "NYARC Discovery",
    url: "https://nyarc.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "NYARC, the New York Art Resources Consortium, is a collaboration between the research libraries of the Brooklyn Museum, the Frick Collection, and the Museum of Modern Art. Its ARCADE catalog provides a single interface for searching over a million records: art historical monographs, periodicals, auction catalogs, exhibition records, and archival materials held across the three institutions.",
    why: "The best single point of access for the combined research collections of three of New York's leading art museum libraries. Particularly strong for auction catalog research, artist files, and modern art documentation.",
    tags: ["art libraries", "auction catalogs", "modern art", "consortium", "research libraries"],
    subject: "art history, modern art, provenance",
    affiliation: "Brooklyn Museum / Frick Collection / Museum of Modern Art",
    openAccess: true,
    note: "NYARC was founded in 2006 with Andrew W. Mellon Foundation funding. Its web archiving program, which preserves artist websites and online catalogues raisonnés, addresses a genuine and urgent digital preservation gap."
  },

  {
    name: "Louvre Collections",
    url: "https://collections.louvre.fr/en/recherche",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Louvre's online collection covers over 480,000 works: Egyptian, Greek, Roman, and Near Eastern antiquities alongside European painting, drawing, sculpture, and decorative arts from the medieval period through 1848. The interface is available in French and English. Collection records are thorough and include room locations, provenance, and bibliography.",
    why: "Essential for European art history and classical antiquity. The breadth of the painting collection is unmatched among European museums, and the Egyptian and Near Eastern antiquities are primary sources for those fields.",
    tags: ["European art", "antiquities", "Egyptian art", "French art", "encyclopedic", "multilingual"],
    subject: "art history, European painting, classical antiquity",
    affiliation: "Musée du Louvre",
    openAccess: true,
    note: "The Louvre's free-to-use image program is more restrictive than the Rijksmuseum's or NGA's. High-resolution images require individual rights clearance. The collection records themselves are freely accessible."
  },

  {
    name: "British Museum Collection",
    url: "https://www.britishmuseum.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Over 4 million objects spanning two million years of human history, the majority never on display: the British Museum's online collection is one of the most ambitious digitization projects in cultural heritage. The breadth is genuinely global, from the Elgin Marbles to the Sutton Hoo helmet to the Rosetta Stone to the world's finest collection of Japanese prints. The search interface is sophisticated, with filtering by culture, period, technique, and material.",
    why: "The scope alone makes it essential. Strong across every field of the humanities. The Prints and Drawings department's online holdings are particularly valuable for art history. The collection is also a significant site for discussions of cultural property, repatriation, and the ethics of colonial-era acquisition.",
    tags: ["encyclopedic", "global", "antiquities", "prints", "drawings", "world history"],
    subject: "world history, art history, archaeology",
    affiliation: "British Museum",
    openAccess: true,
    note: "The British Museum's collection contains objects from over 200 countries and territories, which makes it both an extraordinary research resource and a contested site for ongoing repatriation debates. The two things are not separable."
  },

  {
    name: "Tate Collections",
    url: "https://www.tate.org.uk/search/Artworks",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Tate holds the national collection of British art from 1500 to the present and the national collection of international modern and contemporary art, split across four sites. The online collection covers over 70,000 works with a particularly deep archive of British art, Turner holdings, and modern international work. The curatorial essays and artist biographies are among the best in the museum field.",
    why: "Essential for British art history from Turner and the Pre-Raphaelites through the Young British Artists. The research resources, including the Tate Archive and artist biography program, extend well beyond the object records.",
    tags: ["British art", "modern art", "Turner", "contemporary art", "archives"],
    subject: "British art history, modern art",
    affiliation: "Tate",
    openAccess: true,
    note: "Tate Archive holds thousands of artist files, correspondence, and documentary materials not accessible through the main collection search. Researchers should explore archive.tate.org.uk separately."
  },

  {
    name: "Uffizi Collections",
    url: "https://www.uffizi.it/en/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Uffizi in Florence holds the world's preeminent collection of Italian Renaissance painting, from Cimabue through Caravaggio, with particularly extraordinary holdings in Botticelli, Raphael, Titian, and Michelangelo. The online collection has expanded significantly and now includes high-resolution images and scholarly documentation for major works.",
    why: "Indispensable for Italian Renaissance research. Accessing multiple works simultaneously for comparative study is a genuine research advantage over gallery conditions.",
    tags: ["Italian Renaissance", "European painting", "Florence", "art history"],
    subject: "Italian Renaissance, art history",
    affiliation: "Uffizi Galleries",
    openAccess: true,
    note: "The Uffizi's digital strategy has improved significantly in recent years. The online collection remains less comprehensive than the Rijksmuseum's or NGA's, but key works are well-documented."
  },

  {
    name: "Prado Collection",
    url: "https://www.museodelprado.es/en/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Prado's collection of Spanish, Italian, and Flemish painting is without peer: Velázquez, Goya, El Greco, Bosch, and Rubens at their most complete. The online collection covers over 8,000 works with scholarly documentation, provenance records, and technical analysis notes. The free art education resources, designed for students and teachers, are excellent.",
    why: "Indispensable for Spanish art history and for Flemish and Italian painting as collected by the Spanish crown. The documentation of Goya's Black Paintings and the Hieronymus Bosch holdings are particularly thorough.",
    tags: ["Spanish art", "Flemish painting", "Goya", "Velázquez", "European painting"],
    subject: "Spanish art history, European painting",
    affiliation: "Museo Nacional del Prado",
    openAccess: true,
    note: "The Prado's free educational resources, aimed specifically at secondary and university students, are among the more thoughtfully designed museum learning materials in Europe."
  },

  {
    name: "Walters Art Museum",
    url: "https://art.thewalters.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Walters Art Museum in Baltimore holds one of the finest collections of medieval art and illuminated manuscripts in the United States, alongside excellent ancient art, Byzantine art, and nineteenth-century European painting. In 2011 the Walters released its entire collection under Creative Commons licensing, one of the earliest major museum open-access commitments in the country.",
    why: "The medieval manuscript collection is a primary source for anyone studying illumination, medieval devotional culture, or manuscript studies. The CC licensing makes it freely usable for any purpose.",
    tags: ["medieval art", "manuscripts", "Byzantine art", "CC licensed", "open access"],
    subject: "medieval studies, art history, manuscript studies",
    affiliation: "Walters Art Museum",
    openAccess: true,
    note: "The Walters holds over 50 illuminated manuscripts from medieval Europe, accessible with high-resolution images and codicological descriptions. For manuscript studies below the level of the British Library or Bodleian, it is one of the most accessible American collections."
  },


  /* ---- INSTITUTIONAL — U.S. NATURAL HISTORY & SCIENCE ---- */

  {
    name: "AMNH Digital Collections",
    url: "https://digitalcollections.amnh.org/search/",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The American Museum of Natural History's digital collections include scientific illustrations, field photographs, archival films, correspondence, and specimen documentation from 150 years of expeditions and research. The archives document figures including Teddy Roosevelt, Franz Boas, and Roy Chapman Andrews. The scientific illustrations, many produced by staff artists of extraordinary skill, are primary sources for the history of natural history representation.",
    why: "The archival and expedition documentation is often more historically revealing than the specimens themselves: the photographs, correspondence, and field notes from major expeditions document the practice and politics of natural history as a discipline.",
    tags: ["natural history", "expeditions", "scientific illustration", "anthropology", "archival"],
    subject: "natural history, anthropology, history of science",
    affiliation: "American Museum of Natural History",
    openAccess: true,
    note: "The AMNH's Central Asiatic Expeditions of the 1920s, which discovered the first dinosaur eggs ever found, are documented in the archive. Roy Chapman Andrews's letters and field photographs are freely accessible."
  },

  {
    name: "Field Museum Collections",
    url: "https://collections.fieldmuseum.org/search",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The Field Museum in Chicago maintains over 40 million natural and cultural specimens, one of the largest such collections in the world. The online portal makes biological specimens, archaeological objects, and ethnographic collections searchable with geographic and taxonomic filtering. The museum's data is increasingly published as linked open data to support biodiversity research.",
    why: "Essential for taxonomy, paleontology, and the natural history of the American Midwest. The ethnographic collections document cultures of the Pacific, the Americas, and Africa with materials collected over more than a century.",
    tags: ["natural history", "specimens", "paleontology", "ethnography", "linked open data"],
    subject: "natural history, anthropology, paleontology",
    affiliation: "Field Museum",
    openAccess: true,
    note: "The Field Museum's DNA and tissue collection, one of the largest in the world, supports genomics research. The collection's scientific data is published to GBIF, the Global Biodiversity Information Facility."
  },

  {
    name: "Wellcome Collection",
    url: "https://wellcomecollection.org",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The Wellcome Collection in London holds the most extraordinary private accumulation of medical history materials in the world: Henry Wellcome spent fifty years collecting objects related to the history of medicine, health, and the human body across all cultures and periods. The digital library includes over three million images: anatomical illustrations, surgical instruments, pharmaceutical ephemera, psychiatric records, and objects of extraordinary strangeness.",
    why: "Indispensable for the history of medicine, the history of the body, and science and technology studies. The range is global and crosses conventional disciplinary boundaries in productive ways. Many items are freely downloadable under Creative Commons licensing.",
    tags: ["medical history", "history of the body", "anatomy", "pharmaceuticals", "global", "CC licensed"],
    subject: "history of medicine, STS, cultural history",
    affiliation: "Wellcome Trust",
    openAccess: true,
    note: "The Wellcome Library also holds significant archives of individual scientists and medical practitioners. The library holds over 3 million images, many freely downloadable."
  },

  {
    name: "National Library of Medicine Digital Collections",
    url: "https://collections.nlm.nih.gov",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The world's largest biomedical library holds a digital collection of rare books, manuscripts, and historical images: anatomical atlases, surgical manuals, pharmaceutical handbooks, and medical illustrations from antiquity through the twentieth century. The collection documents the history of medicine as a practice and a discipline with exceptional completeness.",
    why: "Essential for the history of medicine and medical illustration. The digital collection includes freely downloadable high-resolution images from some of the most significant anatomical atlases ever produced, including Vesalius's De Humani Corporis Fabrica.",
    tags: ["medical history", "anatomy", "pharmaceutical history", "manuscripts", "scientific illustration"],
    subject: "history of medicine, anatomy, scientific illustration",
    affiliation: "National Library of Medicine (NIH / U.S. Federal Government)",
    openAccess: true,
    note: "The NLM's Digital Collections are separate from PubMed and the NLM Catalog. They focus on historical and rare materials. PubMed remains the primary resource for contemporary biomedical literature."
  },

  /* ---- INSTITUTIONAL — U.S. LIBRARIES & ARCHIVES ---- */

  {
    name: "Library of Congress Digital Collections",
    url: "https://www.loc.gov/collections/",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The largest library in the world has digitized over 20 million items: maps, photographs, manuscripts, sound recordings, moving images, newspapers, government documents, and books. The LOC's digital infrastructure is a model of open access: virtually everything it makes available is in the public domain, properly documented, and freely downloadable. The Prints and Photographs Division, the Geography and Map Division, and American Memory are among the most used collections in historical research.",
    why: "The first stop for American history primary sources. The breadth and quality of documentation are unmatched. The World Digital Library's materials have been migrated to the LOC's main site following the WDL's 2021 closure.",
    tags: ["U.S. history", "primary sources", "maps", "photographs", "manuscripts", "federal", "open access"],
    subject: "American history, political history, cultural history",
    affiliation: "Library of Congress (U.S. Federal Government)",
    openAccess: true,
    note: "Separate LOC interfaces worth bookmarking: Chronicling America (historic newspapers), Prints and Photographs catalog, Geography and Map Division (historic maps), and American Memory (historical collections)."
  },

  {
    name: "National Archives Catalog",
    url: "https://catalog.archives.gov/search",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The National Archives holds the records of the U.S. federal government from the Continental Congress to the present, including the original Constitution, Declaration of Independence, and Bill of Rights. The online catalog describes over 15 billion pages of records, a small fraction of which have been digitized. What is digitized is significant: military service records, immigration records, photographs, maps, and declassified intelligence files.",
    why: "The primary source for U.S. government records, legislative history, military history, genealogy, and diplomatic history. The FOIA Electronic Reading Room, maintained separately, provides access to declassified intelligence documents.",
    tags: ["government records", "U.S. history", "military history", "genealogy", "primary sources", "federal"],
    subject: "American history, political history, genealogy",
    affiliation: "National Archives and Records Administration (U.S. Federal Government)",
    openAccess: true,
    note: "The vast majority of NARA's records are not digitized and must be consulted in person. The catalog is essential for planning archival visits even when digitization is not available."
  },

  {
    name: "Yale Digital Collections",
    url: "https://collections.library.yale.edu/search",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "Yale's digital collections aggregate materials from the Beinecke Rare Books and Manuscripts Library, the Medical Historical Library, the Peabody Museum, and other Yale repositories into a single search interface. The holdings include medieval and Renaissance manuscripts, rare maps, early printed books, literary archives, and scientific specimens. The Beinecke alone holds the Voynich Manuscript, the Gutenberg Bible, and the papers of major American and British writers.",
    why: "Essential for rare book and manuscript research in the humanities. The Beinecke's holdings in American and British literature, including working papers and correspondence of figures from Langston Hughes to Ezra Pound, are world-class.",
    tags: ["manuscripts", "rare books", "literary archives", "Yale", "Beinecke", "academic"],
    subject: "literary history, manuscript studies, book history",
    affiliation: "Yale University",
    openAccess: true,
    note: "The Avalon Project, Yale's digital collection of historical documents in law, history, and diplomacy, is accessible at avalon.law.yale.edu. It remains one of the best free sources for full-text historical treaties, legislation, and speeches."
  },

  {
    name: "Gallica",
    url: "https://gallica.bnf.fr/Search",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The Bibliothèque nationale de France's digital library holds over 10 million documents: books, newspapers, manuscripts, maps, photographs, scores, and sound recordings spanning French cultural history from the medieval period to the present. Gallica is one of the most comprehensive national digital library collections in existence, continuously adding materials since its 1997 launch. The newspaper archive, covering hundreds of French periodicals from the seventeenth century forward, is a research resource of extraordinary depth.",
    why: "The primary access point for French cultural heritage research. Essential for any work touching French history, literature, philosophy, or journalism. The newspaper collection is unmatched for French press history.",
    tags: ["French history", "manuscripts", "newspapers", "maps", "scores", "photographs", "full-text", "multilingual"],
    subject: "French history, European history, literary history",
    affiliation: "Bibliothèque nationale de France",
    openAccess: true,
    note: "Gallica's OCR quality varies by century and document type. Nineteenth-century newspapers are generally well-searchable; older manuscripts may require paleographic expertise."
  },

  {
    name: "Smithsonian Libraries Digital Library",
    url: "https://library.si.edu/digital-library",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The Smithsonian Libraries, distributed across nineteen museums and research centers, hold a remarkable collection of rare books, journals, and ephemera focused on natural history, science, art, and American history. The digital library provides free access to digitized volumes: illustrated natural history books, scientific expedition reports, trade catalogs, and art historical publications. The Trade Literature collection documents American commerce from 1850 to 1940.",
    why: "The scientific illustration collection, drawn from digitized natural history books, is one of the finest freely available image archives for historical natural history research. The Trade Literature collection is an underutilized primary source for economic and design history.",
    tags: ["natural history", "rare books", "scientific illustration", "trade literature", "open access"],
    subject: "history of science, natural history, design history",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "The Smithsonian Libraries' digitized field notebooks and expedition journals are primary sources for the history of scientific exploration, searchable within the main digital library interface."
  },

  {
    name: "Digital Commonwealth",
    url: "https://www.digitalcommonwealth.org/search",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "A statewide aggregator for Massachusetts's cultural heritage institutions, Digital Commonwealth brings together collections from over 270 libraries, historical societies, museums, and archives into a single searchable portal. The holdings cover Massachusetts history from colonial settlement through the twentieth century: photographs, maps, diaries, pamphlets, newspapers, and objects documenting the state's central role in American political, intellectual, and industrial history.",
    why: "Essential for Massachusetts and New England history. The breadth of contributing institutions brings together materials scattered across hundreds of archives, dramatically reducing the discovery burden for regional research.",
    tags: ["Massachusetts", "New England history", "aggregator", "photographs", "maps", "regional"],
    subject: "American history, regional history, New England",
    affiliation: "Digital Commonwealth / Boston Public Library",
    openAccess: true,
    note: "Digital Commonwealth's model, a single aggregated interface for a state's distributed cultural heritage collections, has been replicated across many states."
  },

  {
    name: "Blue Mountain Project",
    url: "https://bluemountain.princeton.edu",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "Princeton's Blue Mountain Project has digitized avant-garde art, music, and literary periodicals from Europe and the United States between 1848 and 1923: Der Sturm, Der Dada, La cité, Surréalisme, Pan, Ver Sacrum, and dozens of other rare publications that both documented and embodied the emergence of cultural modernity. The full-text search across these publications makes connections visible that physical access to scattered institutional collections would make nearly impossible.",
    why: "Essential for research in European avant-garde movements: Dada, Expressionism, Futurism, Vorticism, and the Viennese Secession. The periodicals are primary sources for how these movements articulated themselves in print, which is different from and often more revealing than the objects they produced.",
    tags: ["avant-garde", "modernism", "periodicals", "Dada", "Expressionism", "NEH-funded", "full-text"],
    subject: "art history, modernism, print culture, European history",
    affiliation: "Princeton University Library / NEH",
    openAccess: true,
    note: "The Modernist Journals Project at Brown and Tulsa (modjourn.org) is the English-language companion to Blue Mountain, digitizing little magazines of the 1890s-1920s including Poetry, The Little Review, and The English Review."
  },

  {
    name: "Stanford Digital Repository",
    url: "https://purl.stanford.edu",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "Stanford's digital repository holds a significant range of digitized primary sources from the university's collections: historic maps, photographs, manuscripts, oral histories, and born-digital research data. The David Rumsey Map Center collection, accessible through the repository, is one of the most significant historical map collections in the world, with over 150,000 digitized historical maps.",
    why: "The David Rumsey historical maps collection is essential for any research involving historical cartography. The interface allows overlaying historical maps on contemporary geography, a powerful research and teaching tool.",
    tags: ["maps", "oral histories", "manuscripts", "historical cartography", "academic"],
    subject: "historical cartography, American history, oral history",
    affiliation: "Stanford University Libraries",
    openAccess: true,
    note: "David Rumsey's map collection is also separately accessible at davidrumsey.com, which has a more feature-rich viewer. The Stanford repository version provides better institutional discovery metadata."
  },

  {
    name: "Columbia University Digital Collections",
    url: "https://dlc.library.columbia.edu",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "Columbia's digital library collections include the Avery Index to Architectural Periodicals, the Oral History Archives (one of the oldest and largest oral history collections in the world), and digitized materials from the Burke Library's theological collections and the Rare Book and Manuscript Library. The oral history collection includes interviews with figures from Franklin D. Roosevelt to Marian Anderson.",
    why: "The Oral History Archives are among the most important primary sources for twentieth-century American intellectual, political, and cultural history. The Burke Library's digitized theological and missionary archives are significant for religious history and the history of colonialism.",
    tags: ["oral history", "architecture", "manuscripts", "theological history", "academic"],
    subject: "American history, architectural history, oral history",
    affiliation: "Columbia University Libraries",
    openAccess: true,
    note: "The Oral History Archives at Columbia were founded in 1948, making them the oldest oral history program in the United States. The full catalog of recordings and transcripts is accessible through the digital collections interface."
  },


  /* ---- INSTITUTIONAL — U.S. STATE & LOCAL ---- */

  {
    name: "Chronicling America",
    url: "https://chroniclingamerica.loc.gov",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "A Library of Congress initiative digitizing historical American newspapers from 1770 to 1963, in partnership with state programs across all fifty states. Over 22 million pages from more than 2,700 newspaper titles, fully searchable by text, place, date, and language. Chronicling America is one of the most powerful primary source databases for American history: a searchable archive of how ordinary and extraordinary events were reported, discussed, and contested across a century and a half.",
    why: "Essential for any American history research involving press coverage, public opinion, local events, or the history of journalism. Particularly powerful for topics that affected specific regions: the search by state and date range makes geographic and temporal filtering intuitive.",
    tags: ["newspapers", "American history", "primary sources", "full-text", "LOC", "federal", "open access"],
    subject: "American history, journalism history, regional history",
    affiliation: "Library of Congress / National Endowment for the Humanities",
    openAccess: true,
    note: "The LOC's historic newspaper digitization program continues to add titles and pages. The collection currently ends in 1963; later dates are covered by ProQuest Historical Newspapers and other subscription databases."
  },

  {
    name: "Virginia Memory",
    url: "https://www.virginiamemory.com",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The Library of Virginia's digital collections cover state history from colonial records through the twentieth century: birth and death certificates, military rosters, plantation records, photographs, maps, and legislative documents. The African American community collections and the colonial county court records are among the most significant holdings for researchers of Virginia and Southern history.",
    why: "The colonial court records and plantation documents are primary sources for the legal and economic history of slavery in Virginia. The military records are essential for Civil War genealogical and regimental research.",
    tags: ["Virginia history", "colonial records", "Civil War", "African American history", "genealogy"],
    subject: "American history, Southern history, genealogy",
    affiliation: "Library of Virginia",
    openAccess: true,
    note: "The Library of Virginia also maintains a separate portal for Virginia newspapers and a published finding aids database for manuscript collections held at the State Library in Richmond."
  },

  {
    name: "North Carolina Digital Collections",
    url: "https://digital.ncdcr.gov/search",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The North Carolina Digital Heritage Center aggregates materials from libraries, archives, and museums across the state: photographs, newspapers, maps, postcards, yearbooks, and institutional records documenting North Carolina history from colonial settlement through the twentieth century. Collections are particularly strong for African American history, Appalachian culture, and the state's textile and tobacco industries.",
    why: "A strong model of state-level aggregation and a valuable resource for Southern, Appalachian, and African American history. The tobacco and textile industry records are primary sources for the economic history of the industrializing South.",
    tags: ["North Carolina", "Southern history", "Appalachian culture", "African American history", "aggregator"],
    subject: "American history, Southern history, regional history",
    affiliation: "State Archives of North Carolina / UNC Chapel Hill",
    openAccess: true,
    note: "The DigitalNC platform (digitalnc.org), a UNC Chapel Hill aggregator complementary to this one, adds additional institutional materials and is worth searching alongside the state archive collection."
  },

  {
    name: "Florida Memory",
    url: "https://www.floridamemory.com",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "Florida's digital archive covers the state's history from the colonial Spanish period through the twentieth century: photographs, documents, maps, and audio recordings documenting a state whose history is more complex, longer, and more multiply colonized than its contemporary reputation suggests. The Photographic Collection holds over 100,000 historic photographs including significant documentation of African American communities and the state's natural landscape.",
    why: "Particularly strong for Florida's colonial Spanish history, Reconstruction-era African American communities, and early twentieth-century development. A useful corrective to the popular image of Florida as a modern state with no pre-1950 history worth examining.",
    tags: ["Florida history", "photographs", "colonial history", "African American history", "maps"],
    subject: "American history, Southern history, colonial history",
    affiliation: "Florida Division of Library and Information Services",
    openAccess: true,
    note: "The Florida Memory Photograph Collection includes documentation of the early tourist industry, the citrus trade, and the Seminole Wars that illuminates how the state was marketed and transformed in the late nineteenth and early twentieth centuries."
  },

  {
    name: "New Jersey Digital Highway",
    url: "https://www.njdigitalhighway.org",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "New Jersey's statewide digital portal aggregates collections from libraries, historical societies, museums, and archives across the state: photographs, maps, newspapers, and archival documents covering New Jersey history from colonial settlement to the present. The collection is particularly strong for industrial history, given the state's role as a center of American manufacturing and invention.",
    why: "A valuable resource for New Jersey history and for the broader history of American industry. The documentation of Thomas Edison's Menlo Park and West Orange laboratories makes it significant for the history of technology.",
    tags: ["New Jersey history", "industrial history", "photographs", "maps", "aggregator", "regional"],
    subject: "American history, industrial history, regional history",
    affiliation: "New Jersey State Library",
    openAccess: true,
    note: "Edison National Historic Site's research archives are maintained separately by the National Park Service and worth consulting alongside this collection for primary source documentation of Edison's inventions."
  },

  {
    name: "California Digital Library",
    url: "https://search.cdlib.org/",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The California Digital Library, a collaborative of the University of California system, provides access to the digital collections of ten UC campuses: manuscripts, photographs, maps, oral histories, and special collections ranging from the Bancroft Library's California and Western American holdings to the UCLA Chicano Studies Research Center. The collection is distributed but searchable across campuses from a single interface.",
    why: "Essential for California history, Western American history, and the history of the Pacific Rim. The Bancroft Library's holdings on California's Spanish and Mexican periods are primary sources available nowhere else at this depth.",
    tags: ["California history", "Western history", "University of California", "aggregator", "Bancroft Library"],
    subject: "American history, Western history, regional history",
    affiliation: "University of California",
    openAccess: true,
    note: "The Bancroft Library at UC Berkeley maintains its own dedicated digital collections interface with stronger search features for the California and Western materials specifically."
  },

  /* ---- INSTITUTIONAL — UNITED KINGDOM ---- */

  {
    name: "British Library Manuscripts",
    url: "https://www.bl.uk/manuscripts/search",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "The British Library's Digitised Manuscripts collection provides full-color, page-turning access to major manuscripts from the Library's collections: the Lindisfarne Gospels, the Diamond Sutra (the world's oldest printed book), the Magna Carta, Leonardo da Vinci's notebooks, Jane Austen's letters, and tens of thousands of other primary documents. The British Library holds one of the world's greatest manuscript collections; this interface makes a significant portion of it freely accessible.",
    why: "A primary source of the first order for medieval manuscript studies, literary history, and the history of the book. The Lindisfarne Gospels and other illuminated manuscripts are some of the most studied artifacts in Western cultural history, and the image quality here is exceptional.",
    tags: ["manuscripts", "medieval", "rare books", "British history", "literary history", "open access"],
    subject: "manuscript studies, medieval history, literary history",
    affiliation: "British Library",
    openAccess: true,
    note: "The British Library's broader digital collections, including newspaper and map collections, are accessible through bl.uk/collection-items. The manuscripts interface covers the most frequently requested special items."
  },

  {
    name: "National Portrait Gallery UK",
    url: "https://www.npg.org.uk/collections/search",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "The world's largest collection of portraits covers British history through its subjects: politicians, scientists, artists, writers, and monarchs from Tudor England to the present, recorded in oil, pastel, watercolor, sculpture, and photography. The NPG's collecting principle, that the significance of the subject rather than the quality of the work justifies acquisition, produces a collection that is a documentary resource as much as an art collection.",
    why: "An indispensable visual reference for British history at any period. A portrait is often the most direct primary source for what a figure looked like, which matters when writing history for general readers or teaching students who benefit from visual context.",
    tags: ["portraits", "British history", "biography", "photography", "painting", "sculpture"],
    subject: "British history, biography, art history",
    affiliation: "National Portrait Gallery (UK)",
    openAccess: true,
    note: "The NPG's photography collection covers Victorian portrait photography with exceptional depth. The collection of early photographs of scientists and literary figures is a primary source for Victorian intellectual history."
  },

  {
    name: "Digital Bodleian",
    url: "https://digital.bodleian.ox.ac.uk",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "The Bodleian Libraries at Oxford hold one of the greatest research library collections in the world, and Digital Bodleian provides free access to digitized special collections: illuminated manuscripts, early printed books, historical photographs, maps, and archival materials. The quality of the imaging and the depth of the bibliographic description reflect Oxford's scholarly traditions.",
    why: "Particularly strong for medieval and Renaissance manuscripts, early printing history, and the history of cartography. The Bodleian's acquisition history, stretching back to 1602, means it holds materials documenting intellectual and literary history at a depth few institutions match.",
    tags: ["manuscripts", "rare books", "Oxford", "maps", "medieval", "academic"],
    subject: "manuscript studies, book history, literary history",
    affiliation: "Bodleian Libraries, University of Oxford",
    openAccess: true,
    note: "Full-resolution image downloads for some materials require institutional Oxford login. Public users can access thumbnails and standard-resolution images freely. The catalog records themselves are completely open."
  },

  {
    name: "National Library of Scotland",
    url: "https://digital.nls.uk",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "The National Library of Scotland holds the national printed archive and major manuscript collections for Scottish history, culture, and literature. The digital gallery provides access to digitized maps, historical newspapers, printed books, pamphlets, and manuscript materials. The map collection is particularly exceptional: over 200,000 historical maps of Scotland and the world, many with georeferencing tools.",
    why: "Essential for Scottish history and for the history of cartography. The map collection's depth and the georeferencing tools make it a primary resource for historical geography, landscape history, and place name research.",
    tags: ["Scottish history", "historical maps", "newspapers", "manuscripts", "cartography"],
    subject: "Scottish history, historical cartography, literary history",
    affiliation: "National Library of Scotland",
    openAccess: true,
    note: "The NLS map viewer allows overlay of historical maps on contemporary satellite imagery, particularly powerful for research involving landscape change, urbanization, and historical settlement patterns."
  },

  {
    name: "Ashmolean Museum",
    url: "https://www.ashmolean.org/search",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "Founded in 1683, the Ashmolean at Oxford is the oldest university museum in the world. Its collections encompass archaeology from the ancient Mediterranean, Egyptian, and Near Eastern worlds alongside European and Asian art from antiquity to the modern period. The online collection covers key holdings with the scholarly apparatus Oxford brings to everything it catalogs.",
    why: "The antiquities collections, particularly the Egyptian, Cypriot, and Bronze Age materials, are significant research resources. The museum's founding is itself a primary source for the history of collecting and the origins of public museums.",
    tags: ["antiquities", "archaeology", "Oxford", "Egyptian art", "medieval art", "Asian art"],
    subject: "classical archaeology, art history, museum history",
    affiliation: "University of Oxford",
    openAccess: true,
    note: "The Ashmolean's founding collection included material from Elias Ashmole, who received it from the Tradescants, seventeenth-century collectors and plant hunters whose work is one of the founding documents of the natural history museum tradition."
  },


  /* ---- INSTITUTIONAL — EUROPE ---- */

  {
    name: "Deutsche Digitale Bibliothek",
    url: "https://www.deutsche-digitale-bibliothek.de/search",
    category: "institutional",
    subcategory: "Europe",
    description: "Germany's national digital library aggregates over 39 million objects from more than 700 cultural and scientific institutions: the German national library, state libraries, archives, museums, and research centers. It is the German counterpart to the DPLA and Europeana, searchable in German and English with filtering by institution, period, subject, and medium.",
    why: "Essential for German history, culture, and art research. The aggregation of materials from hundreds of institutions makes it significantly more efficient than searching each repository individually.",
    tags: ["German history", "aggregator", "multilingual", "archives", "museums", "open access"],
    subject: "German history, European history, cultural history",
    affiliation: "Deutsche Nationalbibliothek / German Federal Government",
    openAccess: true,
    note: "The DDB's data is governed by German copyright law, which differs from U.S. law in several significant ways. Public domain status varies by date and country of origin. Check individual item terms before reuse."
  },

  {
    name: "Europeana Newspapers",
    url: "https://www.europeana.eu/en/search?query=*&qf=PROVIDER:europeana-newspapers",
    category: "institutional",
    subcategory: "Europe",
    description: "A filtered view of Europeana's holdings focusing on digitized historical newspapers from European national libraries: over ten million pages from newspapers in Dutch, German, Finnish, French, and other European languages, many with full-text search capability. The collection is essential for comparative European press history and for research requiring cross-national newspaper sources.",
    why: "The most convenient access point for European historical newspapers across national language boundaries. Run in conjunction with Chronicling America and Papers Past for genuinely comparative international press history research.",
    tags: ["European newspapers", "multilingual", "historical press", "full-text", "primary sources"],
    subject: "European history, journalism history, press history",
    affiliation: "Europeana Foundation",
    openAccess: true,
    note: "Full-text searchability varies by language and institution. German, Dutch, and Finnish newspapers are generally well-indexed. Some collections are image-only without OCR text search."
  },

  {
    name: "ANNO — Austrian Newspapers Online",
    url: "https://anno.onb.ac.at",
    category: "institutional",
    subcategory: "Europe",
    description: "The Austrian National Library's ANNO portal provides full-text access to digitized Austrian newspapers and periodicals from 1622 to the present: over 600 newspaper titles, Habsburg-era illustrated weeklies, scientific journals, and cultural magazines. The collection documents the Habsburg Empire's multilingual press culture with unusual completeness, including papers in German, Czech, Italian, and other imperial languages.",
    why: "Essential for Habsburg and Central European history, the history of the German-language press, and for cross-cultural comparison of newspaper cultures across a multilingual empire. The illustrated weeklies from the nineteenth century are particularly vivid primary sources.",
    tags: ["Austrian newspapers", "Habsburg", "historical press", "German-language", "multilingual", "full-text"],
    subject: "Austrian history, Habsburg studies, press history",
    affiliation: "Österreichische Nationalbibliothek",
    openAccess: true,
    note: "The Neue Freie Presse archive, Vienna's most important nineteenth-century newspaper, is particularly complete on ANNO. The interface is primarily in German."
  },

  {
    name: "Manuscriptorium",
    url: "https://www.manuscriptorium.com",
    category: "institutional",
    subcategory: "Europe",
    description: "A European digital library for historical written resources: manuscripts, incunabula, early printed books, maps, and archival documents from partner institutions across Central Europe. Manuscriptorium aggregates materials from national libraries and research institutions in the Czech Republic, Austria, Germany, Slovakia, and beyond, with particular strength in Bohemian and Central European manuscript traditions.",
    why: "The most comprehensive digital access point for Central European manuscript heritage, covering traditions that fall between the major Western and Eastern European collections. Essential for research in medieval and early modern Central Europe.",
    tags: ["manuscripts", "incunabula", "Central Europe", "Czech Republic", "medieval", "aggregator"],
    subject: "manuscript studies, medieval history, Central European history",
    affiliation: "National Library of the Czech Republic",
    openAccess: true,
    note: "Full access to high-resolution images may require institutional registration for some partner collections. The catalog and thumbnails are freely accessible."
  },

  {
    name: "Getty Portal",
    url: "https://portal.getty.edu/search/",
    category: "institutional",
    subcategory: "Europe",
    description: "The Getty Portal aggregates digitized art history materials from partner institutions: auction catalogs, provenance records, photo archive images, and research documentation from museum libraries and research centers across Europe and the United States. It is less a collection than a research infrastructure: the interface for navigating the distributed art historical record that underpins scholarly work on European and American art.",
    why: "Most useful for provenance research, auction history, and art historical documentation. The aggregated auction catalog records are a significant resource for tracing the ownership histories of major works.",
    tags: ["provenance", "auction records", "art history", "photo archive", "research infrastructure"],
    subject: "art history, provenance research, art market history",
    affiliation: "J. Paul Getty Trust",
    openAccess: true,
    note: "The Getty Research Institute's special collections, searchable through the Portal, include the Archives of the History of Art and the Julius Held papers."
  },

  /* ---- INSTITUTIONAL — AMERICAS, ASIA, MIDDLE EAST & AFRICA ---- */

  {
    name: "Qatar Digital Library",
    url: "https://www.qdl.qa/en/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "A joint project of the British Library and Qatar Foundation, the Qatar Digital Library provides free access to hundreds of thousands of pages from the British Library's India Office Records: manuscripts, maps, photographs, official correspondence, and diplomatic records documenting the history of the Gulf, the Arabian Peninsula, and South Asia from the seventeenth century through the twentieth. Documents are available in English and Arabic with expert translation and contextual notes.",
    why: "An extraordinary primary source for the history of the Gulf, the Ottoman Empire, the British Raj, and the political archaeology of modern Middle Eastern borders. The India Office Records are some of the most significant historical documents for understanding how modern state boundaries in the Gulf were negotiated.",
    tags: ["Gulf history", "Middle East", "India Office Records", "British Empire", "Arabic", "bilingual", "primary sources"],
    subject: "Middle Eastern history, Gulf history, British imperial history",
    affiliation: "British Library / Qatar Foundation",
    openAccess: true,
    note: "The contextual essays and translation support make the QDL unusually accessible for researchers who are not specialists in Arabic or the specific administrative conventions of British colonial records. A model of bilingual digital scholarship."
  },

  {
    name: "Trove",
    url: "https://trove.nla.gov.au",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Australia's national digital library aggregates materials from hundreds of Australian institutions: newspapers, photographs, books, maps, music, archives, and research data. Over 900 million items. The digitized newspaper collection, covering Australian papers from the 1800s through the mid-twentieth century with full-text search, is the equal of Chronicling America and one of the most heavily used historical research databases in Australia.",
    why: "Essential for Australian history, and one of the best national digital library models in the world. The newspaper collection's quality is exceptional. The community annotation feature, which allows users to correct OCR errors, is both practically useful and a compelling model for participatory digital humanities.",
    tags: ["Australian history", "newspapers", "full-text", "aggregator", "community annotation", "open access"],
    subject: "Australian history, Pacific history, journalism history",
    affiliation: "National Library of Australia",
    openAccess: true,
    note: "Trove's community text correction program has accumulated millions of volunteer corrections to OCR newspaper text. It is a demonstration that community participation can improve digital library quality significantly."
  },

  {
    name: "Papers Past",
    url: "https://paperspast.natlib.govt.nz",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "New Zealand's Papers Past provides full-text searchable access to digitized New Zealand and Pacific newspapers and periodicals from 1839 to 1950, alongside government publications, letters, and diaries from the Alexander Turnbull Library. The collection documents New Zealand history through its press with unusual completeness, including Māori-language newspapers that are primary sources for indigenous history and language.",
    why: "Essential for New Zealand history and for the history of the Pacific. The Māori-language newspaper holdings are primary sources for Te Reo Māori and for Māori political and cultural history from the colonial period.",
    tags: ["New Zealand history", "Pacific history", "newspapers", "Māori history", "full-text"],
    subject: "Pacific history, New Zealand history, indigenous history",
    affiliation: "National Library of New Zealand",
    openAccess: true,
    note: "Papers Past includes the only large-scale digitization of nineteenth-century Māori-language newspapers in existence. These materials are significant not only historically but for contemporary Māori language revitalization efforts."
  },

  {
    name: "Digital Library of the Caribbean",
    url: "https://dloc.com",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "A collaborative digital library serving the Caribbean region, aggregating materials from libraries, archives, and cultural institutions across the Caribbean, Florida, and the broader diaspora. The collection covers newspapers, photographs, government documents, maps, and historical materials documenting Caribbean history, culture, and literature in English, French, Spanish, Dutch, and Creole languages.",
    why: "The most comprehensive digital access point for Caribbean history and culture, particularly valuable for research on colonialism, slavery, emancipation, and the twentieth-century independence movements. The multilingual coverage reflects the region's linguistic complexity.",
    tags: ["Caribbean history", "multilingual", "colonialism", "newspapers", "aggregator"],
    subject: "Caribbean history, Atlantic history, colonial history",
    affiliation: "University of Florida / Florida International University",
    openAccess: true,
    note: "The dLOC's metadata is available for download and reuse, making it useful for digital humanities projects involving Caribbean text mining and corpus analysis."
  },

  {
    name: "Digital South Asia Library",
    url: "https://dsal.uchicago.edu",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "The University of Chicago's Digital South Asia Library provides free access to a wide range of South Asian primary and reference materials: historical maps, statistical publications, encyclopedias, dictionaries, and periodicals covering South Asian history, languages, and cultures. The Dictionaries interface, providing searchable access to historical South Asian language dictionaries, is particularly significant for linguistic research.",
    why: "A foundational resource for South Asian studies. The historical map collection, the statistical publications from the colonial period, and the language dictionaries are primary sources that were previously difficult to access outside major research libraries.",
    tags: ["South Asian studies", "India", "maps", "dictionaries", "languages", "colonial history"],
    subject: "South Asian history, linguistics, colonial history",
    affiliation: "University of Chicago",
    openAccess: true,
    note: "The dictionary interface at dsal.uchicago.edu/dictionaries allows searching across multiple historical South Asian language dictionaries simultaneously. Significant for historical linguistics and philological research."
  },


  /* ---- INSTITUTIONAL — ACADEMIC TEXTS & BOOKS ---- */

  {
    name: "Project Gutenberg",
    url: "https://www.gutenberg.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "Founded in 1971 by Michael Hart, who typed the text of the U.S. Declaration of Independence into a computer and shared it, Project Gutenberg is the oldest digital library in existence. It holds over 70,000 freely available public domain ebooks, downloadable in multiple formats. The collection concentrates on English-language literature and history but covers many languages and subjects across the breadth of the public domain catalog.",
    why: "The first stop for full-text versions of public domain literary and historical texts. The plain-text and ePub formats make Gutenberg texts ideal for digital humanities projects involving text mining, corpus analysis, or close reading at scale.",
    tags: ["ebooks", "public domain", "full-text", "open access", "literature", "history"],
    subject: "literary history, book history, digital humanities",
    affiliation: "Project Gutenberg Literary Archive Foundation",
    openAccess: true,
    note: "Gutenberg's text quality varies by source and proofreading volunteer effort. The Distributed Proofreaders project (pgdp.net) coordinates community proofreading of digitized texts and is itself a model of participatory digital scholarship."
  },

  {
    name: "Open Library",
    url: "https://openlibrary.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "A project of the Internet Archive, Open Library aspires to be a web page for every book ever published. It currently catalogs over 20 million books, with full reading access to over 3 million. The controlled digital lending program allows borrowing of in-copyright works from the Archive's physical collections. The catalog's scope, drawing on library data from hundreds of institutions, makes it one of the most comprehensive bibliographic databases available for free.",
    why: "The best free general book catalog and one of the few resources offering borrowing access to in-copyright works outside institutional library membership. The catalog's API and open data make it useful for digital humanities projects involving bibliographic analysis.",
    tags: ["books", "catalog", "lending", "public domain", "open access", "Internet Archive"],
    subject: "book history, literary history, library science",
    affiliation: "Internet Archive",
    openAccess: true,
    note: "The controlled digital lending program has been challenged in court by publishers. Current access conditions may reflect ongoing litigation. Check current status before planning research dependent on CDL borrowing."
  },

  {
    name: "DOAB — Directory of Open Access Books",
    url: "https://www.doabooks.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "DOAB indexes over 80,000 peer-reviewed open-access academic books from over 700 publishers worldwide, all freely downloadable. It is the book equivalent of DOAJ and the most comprehensive discovery tool for academic monographs in all disciplines that are legally and permanently free to read, download, and share.",
    why: "The best single search point for open-access academic books. Essential for any research project where acquiring commercial academic books is not feasible. The peer-review verification distinguishes it from general open-access aggregators.",
    tags: ["open access", "academic books", "peer-reviewed", "monographs", "free download"],
    subject: "academic research, library science",
    affiliation: "OAPEN Foundation / OpenEdition",
    openAccess: true,
    note: "DOAB does not host the books it indexes; it provides discovery and verification of open-access status, linking to publisher-hosted PDFs. Links should be verified for current availability."
  },

  {
    name: "JSTOR Open Content",
    url: "https://www.jstor.org/open/",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "JSTOR's open-access tier provides free access to over 12 million academic articles, books, and primary sources, including the full archives of hundreds of journals whose content has aged into open access. The collection is strongest in humanities and social sciences. Registration is free for reading access to materials not covered by institutional subscriptions.",
    why: "For students without institutional library access, JSTOR Open provides meaningful coverage of the humanities scholarly record. The primary sources section, which includes pamphlets, archival documents, and illustrated works, extends utility beyond journal articles.",
    tags: ["academic", "peer-reviewed", "humanities", "social sciences", "open access"],
    subject: "academic research, humanities, social sciences",
    affiliation: "ITHAKA",
    openAccess: true,
    note: "JSTOR's full archive is a subscription product. The open-access tier covers a significant and growing portion of it. Institutional affiliation expands access considerably."
  },

  {
    name: "Perseus Digital Library",
    url: "https://www.perseus.tufts.edu",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "Built at Tufts University since 1987, Perseus is the foundational digital humanities library for classical antiquity: Greek and Latin texts with morphological analysis, linked translations, commentaries, encyclopedia entries, and historical atlas integration. Every Greek or Latin word in the corpus is parsed, which makes the collection uniquely navigable for students at every level of linguistic proficiency.",
    why: "Essential for classical studies at any level. The morphological analysis allows a student with no Greek to read a Greek text with vocabulary and grammatical help integrated inline. The linked commentaries and encyclopedia entries make it genuinely encyclopedic.",
    tags: ["classics", "Greek", "Latin", "ancient history", "morphological analysis", "full-text", "academic"],
    subject: "classical studies, ancient history, linguistics",
    affiliation: "Tufts University",
    openAccess: true,
    note: "Perseus has been foundational infrastructure for digital classical studies for nearly four decades. The newer Scaife Viewer (scaife.perseus.org) provides an improved reading interface for the same underlying texts."
  },

  {
    name: "Wikisource",
    url: "https://en.wikisource.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "Wikisource is a collaboratively maintained library of free-content texts: public domain books, historical documents, laws, speeches, and primary sources proofread and formatted by volunteer contributors following Wikimedia's quality standards. The English-language collection holds tens of thousands of texts. Quality varies by page and contributor, but the best-maintained texts are reliable primary sources.",
    why: "One of the best freely available sources for historical documents, political speeches, legislation, and public domain literary texts with reliable formatting. The verification system provides more quality control than an unmediated scan.",
    tags: ["primary sources", "public domain", "historical documents", "literature", "community-edited", "open access"],
    subject: "literary history, political history, primary sources",
    affiliation: "Wikimedia Foundation",
    openAccess: true,
    note: "Wikisource texts vary significantly in quality depending on volunteer proofreading effort. For scholarly citation, always compare against an authoritative print edition."
  },

  {
    name: "Early English Books Online (EEBO TCP)",
    url: "https://quod.lib.umich.edu/e/eebo/",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "EEBO contains digital images and text transcriptions of virtually everything printed in England, Ireland, Scotland, British North America, and other British territories from 1473 through 1700. The Text Creation Partnership transcribed over 60,000 titles to full-text XML; those transcriptions are now freely available at the above URL through the University of Michigan. Shakespeare, Donne, Milton, Bacon, and thousands of lesser-known contemporary voices are all here.",
    why: "Indispensable for any research in early modern English literature, history, science, religion, or culture. The TCP transcriptions at Michigan are the best free access point. The full image facsimiles remain a separate subscription product.",
    tags: ["early modern", "English literature", "history", "1473-1700", "full-text", "TCP", "primary sources"],
    subject: "early modern history, literary history, book history",
    affiliation: "University of Michigan / Text Creation Partnership",
    openAccess: true,
    note: "The full image facsimiles are a subscription product (ProQuest EEBO). The TCP full-text transcriptions at this URL are free. For citation, always verify the text against the facsimile for significant scholarly work."
  },

  {
    name: "British History Online",
    url: "https://www.british-history.ac.uk",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "A digital library of core printed sources for the history of Britain from the Middle Ages through the early twentieth century, produced by the Institute of Historical Research and the History of Parliament Trust. The collection includes county histories, calendars of state papers, ecclesiastical records, parliamentary proceedings, and urban histories: the essential secondary and primary literature for British historical research, much of it previously available only in specialized research libraries.",
    why: "The best single free resource for British local and national history. The Victoria County History series, partially digitized here, is the foundational reference for the history of English counties. Parliamentary proceedings and state paper calendars are essential for political history.",
    tags: ["British history", "medieval", "early modern", "parliament", "county history", "primary sources"],
    subject: "British history, local history, political history",
    affiliation: "Institute of Historical Research / University of London",
    openAccess: true,
    note: "Subscription access extends search and download capabilities, but a substantial portion of the text corpus is freely accessible. The free tier is adequate for most research needs."
  },

  {
    name: "HebrewBooks.org",
    url: "https://hebrewbooks.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "A nonprofit digital library of Hebrew and Yiddish texts: over 80,000 books including halakhic works, responsa literature, rabbinic commentaries, Hasidic texts, and pre-Holocaust European Jewish publications. Many of these texts exist in no other digitized form. The collection is both a research resource and a preservation project: a significant portion of the physical books that HebrewBooks.org has digitized were held by individuals and small institutions facing institutional fragility.",
    why: "The most comprehensive freely available digital library of Hebrew religious and scholarly texts. Essential for Jewish studies at any level and for research in religious history, diaspora history, and the history of the book in Jewish communities.",
    tags: ["Hebrew", "Yiddish", "Jewish studies", "religious texts", "preservation", "open access"],
    subject: "Jewish studies, religious history, Yiddish studies",
    affiliation: "HebrewBooks.org (nonprofit)",
    openAccess: true,
    note: "The collection's preservation of pre-Holocaust Eastern European Jewish publishing constitutes a form of cultural memory with no institutional equivalent. Many texts here were published in cities whose Jewish communities were destroyed in the Second World War."
  },

  /* ---- INSTITUTIONAL — GOVERNMENT & DECLASSIFIED ---- */

  {
    name: "CIA FOIA Reading Room",
    url: "https://www.cia.gov/readingroom/",
    category: "institutional",
    subcategory: "Government & Declassified",
    description: "The Central Intelligence Agency's Freedom of Information Act Reading Room provides public access to declassified documents: historical intelligence assessments, operational files, analysis reports, and the full CREST database of over 13 million pages of declassified CIA documents. The collection includes the STARGATE files (parapsychology research), MKULTRA documents (behavioral control experiments), and extensive Cold War intelligence materials.",
    why: "A primary source of the first order for Cold War history, American foreign policy, and the history of intelligence agencies. The ability to search across declassified documents that were previously accessible only in person at CIA headquarters represents a significant expansion of historical research access.",
    tags: ["declassified", "CIA", "Cold War", "intelligence history", "FOIA", "primary sources", "federal"],
    subject: "Cold War history, intelligence history, American foreign policy",
    affiliation: "Central Intelligence Agency (U.S. Federal Government)",
    openAccess: true,
    note: "The CREST database, fully online since 2017, was previously accessible only at CIA headquarters in Langley. The STARGATE files, documenting psychic research funded by the U.S. government, are among the more remarkable primary sources in any government archive."
  },




  /* ---- ART MUSEUMS (new U.S. entries) ---- */

  {
    name: "Detroit Institute of Arts",
    url: "https://dia.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The DIA's encyclopedic collection spans 5,000 years and is anchored by two things that guarantee its place in any serious art history syllabus: Diego Rivera's Detroit Industry murals, twenty-seven fresco panels covering the four walls of the Garden Court and constituting one of the great works of public art in North America, and one of the finest collections of German Expressionist painting in the United States. The museum became a flashpoint for debates about municipal bankruptcy and cultural patrimony when the City of Detroit's 2013 bankruptcy raised the possibility of selling the collection to pay creditors.",
    why: "The Rivera murals are a primary source for the intersections of labor history, industrial capitalism, and public art. The German Expressionist holdings are essential for research in that movement. The 2013 bankruptcy controversy is itself a case study in how communities assign value to cultural institutions.",
    tags: ["art", "Rivera murals", "German Expressionism", "encyclopedic", "labor history"],
    subject: "art history, labor history, German Expressionism",
    affiliation: "City of Detroit / DIA Corp.",
    openAccess: true,
    note: "The Grand Bargain that saved the DIA's collection during Detroit's bankruptcy, involving state government, foundations, and the museum itself, is one of the more remarkable episodes in recent American cultural policy. The full story is worth knowing."
  },

  {
    name: "Denver Art Museum",
    url: "https://www.denverartmuseum.org/en/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Denver Art Museum holds one of the most significant collections of Native American art in the country, assembled across all regions and periods with a depth that few encyclopedic museums can match. The collection is also strong in Spanish Colonial art, pre-Columbian material, and Western American art. Daniel Libeskind's titanium-clad Frederic C. Hamilton Building, opened in 2006, made the architecture itself a conversation about form and meaning in the American West.",
    why: "The Native American collections are primary sources for any research in indigenous art, material culture, or the history of collecting indigenous objects. The Spanish Colonial holdings fill a gap that East Coast encyclopedic museums rarely address.",
    tags: ["Native American art", "Spanish Colonial", "pre-Columbian", "Western American art", "encyclopedic"],
    subject: "art history, Native American studies, Spanish colonial history",
    affiliation: "Denver Art Museum",
    openAccess: true,
    note: "The DAM's Native American art collection is organized with input from tribal community members and curated to reflect indigenous perspectives on the objects, which is a relatively recent and significant shift in how encyclopedic museums handle these holdings."
  },

  {
    name: "Seattle Art Museum",
    url: "https://www.seattleartmuseum.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Seattle Art Museum's collection reflects its geographic position on the Pacific Rim: exceptional holdings in African art, Pacific Northwest Coast indigenous art, and Asian art sit alongside strong European and American collections. The Olympic Sculpture Park, a nine-acre outdoor space on the Elliott Bay waterfront, integrates the permanent collection with landscape in ways that most encyclopedic museums cannot attempt. The institution also operates SAM's downtown campus and the Seattle Asian Art Museum.",
    why: "The Pacific Northwest Coast indigenous art holdings are among the most significant anywhere, and are primary sources for research in Haida, Tlingit, Coast Salish, and related traditions. The African art collection is one of the strongest on the West Coast.",
    tags: ["Pacific Northwest art", "Native American art", "African art", "Asian art", "encyclopedic"],
    subject: "art history, Pacific Northwest indigenous art, African art",
    affiliation: "Seattle Art Museum",
    openAccess: true,
    note: "SAM's Native art holdings include objects collected in the nineteenth century alongside contemporary work by living indigenous artists, which allows the collection to function as both archive and living cultural record."
  },

  {
    name: "Saint Louis Art Museum",
    url: "https://www.slam.org/collection/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Free and encyclopedic, the Saint Louis Art Museum covers the full sweep of world art with particular strength in German Expressionism, pre-Columbian art, ancient art of the Americas, and Oceanic material. It sits in Forest Park, which houses one of the finest concentrations of free cultural institutions in the United States. The SLAM's permanent collection includes over 30,000 objects, and its online database provides strong access to that range.",
    why: "The pre-Columbian and ancient Americas collection is substantial and comparatively underknown. The German Expressionist holdings complement those at the DIA for research in the movement's full scope. Free admission makes it a model of public access to encyclopedic collecting.",
    tags: ["art", "German Expressionism", "pre-Columbian", "Oceanic art", "encyclopedic", "free admission"],
    subject: "art history, German Expressionism, pre-Columbian art",
    affiliation: "Saint Louis Art Museum",
    openAccess: true,
    note: "Forest Park's cluster of free institutions, including the zoo, the science center, and SLAM, is a useful case study in how civic investment in public cultural infrastructure can shape a city's character. It is also, practically, a very good day."
  },

  {
    name: "Nelson-Atkins Museum",
    url: "https://nelson-atkins.org/art/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Nelson-Atkins in Kansas City is one of those encyclopedic museums whose quality consistently surprises visitors expecting something provincial. The Asian art collection is one of the finest in the Western Hemisphere, with exceptional Chinese bronzes, Buddhist sculpture, and Japanese prints. Henry Moore's monumental bronzes populate the sculpture park. Claes Oldenburg and Coosje van Bruggen's four giant Shuttlecocks grace the south lawn with the kind of cheerful absurdity that makes the whole enterprise seem worth doing.",
    why: "The Asian art holdings, particularly the Chinese bronzes and Tang dynasty material, are primary sources for research in those areas. The photography collection, one of the oldest dedicated photography collections at an American museum, is significant for the history of the medium.",
    tags: ["Asian art", "photography", "sculpture", "Chinese bronzes", "encyclopedic", "Henry Moore"],
    subject: "art history, Asian art, photography history",
    affiliation: "Nelson-Atkins Museum of Art",
    openAccess: true,
    note: "The Nelson-Atkins houses the Hall Family Collection of photography, one of the most significant photography collections in the Midwest, and has a long institutional commitment to photography as a fine art form predating its wider acceptance."
  },

  {
    name: "Dallas Museum of Art",
    url: "https://collection.dma.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The DMA eliminated admission fees permanently in 2013, a significant policy decision that positioned it as a genuinely public institution rather than a ticketed attraction. Its encyclopedic collection covers nearly 5,000 years with particular strength in decorative arts and design, pre-Columbian and Pacific art, and African art. The permanent collection building and collections are freely accessible, supported by city funding and private philanthropy.",
    why: "The free admission policy makes it a productive case study in museum access and funding models. The pre-Columbian and African collections are primary sources for those fields. The decorative arts holdings are strong for design history.",
    tags: ["art", "decorative arts", "pre-Columbian", "African art", "free admission", "encyclopedic"],
    subject: "art history, decorative arts, pre-Columbian art",
    affiliation: "Dallas Museum of Art",
    openAccess: true,
    note: "The DMA's free admission model is funded by a combination of city support, private philanthropy, and earned revenue. Its sustainability over more than a decade makes it one of the more useful data points in ongoing debates about museum access pricing."
  },

  {
    name: "Museum of Fine Arts Houston",
    url: "https://emuseum.mfah.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The MFAH is one of the largest art museums in the United States: an encyclopedic collection spanning antiquity to the present, spread across two main buildings designed by Ludwig Mies van der Rohe and Rafael Moneo, a decorative arts and design building, and two house museums. The collection is particularly strong in Latin American art, Impressionism and Post-Impressionism, and photography. The Glassell School, integrated with the museum, is one of the country's most significant art school and museum partnerships.",
    why: "The Latin American art holdings are among the strongest in North America, making the MFAH essential for research in that area. The Mesoamerican and pre-Columbian collections are also significant primary sources.",
    tags: ["Latin American art", "Impressionism", "photography", "encyclopedic", "Mies van der Rohe"],
    subject: "art history, Latin American art, photography",
    affiliation: "Museum of Fine Arts, Houston",
    openAccess: true,
    note: "The MFAH's Campus is a case study in architectural patronage: the Audrey Jones Beck Building by Rafael Moneo and the Caroline Wiess Law Building by Mies van der Rohe represent two significant moments in museum architecture on a single campus."
  },

  {
    name: "Portland Art Museum",
    url: "https://collections.portlandartmuseum.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Pacific Northwest's oldest art museum holds a collection with particular strength in Native American art of the Northwest Coast, Japanese prints, and the work of artists from the region. The Northwest Coast indigenous collection, assembled with sustained institutional commitment, includes ceremonial objects, everyday tools, and works that span the full range of material culture from the region's major nations. The museum sits at the intersection of the region's colonial history and its contemporary indigenous cultural presence.",
    why: "The Northwest Coast indigenous collection is one of the primary research resources for that tradition and is particularly strong for comparative work with SAM's holdings. The Japanese print collection has been a core strength since the museum's early years.",
    tags: ["Northwest Coast art", "Native American art", "Japanese prints", "Pacific Northwest", "regional"],
    subject: "art history, Pacific Northwest indigenous art",
    affiliation: "Portland Art Museum",
    openAccess: true,
    note: "The Portland Art Museum's Native American art holdings have been the subject of NAGPRA repatriation processes for several decades. The records of those processes are primary sources for the ethics and practice of repatriation."
  },

  {
    name: "Toledo Museum of Art",
    url: "https://www.toledomuseum.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Free to the public since its founding in 1901, the Toledo Museum of Art holds an encyclopedic collection with world-renowned strength in glass: ancient, medieval, and modern glass in a collection that reflects Toledo's industrial history as a center of glass manufacturing. The paintings collection is strong across European and American work. The Glass Pavilion, a 2006 Sanaa-designed structure made entirely of transparent and translucent glass, is as much an object as a building.",
    why: "The glass collection is the finest and most comprehensive in the world and an essential primary source for the history of the medium across cultures and millennia. The Glass Pavilion is itself a significant work of contemporary architecture.",
    tags: ["glass", "European painting", "American art", "encyclopedic", "free admission", "SANAA"],
    subject: "art history, glass history, industrial history",
    affiliation: "Toledo Museum of Art",
    openAccess: true,
    note: "Toledo, Ohio was a major center of American glass manufacturing from the nineteenth century. The Toledo Museum's glass collection embodies the relationship between industrial heritage and fine art collecting that shaped many Midwest encyclopedic museums."
  },

  {
    name: "High Museum of Art",
    url: "https://collections.high.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The High is the leading art museum in the American Southeast, with collections spanning American art, European painting, photography, African art, and decorative arts. Richard Meier's 1983 building is a landmark of postmodern museum architecture. The photography collection, built with deliberate scope and quality, is one of the strongest in the South. The museum's ongoing loan relationships with the Louvre have brought major European exhibitions to audiences outside the traditional coastal museum circuit.",
    why: "The photography collection and the American art holdings are particularly valuable for research in those areas. The museum's role as the primary encyclopedic collecting institution for the Southeast makes it a case study in how geography shapes institutional collecting priorities.",
    tags: ["American art", "photography", "African art", "European painting", "Richard Meier architecture"],
    subject: "art history, photography, American art",
    affiliation: "High Museum of Art",
    openAccess: true,
    note: "The High's partnership with the Louvre, which has brought major Louvre exhibitions to Atlanta since 2006, is one of the more sustained institutional loan relationships between an American museum and a major European institution."
  },

  {
    name: "Newfields",
    url: "https://collection.newfields.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The art museum in Indianapolis, rebranded as Newfields to encompass its art, gardens, and nature park, holds a significant encyclopedic collection built on a rare institutional foundation: the museum was created with a large endowment from multiple donors before it had a single work of art, which means it has never needed to charge admission to the permanent collection. The holdings are strong in Dutch and Flemish painting, Asian art, and American art. The gardens, designed in the English landscape tradition, are among the finest in the Midwest.",
    why: "The Dutch and Flemish painting collection, assembled in the early twentieth century when major works were accessible, is of genuine scholarly quality. The institution's endowment model, which enables genuinely free access, is one of the most discussed in American museum studies.",
    tags: ["Dutch painting", "Flemish painting", "Asian art", "American art", "encyclopedic", "free admission"],
    subject: "art history, Dutch and Flemish painting",
    affiliation: "Newfields / Indianapolis Museum of Art",
    openAccess: true,
    note: "The museum's endowment was assembled by multiple Indianapolis families in the early twentieth century, making it one of the few encyclopedic museums in America not dependent on admission revenue or annual fund appeals for its basic operations."
  },

  {
    name: "Isabella Stewart Gardner Museum",
    url: "https://www.gardnermuseum.org/collection/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Isabella Stewart Gardner built her collection and her museum as a single indivisible work of art, and her will forbids the permanent rearrangement of a single object. Every work hangs where she placed it. On March 18, 1990, thieves disguised as police officers entered the Gardner and stole thirteen works, including Vermeer's The Concert, three Rembrandts, and a Manet: the largest unsolved art theft in history. Thirty-five years later, the frames still hang empty on the walls where the stolen works belonged, waiting for their return.",
    why: "The Gardner is essential for Italian Renaissance and Baroque research, Dutch Golden Age painting, and the history of American collecting. The 1990 theft and its decades-long investigation are one of the primary cases in art crime studies and have generated a significant literature worth knowing.",
    tags: ["Vermeer", "Rembrandt", "Italian Renaissance", "Isabella Stewart Gardner", "art theft", "unsolved"],
    subject: "art history, European painting, art crime",
    affiliation: "Isabella Stewart Gardner Museum",
    openAccess: true,
    note: "The FBI maintains an active investigation into the 1990 theft. The reward for information leading to the recovery of the works is $10 million. The empty frames are themselves primary sources: memorials to what was taken and evidence of the institutional commitment to not filling the absence."
  },

  {
    name: "Winterthur",
    url: "http://museumcollection.winterthur.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Henry Francis du Pont's former country estate in Delaware now holds the most comprehensive collection of American decorative arts in existence: 90,000 objects made or used in America from 1640 to 1860, installed in 175 period room settings that preserve the original material environments of American domestic life. The Winterthur Library holds 500,000 items on the history of American art, architecture, and material culture. There is no more complete record of how Americans furnished and inhabited their homes across two centuries.",
    why: "Indispensable for American decorative arts, material culture, and the history of the domestic interior. The period room installations are primary sources in themselves: they document how objects were used together in real spaces, which no photograph or catalog entry can replicate. The library is essential for provenance and attribution research.",
    tags: ["American decorative arts", "period rooms", "material culture", "furniture", "silver", "ceramics"],
    subject: "American decorative arts, material culture, colonial history",
    affiliation: "Winterthur Museum, Garden & Library",
    openAccess: true,
    note: "The Winterthur Program in American Material Culture, run jointly with the University of Delaware, is the leading graduate program in the field. The museum and program together have trained most of the scholars currently working in American decorative arts."
  },

  {
    name: "Cooper Hewitt",
    url: "https://collection.cooperhewitt.org/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Smithsonian's design museum occupies Andrew Carnegie's Georgian Revival mansion on Fifth Avenue and holds the most comprehensive design collection in the United States: over 210,000 objects spanning 3,000 years of design history across textiles, wallcoverings, product design, graphic design, jewelry, and drawings. The digital collection is one of the most developer-friendly in the Smithsonian system, with a well-documented API and a significant body of open-access images. The interactive Pen, which allows visitors to collect and explore objects from the physical galleries, is one of the more thoughtful museum technology experiments of the past decade.",
    why: "The primary U.S. resource for design history research. Essential for research in textile history, wallcovering, graphic design, product design, and the history of American industrial design. The API and open data make it exceptionally useful for digital humanities projects.",
    tags: ["design", "textiles", "graphic design", "product design", "open access", "API", "Smithsonian"],
    subject: "design history, material culture, graphic design history",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "Cooper Hewitt's collection database is available via a public API under a CC0 license, making it one of the most reusable museum datasets in existence. The GitHub repository includes documentation and sample code."
  },

  {
    name: "Hirshhorn Museum and Sculpture Garden",
    url: "https://hirshhorn.si.edu/collection/search/",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Joseph Hirshhorn's gift to the nation became the Smithsonian's modern and contemporary art museum: a collection of over 12,000 works that covers the twentieth century with particular depth in Abstract Expressionism, Minimalism, Post-Minimalism, and contemporary international work. The outdoor sculpture garden holds one of the finest collections of twentieth-century sculpture in the world. The cylindrical Gordon Bunshaft building, opened in 1974, generated significant architectural controversy and has since become a beloved landmark.",
    why: "Essential for modern and contemporary art research, particularly for American movements from Abstract Expressionism through the 1980s. The sculpture collection is a primary source for the history of three-dimensional work in the twentieth century.",
    tags: ["modern art", "contemporary art", "sculpture", "Abstract Expressionism", "Minimalism", "Smithsonian"],
    subject: "modern art, contemporary art, sculpture",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "The Hirshhorn's Directions series, which has commissioned temporary installations since the 1980s, is one of the longest-running programs for artist-in-residence and site-specific work at an American institution."
  },

  {
    name: "National Museum of the American Indian",
    url: "https://americanindian.si.edu/collections/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The NMAI holds one of the world's most expansive collections of Native American cultural objects, sacred items, and historical materials: over 825,000 objects representing more than 12,000 years of indigenous history in the Americas. The museum operates from two campuses, Washington and New York, and was designed with direct community involvement from Native nations. The collection's scope extends across North, South, and Central America.",
    why: "The most comprehensive institutional collection of indigenous American material culture. The collection database is significant for research in any indigenous American tradition, and the museum's community-centered curatorial approach makes it a model for how institutions engage with living cultures whose material heritage they hold.",
    tags: ["Native American art", "indigenous Americas", "cultural objects", "sacred items", "Smithsonian"],
    subject: "Native American studies, indigenous history, art history",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "The NMAI's NAGPRA compliance and repatriation program has returned thousands of items to tribal communities since the museum's 1994 opening. The documentation of those repatriations is a significant primary source for the history of indigenous cultural property law."
  },

  {
    name: "Freer Gallery / Sackler Gallery",
    url: "https://asia-archive.si.edu/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Smithsonian's two Asian art museums, physically connected underground, together hold one of the finest collections of Asian art in the Western world: Chinese bronzes, Japanese painting, Islamic manuscripts, South Asian sculpture, and the largest collection of works by James McNeill Whistler outside Britain. Charles Lang Freer's bequest was the first gift of a private art collection to the nation, and it came with a significant restriction: no loans outside the institution, a policy Freer believed would preserve the integrity of his vision.",
    why: "Essential for Asian art research across all traditions. The Whistler holdings, including the Peacock Room, are primary sources for Aesthetic movement studies and the relationship between Western collecting and East Asian art. The no-loans policy means that seeing the Freer collection in person remains necessary for certain research.",
    tags: ["Asian art", "Chinese bronzes", "Japanese painting", "Islamic manuscripts", "Whistler", "Smithsonian"],
    subject: "Asian art, art history, Aesthetic movement",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "Charles Freer's no-loans policy, still in effect, has generated significant scholarly debate about the ethics and practicality of restrictions placed on museum collections by donors. The Peacock Room, Whistler's most complete decorative scheme, can only be seen in Washington."
  },

  {
    name: "National Cowboy & Western Heritage Museum",
    url: "https://collections.nationalcowboymuseum.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The most comprehensive collection devoted to the art, history, and culture of the American West: over 28,000 objects including Western American paintings and sculpture, rodeo history, firearms, Native American material culture, and the archives of Western film. Frederic Remington and Charles M. Russell are represented in depth. The Rodeo Hall of Fame, the Western Performers Hall of Fame, and the extensive film archive document popular culture's engagement with Western mythology as a primary source.",
    why: "The Western American painting collection, particularly Remington and Russell, is a primary source for the iconography of the American West and its relationship to settler colonialism and popular mythology. The film archive is invaluable for Western film studies.",
    tags: ["Western American art", "Remington", "Russell", "rodeo", "Native American", "Western film"],
    subject: "American art, Western history, popular culture",
    affiliation: "National Cowboy & Western Heritage Museum",
    openAccess: true,
    note: "The museum's collection of Western film memorabilia and its Hall of Fame documentation make it an unusual resource for popular culture research. The relationship between Western art and the mythology of the frontier is one of the richer problems in American cultural history."
  },

  {
    name: "Autry Museum of the American West",
    url: "https://collections.theautry.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Founded by singing cowboy Gene Autry in 1988 and now significantly enlarged by its merger with the Museum of the American West, the Autry holds over 500,000 objects documenting the history, art, and cultures of the American West with particular attention to Native American and Latino communities alongside Anglo settler culture. The Southwest Museum of the American Indian collection, one of the oldest indigenous American collections on the West Coast, is now accessible through the Autry's digital portal.",
    why: "The Southwest Museum's indigenous collections are primary sources for California and Southwest indigenous art and material culture. The breadth of the Autry's approach to Western history, centering multiple communities rather than the Anglo settler narrative alone, reflects a significant shift in how the West is museologically framed.",
    tags: ["American West", "Native American art", "Latino history", "Southwest collection", "Los Angeles"],
    subject: "Western American history, indigenous studies, California history",
    affiliation: "Autry Museum of the American West",
    openAccess: true,
    note: "The Southwest Museum of the American Indian was founded in 1914 by Charles Fletcher Lummis, who was simultaneously a promoter of the Spanish colonial heritage of California and a complicated advocate for Native rights. That contradiction runs through the collection."
  },

  {
    name: "Gilcrease Museum",
    url: "https://collections.gilcrease.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "Thomas Gilcrease, who grew up in the Muscogee (Creek) Nation and made his fortune in Oklahoma oil, spent thirty years assembling what became the world's largest collection of art and artifacts of the American West. The 10,000 paintings, 250,000 archaeological objects, and 100,000 archival items document American history with a focus shaped by his own heritage: Indigenous peoples, not settlers, are the central figure in this telling of American history. The building is currently closed for reconstruction; the online collection remains fully accessible.",
    why: "The collection's perspective, assembled by a Muscogee man from materials documenting his own people's history and land, makes it a primary source of a different kind than most Western art collections. The archival holdings include manuscripts by Cherokee Chief John Ross and Choctaw leader Peter Pitchlynn.",
    tags: ["American West", "Native American art", "Remington", "Russell", "archives", "pre-Columbian"],
    subject: "American art, Western history, Native American history",
    affiliation: "City of Tulsa / University of Tulsa",
    openAccess: true,
    note: "Gilcrease is currently closed for construction of a new building, expected to reopen approximately 2027. The online collection at collections.gilcrease.org remains fully searchable. The Helmerich Center for American Research holds over 100,000 books, maps, and documents for in-person use."
  },

  {
    name: "Heard Museum",
    url: "https://collections.heard.org/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Heard Museum in Phoenix is dedicated to the advancement of American Indian art, presenting Native stories from a first-person perspective rather than through the lens of ethnographic distance. The collection of over 40,000 objects concentrates on indigenous peoples of the Southwest, with particular strength in Hopi, Navajo, and Pueblo material. The Billie Jane Baguley Library and Archives holds the largest collection of files on Native American artists in existence: over 25,000 individual artist records, continuously updated with cooperation from the artists themselves.",
    why: "The artist files in the Billie Jane Baguley Library are the most comprehensive documentation of Native American artists in any institution. The boarding school exhibit, Away From Home, is one of the most important existing engagements with the history of forced assimilation in American museums.",
    tags: ["Native American art", "Southwest indigenous art", "Hopi", "Navajo", "Pueblo", "artist files"],
    subject: "Native American art, indigenous history, Southwest studies",
    affiliation: "Heard Museum",
    openAccess: true,
    note: "The Heard is located on O'otham Jeved, land of the Akimel O'otham people. The museum's land acknowledgment and its institutional relationship with the communities whose art it holds are worth examining as a model of how institutions can engage honestly with their history."
  },

  {
    name: "Nez Perce National Historical Park",
    url: "https://nezpercemuseum.org/collections/search",
    category: "institutional",
    subcategory: "Art Museums",
    description: "The Nez Perce (Nimíipuu) people's history and material culture are documented through the National Park Service's Nez Perce National Historical Park, which maintains a distributed collection across 38 sites in four states. The online collection provides access to cultural objects, photographs, and documents that preserve the Nez Perce record across the periods of contact, treaty negotiation, and the 1877 war.",
    why: "A primary source for Nez Perce history, material culture, and the history of nineteenth-century conflicts between the U.S. government and indigenous nations in the Pacific Northwest. The distributed nature of the park across 38 sites is itself a document of how Nez Perce history is written across the landscape.",
    tags: ["Nez Perce", "Native American history", "Pacific Northwest", "NPS", "indigenous history"],
    subject: "Native American history, Pacific Northwest history, indigenous studies",
    affiliation: "National Park Service (U.S. Federal Government)",
    openAccess: true,
    note: "The Nez Perce War of 1877, in which Chief Joseph led approximately 700 Nimíipuu people on a 1,170-mile retreat toward Canada before surrendering, is documented in the park's collection and literature. Chief Joseph's surrender speech is one of the most significant primary sources in American indigenous history."
  },

  /* ---- AMERICAS, ASIA, MIDDLE EAST & AFRICA (new entries) ---- */

  {
    name: "Louvre Abu Dhabi",
    url: "https://collections.louvreabudhabi.ae/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Louvre Abu Dhabi is an encyclopedic museum built around a radical organizing principle: instead of arranging a collection by culture or period, it arranges it by shared human story. Works from different civilizations that address the same themes hang together, placing an Egyptian funerary mask beside a Japanese Noh mask beside a Mesoamerican death figure. Jean Nouvel's dome, which casts a latticed shadow across the galleries below, is itself one of the architectural works of the century. The digital collection provides access to key holdings.",
    why: "The collection's comparative, trans-civilizational arrangement makes it a useful teaching tool for discussions of how curatorial framing shapes meaning. What you see when you walk through a museum reflects choices about what counts as universal and what counts as local, and Louvre Abu Dhabi has made those choices more visible than most.",
    tags: ["encyclopedic", "intercultural", "Islamic art", "world history", "Jean Nouvel", "Abu Dhabi"],
    subject: "art history, world cultures, museum studies",
    affiliation: "Agence France-Muséums / Department of Culture and Tourism Abu Dhabi",
    openAccess: true,
    note: "The Louvre Abu Dhabi's thirty-year agreement with the French government, which licenses the Louvre name and loans works from French national collections, was controversial both in France and internationally. The terms and debates of that agreement are worth understanding."
  },

  {
    name: "Topkapi Palace Museum",
    url: "https://topkapi-palace.museum/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "For over four centuries, Topkapi Palace was the administrative and ceremonial heart of the Ottoman Empire, and the museum that now occupies it holds what that empire accumulated: imperial regalia, Qur'ans, relics, Chinese porcelain, Ottoman miniatures, arms and armor, and treasury objects of staggering material richness. The collection documents the Ottoman imperial court at its height and is a primary source for Islamic art, Ottoman history, and the material culture of one of history's great empires.",
    why: "Essential for Ottoman history, Islamic art, and the history of the Eastern Mediterranean. The collection of Qur'anic manuscripts and the treasury objects are primary sources for Ottoman court culture that have no equivalent elsewhere.",
    tags: ["Ottoman history", "Islamic art", "imperial regalia", "Turkish history", "manuscripts"],
    subject: "Ottoman history, Islamic art, Turkish history",
    affiliation: "Republic of Turkey / Ministry of Culture and Tourism",
    openAccess: true,
    note: "The Topkapi's collection includes the mantle of the Prophet Muhammad and other relics that make it an important site for Islamic history. The transition of the adjacent Hagia Sophia from museum to mosque in 2020 has affected the broader heritage landscape of which the Palace is part."
  },

  {
    name: "Acropolis Museum",
    url: "https://www.theacropolismuseum.gr/en/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Built at the foot of the Acropolis to house the finds from the rock and its slopes, the Acropolis Museum is one of the most significant archaeological museums in the world. The collection traces the history of the Acropolis from prehistoric occupation through the Classical period, with the Archaic gallery and the Parthenon gallery among the most important displays of ancient Greek sculpture anywhere. The museum was built partly to make the case for the return of the Elgin Marbles from the British Museum, and its empty frames, where the Parthenon frieze would be reunited, make that argument architecturally.",
    why: "Indispensable for classical archaeology and ancient Greek art. The Parthenon gallery, which displays the surviving frieze fragments in their original order with casts where originals are missing, is both a primary source and a political statement about cultural repatriation that every student of museums should encounter.",
    tags: ["Greek antiquity", "Parthenon", "Classical archaeology", "Elgin Marbles", "Athens"],
    subject: "classical archaeology, ancient Greek art, repatriation",
    affiliation: "Hellenic Republic / Ministry of Culture",
    openAccess: true,
    note: "The Acropolis Museum's design, by Bernard Tschumi, includes a glass floor revealing excavations below the building. The gallery intentionally faces the Acropolis so that visitors can see where the sculptures came from. The repatriation argument is architectural as well as political."
  },

  {
    name: "Tokyo National Museum",
    url: "https://www.tnm.jp/modules/r_collection/index.php?controller=top",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Japan's oldest and largest museum holds over 120,000 objects representing the full range of Japanese art and archaeology alongside significant collections of Asian art from across the continent. The collection includes national treasures and important cultural properties: lacquerware, ceramics, swords, Buddhist sculpture, paintings, textiles, and archaeological finds spanning the Jomon period through the Edo era. The Ueno campus, with its multiple buildings including one designed in the Imperial Crown style, is itself a historical document.",
    why: "The primary reference collection for Japanese art history. The national treasure designations provide a useful curriculum for understanding what Japan has officially determined to be its most significant cultural artifacts and why those determinations were made.",
    tags: ["Japanese art", "Japanese history", "Buddhist sculpture", "national treasures", "Asian art"],
    subject: "Japanese art history, Asian art, archaeological history",
    affiliation: "Independent Administrative Institution National Institutes for Cultural Heritage",
    openAccess: true,
    note: "The TNM's online collection is available in English and Japanese. The e-museum portal (emuseum.nich.go.jp) aggregates collections from multiple Japanese national museums and is worth exploring alongside the TNM's own interface."
  },

  {
    name: "Kyoto National Museum",
    url: "https://www.kyohaku.go.jp/eng/search/index.html",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "While Tokyo holds the national collection, Kyoto holds the collection most deeply connected to the city that was Japan's imperial capital for over a millennium. The Kyoto National Museum holds over 15,000 objects with particular strength in Buddhist art, Heian and Kamakura period works, tea ceremony objects, and the arts of the imperial court. The collection reflects Kyoto's central role in Japanese art history and religious life.",
    why: "Essential for Heian and Kamakura period Japanese art, court culture, and Buddhist sculpture. The tea ceremony collection is a primary source for the history of the chado tradition. Complements the TNM's holdings with a distinctly Kyoto-centered perspective.",
    tags: ["Japanese art", "Buddhist art", "Heian period", "Kamakura period", "tea ceremony", "Kyoto"],
    subject: "Japanese art history, Buddhist art, court culture",
    affiliation: "Independent Administrative Institution National Institutes for Cultural Heritage",
    openAccess: true,
    note: "The Kyoto National Museum's spring and fall special exhibitions, which display temple and shrine treasures normally kept from public view, are among the most significant periodic exhibitions in East Asian art."
  },

  {
    name: "Egyptian Museum (Cairo)",
    url: "https://egyptianmuseum.org",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "The Egyptian Museum on Tahrir Square, opened in 1902, holds the world's most extensive collection of ancient Egyptian antiquities: over 120,000 objects spanning three thousand years of pharaonic civilization, from predynastic artifacts through the Greco-Roman period. The Tutankhamun treasures, the royal mummy room, and the collection of papyri are primary sources of immeasurable significance. As the Grand Egyptian Museum at Giza comes fully online, the Tahrir collection is being reorganized and some holdings redistributed.",
    why: "The most comprehensive collection of ancient Egyptian material culture in existence. For any research in Egyptology, the Cairo collection is the primary reference point. The museum's ongoing reorganization and the opening of the Grand Egyptian Museum represent a significant moment in how Egypt is choosing to present its own heritage.",
    tags: ["Egyptian antiquities", "Tutankhamun", "ancient Egypt", "mummies", "papyri", "pharaonic"],
    subject: "Egyptology, ancient history, archaeology",
    affiliation: "Egyptian Ministry of Tourism and Antiquities",
    openAccess: true,
    note: "The Grand Egyptian Museum at Giza, which began opening galleries in 2023, is designed to eventually house the full Tutankhamun treasure alongside much of the Tahrir collection. The two institutions will coexist; the Tahrir museum is expected to become a museum of Egyptian museum history as much as a collection."
  },

  {
    name: "Canadian Museum of History",
    url: "https://www.historymuseum.ca/collections/search/",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Canada's national museum of human history holds over four million objects documenting the history of Canada from its earliest human occupation to the present, with particular strength in indigenous Canadian history and material culture. The Grand Hall, featuring the world's largest indoor display of totem poles, is both an architectural statement and a primary source for Northwest Coast indigenous art. The Canadian Postal Archives and the Currency Collection are distinctive holdings.",
    why: "Essential for Canadian history, indigenous Canadian material culture, and the history of the circumpolar North. The totem pole collection is a primary source for Northwest Coast indigenous art comparable to the holdings at SAM and the Portland Art Museum.",
    tags: ["Canadian history", "indigenous art", "totem poles", "Northwest Coast art", "national history"],
    subject: "Canadian history, indigenous studies, material culture",
    affiliation: "Government of Canada",
    openAccess: true,
    note: "The museum's Grand Hall, designed by Douglas Cardinal, is one of the most significant indigenous-influenced architectural spaces in North America. Cardinal, a Blackfoot architect, designed the building to evoke the landscape of the Pacific Coast."
  },

  {
    name: "Canadian Museum of Nature",
    url: "https://collections.nature.ca/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Canada's national natural history museum holds over 14.6 million specimens across botany, zoology, earth sciences, and paleontology, with particular strength in Arctic and subarctic specimens and Canadian paleontological finds. The collection reflects Canada's extraordinary geographic range and biodiversity. The online collection database provides searchable access to specimen data, taxonomy, and geographic distribution records.",
    why: "The Arctic and subarctic collections are primary sources for research on circumpolar ecosystems, climate history, and the natural history of the Canadian North. The paleontological collection includes significant dinosaur finds from Alberta's Badlands.",
    tags: ["natural history", "Arctic specimens", "paleontology", "botany", "zoology", "Canadian biodiversity"],
    subject: "natural history, paleontology, Arctic ecology",
    affiliation: "Government of Canada",
    openAccess: true,
    note: "Canada's natural history collection data is contributed to GBIF, the Global Biodiversity Information Facility, making it interoperable with specimen data from natural history collections worldwide."
  },

  {
    name: "National Museum of Anthropology (Mexico)",
    url: "https://www.mna.inah.gob.mx",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Mexico City's National Museum of Anthropology holds the most significant collection of pre-Columbian art and artifacts in the world: Aztec, Maya, Olmec, Zapotec, Mixtec, and other Mesoamerican civilizations documented in 23 halls covering 50,000 years of human presence in Mexico. The Aztec Sun Stone, the jade mask of Pakal, and the Olmec colossal heads are objects of global cultural significance. The building itself, designed by Pedro Ramírez Vázquez with a massive volcanic stone umbrella shading its central courtyard, is a monument to Mexican national identity.",
    why: "The primary reference collection for pre-Columbian Mesoamerican art and culture. For any research in Aztec, Maya, or other Mesoamerican traditions, the MNA collection is the essential starting point. The political history of how Mexico has used this collection to construct national identity is itself a significant research topic.",
    tags: ["pre-Columbian", "Aztec", "Maya", "Olmec", "Mesoamerican", "Mexican history"],
    subject: "pre-Columbian art, Mesoamerican studies, Mexican history",
    affiliation: "Instituto Nacional de Antropología e Historia (INAH)",
    openAccess: true,
    note: "In 1985, a thief climbed through a window and stole 140 pre-Columbian objects from the museum, including the jade mask of Pakal. Most were recovered four years later. The theft and recovery are documented and are part of the museum's own history."
  },

  {
    name: "Museum of Applied Arts and Sciences (MAAS)",
    url: "https://collection.maas.museum/search",
    category: "institutional",
    subcategory: "Americas, Asia, Middle East & Africa",
    description: "Sydney's Museum of Applied Arts and Sciences, which encompasses the Powerhouse Museum, the Sydney Observatory, and Castle Hill Museums, holds Australia's most significant collection of science, technology, design, industry, and decorative arts. The digital collection covers over 500,000 objects and is searchable with strong filtering by date, material, and subject. The collection's breadth, from Aboriginal material culture through contemporary digital technology, reflects an ambitious mandate to document how humans make and use things.",
    why: "The primary resource for Australian design history, industrial history, and the history of technology. The Aboriginal material culture collection, while contested in terms of provenance, is significant for indigenous Australian studies. The digital collection's metadata quality is among the best in the Antipodean museum sector.",
    tags: ["design history", "technology history", "Aboriginal material culture", "Australian history", "decorative arts"],
    subject: "design history, technology history, Australian history",
    affiliation: "Government of New South Wales",
    openAccess: true,
    note: "The Powerhouse Museum's move from its Ultimo location to a new Parramatta facility has been contentious in Sydney cultural politics since 2015. The debate touches on questions of community access, Western Sydney's cultural infrastructure, and who museums serve."
  },

  /* ---- EUROPE (new entries) ---- */

  {
    name: "Städel Museum",
    url: "https://sammlung.staedelmuseum.de/search",
    category: "institutional",
    subcategory: "Europe",
    description: "Founded by Frankfurt banker Johann Friedrich Städel in 1816, the Städel holds one of Germany's finest art collections: over 4,200 paintings spanning seven centuries, from early panel painting through the present. It is particularly strong in German painting across periods, Flemish and Dutch masters, Italian Renaissance, and French Impressionism. The digital collection is well-developed and includes the Städel Digital Collection, which provides high-resolution images under open access licensing.",
    why: "Essential for German art history at any period and for Northern European painting generally. The open-access image program makes it one of the better-resourced European art museums for digital research.",
    tags: ["German art", "European painting", "open access", "Flemish painting", "Impressionism"],
    subject: "German art history, European painting",
    affiliation: "Städelsches Kunstinstitut und Städtische Galerie",
    openAccess: true,
    note: "The Städel's Städel Digital Collection releases images under an open-access license. The museum also maintains an online learning platform, Städel Online, which is one of the more developed museum digital education programs in Europe."
  },

  {
    name: "Staatliche Museen zu Berlin / Pergamon",
    url: "https://www.smb.museum/en/collections/search/",
    category: "institutional",
    subcategory: "Europe",
    description: "The Staatliche Museen zu Berlin encompasses seventeen museums across five museum island buildings and other Berlin sites, holding one of the world's great encyclopedic collections: the Pergamon Altar, the Ishtar Gate of Babylon, the Bust of Nefertiti, and millions of other objects from the ancient world, Europe, Asia, Africa, and the Americas. The Pergamon Museum has been partially closed for restoration; the rebuilt structure is expected to reopen by 2037. The online collection aggregates records across all SMB institutions.",
    why: "Essential for ancient Near Eastern archaeology, Egyptian art, Islamic art, and European painting. The Pergamon and Ishtar Gate are primary sources for ancient Mesopotamian monumental architecture. The scale of the collection means it overlaps with nearly every area of art historical and archaeological research.",
    tags: ["ancient Near East", "Egyptian art", "Islamic art", "Nefertiti", "Pergamon", "encyclopedic", "Berlin"],
    subject: "art history, archaeology, ancient Near Eastern studies",
    affiliation: "Prussian Cultural Heritage Foundation",
    openAccess: true,
    note: "The Pergamon Museum's partial closure for structural renovation, projected to last into the 2030s, has created urgency around the digital collection as the primary access point for many of its most significant objects. The Bust of Nefertiti remains on display in the Neues Museum."
  },

  {
    name: "Geheugen van Nederland",
    url: "https://www.geheugenvannederland.nl/search",
    category: "institutional",
    subcategory: "Europe",
    description: "Geheugen van Nederland, Memory of the Netherlands, aggregates digitized materials from Dutch libraries, archives, and museums into a single searchable interface: photographs, illustrated manuscripts, drawings, posters, maps, books, and audiovisual materials documenting Dutch history and culture from the medieval period through the twentieth century. The collection is particularly strong in printed ephemera, historical photographs, and materials from the Dutch colonial period.",
    why: "A comprehensive access point for Dutch cultural heritage outside the Rijksmuseum's art-historical focus. The colonial period materials are primary sources for Dutch imperial history and the history of Indonesia, Suriname, and other former territories.",
    tags: ["Dutch history", "Netherlands", "colonial history", "photographs", "manuscripts", "aggregator"],
    subject: "Dutch history, Netherlands history, colonial history",
    affiliation: "Koninklijke Bibliotheek (National Library of the Netherlands)",
    openAccess: true,
    note: "The colonial period collections, documenting Dutch activities in Indonesia, the Caribbean, and Africa, are primary sources that raise ongoing questions about the ethics of how colonial-era documentation is archived and made accessible."
  },

  {
    name: "Danish Royal Library (Det Kongelige Bibliotek)",
    url: "https://www.kb.dk/en/search",
    category: "institutional",
    subcategory: "Europe",
    description: "Denmark's national library, founded in 1648, holds one of the most comprehensive collections of Scandinavian written heritage: manuscripts from the Viking Age forward, printed books in Danish and other Scandinavian languages, maps, photographs, and the national newspaper archive. The library also holds the world's largest collection of materials relating to Greenland and the circumpolar Arctic, reflecting Denmark's historical relationship with that territory.",
    why: "Essential for Scandinavian history, Nordic medieval literature, and Arctic studies. The Greenlandic and circumpolar collections are primary sources for research on the indigenous Greenlandic peoples and the history of Arctic exploration and colonization.",
    tags: ["Danish history", "Scandinavian history", "manuscripts", "Arctic collections", "Greenland", "multilingual"],
    subject: "Scandinavian history, Nordic medieval literature, Arctic studies",
    affiliation: "Det Kongelige Bibliotek",
    openAccess: true,
    note: "The Danish Royal Library holds the world's largest collection of materials relating to Greenland, which makes it an essential resource for research on Greenlandic indigenous culture, Arctic exploration, and Denmark's colonial relationship with that territory."
  },

  {
    name: "Finnish National Gallery",
    url: "https://kokoelmat.fng.fi/search",
    category: "institutional",
    subcategory: "Europe",
    description: "The Finnish National Gallery encompasses three museums, the Ateneum Art Museum, the Museum of Contemporary Art Kiasma, and the Sinebrychoff Art Museum, and holds the most comprehensive collection of Finnish art in existence alongside significant European holdings. The collection is particularly strong in Finnish national romanticism, the art of Akseli Gallen-Kallela, and contemporary Finnish work. The online collection database aggregates holdings across all three institutions.",
    why: "Essential for Finnish art history and for the broader study of Nordic national romanticism. The Gallen-Kallela holdings are primary sources for Finnish mythology and the Kalevala's influence on visual art. The collection's documentation of Finnish modernism is significant for European art history.",
    tags: ["Finnish art", "Nordic art", "national romanticism", "Kalevala", "contemporary art", "Gallen-Kallela"],
    subject: "Finnish art history, Nordic modernism, national romanticism",
    affiliation: "Finnish National Gallery",
    openAccess: true,
    note: "The Ateneum holds the largest collection of Finnish art, including Gallen-Kallela's Kalevala paintings, which are primary sources for the mythology-as-national-identity project that shaped Finnish culture in the late nineteenth and early twentieth centuries."
  },

  {
    name: "Swedish National Museum",
    url: "https://collections.nationalmuseum.se/search",
    category: "institutional",
    subcategory: "Europe",
    description: "Sweden's national museum of art and design holds the country's largest collection: over 700,000 objects spanning painting, sculpture, decorative arts, fashion, and design from the medieval period to the present. The applied arts and design collection, one of the strongest in Europe, reflects Sweden's particular contribution to design history. The collection is fully searchable online with downloadable images for many objects.",
    why: "Essential for Scandinavian art history and for the history of design, particularly the Swedish modernism and functionalism movements that shaped twentieth-century design globally. The medieval and Baroque Swedish painting holdings document a visual culture less represented in anglophone art history.",
    tags: ["Swedish art", "Scandinavian design", "decorative arts", "functionalism", "painting"],
    subject: "Swedish art history, Scandinavian design history",
    affiliation: "Swedish National Museum",
    openAccess: true,
    note: "Swedish Functionalism, which emerged at the 1930 Stockholm Exhibition, is documented in the National Museum's design collections and constitutes one of the most significant contributions to twentieth-century international design history."
  },

  {
    name: "National Museums Liverpool",
    url: "https://www.liverpoolmuseums.org.uk/collections/search",
    category: "institutional",
    subcategory: "United Kingdom",
    description: "National Museums Liverpool encompasses eight museums including the Walker Art Gallery, the World Museum, the Merseyside Maritime Museum, and the International Slavery Museum. The collections cover art, natural history, archaeology, and the history of Liverpool and the Atlantic world, including one of Britain's most significant institutional engagements with the history of the transatlantic slave trade. The Walker's nineteenth-century British painting collection is among the finest outside London.",
    why: "The International Slavery Museum, the first permanent museum in Britain dedicated to the history of the slave trade, holds collections and documentation that are primary sources for Atlantic history, the history of race, and British imperial history. The Merseyside Maritime Museum's collections document Liverpool's central role in the triangular trade.",
    tags: ["British art", "slavery history", "maritime history", "natural history", "Walker Gallery", "Liverpool"],
    subject: "British history, Atlantic history, slavery history, art history",
    affiliation: "National Museums Liverpool",
    openAccess: true,
    note: "Liverpool's International Slavery Museum, opened in 2007, was the first national museum in Britain to address the transatlantic slave trade as its primary subject. Its existence in Liverpool, which profited significantly from the trade, is itself a meaningful institutional statement."
  },

  /* ---- U.S. NATURAL HISTORY & SCIENCE (additions) ---- */

  {
    name: "National Air and Space Museum",
    url: "https://airandspace.si.edu/collection/search",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The Smithsonian's most visited museum holds the most significant collection of aviation and spaceflight artifacts in the world: the Wright Flyer, Charles Lindbergh's Spirit of St. Louis, John Glenn's Friendship 7, Apollo 11's command module, and thousands of other objects documenting a century of powered flight and the Space Age. The digital collection makes key objects searchable with detailed technical and historical documentation.",
    why: "The primary source collection for the history of aviation and spaceflight. The objects here are not just historical artifacts but primary documents: the Wright Flyer was used for the first powered flight; Apollo 11's command module carried the first humans to the Moon. No other collection holds equivalent objects.",
    tags: ["aviation history", "spaceflight", "aerospace", "Wright Brothers", "Apollo", "Smithsonian"],
    subject: "history of aviation, space history, technology history",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "The museum operates two campuses: the Washington Mall location and the Udvar-Hazy Center at Dulles Airport, which houses the Space Shuttle Discovery and the Enola Gay. The digital collection covers both facilities."
  },

  {
    name: "National Museum of Natural History",
    url: "https://naturalhistory.si.edu/research/collections/search",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The Smithsonian's natural history museum holds over 146 million specimens: the largest natural history collection in the world. Minerals, meteorites, human remains, entomological specimens, fossil vertebrates, marine invertebrates, and botanical samples accumulated over 160 years of scientific collecting. The Hope Diamond is the most visited object; the scientific research collections, accessible through the online portal, are the more significant resource.",
    why: "The scope of the collection, 146 million specimens across all natural history domains, makes it a primary reference for almost any field in the natural sciences. The online specimen database, searchable by taxonomy and geography, is essential for ecological, evolutionary, and paleontological research.",
    tags: ["natural history", "specimens", "paleontology", "mineralogy", "botany", "zoology", "Smithsonian"],
    subject: "natural history, paleontology, ecology, mineralogy",
    affiliation: "Smithsonian Institution",
    openAccess: true,
    note: "The NMNH's collections support hundreds of active research programs. The online database documents specimen provenance, collection dates, and geographic coordinates, making it useful for ecological range-shift research and historical distribution mapping."
  },

  {
    name: "New York Botanical Garden Library",
    url: "https://lib.nybg.org/search",
    category: "institutional",
    subcategory: "U.S. Natural History & Science",
    description: "The LuEsther T. Mertz Library at the New York Botanical Garden is the largest botanical library in the Western Hemisphere: over one million items including rare books, manuscripts, plant illustrations, historical photographs, seed and trade catalogs, and journals covering botany, horticulture, and the history of plant science. The digital collection provides access to digitized rare materials, including illustrated botanical books of extraordinary visual quality.",
    why: "The botanical illustration collection is one of the finest in the world: centuries of scientific illustration documenting the visual history of plant science. The seed and trade catalogs are primary sources for horticultural history, garden history, and the social history of plant cultivation.",
    tags: ["botany", "botanical illustration", "horticultural history", "rare books", "seed catalogs", "natural history"],
    subject: "botany, horticultural history, natural history, history of science",
    affiliation: "New York Botanical Garden",
    openAccess: true,
    note: "The NYBG library's digitized botanical illustration collection spans from the sixteenth century forward and includes hand-colored plates from the great botanical atlases that documented the age of exploration's plant discoveries. The visual quality is exceptional."
  },

  /* ---- U.S. STATE & LOCAL (additions) ---- */

  {
    name: "Chicago Public Library Digital Collections",
    url: "https://www.chipublib.org/digital-collections/",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The Chicago Public Library's digital collections document the city's history with an emphasis on neighborhood-level materials: photographs, postcards, manuscripts, and archival records drawn from the library's special collections and from partnerships with community organizations. The Chicago History collection, the Chicago Authors collection, and the Harold Washington collection are among the more significant holdings.",
    why: "A valuable resource for Chicago urban history, African American cultural history in the Midwest, and local and neighborhood history research. The Harold Washington materials document the career of Chicago's first Black mayor with primary source depth.",
    tags: ["Chicago history", "urban history", "African American history", "photographs", "local archives"],
    subject: "American history, urban history, Chicago history",
    affiliation: "Chicago Public Library",
    openAccess: true,
    note: "The Chicago Public Library's partnership with the Chicago History Museum (chicagohistory.org) provides complementary digital access points. Both are worth searching for comprehensive Chicago research."
  },

  {
    name: "Boston Public Library Digital Collections",
    url: "https://www.digitalcommonwealth.org/search?utf8=%E2%9C%93&q=&f%5Binstitution_name_ssi%5D%5B%5D=Boston+Public+Library",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The Boston Public Library's digitized special collections, accessible through the Digital Commonwealth platform, include maps, prints, photographs, posters, and ephemera spanning New England history from the colonial period. The Norman B. Leventhal Map and Education Center holds one of the most significant map collections in the United States: 200,000 maps and 5,000 atlases, a substantial portion digitized and freely accessible.",
    why: "The Leventhal Map Center's digitized historic maps of New England, Boston, and the broader Americas are primary sources for historical geography and landscape history. The collection's depth in colonial-era cartography is unmatched in the region.",
    tags: ["Boston history", "historical maps", "New England history", "photographs", "prints", "Leventhal Center"],
    subject: "American history, historical cartography, New England history",
    affiliation: "Boston Public Library",
    openAccess: true,
    note: "The Leventhal Map Center also maintains a separate, fully dedicated interface at leventhalmap.org with more advanced mapping tools, including the ability to overlay historical maps on contemporary geography. Both interfaces are worth bookmarking."
  },

  {
    name: "Los Angeles Public Library Photo Collection",
    url: "https://tessa.lapl.org/",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The Los Angeles Public Library's digital photo collection holds over 100,000 photographs documenting Los Angeles from the 1860s through the late twentieth century: celebrity photographs, press photography, architectural documentation, and images of communities and neighborhoods that transformation and demolition have otherwise erased. The Herald Examiner collection, donated by Hearst, is the most significant single photographic archive of twentieth-century Los Angeles journalism.",
    why: "Essential for Los Angeles history, California urban history, and the visual culture of the twentieth-century American West. The celebrity photography is a primary source for entertainment industry history. The neighborhood documentation covers communities whose physical traces have largely disappeared.",
    tags: ["Los Angeles history", "photographs", "celebrity photography", "urban history", "California"],
    subject: "California history, urban history, visual culture",
    affiliation: "Los Angeles Public Library",
    openAccess: true,
    note: "The Shades of L.A. collection, assembled through community donation drives in the early 1990s, documents Los Angeles's diverse communities with photographs contributed by families rather than collected by institutions. It is a deliberately participatory archive."
  },

  {
    name: "Denver Public Library Digital Collections",
    url: "https://digital.denverlibrary.org/",
    category: "institutional",
    subcategory: "U.S. State & Local",
    description: "The Denver Public Library's Western History Collection is one of the most significant archives of the American West: photographs, maps, documents, and ephemera covering Colorado history and the broader Mountain West from the mid-nineteenth century. The photographic holdings include significant documentation of mining communities, railroad construction, indigenous peoples, and the development of Denver. The collection is well-digitized and well-searchable.",
    why: "Essential for Colorado history, Rocky Mountain history, and the social history of mining and extraction in the American West. The indigenous photographic documentation, while requiring critical evaluation of its colonial-era collection context, is significant for Plains and Mountain tribes research.",
    tags: ["Colorado history", "American West", "mining history", "photographs", "maps", "railroad history"],
    subject: "Western American history, Colorado history, mining history",
    affiliation: "Denver Public Library",
    openAccess: true,
    note: "The Western History Collection's photographic holdings include work by William Henry Jackson, whose photographs of Yellowstone contributed to its designation as the first national park. Jackson's full archive at Denver is a primary source for landscape photography history."
  },



  /* ---- INDIE — ARCHIVES & HISTORICAL (additions) ---- */

  {
    name: "Modernist Journals Project",
    url: "https://modjourn.org",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "Since 1995, Brown and Tulsa Universities have been digitizing entire runs of modernist little magazines: not excerpts or selections, but cover-to-cover editions including advertisements, letters columns, and the ephemeral material that bound volumes in institutional libraries invariably stripped away. The Little Review, Poetry, The New Age, The Freewoman, Scribner's, and dozens of others are here, in the form they actually circulated. The project's discovery of the 'hole in the archive,' the systematic loss of advertising from bound library copies, is itself a contribution to the history of the book.",
    why: "Indispensable for modernist literary and cultural research. The full-issue format preserves editorial context, publication sequence, and the commercial milieu that shaped these magazines' meaning. The Little Review alone published early episodes of Ulysses, Pound's Cantos, and work by Eliot, Williams, and H.D. Nothing substitutes for reading those texts in the magazine that first published them.",
    tags: ["modernism", "little magazines", "periodicals", "full-text", "Brown University", "NEH-funded", "open access"],
    subject: "literary modernism, print culture, periodical studies",
    affiliation: "Brown University / University of Tulsa / NEH",
    openAccess: true,
    note: "The MJP's collection has been ingested into the Brown Digital Repository, providing an additional access point with enhanced search features. The project's Cover-to-Cover initiative is recovering advertising and preliminary matter from institutional copies that lost it when bound. What libraries discarded as ephemera turns out to be primary source evidence."
  },

  {
    name: "Wayback Machine",
    url: "https://web.archive.org",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "The Wayback Machine is the most direct answer to a question that most people don't think to ask: what did this website look like before? Since 1996, it has been taking periodic snapshots of the public web, accumulating over 800 billion pages across three decades of internet history. A website that no longer exists, a news article that was edited or retracted, a politician's platform before it was revised, a company's privacy policy from six months ago: all potentially retrievable. The archive is imperfect, incomplete, and irreplaceable.",
    why: "Essential for verifying claims about what web content said at a specific moment, for researching the history of organizations and individuals through their web presence, and for recovering primary sources that have been deleted, revised, or moved behind paywalls. Teaching students to use the Wayback Machine is teaching them that the web has a history worth excavating.",
    tags: ["web archive", "digital history", "primary sources", "fact-checking", "Internet Archive", "open access"],
    subject: "digital history, media studies, information science",
    affiliation: "Internet Archive",
    openAccess: true,
    note: "The Wayback Machine's coverage is uneven: heavily crawled sites have hundreds of snapshots; obscure personal pages may have one. The CDX API allows programmatic query of the archive's index, which is useful for researchers studying web infrastructure at scale."
  },

  {
    name: "GDELT Project",
    url: "https://www.gdeltproject.org",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "The Global Database of Events, Language, and Tone has been monitoring the world's print, broadcast, and web news media in over 100 languages since 1979, every fifteen minutes, translating and coding events, emotions, locations, and actors into an open dataset of staggering scale. A quarter-billion event records. Trillions of data points. The entire archive freely downloadable or queryable via Google BigQuery. GDELT is what happens when someone decides to treat global media coverage as a structured dataset and build the infrastructure to prove it possible.",
    why: "Essential for computational social science, journalism research, conflict studies, and any research question that can be framed as: what did the world's news media say about X, when, where, and with what emotional valence? The scale and coverage are genuinely without peer among open datasets.",
    tags: ["news archive", "computational research", "global media", "open data", "multilingual", "conflict studies", "big data"],
    subject: "political science, journalism, computational social science, conflict studies",
    affiliation: "Georgetown University",
    openAccess: true,
    note: "GDELT's relationship with AI training has been complicated by The Atlantic's November 2025 investigation revealing that Common Crawl, whose data GDELT incorporates, misrepresented its compliance with paywall restrictions and publisher removal requests. Researchers should account for this provenance when using the dataset. The analytical tools remain genuinely powerful."
  },

  {
    name: "Common Crawl",
    url: "https://commoncrawl.org",
    category: "indie",
    subcategory: "Archives & Historical",
    description: "Common Crawl is a nonprofit that has been crawling the open web since 2008, releasing its archives as free open data: currently over 250 billion pages, updated monthly, downloadable in petabyte-scale WARC files or queryable via AWS and Google BigQuery. It has no conventional search interface; it is infrastructure for researchers, data scientists, and the AI industry, which has used it extensively as training data. It is, in a real sense, the largest open dataset of human writing in existence.",
    why: "Essential infrastructure knowledge for anyone researching how AI language models are built, how web-scale text mining works, or what the actual composition of 'the web' looks like as data. Not a search tool in any conventional sense: a research resource and a dataset whose existence shapes the information landscape whether we interact with it directly or not.",
    tags: ["web archive", "open data", "AI training data", "research infrastructure", "big data", "non-profit"],
    subject: "information science, computational linguistics, AI studies, digital humanities",
    affiliation: "Common Crawl Foundation",
    openAccess: true,
    note: "An November 2025 Atlantic investigation found that Common Crawl misrepresented its compliance with paywalls and publisher removal requests. The organization published a response. The episode is instructive for discussions of open data ethics, AI training provenance, and the gap between stated and actual data governance practices."
  },

  /* ---- INSTITUTIONAL — U.S. LIBRARIES & ARCHIVES (additions) ---- */

  {
    name: "Newberry Library",
    url: "https://collections.newberry.org",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The Newberry is one of America's few genuinely independent humanities research libraries: privately endowed, free and open to the public since 1887, beholden to no university curriculum and no government mandate. Its collection of 1.6 million books, five million manuscript pages, and 600,000 historic maps reflects 130 years of deliberate, opinionated collecting across six core areas: American Indian and indigenous studies; American history and culture; Chicago and the Midwest; the history of the book and printing; maps, travel, and exploration; and medieval, Renaissance, and early modern studies. The Edward Ayer collection on indigenous peoples of the Americas is one of the most significant in existence.",
    why: "The map collection, one of the largest and finest in the world for the Americas and Western Europe, is primary source material for historical cartography and the history of geographical knowledge. The Ayer collection is essential for indigenous American studies. The Wing Collection on the history of printing is a foundational resource for book history. The institution's independence from university pressures makes its collecting history legible as a document of humanistic priority.",
    tags: ["maps", "indigenous studies", "book history", "Renaissance", "Chicago history", "manuscripts", "independent library"],
    subject: "American history, cartography, indigenous studies, book history, Renaissance studies",
    affiliation: "Newberry Library (independent endowment)",
    openAccess: true,
    note: "The Newberry's four research centers, covering cartography history, Renaissance studies, American Indian and indigenous studies, and American history, each sponsor fellowships and symposia that make the library a working research institution rather than merely a collection. The undergraduate seminars, run with Chicago-area universities since 1965, are among the more distinctive library-university teaching partnerships in the country."
  },

  {
    name: "HathiTrust Research Center",
    url: "https://analytics.hathitrust.org",
    category: "institutional",
    subcategory: "U.S. Libraries & Archives",
    description: "The HathiTrust Research Center is the computational research layer above the HathiTrust Digital Library catalog: a set of tools and a secure computing environment that allows researchers to run text mining, corpus analysis, and machine learning operations across the full 20-million-volume corpus, including in-copyright works. The non-consumptive research model, working with statistical features and extracted text rather than readable pages, allows computational access to materials that copyright law would otherwise restrict.",
    why: "The HTRC represents one of the more thoughtful solutions to the copyright-versus-research tension in large-scale digital humanities. Running a term frequency analysis across 20 million volumes is a different kind of research than reading any of them, and the HTRC's legal and technical framework makes that distinction legible and actionable.",
    tags: ["text mining", "digital humanities", "non-consumptive research", "corpus analysis", "academic", "big data"],
    subject: "digital humanities, computational linguistics, literary history, information science",
    affiliation: "HathiTrust Research Center / University of Illinois",
    openAccess: true,
    note: "The HTRC's Extracted Features dataset, derived from the full HathiTrust corpus, is freely downloadable and includes page-level token counts, part-of-speech tags, and line information for the entire collection. It is one of the most significant open datasets for computational literary studies."
  },

  /* ---- INSTITUTIONAL — GLOBAL AGGREGATORS (additions) ---- */

  {
    name: "Google Books",
    url: "https://books.google.com",
    category: "institutional",
    subcategory: "Global Aggregators",
    description: "Google's decade-long effort to digitize the world's books produced one of the most consequential and contested archives in information history: over 40 million volumes scanned, full-text searchable, and accessible in varying degrees depending on copyright status. Public domain works are fully readable; in-copyright works return snippet views that allow verification of a passage's existence without reproducing it. The scanning program, launched in 2004 with secret partnerships with major research libraries, generated litigation that took a decade to resolve and permanently altered the landscape of digital copyright.",
    why: "The snippet view alone is a significant research tool: confirming that a phrase appears in a specific book, with page number, before committing to interlibrary loan. Full-text public domain access makes it complementary to Project Gutenberg and HathiTrust. The Ngram Viewer, which plots term frequency across the digitized corpus over time, is one of the more remarkable tools for tracking the rise and fall of concepts across several centuries of print.",
    tags: ["books", "full-text", "public domain", "snippet view", "Ngram Viewer", "multilingual"],
    subject: "book history, literary history, digital humanities",
    affiliation: "Alphabet Inc.",
    openAccess: true,
    note: "The Authors Guild v. Google litigation, which ended in Google's favor in 2016 after a decade of proceedings, established fair use protections for large-scale text digitization for search purposes. The legal reasoning in that case is worth understanding for anyone studying the intersection of copyright and digital scholarship."
  },

  /* ---- INSTITUTIONAL — ACADEMIC TEXTS & BOOKS (additions) ---- */

  {
    name: "Wellcome Library Digital Collections",
    url: "https://wellcomelibrary.org",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "The Wellcome Library, distinct from the Wellcome Collection's physical gallery, is the research library component of the Wellcome Trust's London institution: one of the world's greatest specialist collections for the history of medicine, the history of the body, and the intersections of science, art, and culture. Its digital holdings include over three million images, digitized rare books and manuscripts, archival collections from individual scientists and medical practitioners, and the Codebreakers collection of historical genetic research documents.",
    why: "Where the Wellcome Collection entry covers the museum's gallery objects, the Wellcome Library is the research infrastructure: finding aids, manuscript catalogues, archival descriptions, and the digital collections program. Essential for serious research in medical history, STS, and the cultural history of science.",
    tags: ["medical history", "history of science", "manuscripts", "archival", "rare books", "genetics history"],
    subject: "history of medicine, science and technology studies, cultural history",
    affiliation: "Wellcome Trust",
    openAccess: true,
    note: "The Wellcome Library's Codebreakers collection documents the discovery of the structure of DNA, including Francis Crick's personal papers and correspondence. These materials are primary sources for the history of twentieth-century science and for the controversies around credit for the discovery."
  },

  {
    name: "Claremont Colleges Digital Library",
    url: "https://ccdl.claremont.edu",
    category: "institutional",
    subcategory: "Academic Texts & Books",
    description: "The seven Claremont Colleges share a digital library infrastructure that aggregates special collections from across the consortium: photographs, manuscripts, oral histories, maps, architectural drawings, and archival materials reflecting the colleges' individual collecting strengths. The holdings are particularly strong in California history, the history of the American West, and the archives of faculty and alumni who shaped mid-twentieth-century American intellectual and political life.",
    why: "A useful supplement to the California Digital Library for regional California and Western history research. The oral history collections and faculty archives at the Claremont Colleges document mid-century American academic and policy culture with materials that larger university library digitization programs have not duplicated.",
    tags: ["California history", "Western history", "oral histories", "consortium", "academic archives"],
    subject: "California history, Western American history, oral history",
    affiliation: "Claremont Colleges Library",
    openAccess: true,
    note: "The Claremont Colleges' shared library model, the Claremont University Consortium, is one of the older and more successful small liberal arts college library partnerships in the United States. The digital collections reflect a century of deliberate, humanistic collecting across seven institutions."
  }


]; // end engines[]
