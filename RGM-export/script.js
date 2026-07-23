/* ═══════════════════════════════════════════════════════════════════
   RETRO GAME MUSEUM — script.js
   © 2026 Isaiah Sotutu · WDD 130
   ═══════════════════════════════════════════════════════════════════ */

/* ── Active nav link ────────────────────────────────────────────── */
(function () {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
})();

/* ── Contact form ───────────────────────────────────────────────── */
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const success = document.getElementById("success-banner");

  function showError(input, msg) {
    clearError(input);
    const err = document.createElement("span");
    err.className = "form-error";
    err.style.cssText = "font-size:0.7rem;color:#FB5607;font-family:'JetBrains Mono',monospace;margin-top:0.2rem;display:block;";
    err.textContent = msg;
    input.parentNode.appendChild(err);
    input.style.borderColor = "#FB5607";
  }

  function clearError(input) {
    const existing = input.parentNode.querySelector(".form-error");
    if (existing) existing.remove();
    input.style.borderColor = "";
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const first    = form.querySelector("#first-name");
    const last     = form.querySelector("#last-name");
    const email    = form.querySelector("#email");
    const subject  = form.querySelector("#subject");
    const message  = form.querySelector("#message");

    let valid = true;

    [first, last, email, subject, message].forEach(function (el) { clearError(el); });

    if (!first.value.trim())             { showError(first,   "First name is required.");     valid = false; }
    if (!last.value.trim())              { showError(last,    "Last name is required.");      valid = false; }
    if (!email.value.trim())             { showError(email,   "Email is required.");          valid = false; }
    else if (!isValidEmail(email.value)) { showError(email,   "Enter a valid email address."); valid = false; }
    if (!subject.value)                  { showError(subject, "Please select a subject.");    valid = false; }
    if (!message.value.trim())           { showError(message, "Message cannot be empty.");    valid = false; }
    else if (message.value.trim().length < 10) { showError(message, "Message is too short."); valid = false; }

    if (!valid) return;

    form.style.display = "none";
    if (success) {
      success.classList.add("visible");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  /* real-time border feedback */
  form.querySelectorAll(".form-control").forEach(function (el) {
    el.addEventListener("input", function () { clearError(el); });
  });
})();
