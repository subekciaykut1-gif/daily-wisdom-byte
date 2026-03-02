export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  readTime: number;
  listenTime: number;
  oneLiner: string;
  rating: number;
  keyIdeas: string[];
  summary: string[];
  tags: string[];
}

export interface UserProgress {
  streak: number;
  xp: number;
  level: number;
  booksRead: number;
  minutesListened: number;
  highlightsSaved: number;
  weeklyActivity: number[];
}

export const categories = [
  { id: "business", label: "Business & Career", emoji: "💼" },
  { id: "personal", label: "Personal Development", emoji: "🌱" },
  { id: "psychology", label: "Psychology & Mind", emoji: "🧠" },
  { id: "finance", label: "Finance & Investing", emoji: "💰" },
  { id: "health", label: "Health & Wellness", emoji: "🏃" },
  { id: "science", label: "Science & Technology", emoji: "🔬" },
  { id: "philosophy", label: "Philosophy & Society", emoji: "📜" },
  { id: "creativity", label: "Creativity & Arts", emoji: "🎨" },
];

export const books: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop",
    category: "personal",
    readTime: 8,
    listenTime: 12,
    oneLiner: "Tiny changes, remarkable results — the power of 1% daily improvement.",
    rating: 4.9,
    keyIdeas: [
      "Habits are the compound interest of self-improvement",
      "Focus on systems, not goals",
      "The 4 laws of behavior change: make it obvious, attractive, easy, and satisfying",
      "Identity-based habits are more lasting than outcome-based ones",
    ],
    summary: [
      "James Clear argues that real change comes from the compound effect of hundreds of small decisions. He introduces the concept of atomic habits — tiny routines that are part of a larger system. Rather than focusing on ambitious goals, Clear suggests building systems of small habits that align with the person you wish to become.",
      "The book introduces the Four Laws of Behavior Change: make it obvious (cue), make it attractive (craving), make it easy (response), and make it satisfying (reward). Each law corresponds to a stage of the habit loop, and Clear provides actionable strategies for each.",
      "One of the most powerful ideas is identity-based habit formation. Instead of saying 'I want to read more,' you say 'I am a reader.' When your habits become part of your identity, they become automatic and self-reinforcing. The book provides a practical framework anyone can use to build better habits and break bad ones.",
    ],
    tags: ["Habits", "Productivity", "Self-Improvement"],
  },
  {
    id: "2",
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=300&h=450&fit=crop",
    category: "business",
    readTime: 10,
    listenTime: 14,
    oneLiner: "In a distracted world, the ability to focus deeply is your greatest competitive advantage.",
    rating: 4.7,
    keyIdeas: [
      "Deep work is the ability to focus without distraction on cognitively demanding tasks",
      "Shallow work is non-cognitively demanding, often performed while distracted",
      "Deep work is becoming increasingly rare and increasingly valuable",
      "Schedule deep work blocks and ruthlessly protect them",
    ],
    summary: [
      "Cal Newport makes the case that in our economy, the ability to perform deep work — focused, uninterrupted, cognitively demanding work — is becoming both increasingly valuable and increasingly rare.",
      "Newport identifies four strategies for deep work: the monastic approach (eliminating all distractions), the bimodal approach (alternating between deep and shallow periods), the rhythmic approach (scheduling fixed deep work blocks), and the journalistic approach (fitting deep work in whenever possible).",
      "The book argues that most knowledge workers spend their days in a state of busyness that feels productive but produces little of value. By deliberately cultivating the ability to go deep, you can produce work that matters and build skills that are truly valuable.",
    ],
    tags: ["Focus", "Productivity", "Career"],
  },
  {
    id: "3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    category: "psychology",
    readTime: 12,
    listenTime: 16,
    oneLiner: "Two systems of thinking shape our judgments, decisions, and the errors we inevitably make.",
    rating: 4.8,
    keyIdeas: [
      "System 1 is fast, intuitive, and emotional; System 2 is slow, deliberate, and logical",
      "Cognitive biases distort our judgment in predictable ways",
      "We are overconfident in our understanding and our ability to predict",
      "Loss aversion: losses feel roughly twice as painful as equivalent gains feel good",
    ],
    summary: [
      "Nobel laureate Daniel Kahneman revolutionized our understanding of how humans think and make decisions. He introduces two systems: System 1, which operates automatically and quickly with little effort, and System 2, which allocates attention to effortful mental activities.",
      "The book explores dozens of cognitive biases that arise from the interplay of these two systems, including anchoring, the availability heuristic, and the planning fallacy. Kahneman shows how these biases affect everything from personal choices to professional judgments.",
      "Perhaps most importantly, Kahneman demonstrates that even awareness of these biases doesn't make us immune to them. The best we can do is build environments and processes that help us make better decisions despite our flawed thinking.",
    ],
    tags: ["Psychology", "Decision Making", "Behavioral Science"],
  },
  {
    id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=450&fit=crop",
    category: "finance",
    readTime: 9,
    listenTime: 13,
    oneLiner: "Financial success is not about intelligence — it's about behavior.",
    rating: 4.8,
    keyIdeas: [
      "No one's crazy — everyone makes financial decisions based on their unique experiences",
      "Getting wealthy vs. staying wealthy require different skills",
      "Reasonable beats rational when it comes to money decisions",
      "Room for error is the most important part of every financial plan",
    ],
    summary: [
      "Morgan Housel explores the strange ways people think about money and teaches you how to make better sense of one of life's most important topics. The book contains 19 short stories exploring the strange ways people think about money.",
      "Housel argues that doing well with money has little to do with how smart you are and a lot to do with how you behave. And behavior is hard to teach, even to really smart people. Financial success is a soft skill where how you behave is more important than what you know.",
      "The book emphasizes that everyone has a different relationship with greed and fear, and that reasonable financial decisions almost always beat mathematically optimal ones because you can actually stick with them.",
    ],
    tags: ["Finance", "Investing", "Behavior"],
  },
  {
    id: "5",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=450&fit=crop",
    category: "personal",
    readTime: 11,
    listenTime: 15,
    oneLiner: "Effectiveness is a habit — and it starts from the inside out.",
    rating: 4.6,
    keyIdeas: [
      "Be proactive: focus on what you can control",
      "Begin with the end in mind: define your personal mission",
      "Think win-win: seek mutually beneficial solutions",
      "Sharpen the saw: renew yourself in four areas of life",
    ],
    summary: [
      "Stephen Covey presents a principle-centered approach for solving personal and professional problems. The seven habits move us from dependence to independence to interdependence.",
      "The first three habits focus on self-mastery: being proactive, beginning with the end in mind, and putting first things first. The next three are about working effectively with others: thinking win-win, seeking first to understand, then to be understood, and synergizing.",
      "The seventh habit — sharpen the saw — is about continuous renewal and improvement in four areas: physical, social/emotional, mental, and spiritual. Covey argues that true effectiveness requires balancing all four.",
    ],
    tags: ["Leadership", "Habits", "Effectiveness"],
  },
  {
    id: "6",
    title: "Why We Sleep",
    author: "Matthew Walker",
    cover: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&h=450&fit=crop",
    category: "health",
    readTime: 10,
    listenTime: 14,
    oneLiner: "Sleep is the single most effective thing we can do to reset our brain and body health each day.",
    rating: 4.7,
    keyIdeas: [
      "Sleep is the most important pillar of health — more than diet or exercise",
      "Every disease in the developed world has links to sleep deficiency",
      "REM sleep is critical for emotional regulation and creativity",
      "8 hours in bed ≠ 8 hours of sleep",
    ],
    summary: [
      "Neuroscientist Matthew Walker provides a revolutionary exploration of sleep, examining how it affects every aspect of our physical and mental health. He explains why sleep is the most important thing you can do for your health.",
      "Walker reveals that sleep enriches our ability to learn, memorize, and make logical decisions. It recalibrates our emotions, restocks our immune system, fine-tunes our metabolism, and regulates our appetite.",
      "The book sounds an urgent alarm about our modern sleep crisis and provides actionable tips for improving sleep quality, from maintaining a consistent schedule to creating the right bedroom environment.",
    ],
    tags: ["Health", "Neuroscience", "Wellness"],
  },
];

