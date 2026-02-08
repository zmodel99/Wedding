const PROMPTS = [
  {
    id: "CH01",
    segment: "cocktail",
    title: "Signature Sip",
    type: "photo",
    vibe: "easy",
    prompt: "Photograph your drink like it’s a product ad.",
  },
  {
    id: "CH02",
    segment: "cocktail",
    title: "Cheers Clip",
    type: "video",
    vibe: "easy",
    prompt: "Record a 5-second cheers with your group.",
  },
  {
    id: "CH03",
    segment: "cocktail",
    title: "Fit Check",
    type: "photo",
    vibe: "easy",
    prompt: "Full-body outfit photo. Clean background.",
  },
  {
    id: "CH04",
    segment: "cocktail",
    title: "Best Bite",
    type: "photo",
    vibe: "easy",
    prompt: "Photograph the best appetizer before it’s gone.",
  },
  {
    id: "CH05",
    segment: "cocktail",
    title: "Laugh Sniper",
    type: "photo",
    vibe: "medium",
    prompt: "Capture the biggest laugh you see right now.",
  },
  {
    id: "CH06",
    segment: "cocktail",
    title: "Compliment Cam",
    type: "video",
    vibe: "easy",
    prompt: "Record a 6-second compliment for the couple.",
  },
  {
    id: "CH07",
    segment: "cocktail",
    title: "Old Friends",
    type: "photo",
    vibe: "easy",
    prompt: "Candid of two people catching up.",
  },
  {
    id: "CH08",
    segment: "cocktail",
    title: "New Friend",
    type: "photo",
    vibe: "medium",
    prompt: "Take a photo with someone you just met tonight.",
  },
  {
    id: "CH09",
    segment: "cocktail",
    title: "Venue Detail",
    type: "photo",
    vibe: "medium",
    prompt: "Find the prettiest detail and photograph it.",
  },
  {
    id: "CH10",
    segment: "cocktail",
    title: "Candid Documentary",
    type: "photo",
    vibe: "medium",
    prompt: "Take a candid like a documentary still.",
  },
  {
    id: "CH11",
    segment: "cocktail",
    title: "Hands + Drinks",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of just hands holding drinks.",
  },
  {
    id: "CH12",
    segment: "cocktail",
    title: "Clink Close-Up",
    type: "video",
    vibe: "medium",
    prompt: "3-second close-up of glasses clinking.",
  },
  {
    id: "CH13",
    segment: "cocktail",
    title: "Three-Person Selfie",
    type: "photo",
    vibe: "easy",
    prompt: "Selfie with exactly three people.",
  },
  {
    id: "CH14",
    segment: "cocktail",
    title: "Five-Person Selfie",
    type: "photo",
    vibe: "medium",
    prompt: "Selfie with exactly five people.",
  },
  {
    id: "CH15",
    segment: "cocktail",
    title: "Outfit Detail",
    type: "photo",
    vibe: "easy",
    prompt: "Close-up: watch, earrings, cufflinks, nails.",
  },
  {
    id: "CH16",
    segment: "cocktail",
    title: "Shoes Shot",
    type: "photo",
    vibe: "easy",
    prompt: "Best shoes you see (ask first).",
  },
  {
    id: "CH17",
    segment: "cocktail",
    title: "Wide Vibe",
    type: "photo",
    vibe: "easy",
    prompt: "Wide shot of cocktail hour energy.",
  },
  {
    id: "CH18",
    segment: "cocktail",
    title: "Appetizer Reaction",
    type: "video",
    vibe: "easy",
    prompt: "4-second clip of someone trying a bite.",
  },
  {
    id: "CH19",
    segment: "cocktail",
    title: "Cheers Countdown",
    type: "video",
    vibe: "medium",
    prompt: "3-2-1 cheers (5 seconds).",
  },
  {
    id: "CH20",
    segment: "cocktail",
    title: "The Reunion",
    type: "photo",
    vibe: "medium",
    prompt: "Capture a surprised reunion moment.",
  },
  {
    id: "CH21",
    segment: "cocktail",
    title: "Warm Light",
    type: "photo",
    vibe: "medium",
    prompt: "Find warm lighting and take a flattering shot.",
  },
  {
    id: "CH22",
    segment: "cocktail",
    title: "Mirror Moment",
    type: "photo",
    vibe: "medium",
    prompt: "Mirror selfie if available (don’t block traffic).",
  },
  {
    id: "CH23",
    segment: "cocktail",
    title: "Flat Lay",
    type: "photo",
    vibe: "medium",
    prompt: "Overhead: plate + drink, clean composition.",
  },
  {
    id: "CH24",
    segment: "cocktail",
    title: "The Smile",
    type: "photo",
    vibe: "medium",
    prompt: "Capture a real smile, not posed.",
  },
  {
    id: "CH25",
    segment: "cocktail",
    title: "Name + Connection",
    type: "video",
    vibe: "medium",
    prompt: "Ask: name + how you know the couple (8 sec).",
  },
  {
    id: "CH26",
    segment: "cocktail",
    title: "One Word",
    type: "video",
    vibe: "easy",
    prompt: "Ask someone: one word for the vibe so far.",
  },
  {
    id: "CH27",
    segment: "cocktail",
    title: "Group Triangle",
    type: "photo",
    vibe: "medium",
    prompt: "Three people pose in a triangle formation.",
  },
  {
    id: "CH28",
    segment: "cocktail",
    title: "Serious Face",
    type: "photo",
    vibe: "chaos",
    prompt: "Group photo: everyone looks extremely serious.",
  },
  {
    id: "CH29",
    segment: "cocktail",
    title: "Tiny Dance",
    type: "video",
    vibe: "easy",
    prompt: "3-second clip of a tiny dance move.",
  },
  {
    id: "CH30",
    segment: "cocktail",
    title: "Magazine Cover",
    type: "photo",
    vibe: "medium",
    prompt: "Pose someone like a magazine cover.",
  },
  {
    id: "CH31",
    segment: "cocktail",
    title: "Best Duo",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of the best duo you see.",
  },
  {
    id: "CH32",
    segment: "cocktail",
    title: "Laughing Pair",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of two people laughing together.",
  },
  {
    id: "CH33",
    segment: "cocktail",
    title: "Candid Hello",
    type: "photo",
    vibe: "medium",
    prompt: "Capture a handshake/hello moment.",
  },
  {
    id: "CH34",
    segment: "cocktail",
    title: "Bar Line",
    type: "photo",
    vibe: "easy",
    prompt: "Most photogenic line you see (bar/food).",
  },
  {
    id: "CH35",
    segment: "cocktail",
    title: "Group Wave",
    type: "video",
    vibe: "easy",
    prompt: "5-second wave with your group.",
  },
  {
    id: "CH36",
    segment: "cocktail",
    title: "Background Blur",
    type: "photo",
    vibe: "hard",
    prompt: "Portrait with blurred background.",
  },
  {
    id: "CH37",
    segment: "cocktail",
    title: "Walking Vibes",
    type: "video",
    vibe: "medium",
    prompt: "6-second clip walking through the scene.",
  },
  {
    id: "CH38",
    segment: "cocktail",
    title: "Pose-Off",
    type: "photo",
    vibe: "chaos",
    prompt: "Two friends pose-off. Capture the winner.",
  },
  {
    id: "CH39",
    segment: "cocktail",
    title: "Photo With Another Group",
    type: "photo",
    vibe: "medium",
    prompt: "Two groups cheer together in one photo.",
  },
  {
    id: "CH40",
    segment: "cocktail",
    title: "Best Angle Group",
    type: "photo",
    vibe: "medium",
    prompt: "Get the best angle group shot you can.",
  },
  {
    id: "CH41",
    segment: "cocktail",
    title: "Cheers Boomerang",
    type: "video",
    vibe: "medium",
    prompt: "Boomerang-style cheers (3 seconds).",
  },
  {
    id: "CH42",
    segment: "cocktail",
    title: "Elegant Hands",
    type: "photo",
    vibe: "easy",
    prompt: "Close-up of hands holding glasses elegantly.",
  },
  {
    id: "CH43",
    segment: "cocktail",
    title: "Best Pattern",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of the best pattern/outfit texture.",
  },
  {
    id: "CH44",
    segment: "cocktail",
    title: "Tiny Detail",
    type: "photo",
    vibe: "easy",
    prompt: "Zoom on a pretty small detail in decor.",
  },
  {
    id: "CH45",
    segment: "cocktail",
    title: "Quick Toast",
    type: "video",
    vibe: "easy",
    prompt: "Record a 5-second mini-toast from your table.",
  },
  {
    id: "CH46",
    segment: "cocktail",
    title: "Candid Story",
    type: "photo",
    vibe: "medium",
    prompt: "Candid of someone mid-story telling.",
  },
  {
    id: "CH47",
    segment: "cocktail",
    title: "Soft Pan",
    type: "video",
    vibe: "medium",
    prompt: "Slow pan across the room (6 seconds).",
  },
  {
    id: "CH48",
    segment: "cocktail",
    title: "Best Backdrop",
    type: "photo",
    vibe: "medium",
    prompt: "Find best backdrop and take a group shot.",
  },
  {
    id: "CH49",
    segment: "cocktail",
    title: "Cheers + Laugh",
    type: "video",
    vibe: "medium",
    prompt: "Laughter turning into cheers (6 sec).",
  },
  {
    id: "CH50",
    segment: "cocktail",
    title: "Instant Besties",
    type: "photo",
    vibe: "medium",
    prompt: "Photo with someone you met tonight + big smiles.",
  },
  {
    id: "RC01",
    segment: "reception",
    title: "Dance Floor Proof",
    type: "video",
    vibe: "easy",
    prompt: "Record 6 seconds of peak dance floor energy.",
  },
  {
    id: "RC02",
    segment: "reception",
    title: "Iconic Pose",
    type: "photo",
    vibe: "easy",
    prompt: "Group hits one ridiculous pose. Capture it.",
  },
  {
    id: "RC03",
    segment: "reception",
    title: "Spin Shot",
    type: "video",
    vibe: "medium",
    prompt: "Slow 360° pan of the dance floor (under 7 sec).",
  },
  {
    id: "RC04",
    segment: "reception",
    title: "Reaction Cam",
    type: "photo",
    vibe: "medium",
    prompt: "Best reaction during a toast or announcement.",
  },
  {
    id: "RC05",
    segment: "reception",
    title: "Table Toast",
    type: "video",
    vibe: "easy",
    prompt: "3-second toast from your table to the couple.",
  },
  {
    id: "RC06",
    segment: "reception",
    title: "Wide Room Vibe",
    type: "photo",
    vibe: "easy",
    prompt: "Wide shot of the whole reception room.",
  },
  {
    id: "RC07",
    segment: "reception",
    title: "Hands Up",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of hands up during a song.",
  },
  {
    id: "RC08",
    segment: "reception",
    title: "Sing Along",
    type: "video",
    vibe: "chaos",
    prompt: "6 seconds of a group singing along.",
  },
  {
    id: "RC09",
    segment: "reception",
    title: "Dance Circle",
    type: "video",
    vibe: "medium",
    prompt: "Capture a dance circle moment (6 sec).",
  },
  {
    id: "RC10",
    segment: "reception",
    title: "Slow Motion Move",
    type: "video",
    vibe: "medium",
    prompt: "One dance move in slow motion (5 sec).",
  },
  {
    id: "RC11",
    segment: "reception",
    title: "Outfit Detail",
    type: "photo",
    vibe: "easy",
    prompt: "Close-up: pocket square, nails, jewelry.",
  },
  {
    id: "RC12",
    segment: "reception",
    title: "Dancing Feet",
    type: "photo",
    vibe: "medium",
    prompt: "Photo of dancing feet only (no faces).",
  },
  {
    id: "RC13",
    segment: "reception",
    title: "Applause",
    type: "video",
    vibe: "easy",
    prompt: "5 seconds of applause after something big.",
  },
  {
    id: "RC14",
    segment: "reception",
    title: "Dessert Reveal",
    type: "photo",
    vibe: "medium",
    prompt: "Photo of dessert when it hits the table.",
  },
  {
    id: "RC15",
    segment: "reception",
    title: "Candid Conversation",
    type: "photo",
    vibe: "medium",
    prompt: "Candid of someone mid-conversation.",
  },
  {
    id: "RC16",
    segment: "reception",
    title: "Group Jump",
    type: "photo",
    vibe: "chaos",
    prompt: "Group jump photo (max 2 attempts).",
  },
  {
    id: "RC17",
    segment: "reception",
    title: "Air Guitar",
    type: "video",
    vibe: "chaos",
    prompt: "6-second air guitar performance.",
  },
  {
    id: "RC18",
    segment: "reception",
    title: "Air Mic",
    type: "video",
    vibe: "chaos",
    prompt: "6-second pretend microphone performance.",
  },
  {
    id: "RC19",
    segment: "reception",
    title: "Camera Pass",
    type: "video",
    vibe: "chaos",
    prompt: "Pass the phone to 4 people saying ‘Congrats!’",
  },
  {
    id: "RC20",
    segment: "reception",
    title: "High Five Chain",
    type: "video",
    vibe: "medium",
    prompt: "Record a high-five chain (5–7 sec).",
  },
  {
    id: "RC21",
    segment: "reception",
    title: "Epic Duo",
    type: "photo",
    vibe: "easy",
    prompt: "Two people dancing like it’s their moment.",
  },
  {
    id: "RC22",
    segment: "reception",
    title: "Pose Freeze",
    type: "video",
    vibe: "medium",
    prompt: "5-second freeze pose challenge.",
  },
  {
    id: "RC23",
    segment: "reception",
    title: "Best Laugh",
    type: "photo",
    vibe: "medium",
    prompt: "Biggest laugh you see during reception.",
  },
  {
    id: "RC24",
    segment: "reception",
    title: "Nightcap Cheers",
    type: "photo",
    vibe: "easy",
    prompt: "End-of-night cheers photo.",
  },
  {
    id: "RC25",
    segment: "reception",
    title: "Backdrop Group",
    type: "photo",
    vibe: "medium",
    prompt: "Best backdrop group photo.",
  },
  {
    id: "RC26",
    segment: "reception",
    title: "Glow Shot",
    type: "photo",
    vibe: "medium",
    prompt: "Use warm lighting for a flattering glow.",
  },
  {
    id: "RC27",
    segment: "reception",
    title: "Tilt Shot",
    type: "photo",
    vibe: "medium",
    prompt: "Angled shot that still looks good.",
  },
  {
    id: "RC28",
    segment: "reception",
    title: "Moment of Calm",
    type: "photo",
    vibe: "easy",
    prompt: "Quiet candid away from the floor.",
  },
  {
    id: "RC29",
    segment: "reception",
    title: "Photo Bomb",
    type: "photo",
    vibe: "chaos",
    prompt: "Harmless photobomb (respectful).",
  },
  {
    id: "RC30",
    segment: "reception",
    title: "Partner Switch",
    type: "video",
    vibe: "chaos",
    prompt: "Capture a partner-switch moment (6 sec).",
  },
  {
    id: "RC31",
    segment: "reception",
    title: "Line Dance",
    type: "video",
    vibe: "medium",
    prompt: "6 seconds of a line dance (if it happens).",
  },
  {
    id: "RC32",
    segment: "reception",
    title: "DJ Area",
    type: "photo",
    vibe: "medium",
    prompt: "Photo of DJ/speakers if accessible.",
  },
  {
    id: "RC33",
    segment: "reception",
    title: "Dinner Plate",
    type: "photo",
    vibe: "easy",
    prompt: "Quick photo of dinner before first bite.",
  },
  {
    id: "RC34",
    segment: "reception",
    title: "Clap + Cheer",
    type: "video",
    vibe: "easy",
    prompt: "5 seconds of clapping/cheering.",
  },
  {
    id: "RC35",
    segment: "reception",
    title: "Group Selfie Dancefloor",
    type: "photo",
    vibe: "easy",
    prompt: "Selfie with dance floor behind you.",
  },
  {
    id: "RC36",
    segment: "reception",
    title: "Song Reaction",
    type: "video",
    vibe: "easy",
    prompt: "Ask someone: favorite song tonight (5 sec).",
  },
  {
    id: "RC37",
    segment: "reception",
    title: "Hype Train",
    type: "video",
    vibe: "chaos",
    prompt: "6-second hype train moving through the floor.",
  },
  {
    id: "RC38",
    segment: "reception",
    title: "Best Spin",
    type: "video",
    vibe: "medium",
    prompt: "Capture a spin move (5 sec).",
  },
  {
    id: "RC39",
    segment: "reception",
    title: "Two-Step Candid",
    type: "photo",
    vibe: "medium",
    prompt: "Candid of two people dancing together.",
  },
  {
    id: "RC40",
    segment: "reception",
    title: "Hands With Drinks",
    type: "photo",
    vibe: "easy",
    prompt: "Photo of hands raising glasses mid-moment.",
  },
  {
    id: "RC41",
    segment: "reception",
    title: "Serious Formal",
    type: "photo",
    vibe: "chaos",
    prompt: "Everyone looks super formal on the dance floor.",
  },
  {
    id: "RC42",
    segment: "reception",
    title: "Big Group",
    type: "photo",
    vibe: "hard",
    prompt: "Get 8+ people in one photo.",
  },
  {
    id: "RC43",
    segment: "reception",
    title: "Family Moment",
    type: "photo",
    vibe: "medium",
    prompt: "Sweet family hug moment.",
  },
  {
    id: "RC44",
    segment: "reception",
    title: "Best Duo Pose",
    type: "photo",
    vibe: "easy",
    prompt: "Two friends do their best duo pose.",
  },
  {
    id: "RC45",
    segment: "reception",
    title: "Room Tour",
    type: "video",
    vibe: "medium",
    prompt: "6-second clip capturing the room vibe.",
  },
  {
    id: "RC46",
    segment: "reception",
    title: "Confetti Energy",
    type: "video",
    vibe: "medium",
    prompt: "6 seconds of big energy cheering/jumping.",
  },
  {
    id: "RC47",
    segment: "reception",
    title: "One Great Candid",
    type: "photo",
    vibe: "medium",
    prompt: "One candid you’d frame.",
  },
  {
    id: "RC48",
    segment: "reception",
    title: "Table Details",
    type: "photo",
    vibe: "easy",
    prompt: "Centerpiece + place setting photo.",
  },
  {
    id: "RC49",
    segment: "reception",
    title: "Final Frame",
    type: "video",
    vibe: "medium",
    prompt: "6-second goodnight message for the couple.",
  },
  {
    id: "RC50",
    segment: "reception",
    title: "Couple Cameo",
    type: "photo",
    vibe: "hard",
    prompt: "Get the couple in background without interrupting.",
  },
];

