// Konfigurasi Navigasi Artikel
var nextPrevPost = {
  prevUrl: "", // Tautan URL Sebelumnya
  prevAnchorClass: "", // Nama Kelas Anchor Teks Artikel Sebelumnya
  nextUrl: "", // Tautan URL Selanjutnya
  nextAnchorClass: "" // Nama Kelas Anchor Teks Artikel Selanjutnya
};
// Ajax Tidak Berfungsi Pada Artikel Terakhir
nextPrevPost.prevUrl && document.addEventListener("DOMContentLoaded", function() {
  var a = new XMLHttpRequest, b = document.querySelector(nextPrevPost.prevAnchorClass);
  a.open("GET", nextPrevPost.prevUrl, !0);
  a.responseType = "document";
  a.send(null);
  a.onreadystatechange = function() {
    4 == a.readyState && (b.innerHTML = a.response.querySelector("h1").textContent);
  };
});
// Ajax Tidak Berfungsi Pada Artikel Terbaru
nextPrevPost.nextUrl && document.addEventListener("DOMContentLoaded", function() {
  var a = new XMLHttpRequest, b = document.querySelector(nextPrevPost.nextAnchorClass);
  a.open("GET", nextPrevPost.nextUrl, !0);
  a.responseType = "document";
  a.send(null);
  a.onreadystatechange = function() {
    4 == a.readyState && (b.innerHTML = a.response.querySelector("h1").textContent);
  };
});
