const majorArcana = [
  {
    "title": "The Fool",
    "description_upright": "New beginnings, spontaneity, adventure, innocence, and free spirit.",
    "description_reversed": "Recklessness, fear of the unknown, holding back, risk-taking without thought.",
    "is_major_arcana": true,
    "theme": ["beginnings", "adventure", "naivety", "freedom", "potential"]
  },
  {
    "title": "The Magician",
    "description_upright": "Manifestation, resourcefulness, power, inspired action.",
    "description_reversed": "Manipulation, poor planning, untapped talents.",
    "is_major_arcana": true,
    "theme": ["creation", "focus", "willpower", "potential", "alchemy"]
  },
  {
    "title": "The High Priestess",
    "description_upright": "Intuition, sacred knowledge, divine feminine, the subconscious mind.",
    "description_reversed": "Secrets, disconnected from intuition, withdrawal and silence.",
    "is_major_arcana": true,
    "theme": ["intuition", "mystery", "wisdom", "secrecy", "spirituality"]
  },
  {
    "title": "The Empress",
    "description_upright": "Femininity, beauty, nature, nurturing, abundance.",
    "description_reversed": "Creative block, dependence on others, smothering.",
    "is_major_arcana": true,
    "theme": ["fertility", "motherhood", "creativity", "nature", "sensuality"]
  },
  {
    "title": "The Emperor",
    "description_upright": "Authority, establishment, structure, a father figure.",
    "description_reversed": "Domination, excessive control, rigidity, inflexibility.",
    "is_major_arcana": true,
    "theme": ["power", "leadership", "order", "stability", "masculinity"]
  },
  {
    "title": "The Lovers",
    "description_upright": "Love, harmony, relationships, values alignment, choices.",
    "description_reversed": "Disharmony, imbalance, misalignment of values.",
    "is_major_arcana": true,
    "theme": ["union", "partnership", "choice", "duality", "attraction"]
  },
  {
    "title": "Strength",
    "description_upright": "Courage, persuasion, influence, compassion.",
    "description_reversed": "Self-doubt, weakness, insecurity, low energy.",
    "is_major_arcana": true,
    "theme": ["resilience", "inner power", "patience", "bravery", "compassion"]
  },
  {
    "title": "Ten of Swords",
    "description_upright": "Painful endings, deep wounds, betrayal, loss.",
    "description_reversed": "Recovery, regeneration, resisting an inevitable end.",
    "is_major_arcana": false,
    "theme": ["endings", "betrayal", "pain", "surrender", "transition"]
  },
  {
    "title": "Two of Cups",
    "description_upright": "Unified love, partnership, mutual attraction.",
    "description_reversed": "Breakups, imbalance in a relationship, lack of harmony.",
    "is_major_arcana": false,
    "theme": ["love", "connection", "unity", "duality", "trust"]
  },
  {
    "title": "Ace of Wands",
    "description_upright": "Inspiration, new opportunities, growth, potential.",
    "description_reversed": "Delays, lack of motivation, weighed down.",
    "is_major_arcana": false,
    "theme": ["creativity", "energy", "initiative", "beginning", "ambition"]
  },
  {
    "title": "The Chariot",
    "description_upright": "Control, willpower, success, action, determination.",
    "description_reversed": "Lack of control, opposition, lack of direction.",
    "is_major_arcana": true,
    "theme": ["victory", "drive", "ambition", "discipline", "progress"]
  },
  {
    "title": "The Hermit",
    "description_upright": "Soul-searching, introspection, being alone, inner guidance.",
    "description_reversed": "Isolation, loneliness, withdrawal.",
    "is_major_arcana": true,
    "theme": ["wisdom", "solitude", "reflection", "guidance", "spirituality"]
  },
  {
    "title": "Wheel of Fortune",
    "description_upright": "Good luck, karma, life cycles, destiny, a turning point.",
    "description_reversed": "Bad luck, resistance to change, breaking cycles.",
    "is_major_arcana": true,
    "theme": ["fate", "change", "luck", "timing", "cycles"]
  },
  {
    "title": "Justice",
    "description_upright": "Justice, fairness, truth, law, cause and effect.",
    "description_reversed": "Unfairness, lack of accountability, dishonesty.",
    "is_major_arcana": true,
    "theme": ["balance", "truth", "integrity", "law", "ethics"]
  },
  {
    "title": "The Hanged Man",
    "description_upright": "Pause, surrender, letting go, new perspectives.",
    "description_reversed": "Delays, resistance, stalling, indecision.",
    "is_major_arcana": true,
    "theme": ["sacrifice", "patience", "contemplation", "release", "awakening"]
  },
  {
    "title": "Death",
    "description_upright": "Endings, change, transformation, transition.",
    "description_reversed": "Resistance to change, personal transformation, inner purging.",
    "is_major_arcana": true,
    "theme": ["rebirth", "transition", "letting go", "transformation", "closure"]
  },
  {
    "title": "Temperance",
    "description_upright": "Balance, moderation, patience, purpose.",
    "description_reversed": "Imbalance, excess, lack of long-term vision.",
    "is_major_arcana": true,
    "theme": ["harmony", "healing", "moderation", "alchemy", "purpose"]
  },
  {
    "title": "The Devil",
    "description_upright": "Addiction, materialism, playfulness, bondage.",
    "description_reversed": "Releasing limiting beliefs, detachment, freedom.",
    "is_major_arcana": true,
    "theme": ["temptation", "shadow", "attachment", "control", "illusion"]
  },
  {
    "title": "The Tower",
    "description_upright": "Sudden change, upheaval, chaos, revelation, awakening.",
    "description_reversed": "Avoidance of disaster, fear of change, resisting transformation.",
    "is_major_arcana": true,
    "theme": ["disruption", "revelation", "collapse", "liberation", "awakening"]
  },
  {
    "title": "The Star",
    "description_upright": "Hope, faith, purpose, renewal, spirituality.",
    "description_reversed": "Lack of faith, despair, disconnection.",
    "is_major_arcana": true,
    "theme": ["inspiration", "healing", "guidance", "clarity", "serenity"]
  },

  {
    "title": "The Moon",
    "description_upright": "Illusion, fear, anxiety, subconscious, intuition.",
    "description_reversed": "Releasing fear, repressed emotion, inner confusion.",
    "is_major_arcana": true,
    "theme": ["mystery", "intuition", "deception", "emotion", "dreams"]
  },
  {
    "title": "The Sun",
    "description_upright": "Positivity, fun, warmth, success, vitality.",
    "description_reversed": "Inner child, feeling down, overly optimistic.",
    "is_major_arcana": true,
    "theme": ["joy", "clarity", "growth", "confidence", "energy"]
  },
  {
    "title": "Judgement",
    "description_upright": "Judgement, rebirth, inner calling, absolution.",
    "description_reversed": "Self-doubt, inner critic, ignoring the call.",
    "is_major_arcana": true,
    "theme": ["awakening", "renewal", "accountability", "reflection", "forgiveness"]
  },
  {
    "title": "The World",
    "description_upright": "Completion, integration, accomplishment, travel.",
    "description_reversed": "Seeking closure, short-cuts, delays.",
    "is_major_arcana": true,
    "theme": ["wholeness", "fulfillment", "achievement", "travel", "unity"]
  }
];

