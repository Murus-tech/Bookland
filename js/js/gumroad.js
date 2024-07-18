{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-bb4fcf3b8191bf81a232.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-7deb0387.css" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "https://assets.gumroad.com/packs/css/design-ac82508d.css";
}
