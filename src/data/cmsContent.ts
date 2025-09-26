interface NavigationItem {
  id: number;
  name: string;
  href: string;
  active: boolean;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  gradient: string;
  borderColor: string;
  active: boolean;
}

export const siteContent = {
  header: {
    logo: {
      text: "Mystic Tarot",
      icon: "sparkles"
    },
    navigation: [
      { id: 1, name: "Home", href: "#home", active: true },
      { id: 2, name: "Readings", href: "#readings", active: true },
      { id: 3, name: "About", href: "#about", active: true },
      { id: 4, name: "Contact", href: "#contact", active: true }
    ] as NavigationItem[],
    ctaButton: {
      text: "Book Reading",
      href: "#book", 
      active: true
    }
  },

  hero: {
    badge: {
      icon: "star",
      text: "Tarot Reading"
    },
    headline: {
      part1: "Unlock Your",
      part2: "Destiny",
      gradient: true
    },
    description: "Experience personalized tarot readings crafted by expert readers. Discover insights, guidance, and clarity for your life's journey through our premium divination services.",
    buttons: [
      {
        id: 1,
        text: "Get Your Reading",
        icon: "sparkles",
        primary: true,
        href: "#readings"
      },
      {
        id: 2,
        text: "Watch Demo", 
        icon: "play",
        primary: false,
        href: "#demo"
      }
    ],
    trustIndicators: [
      { label: "Happy Clients", value: "10K+", active: true },
      { label: "Average Rating", value: "5★", active: true },
      { label: "Available", value: "24/7", active: true }
    ],
    video: {
      placeholder: true,
      title: "AI-Generated Tarot Video",
      subtitle: "Mystical Card Pulling Animation",
      fallbackIcon: "moon"
    }
  },

  personalizedOfferings: {
    section: {
      badge: {
        icon: "zap",
        text: "Personalized Readings"
      },
      headline: {
        part1: "Choose Your",
        part2: "Sacred Path",
        gradient: true
      },
      description: "Select a card to reveal your personalized reading experience. Each path offers unique insights tailored to your spiritual journey and life questions."
    },
    services: [
      {
        id: 1,
        title: "Love & Relationships",
        description: "Discover insights about your romantic journey and connections.",
        icon: "heart",
        price: "₹1,999",
        gradient: "from-pink-500/20 to-red-500/20",
        borderColor: "border-pink-400/30",
        active: true
      },
      {
        id: 2,
        title: "Career Guidance",
        description: "Navigate your professional path with clarity and purpose.",
        icon: "star",
        price: "₹2,499",
        gradient: "from-yellow-500/20 to-orange-500/20",
        borderColor: "border-yellow-400/30",
        active: true
      },
      {
        id: 3,
        title: "Spiritual Awakening",
        description: "Explore your spiritual journey and inner wisdom.",
        icon: "moon",
        price: "₹2,999",
        gradient: "from-purple-500/20 to-indigo-500/20", 
        borderColor: "border-purple-400/30",
        active: true
      }
    ] as Service[],
    cta: {
      text: "Not Sure? Get a Custom Reading",
      active: true
    }
  },

  footer: {
    newsletter: {
      badge: {
        icon: "sparkles",
        text: "Stay Connected"
      },
      headline: "Weekly Mystical Insights",
      description: "Get exclusive tarot wisdom, spiritual guidance, and special offers delivered to your inbox.",
      placeholder: "Enter your email address",
      buttonText: "Subscribe",
      active: true
    },
    brand: {
      logo: {
        text: "Mystic Tarot",
        icon: "sparkles"
      },
      description: "Illuminating paths with ancient wisdom and modern insight. Your journey to clarity begins here."
    },
    contact: {
      email: "hello@mystictarot.in",
      phone: "+91 98000 12345",
      location: "Mumbai, Maharashtra, India"
    },
    sections: [
      {
        title: "Services",
        links: [
          { name: "Love Readings", href: "#love", active: true },
          { name: "Career Guidance", href: "#career", active: true },
          { name: "Spiritual Awakening", href: "#spiritual", active: true }
        ]
      }
    ],
    social: [
      { platform: "facebook", href: "#facebook", active: true },
      { platform: "twitter", href: "#twitter", active: true },
      { platform: "instagram", href: "#instagram", active: true },
      { platform: "youtube", href: "#youtube", active: true }
    ],
    legal: {
      copyright: "© 2025 Mystic Tarot. All rights reserved.",
      links: [
        { name: "Privacy Policy", href: "#privacy", active: true },
        { name: "Terms of Service", href: "#terms", active: true }
      ]
    }
  }
};
