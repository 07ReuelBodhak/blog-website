import { blogs } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector("#theme-button");
  const body = document.body;

  // Load the saved theme
  body.classList.add(
    localStorage.getItem("theme") === "dark" ? "dark-theme" : "light-theme"
  );

  // Toggle Theme
  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-theme") ? "dark" : "light"
    );
  });

  // Mobile Menu Toggle
  document
    .querySelector("#mobile-menu-toggle")
    .addEventListener("click", () => {
      document.querySelector(".mobile-menu").classList.toggle("active");
    });

  // Background Boxes
  const container = document.querySelector("#background-container");
  Array.from({ length: 15 }).forEach(() => {
    const box = document.createElement("div");
    box.classList.add("bg-box");
    const size = Math.random() * 150 + 50;
    Object.assign(box.style, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
    });
    container.appendChild(box);
  });

  // Smooth Scrolling for Navigation
  const sections = ["home", "food", "travel", "technology", "ai"];
  sections.forEach((section) => {
    document
      .querySelector(`#${section}-button`)
      .addEventListener("click", () => {
        document
          .querySelector(`.${section}`)
          .scrollIntoView({ behavior: "smooth" });
      });
    document
      .querySelector(`#${section}-desktop-button`)
      .addEventListener("click", () => {
        document
          .querySelector(`.${section}`)
          .scrollIntoView({ behavior: "smooth" });
      });
  });

  const selectedBlogContainers = {
    food: document.querySelector(".food-selected"),
    tech: document.querySelector(".technology-selected"),
    ai: document.querySelector(".ai-selected"),
    travel: document.querySelector(".travel-selected"),
  };

  // Function to render selected blog
  const renderSelectedBlog = (category, blog) => {
    selectedBlogContainers[category].innerHTML = `
      <div class="selected-blog-card">
        <img src="${blog.image_url}" alt="${blog.title}" />
        <div class="selected-blog-details">
          <h2>${blog.title}</h2>
          <p><strong>Author:</strong> ${blog.author}</p>
          <p><strong>Date:</strong> ${blog.date}</p>
          <p>${blog.description}</p>
          <p class="comment-title">Comments</p>
          <div class="selected-blog-comments">
            ${
              blog.comments.length === 0
                ? "No comments yet"
                : blog.comments
                    .map(
                      (comment) => `
              <div class="comment">
                <p>${comment.text}</p>
                <p><strong>Author:</strong> ${comment.author}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Date:</strong> ${comment.date}</p>
              </div>`
                    )
                    .join("")
            }
          </div>
          <form class="comment-form">
            <p style="font-size: 1.5rem; font-weight: 600;">Add a comment</p>
            <input class="comment-name" required type="text" placeholder="Name" />
            <input class="comment-email" required type="email" placeholder="Email" />
            <textarea class="comment-text" required placeholder="Comment"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    `;

    // Attach comment submission event
    document
      .querySelector(".comment-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.querySelector(".comment-name").value;
        const text = document.querySelector(".comment-text").value;
        const email = document.querySelector(".comment-email").value;
        if (!name || !text || !email) return;
        blog.comments.push({
          text,
          author: name,
          email: email,
          date: new Date().toLocaleDateString(),
        });
        renderSelectedBlog(category, blog);
      });
  };

  Object.keys(blogs).forEach((category) => {
    const selectedBlog = blogs[category].find((blog) => blog.selected);
    if (selectedBlog) renderSelectedBlog(category, selectedBlog);
  });

  Object.keys(blogs).forEach((category) => {
    const container = document.querySelector(`.${category}-blogs`);

    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider");

    blogs[category].forEach((blog) => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");
      blogCard.innerHTML = `
        <img src="${blog.image_url}" alt="${blog.title}">
        <div class="blog-details">
          <h3>${blog.title}</h3><p>${blog.date}</p>
        </div>
      `;
      blogCard.addEventListener("click", () =>
        renderSelectedBlog(category, blog)
      );
      sliderContainer.appendChild(blogCard);
    });
    container.appendChild(sliderContainer);
  });
});
