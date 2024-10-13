document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var ul = document.querySelector(".right ul");

  toggleButton.addEventListener("click", function () {
    // Toggle the display of the ul list
    if (ul.style.display === "none" || ul.style.display === "") {
      ul.style.display = "block";
    } else {
      ul.style.display = "none";
    }
  });
});

document.getElementById("icongit").onclick = function () {
  window.location.href = "https://github.com/SidhantSwaraj";
};

document.getElementById("iconlink").onclick = function () {
  window.location.href =
    "https://www.linkedin.com/in/sidhant-swaraj-a89aab201/";
};

document.getElementById("resume").onclick = function () {
  var pdfUrl =
    "https://drive.google.com/file/d/1Ly1c2TF-Q1fLpC2HFRJAH5ifk_Lt3n2S/view?usp=sharing";
  window.open(pdfUrl, "_blank");
};

document.getElementById("bubble").onclick = function () {
  window.location.href = "https://bubble-game-black.vercel.app/";
};

document.getElementById("pf").onclick = function () {
  window.location.href = "";
};

document.getElementById("qkart").onclick = function () {
  window.location.href =
    "https://qkart-frontend-hglw5q5zp-sidhants-projects-ef1f8a5f.vercel.app/";
};

document.getElementById("qtify").onclick = function () {
  window.location.href = "https://l-square-q-tify-neon.vercel.app/";
};

document.getElementById("qtrip").onclick = function () {
  window.location.href = "https://frontend-qtrip-dynamic-website.netlify.app/";
};

document.getElementById("news").onclick = function () {
  window.location.href = "https://newsfeedswaraj.netlify.app/";
};
