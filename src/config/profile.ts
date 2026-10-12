export interface ConnectionItem {
  id: string;
  platform: string;
  handle: string;
  url: string;
  icon: string;
  verified?: boolean;
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

export interface SocialIconItem {
  platform: string;
  url: string;
  icon: string;
  label: string;
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
  discord: {
    // Replace with your real 18-digit Discord Snowflake User ID
    // Find yours by enabling Developer Mode in Discord -> Right click your profile -> Copy User ID
    userId: string;
    // When enabled and your Discord ID is set, Lanyard API will fetch your live status, avatar, and activity
    enableLanyard: boolean;
    // Displayed if Discord is offline or user is not on the Lanyard server
    fallbackStatus: {
      status: 'online' | 'idle' | 'dnd' | 'offline';
      customStatus?: string;
      activityName?: string;
    };
  };
  connections: ConnectionItem[];
  linkGroups: LinkGroup[];
  socials: SocialIconItem[];
}

export const profileConfig: ProfileConfig = {
  meta: {
    title: "Christian (DaLonelyCat) - Personal Hub & Discord Connections",
    description: "Welcome to my personal link tree and Discord profile connections hub.",
    siteUrl: "https://portofolio.dalonelycat.site",
    themeColor: "#5865f2",
  },
  profile: {
    name: "Christian",
    handle: "DaLonelyCat",
    bio: "Computer science student & software developer in Malang, Indonesia.",
    pronouns: "He/Him",
    location: "Malang, Indonesia",
    avatarUrl: "/avatar.jpg",
    bannerImageUrl: "https://images.unsplash.com/photo-1769708984129-adb918f38ad5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    bannerGradient: "linear-gradient(135deg, #1e1f22 0%, #2b2d31 60%, #5865f2 100%)",
  },
  discord: {
    userId: "907435477831933953",
    enableLanyard: true,
    fallbackStatus: {
      status: "online",
      customStatus: "Coding & building cool projects in Malang",
      activityName: "Visual Studio Code",
    },
  },
  // Discord-style Connections (linked accounts)
  connections: [
    {
      id: "github",
      platform: "GitHub",
      handle: "DaLonelyCat",
      url: "https://github.com/DaLonelyCat",
      icon: "github",
      verified: true,
    },
    {
      id: "steam",
      platform: "Steam",
      handle: "DaLonelyCat",
      url: "https://steamcommunity.com/profiles/76561198946916079/",
      icon: "steam",
      verified: true,
    },
    {
      id: "spotify",
      platform: "Spotify",
      handle: "DaLonelyCat",
      url: "https://open.spotify.com/user/christian.emanuel.08?si=399abe68d8e7464e",
      icon: "spotify",
      verified: true,
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: "DaLonelyCat",
      url: "https://www.linkedin.com/in/dalonelycat/",
      icon: "linkedin",
      verified: true,
    },
    {
      id: "instagram",
      platform: "Instagram",
      handle: "dalonelycat",
      url: "https://www.instagram.com/dalonelycat",
      icon: "instagram",
      verified: true,
    },
    {
      id: "twitter",
      platform: "X (Twitter)",
      handle: "DaLonelyCat",
      url: "https://x.com/DaLonelyCat",
      icon: "twitter",
      verified: true,
    },
    {
      id: "reddit",
      platform: "Reddit",
      handle: "DaLonelyCat",
      url: "https://www.reddit.com/user/DaLonelyCat/",
      icon: "reddit",
      verified: true,
    },
  ],
  // Categorized Link Tree items
  linkGroups: [
    {
      id: "featured",
      title: "Websites & Projects",
      links: [
        {
          id: "portfolio",
          title: "Personal Portfolio",
          url: "https://portofolio.dalonelycat.site/",
          icon: "globe",
          highlight: true,
        },
        {
          id: "github-profile",
          title: "GitHub Repositories",
          url: "https://github.com/DaLonelyCat",
          icon: "code",
        },
        {
          id: "linkedin-profile",
          title: "LinkedIn Profile",
          url: "https://www.linkedin.com/in/dalonelycat/",
          icon: "linkedin",
        },
      ],
    },
    {
      id: "socials-media",
      title: "Socials & Gaming",
      links: [
        {
          id: "steam-profile",
          title: "Steam Community",
          url: "https://steamcommunity.com/profiles/76561198946916079/",
          icon: "gamepad",
        },
        {
          id: "spotify-profile",
          title: "Spotify Profile",
          url: "https://open.spotify.com/user/christian.emanuel.08?si=399abe68d8e7464e",
          icon: "spotify",
        },
        {
          id: "instagram-profile",
          title: "Instagram",
          url: "https://www.instagram.com/dalonelycat",
          icon: "instagram",
        },
      ],
    },
  ],
  // Compact bottom social bar
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/DaLonelyCat",
      icon: "github",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dalonelycat/",
      icon: "linkedin",
      label: "LinkedIn Profile",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/dalonelycat",
      icon: "instagram",
      label: "Instagram Profile",
    },
    {
      platform: "X",
      url: "https://x.com/DaLonelyCat",
      icon: "twitter",
      label: "X Profile",
    },
    {
      platform: "Spotify",
      url: "https://open.spotify.com/user/christian.emanuel.08?si=399abe68d8e7464e",
      icon: "spotify",
      label: "Spotify Profile",
    },
    {
      platform: "Steam",
      url: "https://steamcommunity.com/profiles/76561198946916079/",
      icon: "steam",
      label: "Steam Profile",
    },
    {
      platform: "Reddit",
      url: "https://www.reddit.com/user/DaLonelyCat/",
      icon: "reddit",
      label: "Reddit Profile",
    },
  ],
};