const cups = [
  [
  {
    "title": "Ace of Cups",
    "description_upright": "Love, new relationships, compassion, creativity.",
    "description_reversed": "Blocked or repressed emotions, emptiness.",
    "is_major_arcana": false,
    "theme": ["emotion", "new beginnings", "connection", "intuition", "love"]
  },
  {
    "title": "Two of Cups",
    "description_upright": "Unified love, partnership, mutual attraction.",
    "description_reversed": "Breakups, imbalance in a relationship, lack of harmony.",
    "is_major_arcana": false,
    "theme": ["union", "partnership", "trust", "balance", "romance"]
  },
  {
    "title": "Three of Cups",
    "description_upright": "Celebration, friendship, creativity, community.",
    "description_reversed": "Overindulgence, gossip, isolation.",
    "is_major_arcana": false,
    "theme": ["friendship", "joy", "reunion", "sisterhood", "celebration"]
  },
  {
    "title": "Four of Cups",
    "description_upright": "Meditation, contemplation, apathy, reevaluation.",
    "description_reversed": "Sudden awareness, choosing happiness, acceptance.",
    "is_major_arcana": false,
    "theme": ["discontent", "boredom", "reflection", "opportunity", "withdrawal"]
  },
  {
    "title": "Five of Cups",
    "description_upright": "Regret, failure, disappointment, pessimism.",
    "description_reversed": "Acceptance, moving on, finding peace.",
    "is_major_arcana": false,
    "theme": ["loss", "grief", "regret", "healing", "perspective"]
  },
  {
    "title": "Six of Cups",
    "description_upright": "Revisiting the past, childhood memories, innocence, joy.",
    "description_reversed": "Living in the past, forgiveness, lacking playfulness.",
    "is_major_arcana": false,
    "theme": ["nostalgia", "memory", "innocence", "reunion", "sentiment"]
  },
  {
    "title": "Seven of Cups",
    "description_upright": "Opportunities, choices, wishful thinking, illusion.",
    "description_reversed": "Alignment, personal values, overwhelmed by choices.",
    "is_major_arcana": false,
    "theme": ["fantasy", "confusion", "desire", "imagination", "temptation"]
  },
  {
    "title": "Eight of Cups",
    "description_upright": "Disappointment, withdrawal, escapism, abandonment.",
    "description_reversed": "Trying one more time, indecision, aimless drifting.",
    "is_major_arcana": false,
    "theme": ["letting go", "searching", "resignation", "change", "reflection"]
  },
  {
    "title": "Nine of Cups",
    "description_upright": "Contentment, satisfaction, gratitude, wish come true.",
    "description_reversed": "Lack of inner joy, dissatisfaction, smugness.",
    "is_major_arcana": false,
    "theme": ["pleasure", "fulfillment", "gratitude", "luxury", "desire"]
  },
  {
    "title": "Ten of Cups",
    "description_upright": "Divine love, blissful relationships, harmony, alignment.",
    "description_reversed": "Disconnection, misaligned values, struggling relationships.",
    "is_major_arcana": false,
    "theme": ["family", "happiness", "completion", "love", "security"]
  },
  {
    "title": "Page of Cups",
    "description_upright": "Creative opportunities, curiosity, possibility, intuition.",
    "description_reversed": "Emotional immaturity, insecurity, disappointment.",
    "is_major_arcana": false,
    "theme": ["imagination", "sensitivity", "youth", "messages", "emotion"]
  },
  {
    "title": "Knight of Cups",
    "description_upright": "Romance, charm, imagination, beauty.",
    "description_reversed": "Moodiness, disappointment, unrealistic expectations.",
    "is_major_arcana": false,
    "theme": ["proposal", "idealism", "pursuit", "charm", "romanticism"]
  },
  {
    "title": "Queen of Cups",
    "description_upright": "Compassionate, caring, emotionally stable, intuitive.",
    "description_reversed": "Insecurity, dependence, emotional immaturity.",
    "is_major_arcana": false,
    "theme": ["empathy", "nurturing", "intuition", "support", "emotion"]
  },
  {
    "title": "King of Cups",
    "description_upright": "Emotionally balanced, compassionate, diplomatic.",
    "description_reversed": "Emotional manipulation, moodiness, volatility.",
    "is_major_arcana": false,
    "theme": ["maturity", "control", "compassion", "wisdom", "calm"]
  }
]

];

