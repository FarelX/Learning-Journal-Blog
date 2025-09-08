document
  .querySelector(".hero-section")
  ?.addEventListener("click", function (e) {
    // jika pengguna klik link internal, jangan override
    if (e.target.closest("a")) return;
    window.location.href = "post.html";
  });
