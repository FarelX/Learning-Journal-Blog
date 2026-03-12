const blogPosts = [
  {
    id: 1,
    title: "Twimba – X Feed Clone",
    date: "FEBRUARY 27, 2026",
    excerpt:
      " This is a simple clone of x (twitter) feed which i have made as in my learning journey as a part of scrimba's full stack path.",
    image: "images/image-1.png",
    link: "https://farelx.github.io/Twimba/",
  },
  {
    id: 2,
    title: "Oldgram",
    date: "AUGUST 17, 2025",
    excerpt:
      "A simple Instagram-like feed built with HTML, CSS, and JavaScript, featuring dynamic post rendering and interactive like functionality.",
    image: "images/image-2.png",
    link: "https://farelx.github.io/oldgram/",
  },
  {
    id: 3,
    title: "Restaurant Ordering App",
    date: "AUGUST 24, 2025",
    excerpt:
      " A simple front-end application for ordering food (menu, cart, checkout modal). Built as a DOM + JavaScript modular exercise (ESmodules). Suitable for running locally to learn event handling, dynamic HTML rendering, and modal animation.",
    image: "images/image-3.png",
    link: "https://farelx.github.io/restaurant-order-appV2/",
  },
  {
    id: 4,
    title: "Random Password Generator",
    date: "January 15, 2026",
    excerpt:
      "A simple and beginner-friendly random password generator built as part of my full-stack web development learning journey. It allows users to generate secure passwords with customizable options such as length and character types (uppercase, lowercase, numbers, symbols).",
    image: "images/image-4.png",
    link: "https://farelx.github.io/password-generator/",
  },
  {
    id: 5,
    title: "Metric/Imperial Unit Converter",
    date: "January 02, 2026",
    excerpt:
      "A simple, responsive web application that converts between Metric and Imperial units. Built with Vanilla JavaScript, HTML, and CSS — no frameworks or libraries required!",
    image: "images/image-5.png",
    link: "https://farelx.github.io/unit-conversion/",
  },
  {
    id: 6,
    title: "Learning Journal Blog",
    date: "March 09, 2026",
    excerpt:
      "A responsive personal blog built to document my journey through the Full Stack Developer Career Path on Scrimba.",
    image: "images/image-6.png",
    link: "https://farelx.github.io/Learning-Journal-Blog/",
  },
];
const copy = document.getElementById("copy");
const currentYear = new Date().getFullYear();
copy.textContent = `copyright © ${currentYear}`;
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target.closest("#hero")) {
    window.location.href = "post.html";
  }
});
function getBlogHtml() {
  const blogHtml = blogPosts
    .map((blog) => {
      return `
     <div class="blog" id="${blog.id}">
          <a href="${blog.link}">
            <img src="${blog.image}" alt="blog" class="blog-imgs" />
            <div class="blog-content">
              <span class="date">${blog.date}</span>
              <h2>${blog.title}</h2>
              <p>
                ${blog.excerpt}
              </p>
            </div>
          </a>
        </div>
    `;
    })
    .join("");
  return blogHtml;
}

function getRecentBlogHtml() {
  const recentBlogArr = blogPosts.map((blog) => {
    return `
     <div class="blog" id="${blog.id}">
          <a href="${blog.link}">
            <img src="${blog.image}" alt="blog" class="blog-imgs" />
            <div class="blog-content">
              <span class="date">${blog.date}</span>
              <h2>${blog.title}</h2>
              <p>
                ${blog.excerpt}
              </p>
            </div>
          </a>
        </div>
    `;
  });

  const recentBlogsHtml = recentBlogArr.slice(0, 3).join("");
  return recentBlogsHtml;
}

function render() {
  const blogsEl = document.getElementById("blogs");
  const recentBlogsEl = document.getElementById("recent-blogs");

  if (blogsEl) {
    blogsEl.innerHTML = getBlogHtml();
  }
  if (recentBlogsEl) {
    recentBlogsEl.innerHTML = getRecentBlogHtml();
  }
  observeBlogs();
}

function observeBlogs() {
  let lastScrollY = window.scrollY;
  let scrollingDown = true;

  window.addEventListener("scroll", () => {
    scrollingDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollingDown) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".blog").forEach((blog) => observer.observe(blog));
}

render();