const pentacles = [
  {
    "title": "Ace of Pentacles",
    "description_upright": "A new financial or career opportunity, manifestation, abundance.",
    "description_reversed": "Lost opportunity, lack of planning, poor investment.",
    "is_major_arcana": false,
    "theme": ["prosperity", "beginnings", "opportunity", "wealth", "security"]
  },
  {
    "title": "Two of Pentacles",
    "description_upright": "Multiple priorities, time management, adaptability.",
    "description_reversed": "Over-committed, disorganization, reprioritization.",
    "is_major_arcana": false,
    "theme": ["balance", "flexibility", "responsibility", "juggling", "flow"]
  },
  {
    "title": "Three of Pentacles",
    "description_upright": "Teamwork, collaboration, learning, implementation.",
    "description_reversed": "Disharmony, misalignment, working alone.",
    "is_major_arcana": false,
    "theme": ["teamwork", "skill", "growth", "cooperation", "planning"]
  },
  {
    "title": "Four of Pentacles",
    "description_upright": "Saving money, security, conservatism, scarcity mindset.",
    "description_reversed": "Over-spending, greed, self-protection.",
    "is_major_arcana": false,
    "theme": ["control", "possessiveness", "security", "attachment", "resources"]
  },
  {
    "title": "Five of Pentacles",
    "description_upright": "Financial loss, poverty, isolation, worry.",
    "description_reversed": "Recovery from loss, spiritual poverty, improvement.",
    "is_major_arcana": false,
    "theme": ["hardship", "struggle", "poverty", "exclusion", "resilience"]
  },
  {
    "title": "Six of Pentacles",
    "description_upright": "Giving, receiving, sharing wealth, generosity, charity.",
    "description_reversed": "Strings attached, inequality, debt.",
    "is_major_arcana": false,
    "theme": ["generosity", "balance", "support", "charity", "fairness"]
  },
  {
    "title": "Seven of Pentacles",
    "description_upright": "Long-term view, perseverance, investment, sustainable results.",
    "description_reversed": "Lack of long-term vision, limited success or reward.",
    "is_major_arcana": false,
    "theme": ["patience", "harvest", "growth", "reflection", "planning"]
  },
  {
    "title": "Eight of Pentacles",
    "description_upright": "Apprenticeship, skill development, mastery, hard work.",
    "description_reversed": "Lack of focus or ambition, uninspired, careless work.",
    "is_major_arcana": false,
    "theme": ["dedication", "practice", "craftsmanship", "discipline", "effort"]
  },
  {
    "title": "Nine of Pentacles",
    "description_upright": "Abundance, luxury, self-sufficiency, financial independence.",
    "description_reversed": "Reckless spending, living beyond means, dependence.",
    "is_major_arcana": false,
    "theme": ["independence", "reward", "wealth", "success", "refinement"]
  },
  {
    "title": "Ten of Pentacles",
    "description_upright": "Wealth, inheritance, family, establishment, legacy.",
    "description_reversed": "Financial failure, family disputes, instability.",
    "is_major_arcana": false,
    "theme": ["legacy", "tradition", "abundance", "family", "security"]
  },
  {
    "title": "Page of Pentacles",
    "description_upright": "Manifestation, financial opportunity, skill development.",
    "description_reversed": "Lack of progress, procrastination, short-term focus.",
    "is_major_arcana": false,
    "theme": ["ambition", "learning", "opportunity", "focus", "potential"]
  },
  {
    "title": "Knight of Pentacles",
    "description_upright": "Hard work, productivity, routine, conservatism.",
    "description_reversed": "Laziness, boredom, feeling ‘stuck’, perfectionism.",
    "is_major_arcana": false,
    "theme": ["diligence", "responsibility", "routine", "persistence", "service"]
  },
  {
    "title": "Queen of Pentacles",
    "description_upright": "Nurturing, practical, providing financially, a working parent.",
    "description_reversed": "Financial insecurity, imbalance in work/home life.",
    "is_major_arcana": false,
    "theme": ["comfort", "stability", "resourcefulness", "caregiving", "prosperity"]
  },
  {
    "title": "King of Pentacles",
    "description_upright": "Wealth, business, leadership, security, discipline.",
    "description_reversed": "Greed, indulgence, stubbornness, rigidity._
  }
];

