// js/main.js

const ASSET_IMG = 'assets/bottle.png';
const ASSET_VIDEO = 'assets/product-video.mp4';

/* HEADER */
function renderHeader(){
  document.getElementById('header').innerHTML = `
    <header class="navbar">
      <div class="container">
        <div class="logo">PRECIS</div>
        <nav class="nav">
          <a href="#">Home</a>
          <a href="#">Checkout</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  `;
}

/* HERO */
function renderHero(){
  document.getElementById('hero').innerHTML = `
    <div class="container">
      <section class="hero">
        <div class="hero-left">
          <h1>Pure. Precis. Water.</h1>
          <p>En premium vattenflaska designad för hållbarhet, funktion och minimalistisk estetik.</p>
          <button class="btn">Shop Now</button>
        </div>
        <div class="hero-right">
          <img src="${ASSET_IMG}" alt="Precis vattenflaska">
        </div>
      </section>
    </div>
  `;
}

/* CONTENT */
function renderProducts(){
  document.getElementById('products').innerHTML = `
    <div class="container">

      <section class="video-section">
        <h2>Se vår produkt i rörelse</h2>
        <video class="product-video" controls playsinline>
          <source src="${ASSET_VIDEO}" type="video/mp4">
        </video>
      </section>

      <section>
        <h2 style="text-align:center;margin-top:50px;">Våra färgpaletter</h2>
        <div class="colors">
          <div class="color-card c-mint">#BFDDD5</div>
          <div class="color-card c-dark">#1A5366</div>
          <div class="color-card c-light">#F3F8F2</div>
        </div>
      </section>

      <section class="summary">
        <h2>Varför Precis?</h2>
        <p>
          Precis Water är skapad för dig som värdesätter hållbarhet och stil.
          Flaskan håller din dryck kall eller varm längre och minskar behovet av engångsplast.
        </p>
        <p>
          Ren design. Hög kvalitet. Ett bättre val för både dig och miljön.
        </p>
      </section>

    </div>
  `;
}

/* FOOTER */
function renderFooter(){
  document.getElementById('footer').innerHTML = `
    <footer>
      <div class="container">
        © 2026 Precis Water
      </div>
    </footer>
  `;
}

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderHero();
  renderProducts();
  renderFooter();
});
