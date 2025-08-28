// ==========================
// Portfolio Interactivity JS
// ==========================

// 1. Dark/Light Mode Toggle 🌗
const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "🌗 Toggle Theme";
themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.bottom = "20px";
themeToggleBtn.style.right = "20px";
themeToggleBtn.style.padding = "10px 14px";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.background = "#6a0dad";
themeToggleBtn.style.color = "#fff";
themeToggleBtn.style.borderRadius = "8px";
themeToggleBtn.style.cursor = "pointer";
themeToggleBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
document.body.appendChild(themeToggleBtn);

let isDark = false;
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
  themeToggleBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Add dark mode styles dynamically
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
  body.dark-mode {
    background: linear-gradient(135deg, #1a1a1a 0%, #333 70%, #111 100%);
    color: #eee;
  }
  body.dark-mode .container {
    background: #222;
    color: #eee;
  }
  body.dark-mode a {
    color: #ffcc00;
  }
  body.dark-mode footer {
    background: linear-gradient(90deg,#333,#111);
  }
`;
document.head.appendChild(darkModeStyles);

// 2. Smooth Scroll Navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// 3. Scroll-to-Top Button ⬆️
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "70px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#4b0082";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Highlight Skills on Hover 🎨
document.querySelectorAll("ul.skills li").forEach(skill => {
  skill.addEventListener("mouseover", () => {
    skill.style.transform = "scale(1.1)";
    skill.style.background = "#6a0dad";
    skill.style.color = "#fff";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.transform = "scale(1)";
    skill.style.background = "#dcdcdc";
    skill.style.color = "#4b0082";
  });
});

// 5. Dynamic Year in Footer ©
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} PG Sugapriyan. All rights reserved.`;

// ==========================
//   End of JS Enhancements
// ==========================

console.log("Interactive Portfolio Loaded Successfully 🚀");