const swords = [
  {
    "title": "Ace of Swords",
    "description_upright": "Breakthroughs, clarity, sharp mind, new ideas.",
    "description_reversed": "Confusion, chaos, lack of clarity.",
    "is_major_arcana": false,
    "theme": ["truth", "clarity", "intellect", "justice", "ideas"]
  },
  {
    "title": "Two of Swords",
    "description_upright": "Difficult decisions, weighing options, stalemate, avoidance.",
    "description_reversed": "Indecision, confusion, information overload.",
    "is_major_arcana": false,
    "theme": ["duality", "indecision", "choices", "evasion", "balance"]
  },
  {
    "title": "Three of Swords",
    "description_upright": "Heartbreak, emotional pain, sorrow, grief.",
    "description_reversed": "Recovery, forgiveness, moving on.",
    "is_major_arcana": false,
    "theme": ["heartache", "loss", "separation", "sadness", "healing"]
  },
  {
    "title": "Four of Swords",
    "description_upright": "Rest, relaxation, meditation, contemplation, recovery.",
    "description_reversed": "Restlessness, burnout, stress, lack of progress.",
    "is_major_arcana": false,
    "theme": ["recovery", "pause", "healing", "reflection", "rest"]
  },
  {
    "title": "Five of Swords",
    "description_upright": "Conflict, disagreements, competition, defeat.",
    "description_reversed": "Reconciliation, making amends, past resentment.",
    "is_major_arcana": false,
    "theme": ["tension", "loss", "ego", "conflict", "strategy"]
  },
  {
    "title": "Six of Swords",
    "description_upright": "Transition, change, rite of passage, releasing baggage.",
    "description_reversed": "Resistance to change, emotional baggage, unfinished business.",
    "is_major_arcana": false,
    "theme": ["journey", "healing", "moving on", "release", "progress"]
  },
  {
    "title": "Seven of Swords",
    "description_upright": "Deception, trickery, strategy, betrayal.",
    "description_reversed": "Coming clean, rethinking approach, deception exposed.",
    "is_major_arcana": false,
    "theme": ["betrayal", "strategy", "secrecy", "evasion", "dishonesty"]
  },
  {
    "title": "Eight of Swords",
    "description_upright": "Restriction, limitation, fear, feeling trapped.",
    "description_reversed": "Freedom, release, finding solutions.",
    "is_major_arcana": false,
    "theme": ["entrapment", "fear", "powerlessness", "blindness", "limitation"]
  },
  {
    "title": "Nine of Swords",
    "description_upright": "Anxiety, worry, fear, nightmares, guilt.",
    "description_reversed": "Hope, reaching out, accepting help, healing.",
    "is_major_arcana": false,
    "theme": ["despair", "regret", "fear", "anxiety", "mental health"]
  },
  {
    "title": "Ten of Swords",
    "description_upright": "Painful endings, betrayal, loss, crisis.",
    "description_reversed": "Recovery, regeneration, resisting an inevitable end.",
    "is_major_arcana": false,
    "theme": ["ending", "collapse", "betrayal", "suffering", "transition"]
  },
  {
    "title": "Page of Swords",
    "description_upright": "Curiosity, mental energy, communication, new ideas.",
    "description_reversed": "Deception, manipulation, all talk and no action.",
    "is_major_arcana": false,
    "theme": ["inquiry", "alertness", "communication", "youth", "vigilance"]
  },
  {
    "title": "Knight of Swords",
    "description_upright": "Action, ambition, drive, assertiveness.",
    "description_reversed": "Restlessness, unfocused energy, impulsiveness.",
    "is_major_arcana": false,
    "theme": ["momentum", "challenge", "urgency", "ambition", "determination"]
  },
  {
    "title": "Queen of Swords",
    "description_upright": "Independence, perception, clear boundaries, communication.",
    "description_reversed": "Cold-hearted, cruel, overly critical.",
    "is_major_arcana": false,
    "theme": ["wisdom", "truth", "boundaries", "clarity", "intellect"]
  },
  {
    "title": "King of Swords",
    "description_upright": "Mental clarity, truth, authority, intellectual power.",
    "description_reversed": "Manipulative, abusive power, irrationality.",
    "is_major_arcana": false,
    "theme": ["logic", "authority", "judgment", "strategy", "discipline"]
  }
];

