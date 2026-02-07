const formUrl = "https://forms.gle/your-form-id";
const qrImage = document.getElementById("qr-image");
const qrStatus = document.getElementById("qr-status");
const albumLink = document.getElementById("album-link");
const copyButton = document.getElementById("copy-button");
const validationSummary = document.getElementById("validation-summary");
const validationList = document.getElementById("validation-list");

const urlPattern = /^(forms\.gle|docs\.google\.com)$/i;
const minShareIdLength = 6;

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

const validateFormUrl = (url) => {
  const checks = [];

  try {
    const parsedUrl = new URL(url);
    const isHttps = parsedUrl.protocol === "https:";
    checks.push({
      message: "Uses a secure https:// link",
      isValid: isHttps,
    });

    const isGoogleForms = urlPattern.test(parsedUrl.hostname);
    checks.push({
      message: "Uses a Google Forms sharing domain",
      isValid: isGoogleForms,
    });

    const pathToken = parsedUrl.pathname.replace("/", "");
    const hasShareId = pathToken.length >= minShareIdLength;
    checks.push({
      message: "Contains a form identifier in the URL path",
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
    ? "Upload link looks good. Ready to share."
    : "Please double-check the form link.";
};

const renderQrCode = () => {
  const validation = validateFormUrl(formUrl);
  renderValidation(validation);

  if (!validation.isValid) {
    qrImage.alt = "QR code unavailable";
    qrImage.removeAttribute("src");
    setStatus("QR code unavailable until the link is corrected.", true);
    return;
  }

  qrImage.src = buildQrImageUrl(formUrl);
  qrImage.alt = "QR code for the private wedding photo upload form";
  setStatus("Ready to scan.");
};

const handleCopy = async () => {
  if (!navigator.clipboard) {
    setStatus("Clipboard access is unavailable. Please use the upload link above.", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(formUrl);
    setStatus("Upload link copied to clipboard.");
  } catch (error) {
    setStatus("Copy failed. Please use the upload link above.", true);
  }
};

qrImage.addEventListener("error", () => {
  setStatus("QR image failed to load. Please refresh or use the upload link.", true);
});

albumLink.textContent = formUrl;
albumLink.href = formUrl;
copyButton.addEventListener("click", handleCopy);

renderQrCode();
