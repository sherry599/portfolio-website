import { contributions } from '../data/openSourceData';

const GITHUB_USERNAME = "AliRana30";
const CACHE_KEY = "github_portfolio_data_v2";
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes cache to keep it fresh

export const fetchGitHubData = async () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    } catch (e) {
      console.warn("Error parsing cached GitHub data, refetching", e);
    }
  }

  try {
    // 1. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const user = userRes.ok ? await userRes.json() : {};

    // 2. Fetch User Public Repos
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`);
    const repos = reposRes.ok ? await reposRes.json() : [];

    // 3. Fetch User Contributions (Activity Grid) from Gruber's public scraper API
    const contributionsMap = {};
    try {
      const contribsRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`);
      if (contribsRes.ok) {
        const contribsData = await contribsRes.json();
        if (contribsData && contribsData.contributions) {
          contribsData.contributions.forEach(day => {
            if (day.count > 0) {
              contributionsMap[day.date] = day.count;
            }
          });
        }
      }
    } catch (e) {
      console.warn("Error fetching contributions calendar grid:", e);
    }

    // 4. Map the exact PR list provided by the user in openSourceData.js
    const mappedPRs = contributions.map((c) => {
      let org = 'fossasia';
      let repoName = 'eventyay';
      const lowerRepo = c.repo.toLowerCase();
      if (lowerRepo.includes('arrow') || lowerRepo.includes('apache')) {
        org = 'apache';
        repoName = 'arrow';
      } else if (lowerRepo.includes('voicey')) {
        org = 'voiceyBill';
        repoName = 'voiceyBill-web';
      }

      return {
        id: c.id,
        title: c.title,
        link: c.link,
        state: "merged",
        repo: repoName,
        org: org,
        prNumber: c.prNumber,
        createdAt: c.date || new Date().toISOString(),
        body: c.description || "",
        impact: c.impact || "",
        language: c.language || "JavaScript"
      };
    });

    const compiledData = {
      profile: {
        name: user.name || GITHUB_USERNAME,
        avatarUrl: user.avatar_url,
        publicRepos: user.public_repos || repos.length,
        followers: user.followers || 0,
        following: user.following || 0,
        bio: user.bio,
      },
      repos: repos.map(r => ({
        id: r.id,
        name: r.name,
        description: r.description || "No description provided.",
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language || "JavaScript",
        link: r.html_url,
        homepage: r.homepage || r.html_url,
        topics: r.topics || [],
        category: r.fork ? "Contributed" : "Original",
      })),
      prs: mappedPRs,
      contributionsMap: contributionsMap,
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: compiledData,
      timestamp: Date.now()
    }));

    return compiledData;
  } catch (error) {
    console.error("Error fetching live GitHub data:", error);
    return getFallbackData();
  }
};

const getFallbackData = () => {
  const mappedPRs = contributions.map((c) => {
    let org = 'fossasia';
    let repoName = 'eventyay';
    const lowerRepo = c.repo.toLowerCase();
    if (lowerRepo.includes('arrow') || lowerRepo.includes('apache')) {
      org = 'apache';
      repoName = 'arrow';
    } else if (lowerRepo.includes('voicey')) {
      org = 'voiceyBill';
      repoName = 'voiceyBill-web';
    }

    return {
      id: c.id,
      title: c.title,
      link: c.link,
      state: "merged",
      repo: repoName,
      org: org,
      prNumber: c.prNumber,
      createdAt: new Date().toISOString(),
      body: c.description || "",
      impact: c.impact || "",
      language: c.language || "JavaScript"
    };
  });

  return {
    profile: {
      name: "Ali Mahmood",
      publicRepos: 15,
      followers: 8,
      following: 10,
    },
    repos: [
      { id: 1, name: "EnvArmor", description: "A secure, local-first secret leak prevention suite.", stars: 2, forks: 0, language: "TypeScript", link: "https://github.com/AliRana30/EnvArmor", homepage: "https://env-armor.vercel.app/", topics: ["Next.js", "Supabase", "Prisma"], category: "Original" },
      { id: 2, name: "KHIDMAT", description: "An AI-powered service orchestration platform.", stars: 1, forks: 0, language: "TypeScript", link: "https://github.com/AliRana30/KHIDMAT", homepage: "https://khidmat-orchestrator.vercel.app/", topics: ["React Native", "Expo", "Gemini API"], category: "Original" },
      { id: 3, name: "Noretmy", description: "A production-level freelancing marketplace.", stars: 1, forks: 0, language: "JavaScript", link: "https://github.com/AliRana30/Noretmy", homepage: "https://noretmy.vercel.app/", topics: ["Next.js", "Node.js", "Socket.io"], category: "Original" }
    ],
    prs: mappedPRs,
    contributionsMap: {},
  };
};