const wands = [
  {
    "title": "Ace of Wands",
    "description_upright": "Inspiration, new opportunities, growth, potential.",
    "description_reversed": "Delays, lack of motivation, weighed down.",
    "is_major_arcana": false,
    "theme": ["creativity", "energy", "passion", "beginning", "ambition"]
  },
  {
    "title": "Two of Wands",
    "description_upright": "Planning, making decisions, discovery, future vision.",
    "description_reversed": "Fear of change, playing it safe, lack of planning.",
    "is_major_arcana": false,
    "theme": ["choices", "foresight", "exploration", "decisions", "ambition"]
  },
  {
    "title": "Three of Wands",
    "description_upright": "Expansion, progress, foresight, overseas opportunities.",
    "description_reversed": "Delays, obstacles, frustration, lack of growth.",
    "is_major_arcana": false,
    "theme": ["growth", "vision", "momentum", "enterprise", "opportunity"]
  },
  {
    "title": "Four of Wands",
    "description_upright": "Celebration, joy, harmony, homecoming.",
    "description_reversed": "Conflict at home, breakdown in communication.",
    "is_major_arcana": false,
    "theme": ["stability", "celebration", "community", "family", "joy"]
  },
  {
    "title": "Five of Wands",
    "description_upright": "Conflict, competition, disagreements, tension.",
    "description_reversed": "Avoiding conflict, compromise, harmony.",
    "is_major_arcana": false,
    "theme": ["struggle", "challenge", "rivalry", "assertion", "competition"]
  },
  {
    "title": "Six of Wands",
    "description_upright": "Success, public recognition, progress, self-confidence.",
    "description_reversed": "Ego, fall from grace, lack of recognition.",
    "is_major_arcana": false,
    "theme": ["victory", "fame", "accomplishment", "praise", "confidence"]
  },
  {
    "title": "Seven of Wands",
    "description_upright": "Challenge, competition, protection, perseverance.",
    "description_reversed": "Exhaustion, overwhelmed, giving up.",
    "is_major_arcana": false,
    "theme": ["defense", "resilience", "courage", "standing firm", "struggle"]
  },
  {
    "title": "Eight of Wands",
    "description_upright": "Speed, progress, rapid action, movement.",
    "description_reversed": "Delays, resistance, lack of momentum.",
    "is_major_arcana": false,
    "theme": ["movement", "communication", "travel", "quickness", "flow"]
  },
  {
    "title": "Nine of Wands",
    "description_upright": "Resilience, courage, persistence, test of faith.",
    "description_reversed": "Defensiveness, paranoia, giving up.",
    "is_major_arcana": false,
    "theme": ["endurance", "protection", "boundaries", "tenacity", "wounded"]
  },
  {
    "title": "Ten of Wands",
    "description_upright": "Burden, responsibility, stress, hard work.",
    "description_reversed": "Burnout, overwhelm, letting go.",
    "is_major_arcana": false,
    "theme": ["overload", "obligation", "duty", "weight", "sacrifice"]
  },
  {
    "title": "Page of Wands",
    "description_upright": "Inspiration, ideas, discovery, limitless potential.",
    "description_reversed": "Lack of direction, procrastination, setbacks.",
    "is_major_arcana": false,
    "theme": ["enthusiasm", "curiosity", "youth", "energy", "new beginnings"]
  },
  {
    "title": "Knight of Wands",
    "description_upright": "Energy, passion, inspired action, adventure.",
    "description_reversed": "Recklessness, haste, anger, scattered energy.",
    "is_major_arcana": false,
    "theme": ["impulsiveness", "bravery", "drive", "adventure", "movement"]
  },
  {
    "title": "Queen of Wands",
    "description_upright": "Courage, confidence, independence, social butterfly.",
    "description_reversed": "Insecurity, selfishness, jealousy.",
    "is_major_arcana": false,
    "theme": ["vibrancy", "leadership", "passion", "independence", "magnetism"]
  },
  {
    "title": "King of Wands",
    "description_upright": "Natural leader, vision, entrepreneur, honor.",
    "description_reversed": "Impulsiveness, haste, ruthless, high expectations.",
    "is_major_arcana": false,
    "theme": ["leadership", "vision", "influence", "authority", "ambition"]
  }
];