export const learningPlans = [
  {
    id: "plan-1",
    title: "Become a Better Leader",
    emoji: "👑",
    duration: 28,
    booksCount: 28,
    progress: 12,
    color: "primary",
  },
  {
    id: "plan-2",
    title: "Master Your Finances",
    emoji: "💰",
    duration: 28,
    booksCount: 28,
    progress: 0,
    color: "accent",
  },
  {
    id: "plan-3",
    title: "Build Unshakeable Habits",
    emoji: "⚡",
    duration: 28,
    booksCount: 28,
    progress: 5,
    color: "warning",
  },
];

export const levels = [
  { level: 1, name: "Curious Seedling", emoji: "🌱", xpRequired: 0 },
  { level: 2, name: "Eager Reader", emoji: "📖", xpRequired: 100 },
  { level: 3, name: "Knowledge Seeker", emoji: "🔍", xpRequired: 300 },
  { level: 4, name: "Insight Hunter", emoji: "💡", xpRequired: 700 },
  { level: 5, name: "Book Ninja", emoji: "🥷", xpRequired: 1500 },
  { level: 6, name: "Thought Leader", emoji: "🧠", xpRequired: 3000 },
  { level: 7, name: "Wisdom Architect", emoji: "🏛️", xpRequired: 6000 },
  { level: 8, name: "Growth Legend", emoji: "🏆", xpRequired: 12000 },
];

export const badges = [
  { id: "first-step", name: "First Step", emoji: "🐣", description: "Complete first book summary", earned: true },
  { id: "speed-learner", name: "Speed Learner", emoji: "⚡", description: "Complete 3 summaries in one day", earned: false },
  { id: "early-bird", name: "Early Bird", emoji: "🌅", description: "Open app before 7am for 5 days", earned: true },
  { id: "night-owl", name: "Night Owl", emoji: "🦉", description: "Complete summary after 10pm for 5 days", earned: false },
  { id: "highlighter-pro", name: "Highlighter Pro", emoji: "✏️", description: "Save 50 highlights", earned: false },
  { id: "audio-addict", name: "Audio Addict", emoji: "🎧", description: "Complete 20 audio summaries", earned: true },
  { id: "plan-finisher", name: "Plan Finisher", emoji: "📅", description: "Complete a 28-Day Plan", earned: false },
  { id: "streak-master", name: "Streak Master", emoji: "🔥", description: "Maintain a 30-day streak", earned: false },
  { id: "bookworm", name: "Bookworm Legend", emoji: "📚", description: "Complete 100 summaries", earned: false },
];

export const userProgress: UserProgress = {
  streak: 12,
  xp: 450,
  level: 3,
  booksRead: 18,
  minutesListened: 247,
  highlightsSaved: 34,
  weeklyActivity: [1, 1, 1, 0, 1, 1, 1],
};

export const dailyQuote = {
  text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  author: "Aristotle",
  book: "Referenced in Atomic Habits",
};
