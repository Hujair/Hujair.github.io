<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      background: #fff;
      color: #222;
      scroll-behavior: smooth;
      overflow-y: scroll;
    }
    body {
      scroll-snap-type: y mandatory;
    }
    header, section {
      height: 100vh;
      padding: 60px 20px;
      max-width: 1000px;
      margin: auto;
      scroll-snap-align: start;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s ease-out;
    }
    header.visible, section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    header {
      background: url('https://picsum.photos/1600/900?grayscale') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .gallery div {
      background: #eee;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    footer {
      text-align: center;
      padding: 40px;
      font-size: 0.9rem;
      color: #555;
      scroll-snap-align: start;
    }
  </style>
</head>
<body>  <header>
    <div>Welcome to My Portfolio</div>
  </header>  <section id="latest">
    <h2>Latest Project – Payzati</h2>
    <p>Payzati is an Android app to track bank transactions via SMS. No accounts, no credentials required – just simple, secure tracking at your fingertips.</p>
  </section>  <section id="previous">
    <h2>Previous Projects</h2>
    <div class="gallery">
      <div>Project 1</div>
      <div>Project 2</div>
      <div>Project 3</div>
      <div>Project 4</div>
    </div>
  </section>  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
  </section>  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I’m a developer passionate about building minimal, useful apps and websites. I enjoy solving real-world problems with clean design and simple code.</p>
  </section>  <footer>
    © 2025 My Portfolio. All rights reserved.
  </footer>  <script>
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('header, section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => {
      observer.observe(section);
    });
  </script></body>
</html>