const STORAGE_KEYS = {
  completed: "wedding-completed-prompts",
  lastPrompt: "wedding-last-prompt",
};

const state = {
  segment: "reception",
  segmentMode: "manual",
  filters: {
    type: "all",
    vibe: "all",
  },
  currentPrompt: null,
};

const segmentStatus = document.getElementById("segment-status");
const segmentToggle = document.getElementById("segment-toggle");
const getChallengeButton = document.getElementById("get-challenge");
const newPromptButton = document.getElementById("new-prompt");
const markDoneButton = document.getElementById("mark-done");
const promptTitle = document.getElementById("prompt-title");
const promptText = document.getElementById("prompt-text");
const promptType = document.getElementById("prompt-type");
const promptVibe = document.getElementById("prompt-vibe");
const completedCount = document.getElementById("completed-count");
const qrImage = document.getElementById("qr-image");

const easternFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const getEasternParts = () => {
  const parts = easternFormatter.formatToParts(new Date());
  const values = {};
  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = Number(part.value);
    }
  });
  return values;
};

const getSegmentFromTime = () => {
  const { year, month, day, hour, minute } = getEasternParts();
  if (year !== 2026 || month !== 2 || day !== 21) {
    return null;
  }
  const totalMinutes = hour * 60 + minute;
  if (totalMinutes >= 17 * 60 + 30 && totalMinutes < 18 * 60 + 30) {
    return "cocktail";
  }
  if (totalMinutes >= 18 * 60 + 30 && totalMinutes < 22 * 60 + 30) {
    return "reception";
  }
  return null;
};

