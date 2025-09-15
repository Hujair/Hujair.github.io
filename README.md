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
      --header-bg:#000000;
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
    }

    .wrap{max-width:1100px;margin:0 auto;padding:40px 24px;}
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

    section{padding:56px 0;border-top:1px solid rgba(255,255,255,0.03)}
    .section-title{font-size:28px;font-weight:700;margin:0 0 12px}
    .muted{color:var(--muted)}

    footer{padding:28px 0;color:var(--muted);font-size:14px;text-align:center}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="logo">Minimal<span style="color:var(--accent)">.</span></div>
      <nav aria-label="Main navigation">
        <a href="privacy-policy.html">Privacy Policy</a>
      </nav>
    </header>

    <main>
      <section id="contact">
        <h3 class="section-title">Get in touch</h3>
        <p class="muted">Email: <a href="mailto:hello@minimal.example" style="color:var(--accent);text-decoration:none">hello@minimal.example</a></p>
      </section>
    </main>

    <footer>
      © <span id="year"></span> Minimal — Crafted for clarity
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>


All personal/about sections have been removed. Only the contact section remains, with a link to the Privacy Policy in the header.

