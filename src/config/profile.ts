export interface ConnectionItem {
  id: string;
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  badge?: string;
  highlight?: boolean;
}

export interface LinkGroup {
  id: string;
  title: string;
  description?: string;
  links: LinkItem[];
}

export interface ProfileConfig {
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage?: string;
    themeColor: string;
  };
  profile: {
    name: string;
    handle: string;
    bio: string;
    pronouns?: string;
    location?: string;
    avatarUrl: string;
    bannerGradient?: string;
    bannerImageUrl?: string;
  };
  connections: ConnectionItem[];
  linkGroups: LinkGroup[];
}

export const profileConfig: ProfileConfig = {
  meta: {
    title: "Christian (@DaLonelyCat) - Personal Hub & Discord Connections",
    description: "Personal link tree and connected profile hub for Christian (@DaLonelyCat).",
    siteUrl: "https://portofolio.dalonelycat.site",
    themeColor: "#090a0f",
  },
  profile: {
    name: "Christian",
    handle: "DaLonelyCat",
    bio: "Computer science student & software developer in Malang, Indonesia.",
    pronouns: "He/Him",
    location: "Malang, Indonesia",
    avatarUrl: "/avatar.jpg",
    bannerImageUrl: "https://images.unsplash.com/photo-1769708984129-adb918f38ad5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    bannerGradient: "linear-gradient(135deg, #090a0f 0%, #12141c 60%, #5865f2 100%)",
  },
  // Discord Connected Accounts
  connections: [
    {
      id: "github",
      platform: "GitHub",
      handle: "DaLonelyCat",
      url: "https://github.com/DaLonelyCat",
      icon: "github",
    },
    {
      id: "steam",
      platform: "Steam",
      handle: "DaLonelyCat",
      url: "https://steamcommunity.com/profiles/76561198946916079/",
      icon: "steam",
    },
    {
      id: "spotify",
      platform: "Spotify",
      handle: "DaLonelyCat",
      url: "https://open.spotify.com/user/christian.emanuel.08?si=399abe68d8e7464e",
      icon: "spotify",
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: "DaLonelyCat",
      url: "https://www.linkedin.com/in/dalonelycat/",
      icon: "linkedin",
    },
    {
      id: "instagram",
      platform: "Instagram",
      handle: "dalonelycat",
      url: "https://www.instagram.com/dalonelycat",
      icon: "instagram",
    },
    {
      id: "twitter",
      platform: "X (Twitter)",
      handle: "DaLonelyCat",
      url: "https://x.com/DaLonelyCat",
      icon: "twitter",
    },
    {
      id: "reddit",
      platform: "Reddit",
      handle: "DaLonelyCat",
      url: "https://www.reddit.com/user/DaLonelyCat/",
      icon: "reddit",
    },
  ],
  // Websites & Projects Link Tree
  linkGroups: [
    {
      id: "featured",
      title: "Websites & Projects",
      links: [
        {
          id: "portfolio",
          title: "Personal Portfolio",
          description: "Projects, technical writings, and background",
          url: "https://portofolio.dalonelycat.site/",
          icon: "globe",
          highlight: true,
        },
      ],
    },
  ],
};