const applySegmentState = () => {
  const autoSegment = getSegmentFromTime();
  if (autoSegment) {
    state.segmentMode = "auto";
    state.segment = autoSegment;
    segmentToggle.hidden = true;
  } else {
    state.segmentMode = "manual";
    state.segment = "reception";
    segmentToggle.hidden = false;
  }
  updateSegmentUI();
};

const updateSegmentUI = () => {
  const label = state.segment === "cocktail" ? "Cocktail Hour" : "Reception";
  segmentStatus.textContent = `Segment: ${label} (${state.segmentMode})`;
  if (!segmentToggle.hidden) {
    segmentToggle.querySelectorAll("[data-segment]").forEach((button) => {
      const isActive = button.dataset.segment === state.segment;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive.toString());
    });
  }
};

const loadCompleted = () => {
  const stored = localStorage.getItem(STORAGE_KEYS.completed);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveCompleted = (completed) => {
  localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completed));
  completedCount.textContent = String(completed.length);
};

const getLastPromptId = () => localStorage.getItem(STORAGE_KEYS.lastPrompt);

const setLastPromptId = (id) => {
  if (id) {
    localStorage.setItem(STORAGE_KEYS.lastPrompt, id);
  }
};

const matchesVibeFilter = (prompt) => {
  if (state.filters.vibe === "all") return true;
  if (state.filters.vibe === "chaos") {
    return prompt.vibe === "chaos" || prompt.vibe === "hard";
  }
  return prompt.vibe === state.filters.vibe;
};

