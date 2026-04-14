const content = {
  home: `
    <h1>Welcome to Studio 01</h1>
    <img src="https://picsum.photos/400/250?1">
    <p>Studio 01 is a creative agency focused on delivering high-quality digital experiences. We specialize in design, development, and branding solutions that help businesses grow and stand out.</p>
  `,
  about: `
    <h1>About Us</h1>
    <img src="https://picsum.photos/400/250?2">
    <p>Our team is made up of passionate designers and developers who are committed to innovation. We believe in collaboration, creativity, and delivering results that exceed expectations.</p>
  `,
  services: `
    <h1>Our Services</h1>
    <img src="https://picsum.photos/400/250?3">
    <p>We offer web design, app development, branding, and digital marketing services. Our goal is to provide solutions that are both functional and visually engaging.</p>
  `,
  contact: `
    <h1>Contact Us</h1>
    <img src="https://picsum.photos/400/250?4">
    <p>Have a project in mind? Reach out to us today and let's build something great together. We are always open to new ideas and collaborations.</p>
  `
};

export function changePage(pageName) {
  const app = document.querySelector("#app");

  if (content[pageName]) {
    app.innerHTML = content[pageName];
  } else {
    app.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
  }
}