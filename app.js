const prompts = [
  "Photograph your drink like it’s a product ad.",
  "Record a 5-second cheers with your group.",
  "Full-body outfit photo with a clean background.",
  "Capture the biggest laugh you see tonight.",
  "Photograph the best appetizer before it’s gone.",
  "Record a 6-second compliment about the couple or the vibe.",
  "Candid photo of two people clearly catching up.",
  "Take a photo with someone you just met tonight.",
  "Find the prettiest detail (flowers/signage) and photograph it.",
  "Take a candid like you’re shooting a documentary.",
  "Group photo holding glasses up mid-toast.",
  "Record a 6-second clip of laughter turning into a cheers.",
  "Close-up of the best accessory you see.",
  "Take a clean shot of someone’s shoes (with permission).",
  "Selfie with exactly three people in frame.",
  "Selfie with exactly five people in frame.",
  "Record a 4-second ‘We’re here for Zack & Sean!’ clip.",
  "Snap the most photogenic line you see.",
  "Capture someone mid-smile, not posed.",
  "Wide shot showing the full cocktail hour vibe.",
  "Tight 3-second clip of glasses clinking.",
  "Photograph the entrance sign or welcome sign.",
  "Three people posing in a triangle formation.",
  "Capture a candid side-profile conversation shot.",
  "Overhead flat-lay of a plate + drink.",
  "Photo of two people laughing together.",
  "Record a 6-second intro between two people meeting.",
  "Record a 5-second mini-toast from your group.",
  "Record a 6-second runway walk from a friend.",
  "Pose someone like they’re on a magazine cover.",
  "Find good natural light and take a flattering shot.",
  "Mirror selfie if there’s a good mirror nearby.",
  "Zoom in on a tiny pretty detail.",
  "Candid of a handshake or hello moment.",
  "Boomerang-style clip of cheers (3 seconds).",
  "Capture someone surprised to see a friend.",
  "Two friends do a pose-off. Capture the best pose.",
  "Group photo where everyone looks extremely serious.",
  "3-second clip of someone doing a tiny dance.",
  "Ask someone to say their name + how they know the couple.",
  "Take the best angled photo you can of your group.",
  "Photo of food being served or prepared (if visible).",
  "Photo with another group cheering together.",
  "Find warm lighting and capture the glow.",
  "Photo of just hands holding drinks.",
  "Portrait photo with a blurred background.",
  "6-second clip walking through cocktail hour vibes.",
  "Ask someone: one word for tonight so far.",
  "3-2-1 cheers clip (5 seconds).",
  "Photo of the best duo you see.",
  "Record 6 seconds of the dance floor at peak energy.",
  "Your group hits one ridiculous pose. Capture it.",
  "Slow 360° pan of the dance floor (under 7 seconds).",
  "Capture the best reaction during a toast or speech.",
  "3-second toast from your table to the couple.",
  "Candid of someone mid-story.",
  "Photo of people with hands up during a song.",
  "Record 6 seconds of a group singing along.",
  "Capture a 6-second dance circle moment.",
  "Record one dance move in slow motion (5 seconds).",
  "Close-up of a great detail: pocket square, nails, jewelry.",
  "Photo of the best hair moment (with consent).",
  "Photograph the DJ setup or speakers (if accessible).",
  "Photo of dinner before the first bite.",
  "Photo of dessert when it arrives.",
  "5-second clip of applause after something big.",
  "Photo with Zack/Sean in the background without interrupting.",
  "Record a 5-second group wave to the camera.",
  "Capture a 6-second partner switch moment.",
  "Capture 6 seconds of a line dance (if it happens).",
  "Wide shot of the reception room vibes.",
  "Photo of your table: centerpiece + place setting.",
  "Get one candid you’d frame. No posing.",
  "Create a harmless, funny photobomb (keep it respectful).",
  "Capture the biggest laugh during reception.",
  "Nightcap cheers photo with your group.",
  "Record 6 seconds of high energy (jumping, cheering).",
  "Photo of dancing feet only (no faces).",
  "Try a silhouette shot against bright lights.",
  "Photo of two people dancing like it’s their moment.",
  "6-second clip of a hype train moving through the floor.",
  "Record a 5-second freeze pose challenge.",
  "Pass the phone to 4 people saying ‘Congrats!’ in one clip.",
  "Capture a spin move (5 seconds).",
  "Record a high-five chain (5–7 seconds).",
  "Find 8+ people and do a big group photo.",
  "Capture a sweet family hug or moment.",
  "Selfie with the dance floor behind you.",
  "Ask someone their favorite song tonight (5 seconds).",
  "6-second air guitar performance.",
  "6-second pretend microphone performance.",
  "Photo of a group jumping (attempt 2 max).",
  "Everyone looks extremely formal and serious on the dance floor.",
  "Take an angled tilt shot that still looks good.",
  "Photo of someone raising a glass candidly.",
  "Find the best backdrop in the room and take a group photo.",
  "Use warm lighting for a flattering glow photo.",
  "Capture a quiet candid away from the floor.",
  "Two friends do their best duo pose.",
  "Record a 6-second ‘thank you / goodnight’ clip for the couple.",
];


const lastPromptKey = "wedding-last-prompt";
const promptText = document.getElementById("prompt-text");
const getChallengeButton = document.getElementById("get-challenge");
const newPromptButton = document.getElementById("new-prompt");

const getRandomIndex = (excludeIndex = null) => {
  if (prompts.length === 0) return null;
  let index = Math.floor(Math.random() * prompts.length);
  if (excludeIndex !== null && prompts.length > 1) {
    while (index === excludeIndex) {
      index = Math.floor(Math.random() * prompts.length);
    }
  }
  return index;
};

const showPrompt = (index) => {
  if (index === null) return;
  promptText.textContent = prompts[index];
  localStorage.setItem(lastPromptKey, String(index));
};

const getStoredIndex = () => {
  const stored = localStorage.getItem(lastPromptKey);
  if (!stored) return null;
  const parsed = Number(stored);
  if (Number.isNaN(parsed) || parsed < 0 || parsed >= prompts.length) return null;
  return parsed;
};

getChallengeButton.addEventListener("click", () => {
  const currentIndex = getStoredIndex();
  showPrompt(getRandomIndex(currentIndex));
});

newPromptButton.addEventListener("click", () => {
  const currentIndex = getStoredIndex();
  showPrompt(getRandomIndex(currentIndex));
});

const initialIndex = getStoredIndex();
if (initialIndex !== null) {
  showPrompt(initialIndex);
}