const getEligiblePrompts = (excludeId) =>
  PROMPTS.filter(
    (prompt) =>
      prompt.segment === state.segment &&
      (state.filters.type === "all" || prompt.type === state.filters.type) &&
      matchesVibeFilter(prompt) &&
      (!excludeId || prompt.id !== excludeId)
  );

const pickPrompt = () => {
  const excludeId = getLastPromptId();
  const eligible = getEligiblePrompts(excludeId);
  if (!eligible.length) {
    return null;
  }
  const selection = eligible[Math.floor(Math.random() * eligible.length)];
  return selection;
};

const renderPrompt = (prompt) => {
  if (!prompt) {
    promptTitle.textContent = "No prompts match your filters.";
    promptText.textContent = "Try a different type or vibe.";
    promptType.textContent = "Type: —";
    promptVibe.textContent = "Vibe: —";
    state.currentPrompt = null;
    markDoneButton.disabled = true;
    return;
  }
  state.currentPrompt = prompt;
  promptTitle.textContent = prompt.title;
  promptText.textContent = prompt.prompt;
  promptType.textContent = `Type: ${prompt.type}`;
  promptVibe.textContent = `Vibe: ${prompt.vibe}`;
  setLastPromptId(prompt.id);
  markDoneButton.disabled = false;
};

