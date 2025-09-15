<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Minimal Single Page</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --muted:#94a3b8;
      --accent:#7c3aed;
      --glass: rgba(255,255,255,0.04);
      --header-bg:#000000; /* black header */
    }
    *{box-sizing:border-box}
    html,body{height:100%;}
    body{
      margin:0;
      font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background:linear-gradient(180deg,var(--bg),#07101a 60%);
      color:#e6eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.15;
    }.wrap{max-width:1100px;margin:0 auto;padding:40px 24px;}
header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  background: var(--header-bg);
  padding: 16px 24px;
  border-radius: 6px;
}
.logo{font-weight:800;letter-spacing:-0.02em}
nav a{color:#ffffff;text-decoration:none;margin-left:18px;font-weight:600}

.hero{display:grid;grid-template-columns:1fr;gap:28px;align-items:center;padding:56px 0}
.kicker{color:var(--accent);text-transform:uppercase;font-weight:700;letter-spacing:0.18em;font-size:13px}
h1{font-size:clamp(40px,7vw,84px);line-height:0.96;margin:0;font-weight:800}
p.lead{font-size:18px;color:var(--muted);max-width:720px;margin:8px 0 0}

section{padding:56px 0;border-top:1px solid rgba(255,255,255,0.03)}
.section-title{font-size:28px;font-weight:700;margin:0 0 12px}
.big{font-size:clamp(28px,5vw,48px);font-weight:700;margin:0}
.muted{color:var(--muted)}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:18px}
.card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(2,6,23,0.6);}
.card h3{margin:0 0 6px;font-size:20px}
.card p{margin:0;color:var(--muted);font-size:14px}

footer{padding:28px 0;color:var(--muted);font-size:14px;text-align:center}

@media (min-width:900px){
  .hero{grid-template-columns:1fr 420px}
  .hero-right{background:var(--glass);padding:28px;border-radius:12px}
}

  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="logo">Minimal<span style="color:var(--accent)">.</span></div>
      <nav aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header><main>
  <section class="hero" aria-labelledby="hero-title">
    <div>
      <div class="kicker">Simple • Fast • Clear</div>
      <h1 id="hero-title">Big headings. Clean layout.</h1>
      <p class="lead">A minimal single-page template focused on large typography and readable sections. Use it as a hero for a product, project, or personal landing page.</p>
      <p style="margin-top:20px" class="muted">Built with pure HTML & CSS — lightweight and responsive.</p>
    </div>
    <aside class="hero-right">
      <h2 class="big">Standout Text</h2>
      <p class="muted" style="margin-top:10px">Short, attention-grabbing line that complements the primary heading and encourages a next step.</p>
    </aside>
  </section>

  <section id="features">
    <h3 class="section-title">Features</h3>
    <div class="cards">
      <div class="card">
        <h3>Large type</h3>
        <p>Headlines scale using clamp() for dramatic, readable display on all screens.</p>
      </div>
      <div class="card">
        <h3>Minimal CSS</h3>
        <p>Small stylesheet with a few variables — easy to modify and theme.</p>
      </div>
      <div class="card">
        <h3>Responsive</h3>
        <p>Layout adapts from stacked content to a two-column hero on wider screens.</p>
      </div>
    </div>
  </section>

  <section id="about">
    <h3 class="section-title">About</h3>
    <p class="muted">This template keeps everything intentionally simple: big headers, clear sections, and a focus on content. Copy, paste, and customize.</p>
  </section>

  <section id="contact">
    <h3 class="section-title">Get in touch</h3>
    <p class="muted">Email: <a href="mailto:hello@minimal.example" style="color:var(--accent);text-decoration:none">hello@minimal.example</a></p>
  </section>
</main>

<footer>
  © <span id="year"></span> Minimal — Crafted for clarity
</footer>

  </div>  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script></body>
</html>