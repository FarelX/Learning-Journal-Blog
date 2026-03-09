const copy = document.getElementById("copy");
const currentYear = new Date().getFullYear();
copy.textContent = `copyright © ${currentYear}`;

document.addEventListener("click", (e) => {
  if (e.target.closest("#hero")) {
    window.location.href = "post.html";
  }
});