const showRandomPrompt = () => {
  const prompt = pickPrompt();
  renderPrompt(prompt);
};

const initializeFilters = () => {
  document.querySelectorAll(".pill-group").forEach((group) => {
    const filterKey = group.dataset.filterGroup;
    group.querySelectorAll("[data-filter-value]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filters[filterKey] = button.dataset.filterValue;
        updateFilterUI();
      });
    });
  });
  updateFilterUI();
};

const updateFilterUI = () => {
  document.querySelectorAll(".pill-group").forEach((group) => {
    const filterKey = group.dataset.filterGroup;
    group.querySelectorAll("[data-filter-value]").forEach((button) => {
      const isActive = button.dataset.filterValue === state.filters[filterKey];
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive.toString());
    });
  });
};

const loadQrImage = () => {
  if (!qrImage) return;
  const source = qrImage.dataset.qrSource;
  if (!source) return;
  fetch(source)
    .then((response) => response.text())
    .then((base64) => {
      const trimmed = base64.trim();
      if (!trimmed) return;
      qrImage.src = `data:image/png;base64,${trimmed}`;
    })
    .catch(() => {
      qrImage.alt = "QR code unavailable";
    });
};

segmentToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-segment]");
  if (!button) return;
  state.segment = button.dataset.segment;
  updateSegmentUI();
});

getChallengeButton.addEventListener("click", showRandomPrompt);
newPromptButton.addEventListener("click", showRandomPrompt);

markDoneButton.addEventListener("click", () => {
  if (!state.currentPrompt) return;
  const completed = loadCompleted();
  if (!completed.includes(state.currentPrompt.id)) {
    completed.push(state.currentPrompt.id);
    saveCompleted(completed);
  }
  showRandomPrompt();
});

applySegmentState();
initializeFilters();
const initialCompleted = loadCompleted();
completedCount.textContent = String(initialCompleted.length);
markDoneButton.disabled = true;
loadQrImage();
