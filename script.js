const albumUrl = "https://photos.app.goo.gl/akGScybc5DNwRKex8";
const qrImage = document.getElementById("qr-image");
const qrStatus = document.getElementById("qr-status");
const albumLink = document.getElementById("album-link");
const copyButton = document.getElementById("copy-button");
const validationSummary = document.getElementById("validation-summary");
const validationList = document.getElementById("validation-list");
const challengeButton = document.getElementById("challenge-button");
const challengeReset = document.getElementById("challenge-reset");
const challengeTitle = document.getElementById("challenge-title-text");
const challengeTip = document.getElementById("challenge-tip");
const challengeNote = document.getElementById("challenge-note");
const challengeModeInputs = document.querySelectorAll('input[name="challenge-mode"]');

const urlPattern = /^(photos\.app\.goo\.gl|photos\.google\.com)$/i;
const minShareIdLength = 6;
const defaultChallenge = {
  title: "Capture the couple’s favorite detail.",
  tip: "Look for something small that feels meaningful: a place card, bouquet ribbon, or handwritten note.",
};
const challengePrompts = [
  {
    title: "Find the happiest cheer.",
    tip: "Listen for the biggest whoops or applause and capture that energy.",
  },
  {
    title: "Show off the table glow.",
    tip: "Snap a tablescape, centerpiece, or sparkling candlelight.",
  },
  {
    title: "Pick a dance-floor superstar.",
    tip: "Catch the boldest move or most joyful group circle.",
  },
  {
    title: "Capture a heartfelt hug.",
    tip: "Look for the sweetest embraces between guests.",
  },
  {
    title: "Spot the candid storyteller.",
    tip: "Find someone sharing a story and freeze the moment.",
  },
  {
    title: "Toast in the air.",
    tip: "Capture raised glasses or clinks with smiles.",
  },
  {
    title: "Document the hidden detail.",
    tip: "Find signage, stationery, or a small décor surprise.",
  },
  {
    title: "Show us the golden hour.",
    tip: "If you see warm sunset light, snap it.",
  },
];

const setStatus = (message = "", isError = false) => {
  qrStatus.textContent = message;
  qrStatus.style.color = isError ? "#a14a2a" : "#9b6a54";
};

const addValidationItem = (message, isValid) => {
  const item = document.createElement("li");
  item.textContent = `${isValid ? "✓" : "✕"} ${message}`;
  item.style.color = isValid ? "#4b6d42" : "#a14a2a";
  validationList.appendChild(item);
};

const validateAlbumUrl = (url) => {
  const checks = [];

  try {
    const parsedUrl = new URL(url);
    const isHttps = parsedUrl.protocol === "https:";
    checks.push({
      message: "Uses a secure https:// link",
      isValid: isHttps,
    });

    const isGooglePhotos = urlPattern.test(parsedUrl.hostname);
    checks.push({
      message: "Uses a Google Photos sharing domain",
      isValid: isGooglePhotos,
    });

    const pathToken = parsedUrl.pathname.replace("/", "");
    const hasShareId = pathToken.length >= minShareIdLength;
    checks.push({
      message: "Contains a share token in the URL path",
      isValid: hasShareId,
    });

    const noUnexpectedParams = parsedUrl.search === "";
    checks.push({
      message: "No unexpected query parameters",
      isValid: noUnexpectedParams,
    });

    return {
      isValid: checks.every((check) => check.isValid),
      checks,
    };
  } catch (error) {
    checks.push({
      message: "URL is properly formatted",
      isValid: false,
    });
    return {
      isValid: false,
      checks,
    };
  }
};

const buildQrImageUrl = (url) => {
  const encodedUrl = encodeURIComponent(url);
  return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodedUrl}`;
};

const renderValidation = (validation) => {
  validationList.innerHTML = "";
  validation.checks.forEach((check) => addValidationItem(check.message, check.isValid));
  validationSummary.textContent = validation.isValid
    ? "Link looks good. Ready to share."
    : "Please double-check the album link.";
};

const renderQrCode = () => {
  const validation = validateAlbumUrl(albumUrl);
  renderValidation(validation);

  if (!validation.isValid) {
    qrImage.alt = "QR code unavailable";
    qrImage.removeAttribute("src");
    setStatus("QR code unavailable until the link is corrected.", true);
    return;
  }

  qrImage.src = buildQrImageUrl(albumUrl);
  qrImage.alt = "QR code for the wedding photo upload album";
  setStatus("Ready to scan.");
};

const handleCopy = async () => {
  if (!navigator.clipboard) {
    setStatus("Clipboard access is unavailable. Please use the album link above.", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(albumUrl);
    setStatus("Album link copied to clipboard.");
  } catch (error) {
    setStatus("Copy failed. Please use the album link above.", true);
  }
};

const updateChallengePrompt = (prompt) => {
  challengeTitle.textContent = prompt.title;
  challengeTip.textContent = prompt.tip;
};

const getRandomPrompt = () => {
  const index = Math.floor(Math.random() * challengePrompts.length);
  return challengePrompts[index];
};

const handleChallengeModeChange = () => {
  const selected = document.querySelector('input[name="challenge-mode"]:checked')?.value;
  if (selected === "simple") {
    challengeNote.textContent =
      "Great! You can skip prompts and head straight to the album when you’re ready.";
    challengeButton.setAttribute("disabled", "true");
    challengeReset.setAttribute("disabled", "true");
  } else {
    challengeNote.textContent = "Prompts are just for fun—any photos you share are perfect.";
    challengeButton.removeAttribute("disabled");
    challengeReset.removeAttribute("disabled");
  }
};

challengeButton.addEventListener("click", () => updateChallengePrompt(getRandomPrompt()));
challengeReset.addEventListener("click", () => updateChallengePrompt(defaultChallenge));
challengeModeInputs.forEach((input) => input.addEventListener("change", handleChallengeModeChange));

qrImage.addEventListener("error", () => {
  setStatus("QR image failed to load. Please refresh or use the album link.", true);
});

albumLink.textContent = albumUrl;
albumLink.href = albumUrl;
copyButton.addEventListener("click", handleCopy);

updateChallengePrompt(defaultChallenge);
handleChallengeModeChange();
renderQrCode();
