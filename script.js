document.addEventListener("DOMContentLoaded", () => {
  console.log("VOZ BOT website loaded!");

  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Welcome to the VOZ BOT chaos!");
    });
  }
});
