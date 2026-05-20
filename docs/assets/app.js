(function () {
  const container = document.createElement("div");
  container.className = "ysn-github-applet";

  container.innerHTML = `
    <section class="ysn-card">
      <h2>YSN Interactive App</h2>
      <p>If you can see this inside YaleSites, the GitHub applet is working.</p>

      <div class="ysn-grid">
        <div class="ysn-stat">
          <strong>01</strong>
          <span>GitHub Pages is publishing the files</span>
        </div>

        <div class="ysn-stat">
          <strong>02</strong>
          <span>YaleSites can read app.js</span>
        </div>

        <div class="ysn-stat">
          <strong>03</strong>
          <span>YaleSites can apply app.css</span>
        </div>
      </div>
    </section>
  `;

  const currentScript = document.currentScript;

  if (currentScript && currentScript.parentElement) {
    currentScript.parentElement.appendChild(container);
  } else {
    document.body.appendChild(container);
  }
})();
